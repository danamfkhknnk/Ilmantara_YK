import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  F as t,
  L as n,
  N as r,
  O as i,
  P as a,
  S as o,
  l as s,
  s as c,
  u as l,
  w as u,
  z as d,
} from "./react.CHR6xBda.mjs";
import { E as f, U as p, lt as m, o as h } from "./framer.dKj5RJCl.mjs";
function g() {
  r(() => {
    if (typeof document > `u` || document.getElementById(`lf-fonts`)) return;
    let e = document.createElement(`link`);
    (e.id = `lf-fonts`),
      (e.rel = `stylesheet`),
      (e.href = `https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap`),
      document.head.appendChild(e);
  }, []);
}
function _(e, n, i) {
  let [a, o] = t(i >= 0 ? i : n ? 0.6 : 0);
  return (
    r(() => {
      if (n || d === void 0) return;
      let t = 0,
        r = () => {
          t = 0;
          let n = e.current;
          if (!n) return;
          let r = n.getBoundingClientRect(),
            i = d.innerHeight || 900,
            a = k((i - r.top) / (i + r.height));
          o((e) => (Math.abs(e - a) < 0.001 ? e : a));
        },
        i = () => {
          t ||= requestAnimationFrame(r);
        };
      return (
        r(),
        d.addEventListener(`scroll`, i, { passive: !0 }),
        d.addEventListener(`resize`, i),
        () => {
          d.removeEventListener(`scroll`, i), d.removeEventListener(`resize`, i), t && cancelAnimationFrame(t);
        }
      );
    }, [n]),
    a
  );
}
function v(e, n) {
  let [r, i] = t(!0);
  return (
    o(() => {
      if (
        n ||
        d === void 0 ||
        typeof IntersectionObserver > `u` ||
        (d.matchMedia && d.matchMedia(`(prefers-reduced-motion: reduce)`).matches)
      )
        return;
      let t = e.current;
      if (!t || t.getBoundingClientRect().top < (d.innerHeight || 900) * 0.92) return;
      i(!1);
      let r = new IntersectionObserver(
        (e) => {
          e.some((e) => e.isIntersecting) && (i(!0), r.disconnect());
        },
        { rootMargin: `0px 0px -12% 0px` }
      );
      r.observe(t);
      let a = d.setTimeout(() => i(!0), 9e3);
      return () => {
        r.disconnect(), d.clearTimeout(a);
      };
    }, [n]),
    r
  );
}
function y() {
  return s(`style`, { children: N });
}
function b({ s: e = 14 }) {
  return s(`svg`, {
    width: e,
    height: e,
    viewBox: `0 0 14 14`,
    "aria-hidden": !0,
    children: s(`path`, { d: `M2 7h10M8 3l4 4-4 4`, stroke: `currentColor`, strokeWidth: `1.6`, fill: `none` }),
  });
}
function x({ n: e, t, color: n }) {
  return l(`div`, {
    className: `lf-kick`,
    style: n ? { color: n } : void 0,
    children: [l(`b`, { children: [`[`, e, `]`] }), t],
  });
}
function S({ color: e = `#4B3BFF`, size: t = 8, o: n = 1 }) {
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
function C({ x: e, y: t, color: n, label: r }) {
  return l(`div`, {
    "aria-hidden": !0,
    style: { position: `absolute`, left: e, top: t, pointerEvents: `none`, zIndex: 5 },
    children: [
      s(`svg`, {
        width: `20`,
        height: `22`,
        viewBox: `0 0 20 22`,
        style: { position: `absolute`, left: -2, top: -2, filter: `drop-shadow(0 2px 3px rgba(0,0,0,.2))` },
        children: s(`path`, {
          d: `M2.5 2.5 L2.5 18 L7 13.8 L10.2 20.4 L13 19.1 L9.9 12.6 L16 12.3 Z`,
          fill: n,
          stroke: `#fff`,
          strokeWidth: `1.4`,
          strokeLinejoin: `round`,
        }),
      }),
      s(`div`, {
        style: {
          position: `absolute`,
          left: 14,
          top: 17,
          background: n,
          color: `#fff`,
          font: `500 11px/1 ${T}`,
          padding: `5px 7px`,
          borderRadius: `3px 8px 8px 8px`,
          whiteSpace: `nowrap`,
        },
        children: r,
      }),
    ],
  });
}
function w(e) {
  let {
    number: t = `03`,
    kicker: n = `About`,
    statement:
      r = `I've spent nine years [untangling] the software people use at work, for {4.2M people} a month: payroll, physio bookings, furniture and mountain huts.`,
    body: o = `I start where the problem happens: on the reception desk, in the pay run, at the trailhead. Then I design the fewest decisions that get someone from stuck to done, and I stay until it ships.`,
    body2:
      c = `Before going independent I designed at Fietsbank and Harbour Labs. Today I lead design at Orrin and take one outside project at a time.`,
    facts: u = `Based in|Rotterdam, NL;Working with|Teams of 5 to 5,000;Languages|English, Dutch, German`,
    skills: d = `Research, Interaction design, Prototyping, Design systems, Framer, Workshops`,
    linkLabel: f = `More about me`,
    link: p = `/about`,
    image: h = {
      src: `https://framerusercontent.com/images/bWsorgWOn4V3lRBYcdqTV0UiFg.jpg`,
      alt: `Sketching interface ideas on a tablet`,
    },
    fileName: w = `at-the-desk.jpg`,
    accent: O = `#4B3BFF`,
    ink: k = `#0C0C0E`,
    canvas: N = `#ECECE8`,
    previewScroll: P = -1,
  } = e;
  g();
  let F = m() || P >= 0,
    I = i(null),
    L = i(null),
    R = _(L, F, P),
    z = v(I, F),
    B = M.out(A(R, 0.12, 0.62)),
    V = j(16, 0, B),
    H = Math.round(j(560 * 0.68, 560, B)),
    U = Math.round(j(700 * 0.68, 700, B)),
    W = r.split(/(\[[^\]]+\]|\{[^}]+\})/g).filter(Boolean);
  return l(`section`, {
    ref: I,
    className: `lfa`,
    style: { ...e.style, overflowX: `clip`, width: `100%`, background: N, color: k, fontFamily: T, "--lf-acc": O },
    children: [
      s(y, {}),
      s(`style`, {
        children: `
            .lfa{container-type:inline-size}
            .lfa-in{max-width:1312px;margin:0 auto;padding:150px 64px 150px;display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:88px;align-items:center}
            .lfa-ph{position:relative;aspect-ratio:4/5;width:100%}
            .lfa-st{font:500 46px/1.12 ${T};letter-spacing:-.04em;margin:26px 0 0;text-wrap:pretty}
            .lfa-sel{position:relative;display:inline-block;padding:0 .08em;margin:0 .02em}
            .lfa-chip{display:inline-flex;align-items:center;gap:.22em;padding:.02em .28em .06em;border-radius:.24em;background:#fff;box-shadow:inset 0 0 0 1.5px ${O}33,0 10px 20px -16px rgba(12,12,14,.5);color:${O};vertical-align:.04em;font-size:.9em}
            .lfa-body{display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-top:40px;font:400 17px/1.55 ${T};letter-spacing:-.01em;color:rgba(12,12,14,.74)}
            .lfa-facts{display:grid;grid-template-columns:repeat(3,1fr);gap:0;margin-top:40px;border-top:1px solid rgba(12,12,14,.1)}
            .lfa-facts div{padding:16px 16px 0 0}
            .lfa-facts b{display:block;font:500 11px/1 ${E};letter-spacing:.05em;text-transform:uppercase;color:rgba(12,12,14,.5);font-weight:500;margin-bottom:8px}
            .lfa-facts span{font:500 16px/1.3 ${T};letter-spacing:-.015em}
            .lfa-skills{display:flex;flex-wrap:wrap;gap:6px;margin-top:30px}
            .lfa-skills span{font:500 13px/1 ${T};padding:9px 12px;border-radius:999px;background:rgba(12,12,14,.05);transition:background .2s,color .2s}
            .lfa-skills span:hover{background:${O};color:#fff}
            @container (max-width: 1000px){.lfa-in{grid-template-columns:1fr;gap:56px;padding:110px 32px}.lfa-ph{max-width:520px}.lfa-st{font-size:38px}}
            @container (max-width: 640px){.lfa-in{padding:88px 20px}.lfa-st{font-size:29px}.lfa-body{grid-template-columns:1fr;gap:16px}.lfa-facts{grid-template-columns:1fr}}
            `,
      }),
      l(`div`, {
        className: `lfa-in`,
        children: [
          l(`div`, {
            className: `lfa-ph`,
            ref: L,
            children: [
              l(`div`, {
                style: {
                  position: `absolute`,
                  left: 0,
                  top: -24,
                  display: `flex`,
                  justifyContent: `space-between`,
                  width: `100%`,
                  font: `500 11px/1 ${E}`,
                  color: `rgba(12,12,14,.55)`,
                },
                children: [
                  l(`span`, { children: [s(`span`, { style: { color: O }, children: `▣` }), ` `, w] }),
                  l(`span`, { children: [`Crop · `, H, ` × `, U] }),
                ],
              }),
              l(`div`, {
                style: {
                  position: `absolute`,
                  inset: 0,
                  borderRadius: 4,
                  overflow: `hidden`,
                  boxShadow: `0 40px 70px -40px rgba(12,12,14,.55)`,
                },
                children: [
                  s(`img`, {
                    src: h?.src,
                    alt: h?.alt || ``,
                    draggable: !1,
                    style: {
                      position: `absolute`,
                      inset: 0,
                      width: `100%`,
                      height: `100%`,
                      objectFit: `cover`,
                      transform: `scale(${j(1.14, 1, B)})`,
                    },
                  }),
                  s(`div`, {
                    "aria-hidden": !0,
                    style: {
                      position: `absolute`,
                      inset: 0,
                      background: `rgba(236,236,232,.62)`,
                      opacity: V < 0.4 ? 0 : 1,
                      clipPath: `polygon(0 0,100% 0,100% 100%,0 100%,0 ${V}%,${V}% ${V}%,${V}% ${100 - V}%,${100 - V}% ${100 - V}%,${100 - V}% ${V}%,0 ${V}%)`,
                    },
                  }),
                ],
              }),
              l(`div`, {
                "aria-hidden": !0,
                style: { position: `absolute`, left: `${V}%`, top: `${V}%`, right: `${V}%`, bottom: `${V}%` },
                children: [
                  s(S, { color: O, size: 10, o: 1 - B * 0.4 }),
                  s(`div`, {
                    style: {
                      position: `absolute`,
                      inset: 0,
                      backgroundImage: `linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)`,
                      backgroundSize: `33.33% 33.33%`,
                      opacity: 1 - B,
                    },
                  }),
                ],
              }),
              s(C, { x: `${j(80, 92, B)}%`, y: `${j(84, 96, B)}%`, color: D.mara, label: `Mara · dragging` }),
            ],
          }),
          l(`div`, {
            className: `lf-rv`,
            "data-seen": String(z),
            children: [
              s(x, { n: t, t: n }),
              s(`h2`, {
                className: `lfa-st`,
                children: W.map((e, t) =>
                  e.startsWith(`[`)
                    ? l(`span`, { className: `lfa-sel`, children: [e.slice(1, -1), s(S, { color: O, size: 8 })] }, t)
                    : e.startsWith(`{`)
                      ? l(
                          `span`,
                          {
                            className: `lfa-chip`,
                            children: [
                              l(`svg`, {
                                width: `.62em`,
                                height: `.62em`,
                                viewBox: `0 0 12 12`,
                                "aria-hidden": !0,
                                children: [
                                  s(`path`, {
                                    d: `M6 .9 11.1 6 6 11.1.9 6Z`,
                                    fill: `none`,
                                    stroke: O,
                                    strokeWidth: `1.5`,
                                  }),
                                  s(`path`, { d: `M6 3.6 8.4 6 6 8.4 3.6 6Z`, fill: O }),
                                ],
                              }),
                              e.slice(1, -1),
                            ],
                          },
                          t
                        )
                      : s(a, { children: e }, t)
                ),
              }),
              l(`div`, {
                className: `lfa-body`,
                children: [
                  s(`p`, { style: { margin: 0 }, children: o }),
                  s(`p`, { style: { margin: 0 }, children: c }),
                ],
              }),
              s(`div`, {
                className: `lfa-facts`,
                children: u.split(`;`).map((e, t) => {
                  let [n, r] = e.split(`|`);
                  return l(`div`, { children: [s(`b`, { children: n }), s(`span`, { children: r })] }, t);
                }),
              }),
              s(`div`, {
                className: `lfa-skills`,
                children: d.split(`,`).map((e) => s(`span`, { children: e.trim() }, e)),
              }),
              f ? l(`a`, { className: `lf-l`, href: p, style: { marginTop: 36 }, children: [f, s(b, {})] }) : null,
            ],
          }),
        ],
      }),
    ],
  });
}
var T,
  E,
  D,
  O,
  k,
  A,
  j,
  M,
  N,
  P = e(() => {
    n(),
      c(),
      u(),
      p(),
      (T = `Geist, 'Inter Display', Inter, system-ui, sans-serif`),
      (E = `'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace`),
      (D = {
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
      (O = `cubic-bezier(.22,1,.36,1)`),
      (k = (e, t = 0, n = 1) => Math.min(n, Math.max(t, e))),
      (A = (e, t, n) => k((e - t) / (n - t))),
      (j = (e, t, n) => e + (t - e) * n),
      (M = {
        out: (e) => 1 - (1 - e) ** 4,
        inOut: (e) => (e < 0.5 ? 8 * e * e * e * e : 1 - (-2 * e + 2) ** 4 / 2),
        io3: (e) => (e < 0.5 ? 4 * e * e * e : 1 - (-2 * e + 2) ** 3 / 2),
      }),
      (N = `
section[class^="lf"] *,footer[class^="lf"] *,header[class^="lf"] *,article[class^="lf"] *,section[class^="lf"],footer[class^="lf"],header[class^="lf"],article[class^="lf"]{box-sizing:border-box}
.lf-kick{font:500 11px/1 ${E};letter-spacing:.05em;text-transform:uppercase;color:rgba(12,12,14,.55);display:flex;align-items:center;gap:10px}
.lf-kick b{font-weight:500;color:var(--lf-acc,#4B3BFF)}
.lf-b{height:48px;padding:0 20px;border-radius:10px;display:inline-flex;align-items:center;gap:10px;font:500 15px/1 ${T};letter-spacing:-.015em;text-decoration:none;white-space:nowrap;transition:transform .35s ${O},box-shadow .35s ${O},background .2s,color .2s;cursor:pointer;border:0}
.lf-b:hover{transform:translateY(-2px);box-shadow:0 14px 26px -14px rgba(12,12,14,.55)}
.lf-b:active{transform:translateY(0) scale(.98)}
.lf-b:focus-visible,.lf-l:focus-visible{outline:2px solid var(--lf-acc,#4B3BFF);outline-offset:3px}
.lf-b.ink{background:#0C0C0E;color:#fff}.lf-b.acc{background:var(--lf-acc,#4B3BFF);color:#fff}.lf-b.ghost{background:rgba(255,255,255,.9);color:#0C0C0E;box-shadow:inset 0 0 0 1px rgba(12,12,14,.12)}
.lf-b svg{transition:transform .35s ${O}}.lf-b:hover svg{transform:translateX(3px)}
.lf-l{display:inline-flex;align-items:center;gap:10px;font:500 15px/1 ${T};letter-spacing:-.01em;text-decoration:none;color:inherit;padding-bottom:6px;border-bottom:1.5px solid currentColor;transition:gap .35s ${O},color .2s}
.lf-l:hover{gap:16px;color:var(--lf-acc,#4B3BFF)}
.lf-rv{transition:opacity .8s ${O},transform .8s ${O},filter .8s ${O}}
.lf-rv[data-seen="false"]{opacity:0;transform:translateY(18px);filter:blur(4px)}
@media (prefers-reduced-motion: reduce){.lf-rv{transition:none!important}.lf-rv[data-seen="false"]{opacity:1;transform:none;filter:none}}
`),
      f(w, {
        number: { type: h.String, title: `Section no.`, defaultValue: `03` },
        kicker: { type: h.String, defaultValue: `About` },
        statement: {
          type: h.String,
          displayTextArea: !0,
          title: `Statement ([selected] {chip})`,
          defaultValue: `I've spent nine years [untangling] the software people use at work, for {4.2M people} a month: payroll, physio bookings, furniture and mountain huts.`,
        },
        body: {
          type: h.String,
          displayTextArea: !0,
          defaultValue: `I start where the problem happens: on the reception desk, in the pay run, at the trailhead. Then I design the fewest decisions that get someone from stuck to done, and I stay until it ships.`,
        },
        body2: {
          type: h.String,
          displayTextArea: !0,
          defaultValue: `Before going independent I designed at Fietsbank and Harbour Labs. Today I lead design at Orrin and take one outside project at a time.`,
        },
        facts: {
          type: h.String,
          displayTextArea: !0,
          title: `Facts (Label|Value;…)`,
          defaultValue: `Based in|Rotterdam, NL;Working with|Teams of 5 to 5,000;Languages|English, Dutch, German`,
        },
        skills: {
          type: h.String,
          displayTextArea: !0,
          defaultValue: `Research, Interaction design, Prototyping, Design systems, Framer, Workshops`,
        },
        linkLabel: { type: h.String, title: `Link label`, defaultValue: `More about me` },
        link: { type: h.Link, defaultValue: `/about` },
        image: { type: h.ResponsiveImage },
        fileName: { type: h.String, title: `File name`, defaultValue: `at-the-desk.jpg` },
        accent: { type: h.Color, title: `Selection`, defaultValue: `#4B3BFF` },
        ink: { type: h.Color, defaultValue: `#0C0C0E` },
        canvas: { type: h.Color, defaultValue: `#ECECE8` },
        previewScroll: { type: h.Number, title: `Preview scroll`, defaultValue: -1, min: -1, max: 1, step: 0.01 },
      });
  });
export { P as n, w as t };
//# sourceMappingURL=LayerfolioAbout.Cg0zpMFm.mjs.map
