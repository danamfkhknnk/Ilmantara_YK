## UI checks

After any change that affects markup, styles, or layout, run the visual check pipeline before considering the change done:

```
npm run ui:test
```

This runs `ui:screenshot` (Playwright captures `tools/screenshots/*.png` at desktop/mobile viewports) then `ui:compare` (pixelmatch diff against `tools/reference/` or `tools/screenshots/baseline/`, writing diffs to `tools/diffs/` and a report to `tools/visual-report/test-result.json`). All results land under `tools/`, per the existing convention — read the report and inspect any `FAIL` diff image before reporting the task as complete.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
