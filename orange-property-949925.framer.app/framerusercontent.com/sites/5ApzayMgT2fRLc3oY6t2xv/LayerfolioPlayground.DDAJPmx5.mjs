import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { F as t, L as n, N as r, O as i, S as a, j as o, l as s, s as c, u as l, w as u } from "./react.CHR6xBda.mjs";
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
function g(e, n = 1440) {
  let [r, i] = t(n);
  return (
    a(() => {
      let t = e.current;
      if (!t) return;
      let n = () => {
        let e = t.offsetWidth;
        e > 2 && i((t) => (Math.abs(t - e) < 1 ? t : e));
      };
      if ((n(), typeof ResizeObserver > `u`)) return;
      let r = new ResizeObserver(n);
      return r.observe(t), () => r.disconnect();
    }, []),
    r
  );
}
function _() {
  return s(`style`, { children: D });
}
function v({ s: e = 14 }) {
  return s(`svg`, {
    width: e,
    height: e,
    viewBox: `0 0 14 14`,
    "aria-hidden": !0,
    children: s(`path`, { d: `M2 7h10M8 3l4 4-4 4`, stroke: `currentColor`, strokeWidth: `1.6`, fill: `none` }),
  });
}
function y({ n: e, t, color: n }) {
  return l(`div`, {
    className: `lf-kick`,
    style: n ? { color: n } : void 0,
    children: [l(`b`, { children: [`[`, e, `]`] }), t],
  });
}
function b({ color: e = `#4B3BFF`, size: t = 8, o: n = 1 }) {
  return s(`div`, {
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
      s(
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
function x(e) {
  return [
    { kind: `photo`, x: 0.04, y: 0.5, w: 0.17, r: -4, src: e[0], label: k[0] },
    {
      kind: `note`,
      x: 0.23,
      y: 0.58,
      w: 0.13,
      r: 3,
      text: `Every button on this board is fake. Every idea is real.`,
      color: `#FFE17A`,
    },
    { kind: `photo`, x: 0.4, y: 0.4, w: 0.15, r: 2, src: e[1], label: k[1] },
    { kind: `swatch`, x: 0.58, y: 0.36, w: 0.06, r: 0, color: `#4B3BFF`, label: `4B3BFF` },
    { kind: `swatch`, x: 0.645, y: 0.36, w: 0.06, r: 0, color: `#FF5B24`, label: `FF5B24` },
    { kind: `swatch`, x: 0.71, y: 0.36, w: 0.06, r: 0, color: `#C8F25A`, label: `C8F25A` },
    { kind: `photo`, x: 0.8, y: 0.3, w: 0.16, r: 5, src: e[2], label: k[2] },
    { kind: `ui`, x: 0.57, y: 0.58, w: 0.2, r: -2, text: `Toggle, 4 states` },
    {
      kind: `note`,
      x: 0.07,
      y: 0.8,
      w: 0.14,
      r: -3,
      text: `Sunday project: a typeface made of bike parts.`,
      color: `#FFB3D1`,
    },
    { kind: `photo`, x: 0.27, y: 0.82, w: 0.13, r: -6, src: e[3], label: k[3] },
    { kind: `shape`, x: 0.45, y: 0.7, w: 0.09, r: 12, color: `#10B37A` },
    { kind: `photo`, x: 0.8, y: 0.66, w: 0.15, r: -3, src: e[4], label: k[4] },
    {
      kind: `note`,
      x: 0.64,
      y: 0.82,
      w: 0.13,
      r: 4,
      text: `Motion study: things that bounce should also squash.`,
      color: `#B7E4FF`,
    },
    { kind: `tag`, x: 0.45, y: 0.9, w: 0.1, r: -2, text: `#experiments` },
  ];
}
function S(e) {
  let {
    number: n = `09`,
    kicker: a = `Playground`,
    title: c = `Things I make when nobody's paying`,
    intro: u = `Type experiments, motion studies and photos from the sketchbook. Drag anything around.`,
    linkLabel: d = `Open the playground`,
    link: f = `/playground`,
    accent: m = `#4B3BFF`,
    ink: S = `#0C0C0E`,
    canvas: D = `#ECECE8`,
  } = e;
  h();
  let k = p(),
    A = (e.photos && e.photos.length ? e.photos.map((e) => e.src) : O).concat(O).slice(0, 6),
    j = o(() => x(A), [A.join(`|`)]),
    M = i(null),
    N = g(M, 1440),
    P = N < 760,
    [F, I] = t(() => j.map((e) => ({ x: e.x, y: e.y }))),
    [L, R] = t(() => j.map((e, t) => t)),
    [z, B] = t(-1),
    V = i(null);
  r(() => {
    I(j.map((e) => ({ x: e.x, y: e.y })));
  }, [j]);
  let H = (e) => (t) => {
      k ||
        (M.current &&
          (t.target.setPointerCapture?.(t.pointerId),
          (V.current = { i: e, sx: t.clientX, sy: t.clientY, ox: F[e].x, oy: F[e].y }),
          B(e),
          R((t) => {
            let n = Math.max(...t) + 1,
              r = t.slice();
            return (r[e] = n), r;
          })));
    },
    U = (e) => {
      let t = V.current,
        n = M.current;
      if (!t || !n) return;
      let r = n.offsetWidth,
        i = n.offsetHeight,
        a = E(t.ox + (e.clientX - t.sx) / r, -0.05, 0.95),
        o = E(t.oy + (e.clientY - t.sy) / i, 0.02, 0.95);
      I((e) => {
        let n = e.slice();
        return (n[t.i] = { x: a, y: o }), n;
      });
    },
    W = () => {
      (V.current = null), B(-1);
    },
    G = P ? 1.9 : 1;
  return l(`section`, {
    ref: M,
    className: `lfg`,
    onPointerMove: U,
    onPointerUp: W,
    onPointerCancel: W,
    style: {
      ...e.style,
      position: `relative`,
      width: `100%`,
      height: `100%`,
      minHeight: 640,
      overflow: `hidden`,
      background: D,
      color: S,
      fontFamily: C,
      touchAction: z >= 0 ? `none` : `pan-y`,
      "--lf-acc": m,
    },
    children: [
      s(_, {}),
      s(`style`, {
        children: `
            .lfg-it{position:absolute;cursor:grab;user-select:none;transition:box-shadow .3s ${T},transform .35s ${T}}
            .lfg-it:active{cursor:grabbing}
            .lfg-it:hover .lfg-sel{opacity:1}
            .lfg-sel{position:absolute;inset:-5px;opacity:0;transition:opacity .2s;pointer-events:none}
            `,
      }),
      s(`div`, {
        "aria-hidden": !0,
        style: {
          position: `absolute`,
          inset: 0,
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(12,12,14,0.16) 1px, transparent 1.2px)`,
          backgroundSize: `24px 24px`,
        },
      }),
      l(`div`, {
        style: {
          position: `absolute`,
          left: P ? 20 : `max(64px, calc((100% - 1312px)/2))`,
          top: P ? 64 : 100,
          maxWidth: 620,
          zIndex: 1e3,
          pointerEvents: `none`,
        },
        children: [
          s(y, { n, t: a }),
          s(`h2`, {
            style: {
              margin: `18px 0 0`,
              font: `600 ${P ? 40 : 64}px/.96 ${C}`,
              letterSpacing: `-.055em`,
              textWrap: `balance`,
            },
            children: c,
          }),
          s(`p`, {
            style: {
              margin: `16px 0 0`,
              font: `400 ${P ? 16 : 18}px/1.5 ${C}`,
              color: `rgba(12,12,14,.7)`,
              maxWidth: 460,
            },
            children: u,
          }),
          d
            ? l(`a`, {
                className: `lf-l`,
                href: f,
                style: { marginTop: 20, pointerEvents: `auto` },
                children: [d, s(v, {})],
              })
            : null,
        ],
      }),
      j.map((e, t) => {
        let n = N * e.w * G,
          r = F[t] || e,
          i = z === t,
          a = {
            left: `${(P ? r.x * 0.8 : r.x) * 100}%`,
            top: `${(P ? 0.34 + (r.y - 0.3) * 0.72 : r.y) * 100}%`,
            width: n,
            zIndex: L[t] + 1,
            transform: `rotate(${i ? 0 : e.r}deg) scale(${i ? 1.05 : 1})`,
            boxShadow: i ? `0 40px 60px -30px rgba(12,12,14,.55)` : `0 18px 34px -26px rgba(12,12,14,.5)`,
          },
          o = s(`span`, { className: `lfg-sel`, children: s(b, { color: m, size: 7 }) });
        return e.kind === `photo`
          ? l(
              `div`,
              {
                className: `lfg-it`,
                onPointerDown: H(t),
                style: { ...a, background: `#fff`, padding: 8, paddingBottom: 30, borderRadius: 3 },
                children: [
                  s(`img`, {
                    src: e.src,
                    alt: e.label,
                    draggable: !1,
                    style: {
                      width: `100%`,
                      aspectRatio: `4/5`,
                      objectFit: `cover`,
                      display: `block`,
                      pointerEvents: `none`,
                    },
                  }),
                  s(`div`, {
                    style: {
                      position: `absolute`,
                      left: 10,
                      bottom: 9,
                      font: `500 10px/1 ${w}`,
                      color: `rgba(12,12,14,.55)`,
                    },
                    children: e.label,
                  }),
                  o,
                ],
              },
              t
            )
          : e.kind === `note`
            ? l(
                `div`,
                {
                  className: `lfg-it`,
                  onPointerDown: H(t),
                  style: {
                    ...a,
                    background: e.color,
                    padding: `14px 14px 18px`,
                    borderRadius: 4,
                    aspectRatio: `1/1`,
                    font: `500 ${Math.max(13, n * 0.085)}px/1.3 ${C}`,
                    letterSpacing: `-.02em`,
                    boxShadow: a.boxShadow,
                  },
                  children: [
                    e.text,
                    s(`div`, {
                      style: { position: `absolute`, left: 14, bottom: 12, font: `500 10px/1 ${w}`, opacity: 0.55 },
                      children: `Noor · note`,
                    }),
                    o,
                  ],
                },
                t
              )
            : e.kind === `swatch`
              ? l(
                  `div`,
                  {
                    className: `lfg-it`,
                    onPointerDown: H(t),
                    style: { ...a, background: `#fff`, padding: 6, borderRadius: 10 },
                    children: [
                      s(`div`, { style: { width: `100%`, aspectRatio: `1/1`, borderRadius: 6, background: e.color } }),
                      s(`div`, {
                        style: { font: `500 10px/1 ${w}`, marginTop: 6, textAlign: `center` },
                        children: e.label,
                      }),
                      o,
                    ],
                  },
                  t
                )
              : e.kind === `ui`
                ? l(
                    `div`,
                    {
                      className: `lfg-it`,
                      onPointerDown: H(t),
                      style: { ...a, background: `#fff`, padding: 16, borderRadius: 14 },
                      children: [
                        l(`div`, { style: { font: `500 10px/1 ${w}`, color: m }, children: [`◇ `, e.text] }),
                        [`Notifications`, `Dark mode`, `Autosave`].map((e, t) =>
                          l(
                            `div`,
                            {
                              style: {
                                display: `flex`,
                                justifyContent: `space-between`,
                                alignItems: `center`,
                                marginTop: 12,
                                font: `500 13px/1 ${C}`,
                              },
                              children: [
                                e,
                                s(`span`, {
                                  style: {
                                    width: 34,
                                    height: 20,
                                    borderRadius: 20,
                                    background: t === 1 ? `rgba(12,12,14,.15)` : m,
                                    position: `relative`,
                                  },
                                  children: s(`i`, {
                                    style: {
                                      position: `absolute`,
                                      top: 2,
                                      left: t === 1 ? 2 : 16,
                                      width: 16,
                                      height: 16,
                                      borderRadius: 16,
                                      background: `#fff`,
                                    },
                                  }),
                                }),
                              ],
                            },
                            e
                          )
                        ),
                        o,
                      ],
                    },
                    t
                  )
                : e.kind === `shape`
                  ? l(
                      `div`,
                      {
                        className: `lfg-it`,
                        onPointerDown: H(t),
                        style: { ...a, boxShadow: `none` },
                        children: [
                          s(`svg`, {
                            viewBox: `0 0 100 100`,
                            width: `100%`,
                            style: { display: `block`, filter: `drop-shadow(0 16px 18px rgba(12,12,14,.25))` },
                            children: s(`path`, {
                              d: `M50 4 61 38 97 38 68 59 79 94 50 72 21 94 32 59 3 38 39 38Z`,
                              fill: e.color,
                            }),
                          }),
                          o,
                        ],
                      },
                      t
                    )
                  : l(
                      `div`,
                      {
                        className: `lfg-it`,
                        onPointerDown: H(t),
                        style: {
                          ...a,
                          width: `auto`,
                          background: S,
                          color: `#fff`,
                          padding: `10px 14px`,
                          borderRadius: 999,
                          font: `500 13px/1 ${w}`,
                        },
                        children: [e.text, o],
                      },
                      t
                    );
      }),
      s(`div`, {
        style: {
          position: `absolute`,
          right: P ? 16 : 28,
          bottom: 22,
          font: `500 11px/1 ${w}`,
          color: `rgba(12,12,14,.5)`,
          zIndex: 1e3,
          pointerEvents: `none`,
        },
        children: z >= 0 ? `Dragging…` : `Drag anything · board resets on reload`,
      }),
    ],
  });
}
var C,
  w,
  T,
  E,
  D,
  O,
  k,
  A = e(() => {
    n(),
      c(),
      u(),
      f(),
      (C = `Geist, 'Inter Display', Inter, system-ui, sans-serif`),
      (w = `'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace`),
      (T = `cubic-bezier(.22,1,.36,1)`),
      (E = (e, t = 0, n = 1) => Math.min(n, Math.max(t, e))),
      (D = `
section[class^="lf"] *,footer[class^="lf"] *,header[class^="lf"] *,article[class^="lf"] *,section[class^="lf"],footer[class^="lf"],header[class^="lf"],article[class^="lf"]{box-sizing:border-box}
.lf-kick{font:500 11px/1 ${w};letter-spacing:.05em;text-transform:uppercase;color:rgba(12,12,14,.55);display:flex;align-items:center;gap:10px}
.lf-kick b{font-weight:500;color:var(--lf-acc,#4B3BFF)}
.lf-b{height:48px;padding:0 20px;border-radius:10px;display:inline-flex;align-items:center;gap:10px;font:500 15px/1 ${C};letter-spacing:-.015em;text-decoration:none;white-space:nowrap;transition:transform .35s ${T},box-shadow .35s ${T},background .2s,color .2s;cursor:pointer;border:0}
.lf-b:hover{transform:translateY(-2px);box-shadow:0 14px 26px -14px rgba(12,12,14,.55)}
.lf-b:active{transform:translateY(0) scale(.98)}
.lf-b:focus-visible,.lf-l:focus-visible{outline:2px solid var(--lf-acc,#4B3BFF);outline-offset:3px}
.lf-b.ink{background:#0C0C0E;color:#fff}.lf-b.acc{background:var(--lf-acc,#4B3BFF);color:#fff}.lf-b.ghost{background:rgba(255,255,255,.9);color:#0C0C0E;box-shadow:inset 0 0 0 1px rgba(12,12,14,.12)}
.lf-b svg{transition:transform .35s ${T}}.lf-b:hover svg{transform:translateX(3px)}
.lf-l{display:inline-flex;align-items:center;gap:10px;font:500 15px/1 ${C};letter-spacing:-.01em;text-decoration:none;color:inherit;padding-bottom:6px;border-bottom:1.5px solid currentColor;transition:gap .35s ${T},color .2s}
.lf-l:hover{gap:16px;color:var(--lf-acc,#4B3BFF)}
.lf-rv{transition:opacity .8s ${T},transform .8s ${T},filter .8s ${T}}
.lf-rv[data-seen="false"]{opacity:0;transform:translateY(18px);filter:blur(4px)}
@media (prefers-reduced-motion: reduce){.lf-rv{transition:none!important}.lf-rv[data-seen="false"]{opacity:1;transform:none;filter:none}}
`),
      (O = [
        `https://framerusercontent.com/images/8RfYRjLYS5jzzkFy5XAsxIhWxc.jpg`,
        `https://framerusercontent.com/images/VmwnUqPBspNu7qvocsT6ErbxOOg.jpg`,
        `https://framerusercontent.com/images/pkrAI3W0jo6482xQ7IQ063MzCSw.jpg`,
        `https://framerusercontent.com/images/bCEdvLZdZ5nozNKc6dAcHQU8J0.jpg`,
        `https://framerusercontent.com/images/4lDmZ5gP61A55BIXZpeNlP7tjQ.jpg`,
        `https://framerusercontent.com/images/ncAyegXsyJRTwIFFth70UuRgCuM.jpg`,
      ]),
      (k = [
        `bike-poster-test.jpg`,
        `clay-vases.jpg`,
        `window-plant.jpg`,
        `lamp-study.jpg`,
        `stripes.jpg`,
        `pillars.jpg`,
      ]),
      d(S, {
        number: { type: m.String, title: `Section no.`, defaultValue: `09` },
        kicker: { type: m.String, defaultValue: `Playground` },
        title: { type: m.String, defaultValue: `Things I make when nobody's paying` },
        intro: {
          type: m.String,
          displayTextArea: !0,
          defaultValue: `Type experiments, motion studies and photos from the sketchbook. Drag anything around.`,
        },
        linkLabel: { type: m.String, title: `Link label`, defaultValue: `Open the playground` },
        link: { type: m.Link, defaultValue: `/playground` },
        photos: { type: m.Array, maxCount: 6, control: { type: m.ResponsiveImage } },
        accent: { type: m.Color, title: `Selection`, defaultValue: `#4B3BFF` },
        ink: { type: m.Color, defaultValue: `#0C0C0E` },
        canvas: { type: m.Color, defaultValue: `#ECECE8` },
      });
  });
export { A as n, S as t };
//# sourceMappingURL=LayerfolioPlayground.DDAJPmx5.mjs.map
