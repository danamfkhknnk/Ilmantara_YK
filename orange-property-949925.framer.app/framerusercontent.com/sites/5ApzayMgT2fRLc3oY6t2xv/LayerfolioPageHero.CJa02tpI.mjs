import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { F as t, L as n, N as r, P as i, S as a, l as o, s, u as c, w as l, z as u } from "./react.CHR6xBda.mjs";
import { E as d, U as f, lt as p, o as m } from "./framer.dKj5RJCl.mjs";
function h() {
  r(() => {
    if (typeof document > `u` || document.getElementById(`lf-fonts`)) return;
    let e = document.createElement(`link`);
    (e.id = `lf-fonts`),
      (e.rel = `stylesheet`),
      (e.href = `https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap`),
      document.head.appendChild(e);
  }, []);
}
function g() {
  return o(`style`, { children: w });
}
function _({ color: e = `#4B3BFF`, size: t = 8, o: n = 1 }) {
  return o(`div`, {
    "aria-hidden": !0,
    style: { position: `absolute`, inset: 0, border: `1.5px solid ${e}`, pointerEvents: `none`, opacity: n },
    children: [
      [`0%`, `0%`],
      [`50%`, `0%`],
      [`100%`, `0%`],
      [`100%`, `50%`],
      [`100%`, `100%`],
      [`50%`, `100%`],
      [`0%`, `100%`],
      [`0%`, `50%`],
    ].map(([n, r], i) =>
      o(
        `span`,
        {
          style: {
            position: `absolute`,
            left: n,
            top: r,
            width: t,
            height: t,
            marginLeft: -t / 2,
            marginTop: -t / 2,
            background: `#fff`,
            border: `1.5px solid ${e}`,
          },
        },
        i
      )
    ),
  });
}
function v({ x: e, y: t, color: n, label: r }) {
  return c(`div`, {
    "aria-hidden": !0,
    style: { position: `absolute`, left: e, top: t, pointerEvents: `none`, zIndex: 5 },
    children: [
      o(`svg`, {
        width: `20`,
        height: `22`,
        viewBox: `0 0 20 22`,
        style: { position: `absolute`, left: -2, top: -2, filter: `drop-shadow(0 2px 3px rgba(0,0,0,.2))` },
        children: o(`path`, {
          d: `M2.5 2.5 L2.5 18 L7 13.8 L10.2 20.4 L13 19.1 L9.9 12.6 L16 12.3 Z`,
          fill: n,
          stroke: `#fff`,
          strokeWidth: `1.4`,
          strokeLinejoin: `round`,
        }),
      }),
      o(`div`, {
        style: {
          position: `absolute`,
          left: 14,
          top: 17,
          background: n,
          color: `#fff`,
          font: `500 11px/1 ${b}`,
          padding: `5px 7px`,
          borderRadius: `3px 8px 8px 8px`,
          whiteSpace: `nowrap`,
        },
        children: r,
      }),
    ],
  });
}
function y(e) {
  let {
    path: n = `Portfolio / Work`,
    title: r = `Selected work`,
    lead: s = `Six products, from payroll to mountain huts. Each case study is laid out like the file it came from: the problem, the fix, the result and what I'd do differently.`,
    facts: l = `6 case studies|2023 — 2026|Fintech, health, commerce, travel`,
    cursor: d = `Mara · PM`,
    accent: f = `#4B3BFF`,
    ink: m = `#0C0C0E`,
    canvas: y = `#ECECE8`,
  } = e;
  h();
  let w = p(),
    [T, E] = t(!1);
  a(() => {
    w || u === void 0 || (u.matchMedia && u.matchMedia(`(prefers-reduced-motion: reduce)`).matches) || E(!0);
  }, []);
  let D = r.split(` `);
  return c(`header`, {
    className: `lfh${T ? ` go` : ``}`,
    style: {
      ...e.style,
      position: `relative`,
      width: `100%`,
      background: y,
      color: m,
      fontFamily: b,
      overflow: `hidden`,
      "--lf-acc": f,
    },
    children: [
      o(g, {}),
      o(`style`, {
        children: `
            .lfh{container-type:inline-size}
            .lfh-in{position:relative;max-width:1312px;margin:0 auto;padding:168px 64px 96px}
            .lfh-t{position:relative;display:inline-block;margin:44px 0 0;font:600 148px/.9 ${b};letter-spacing:-.065em;padding:6px 14px 14px}
            .lfh-t .w{display:inline-block;overflow:hidden;vertical-align:top;padding-bottom:.06em}
            .lfh-t .w>span{display:inline-block}
            .lfh.go .lfh-t .w>span{animation:lfhUp 1s ${C} both}
            .lfh.go .lfh-box{animation:lfhBox .9s ${C} .35s both}
            .lfh.go .lfh-fade{animation:lfhFade .9s ${C} .45s both}
            @keyframes lfhUp{from{transform:translateY(105%)}to{transform:none}}
            @keyframes lfhBox{from{opacity:0;transform:scale(.97)}to{opacity:1;transform:none}}
            @keyframes lfhFade{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
            .lfh-row{display:grid;grid-template-columns:1fr 1fr;gap:64px;margin-top:48px;align-items:end}
            .lfh-facts{display:flex;gap:0;border-top:1px solid rgba(12,12,14,.1)}
            .lfh-facts span{flex:1;padding:14px 16px 0 0;font:500 12px/1.35 ${x};letter-spacing:.03em;text-transform:uppercase;color:rgba(12,12,14,.6)}
            @container (max-width: 1000px){.lfh-in{padding:140px 32px 72px}.lfh-t{font-size:96px}.lfh-row{grid-template-columns:1fr;gap:28px}}
            @container (max-width: 640px){.lfh-in{padding:120px 20px 56px}.lfh-t{font-size:56px;padding:4px 8px 10px}.lfh-facts{flex-direction:column}}
            `,
      }),
      o(`div`, {
        "aria-hidden": !0,
        style: {
          position: `absolute`,
          inset: 0,
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(12,12,14,0.16) 1px, transparent 1.2px)`,
          backgroundSize: `24px 24px`,
        },
      }),
      o(`div`, {
        "aria-hidden": !0,
        style: {
          position: `absolute`,
          inset: 0,
          background: `radial-gradient(1100px 500px at 30% 40%, rgba(255,255,255,.8), rgba(255,255,255,0) 70%)`,
        },
      }),
      c(`div`, {
        className: `lfh-in`,
        children: [
          c(`div`, {
            className: `lfh-fade`,
            style: {
              display: `flex`,
              alignItems: `center`,
              gap: 10,
              font: `500 12px/1 ${x}`,
              color: `rgba(12,12,14,.55)`,
            },
            children: [
              o(`svg`, {
                width: `14`,
                height: `14`,
                viewBox: `0 0 12 12`,
                "aria-hidden": !0,
                children: o(`path`, { d: `M3.5 1v10M8.5 1v10M1 3.5h10M1 8.5h10`, stroke: f, strokeWidth: `1.2` }),
              }),
              n
                .split(`/`)
                .map((e, t, n) =>
                  c(
                    i,
                    {
                      children: [
                        o(`span`, { style: { color: t === n.length - 1 ? m : void 0 }, children: e.trim() }),
                        t < n.length - 1 && o(`span`, { style: { opacity: 0.5 }, children: `/` }),
                      ],
                    },
                    t
                  )
                ),
            ],
          }),
          c(`h1`, {
            className: `lfh-t`,
            children: [
              D.map((e, t) =>
                c(
                  i,
                  {
                    children: [
                      o(`span`, {
                        className: `w`,
                        children: o(`span`, { style: { animationDelay: `${0.08 * t}s` }, children: e }),
                      }),
                      t < D.length - 1 ? ` ` : ``,
                    ],
                  },
                  t
                )
              ),
              o(`span`, {
                className: `lfh-box`,
                "aria-hidden": !0,
                style: { position: `absolute`, inset: 0 },
                children: o(_, { color: f, size: 11 }),
              }),
              o(`span`, {
                className: `lfh-box`,
                "aria-hidden": !0,
                style: {
                  position: `absolute`,
                  left: `50%`,
                  bottom: -30,
                  transform: `translateX(-50%)`,
                  background: f,
                  color: `#fff`,
                  font: `500 11px/1 ${x}`,
                  letterSpacing: 0,
                  padding: `5px 7px`,
                  borderRadius: 4,
                  whiteSpace: `nowrap`,
                },
                children: `Text · Geist Semibold`,
              }),
              d
                ? o(`span`, {
                    className: `lfh-fade`,
                    "aria-hidden": !0,
                    style: { position: `absolute`, right: -8, top: -6 },
                    children: o(v, { x: 0, y: 0, color: S.mara, label: d }),
                  })
                : null,
            ],
          }),
          c(`div`, {
            className: `lfh-row lfh-fade`,
            children: [
              o(`p`, {
                style: {
                  margin: 0,
                  font: `500 24px/1.32 ${b}`,
                  letterSpacing: `-.025em`,
                  maxWidth: 620,
                  textWrap: `pretty`,
                },
                children: s,
              }),
              o(`div`, { className: `lfh-facts`, children: l.split(`|`).map((e, t) => o(`span`, { children: e }, t)) }),
            ],
          }),
        ],
      }),
    ],
  });
}
var b,
  x,
  S,
  C,
  w,
  T = e(() => {
    n(),
      s(),
      l(),
      f(),
      (b = `Geist, 'Inter Display', Inter, system-ui, sans-serif`),
      (x = `'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace`),
      (S = {
        ink: `#0C0C0E`,
        canvas: `#ECECE8`,
        paper: `#FFFFFF`,
        acc: `#4B3BFF`,
        red: `#FF3D6E`,
        mara: `#FF5B24`,
        theo: `#10B37A`,
        rule: `rgba(12,12,14,0.10)`,
        muted: `rgba(12,12,14,0.58)`,
      }),
      (C = `cubic-bezier(.22,1,.36,1)`),
      (w = `
section[class^="lf"] *,footer[class^="lf"] *,header[class^="lf"] *,article[class^="lf"] *,section[class^="lf"],footer[class^="lf"],header[class^="lf"],article[class^="lf"]{box-sizing:border-box}
.lf-kick{font:500 11px/1 ${x};letter-spacing:.05em;text-transform:uppercase;color:rgba(12,12,14,.55);display:flex;align-items:center;gap:10px}
.lf-kick b{font-weight:500;color:var(--lf-acc,#4B3BFF)}
.lf-b{height:48px;padding:0 20px;border-radius:10px;display:inline-flex;align-items:center;gap:10px;font:500 15px/1 ${b};letter-spacing:-.015em;text-decoration:none;white-space:nowrap;transition:transform .35s ${C},box-shadow .35s ${C},background .2s,color .2s;cursor:pointer;border:0}
.lf-b:hover{transform:translateY(-2px);box-shadow:0 14px 26px -14px rgba(12,12,14,.55)}
.lf-b:active{transform:translateY(0) scale(.98)}
.lf-b:focus-visible,.lf-l:focus-visible{outline:2px solid var(--lf-acc,#4B3BFF);outline-offset:3px}
.lf-b.ink{background:#0C0C0E;color:#fff}.lf-b.acc{background:var(--lf-acc,#4B3BFF);color:#fff}.lf-b.ghost{background:rgba(255,255,255,.9);color:#0C0C0E;box-shadow:inset 0 0 0 1px rgba(12,12,14,.12)}
.lf-b svg{transition:transform .35s ${C}}.lf-b:hover svg{transform:translateX(3px)}
.lf-l{display:inline-flex;align-items:center;gap:10px;font:500 15px/1 ${b};letter-spacing:-.01em;text-decoration:none;color:inherit;padding-bottom:6px;border-bottom:1.5px solid currentColor;transition:gap .35s ${C},color .2s}
.lf-l:hover{gap:16px;color:var(--lf-acc,#4B3BFF)}
.lf-rv{transition:opacity .8s ${C},transform .8s ${C},filter .8s ${C}}
.lf-rv[data-seen="false"]{opacity:0;transform:translateY(18px);filter:blur(4px)}
@media (prefers-reduced-motion: reduce){.lf-rv{transition:none!important}.lf-rv[data-seen="false"]{opacity:1;transform:none;filter:none}}
`),
      d(y, {
        path: { type: m.String, title: `File path`, defaultValue: `Portfolio / Work` },
        title: { type: m.String, defaultValue: `Selected work` },
        lead: { type: m.String, displayTextArea: !0, defaultValue: `Six products, from payroll to mountain huts.` },
        facts: {
          type: m.String,
          title: `Facts (a|b|c)`,
          defaultValue: `6 case studies|2023 — 2026|Fintech, health, commerce, travel`,
        },
        cursor: { type: m.String, title: `Cursor label`, defaultValue: `Mara · PM` },
        accent: { type: m.Color, title: `Selection`, defaultValue: `#4B3BFF` },
        ink: { type: m.Color, defaultValue: `#0C0C0E` },
        canvas: { type: m.Color, defaultValue: `#ECECE8` },
      });
  });
export { T as n, y as t };
//# sourceMappingURL=LayerfolioPageHero.CJa02tpI.mjs.map
