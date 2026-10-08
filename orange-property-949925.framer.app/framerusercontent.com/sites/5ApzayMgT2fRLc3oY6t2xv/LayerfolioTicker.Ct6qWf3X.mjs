import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { L as t, N as n, c as r, l as i, s as a, u as o, w as s } from "./react.CHR6xBda.mjs";
import { E as c, U as l, o as u } from "./framer.dKj5RJCl.mjs";
function d() {
  n(() => {
    if (typeof document > `u` || document.getElementById(`lf-fonts`)) return;
    let e = document.createElement(`link`);
    (e.id = `lf-fonts`),
      (e.rel = `stylesheet`),
      (e.href = `https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap`),
      document.head.appendChild(e);
  }, []);
}
function f(e) {
  let {
    label: t = `Shipped with`,
    clients:
      n = `Orrin · Fintech, Quayside Clinics · Health, Holm & Hearth · Commerce, Vale Huts · Travel, Kiln Audio · Hardware, Tessel Architects · Architecture, Fietsbank · Mobility, Harbour Labs · Logistics`,
    skills:
      a = `Interaction design, Prototyping, Design systems, User research, Framer sites, Service design, Motion, Workshops, Accessibility, Design QA`,
    speed: s = 40,
    accent: c = `#4B3BFF`,
    ink: l = `#0C0C0E`,
    canvas: u = `#ECECE8`,
  } = e;
  d();
  let f = n
      .split(`,`)
      .map((e) => e.trim())
      .filter(Boolean),
    h = a
      .split(`,`)
      .map((e) => e.trim())
      .filter(Boolean),
    g = (e, t) =>
      i(r, {
        children: e.map((e, n) => {
          let [r, a] = e.split(`·`).map((e) => e.trim());
          return o(
            `span`,
            {
              className: `lft-chip ${t}`,
              children: [
                t === `comp`
                  ? o(`svg`, {
                      width: `12`,
                      height: `12`,
                      viewBox: `0 0 12 12`,
                      "aria-hidden": !0,
                      children: [
                        i(`path`, { d: `M6 .9 11.1 6 6 11.1.9 6Z`, fill: `none`, stroke: c, strokeWidth: `1.3` }),
                        i(`path`, { d: `M6 3.6 8.4 6 6 8.4 3.6 6Z`, fill: c }),
                      ],
                    })
                  : i(`b`, { children: `T` }),
                i(`span`, { children: r }),
                a ? i(`em`, { children: a }) : null,
              ],
            },
            n
          );
        }),
      });
  return o(`section`, {
    className: `lft`,
    style: {
      ...e.style,
      width: `100%`,
      background: u,
      color: l,
      fontFamily: p,
      overflow: `hidden`,
      padding: `34px 0 38px`,
      borderTop: `1px solid rgba(12,12,14,.08)`,
      borderBottom: `1px solid rgba(12,12,14,.08)`,
    },
    "aria-label": t,
    children: [
      i(`style`, {
        children: `
            .lft-lab{display:flex;align-items:center;gap:10px;padding:0 max(20px, calc((100% - 1312px)/2));font:500 11px/1 ${m};letter-spacing:.05em;text-transform:uppercase;color:rgba(12,12,14,.5);margin-bottom:20px}
            .lft-lab i{flex:1;height:1px;background:rgba(12,12,14,.1)}
            .lft-track{display:flex;width:max-content;gap:10px;animation:lft ${s}s linear infinite}
            .lft-track.rev{animation-direction:reverse;animation-duration:${s * 1.3}s;margin-top:10px}
            .lft:hover .lft-track{animation-play-state:paused}
            .lft-chip{display:inline-flex;align-items:center;gap:9px;height:46px;padding:0 16px;border-radius:12px;white-space:nowrap;font:500 17px/1 ${p};letter-spacing:-.02em;transition:background .25s,box-shadow .25s,color .25s}
            .lft-chip.comp{background:#fff;box-shadow:inset 0 0 0 1px rgba(12,12,14,.08),0 8px 18px -14px rgba(12,12,14,.4)}
            .lft-chip.comp:hover{box-shadow:inset 0 0 0 1.5px ${c};color:${c}}
            .lft-chip.text{background:rgba(12,12,14,.045);font-size:16px}
            .lft-chip.text b{font:600 12px/1 ${m};color:rgba(12,12,14,.4)}
            .lft-chip em{font:500 11px/1 ${m};font-style:normal;letter-spacing:.04em;text-transform:uppercase;color:rgba(12,12,14,.42)}
            @keyframes lft{from{transform:translateX(0)}to{transform:translateX(-50%)}}
            @media (prefers-reduced-motion: reduce){.lft-track{animation:none}}
            `,
      }),
      o(`div`, {
        className: `lft-lab`,
        children: [
          i(`span`, { style: { color: c }, children: `◇` }),
          t,
          i(`i`, {}),
          o(`span`, { children: [f.length, ` clients · `, h.length, ` skills`] }),
        ],
      }),
      o(`div`, { className: `lft-track`, children: [g(f, `comp`), g(f, `comp`)] }),
      o(`div`, { className: `lft-track rev`, children: [g(h, `text`), g(h, `text`)] }),
    ],
  });
}
var p,
  m,
  h = e(() => {
    t(),
      a(),
      s(),
      l(),
      (p = `Geist, 'Inter Display', Inter, system-ui, sans-serif`),
      (m = `'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace`),
      c(f, {
        label: { type: u.String, defaultValue: `Shipped with` },
        clients: {
          type: u.String,
          displayTextArea: !0,
          title: `Row 1 (Name · note, …)`,
          defaultValue: `Orrin · Fintech, Quayside Clinics · Health, Holm & Hearth · Commerce, Vale Huts · Travel, Kiln Audio · Hardware, Tessel Architects · Architecture, Fietsbank · Mobility, Harbour Labs · Logistics`,
        },
        skills: {
          type: u.String,
          displayTextArea: !0,
          title: `Row 2`,
          defaultValue: `Interaction design, Prototyping, Design systems, User research, Framer sites, Service design, Motion, Workshops, Accessibility, Design QA`,
        },
        speed: { type: u.Number, title: `Loop (s)`, defaultValue: 40, min: 10, max: 120 },
        accent: { type: u.Color, title: `Selection`, defaultValue: `#4B3BFF` },
        ink: { type: u.Color, defaultValue: `#0C0C0E` },
        canvas: { type: u.Color, defaultValue: `#ECECE8` },
      });
  });
export { h as n, f as t };
//# sourceMappingURL=LayerfolioTicker.Ct6qWf3X.mjs.map
