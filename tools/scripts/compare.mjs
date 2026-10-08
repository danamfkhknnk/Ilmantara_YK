import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

// Always run relative to tools/ so `node tools/scripts/compare.mjs`
// works from the repo root as well as from inside tools/.
process.chdir(path.join(path.dirname(fileURLToPath(import.meta.url)), '..'));

// Compares screenshots against a reference image when one exists
// (reference/<section?>/<viewport>.png — the design source of truth), or
// falls back to a self-regression baseline (screenshots/<section?>/baseline/)
// when no reference mockup was provided for that viewport.
//
// Reference mockups may be downscaled exports of the full-page shot; when
// dimensions differ the current screenshot is nearest-neighbour downscaled
// to the reference size before pixel comparison.
//
// Usage:
//   npm run ui:compare                # screenshots/ vs reference/ (or baseline/)
//   SECTION=team npm run ui:compare   # screenshots/team/ vs reference/team/

const SECTION = process.env.SECTION || null;
const THRESHOLD_PCT = Number(process.env.DIFF_THRESHOLD_PCT ?? 0.5); // AGENTS.md default: 0.5%
const PIXEL_THRESHOLD = Number(process.env.PIXELMATCH_THRESHOLD ?? 0.1); // pixelmatch per-pixel sensitivity

const SHOTS_ROOT = SECTION ? `screenshots/${SECTION}` : 'screenshots';
const REFERENCE_ROOT = SECTION ? `reference/${SECTION}` : 'reference';
const BASELINE_DIR = path.join(SHOTS_ROOT, 'baseline');
const DIFFS_DIR = SECTION ? path.join('diffs', SECTION) : 'diffs';
const REPORT_PATH = SECTION
  ? path.join('visual-report', `${SECTION}-test-result.json`)
  : path.join('visual-report', 'test-result.json');

async function readPng(filePath) {
  return PNG.sync.read(await fs.readFile(filePath));
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

/** Nearest-neighbour resize so pixelmatch gets equal dimensions. */
function resizeNearest(src, dw, dh) {
  const out = new PNG({ width: dw, height: dh });
  for (let y = 0; y < dh; y++) {
    const sy = Math.min(src.height - 1, Math.floor((y * src.height) / dh));
    for (let x = 0; x < dw; x++) {
      const sx = Math.min(src.width - 1, Math.floor((x * src.width) / dw));
      const si = (sy * src.width + sx) * 4;
      const di = (y * dw + x) * 4;
      out.data[di] = src.data[si];
      out.data[di + 1] = src.data[si + 1];
      out.data[di + 2] = src.data[si + 2];
      out.data[di + 3] = src.data[si + 3];
    }
  }
  return out;
}

async function main() {
  if (!(await fileExists(SHOTS_ROOT))) {
    console.error(`No screenshots found at ${SHOTS_ROOT}. Run npm run ui:screenshot first.`);
    process.exit(1);
  }

  await fs.mkdir(BASELINE_DIR, { recursive: true });
  await fs.mkdir(DIFFS_DIR, { recursive: true });
  await fs.mkdir('visual-report', { recursive: true });

  const entries = await fs.readdir(SHOTS_ROOT, { withFileTypes: true });
  const shots = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.png'))
    .map((entry) => entry.name);

  if (shots.length === 0) {
    console.error(`No .png files found directly in ${SHOTS_ROOT}.`);
    process.exit(1);
  }

  const results = {};
  let overallStatus = 'PASS';

  for (const name of shots) {
    const viewport = path.basename(name, '.png');
    const currentPath = path.join(SHOTS_ROOT, name);
    const referencePath = path.join(REFERENCE_ROOT, name);
    const baselinePath = path.join(BASELINE_DIR, name);
    const diffPath = path.join(DIFFS_DIR, `${viewport}-diff.png`);

    let comparePath = null;
    let source = null;

    if (await fileExists(referencePath)) {
      comparePath = referencePath;
      source = 'reference';
    } else if (await fileExists(baselinePath)) {
      comparePath = baselinePath;
      source = 'baseline';
    } else {
      // First run for this viewport: nothing to compare against yet.
      // Save current shot as the self-regression baseline going forward.
      await fs.copyFile(currentPath, baselinePath);
      results[viewport] = { status: 'SKIPPED', reason: 'no reference or baseline; baseline created' };
      console.log(`[SKIPPED] ${viewport}: no reference/baseline found — saved current shot as new baseline.`);
      continue;
    }

    let current = await readPng(currentPath);
    const compare = await readPng(comparePath);
    let resized = false;

    if (current.width !== compare.width || current.height !== compare.height) {
      // Reference mockups are often downscaled exports — downscale the
      // current shot to the reference dimensions so pixelmatch can run.
      console.log(
        `  → ${viewport}: size ${current.width}x${current.height} vs ${source} ${compare.width}x${compare.height}, downscaling current to ${source} size.`
      );
      current = resizeNearest(current, compare.width, compare.height);
      resized = true;
    }

    const { width, height } = current;
    const diff = new PNG({ width, height });

    const diffPixels = pixelmatch(compare.data, current.data, diff.data, width, height, {
      threshold: PIXEL_THRESHOLD,
    });

    const diffPercentage = (diffPixels / (width * height)) * 100;
    await fs.writeFile(diffPath, PNG.sync.write(diff));

    const status = diffPercentage < THRESHOLD_PCT ? 'PASS' : 'FAIL';
    if (status === 'FAIL') overallStatus = 'FAIL';

    results[viewport] = {
      status,
      source,
      resized,
      currentSize: `${width}x${height}`,
      diffPixels,
      diffPercentage: Number(diffPercentage.toFixed(2)),
    };

    console.log(
      `[${status}] ${viewport} (vs ${source}${resized ? ', downscaled' : ''}): ${diffPixels} px diff (${diffPercentage.toFixed(2)}%, threshold ${THRESHOLD_PCT}%) -> ${diffPath}`
    );
  }

  const report = {
    status: overallStatus,
    threshold: THRESHOLD_PCT,
    results,
  };

  await fs.writeFile(REPORT_PATH, JSON.stringify(report, null, 2));
  console.log(`\nReport written to ${REPORT_PATH}`);
  console.log(`Overall: ${overallStatus}`);

  if (overallStatus === 'FAIL') process.exit(1);
}

main();
