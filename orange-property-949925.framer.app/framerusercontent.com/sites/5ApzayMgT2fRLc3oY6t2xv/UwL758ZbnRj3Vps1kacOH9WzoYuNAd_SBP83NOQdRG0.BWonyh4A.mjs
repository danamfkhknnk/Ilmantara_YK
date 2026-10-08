import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  F as n,
  L as r,
  N as i,
  O as a,
  P as o,
  S as s,
  _ as c,
  c as l,
  j as u,
  l as d,
  s as f,
  u as p,
  w as m,
  y as ee,
  z as h,
} from "./react.CHR6xBda.mjs";
import { a as te, r as ne, t as g, x as _ } from "./motion.De9yD8td.mjs";
import {
  E as re,
  L as v,
  R as y,
  T as b,
  U as x,
  Y as S,
  Z as ie,
  _t as C,
  a as ae,
  b as w,
  ct as T,
  d as oe,
  dt as se,
  ft as E,
  g as ce,
  gt as D,
  h as O,
  i as k,
  it as le,
  k as A,
  lt as j,
  n as M,
  o as N,
  ot as P,
  p as F,
  pt as I,
  rt as L,
  st as ue,
  w as R,
  y as de,
  z as fe,
} from "./framer.dKj5RJCl.mjs";
import { i as pe, n as me, r as he, t as ge } from "./MG0afWxxR.fLuX1diM.mjs";
import { a as _e, i as ve, l as z, n as ye, r as be, s as B, t as xe } from "./DXBcJdPa7.B57IyCzq.mjs";
import { i as Se, n as V, r as H, t as Ce } from "./wt0cdVoay.DMfFVmAe.mjs";
import { n as we, t as Te } from "./LayerfolioCaseCard.Cb5dR2-h.mjs";
import { i as Ee, t as U } from "./JEK16_748.DwPxubdt.mjs";
import De, { t as Oe } from "./F4W1PIHaMDO7yxZyPx7VmnU6LUTEsGKEr0q0pHV2i9M.ChuHPnSE.mjs";
function ke() {
  i(() => {
    if (typeof document > `u` || document.getElementById(`lf-fonts`)) return;
    let e = document.createElement(`link`);
    (e.id = `lf-fonts`),
      (e.rel = `stylesheet`),
      (e.href = `https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap`),
      document.head.appendChild(e);
  }, []);
}
function Ae(e, t = 1440) {
  let [r, i] = n(t);
  return (
    s(() => {
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
function je(e, t, r) {
  let [a, o] = n(r >= 0 ? r : t ? 0.6 : 0);
  return (
    i(() => {
      if (t || h === void 0) return;
      let n = 0,
        r = () => {
          n = 0;
          let t = e.current;
          if (!t) return;
          let r = t.getBoundingClientRect(),
            i = h.innerHeight || 900,
            a = Y((i - r.top) / (i + r.height));
          o((e) => (Math.abs(e - a) < 0.001 ? e : a));
        },
        i = () => {
          n ||= requestAnimationFrame(r);
        };
      return (
        r(),
        h.addEventListener(`scroll`, i, { passive: !0 }),
        h.addEventListener(`resize`, i),
        () => {
          h.removeEventListener(`scroll`, i), h.removeEventListener(`resize`, i), n && cancelAnimationFrame(n);
        }
      );
    }, [t]),
    a
  );
}
function Me() {
  return d(`style`, { children: Re });
}
function W({ s: e = 14 }) {
  return d(`svg`, {
    width: e,
    height: e,
    viewBox: `0 0 14 14`,
    "aria-hidden": !0,
    children: d(`path`, { d: `M2 7h10M8 3l4 4-4 4`, stroke: `currentColor`, strokeWidth: `1.6`, fill: `none` }),
  });
}
function Ne(e) {
  let t = (e || `#ffffff`).replace(`#`, ``).slice(0, 6);
  return (
    (parseInt(t.slice(0, 2), 16) * 0.3 + parseInt(t.slice(2, 4), 16) * 0.59 + parseInt(t.slice(4, 6), 16) * 0.11) /
      255 <
    0.5
  );
}
function Pe(e, t) {
  let n = (e || `#ffffff`).replace(`#`, ``).slice(0, 6);
  return `rgba(${parseInt(n.slice(0, 2), 16)},${parseInt(n.slice(2, 4), 16)},${parseInt(n.slice(4, 6), 16)},${t})`;
}
function Fe({ pr: e, e: t, accent: n = `#4B3BFF`, labels: r = !0, gapPx: i = 70, active: a = -1 }) {
  let o = i * t,
    s = Ne(e.bg),
    c = s ? `rgba(255,255,255,.64)` : `rgba(0,0,0,.56)`,
    u = Ne(e.brand) ? `#fff` : `#111`,
    f = {
      position: `absolute`,
      background: s ? `rgba(30,31,34,.94)` : `#fff`,
      color: e.fg,
      borderRadius: 16,
      boxShadow: `0 ${18 + t * 24}px ${44 + t * 30}px -18px rgba(0,0,0,${0.34 + t * 0.16})`,
      border: s ? `1px solid rgba(255,255,255,.08)` : `1px solid rgba(0,0,0,.06)`,
      padding: `16px 18px`,
      fontFamily: K,
    },
    m = (e, i, s = {}) =>
      p(
        `div`,
        {
          style: {
            position: `absolute`,
            left: 0,
            top: 0,
            width: X,
            height: Z,
            transform: `translateZ(${e * o}px)`,
            transformStyle: `preserve-3d`,
            ...s,
          },
          children: [
            i,
            r &&
              p(`div`, {
                style: {
                  position: `absolute`,
                  right: 976,
                  top: Z - 26,
                  opacity: Y(t * 1.6 - 0.3),
                  transform: `translateX(${(1 - t) * 10}px)`,
                  display: `flex`,
                  alignItems: `center`,
                  gap: 8,
                  whiteSpace: `nowrap`,
                },
                children: [
                  p(`div`, {
                    style: {
                      font: `500 15px/1 ${q}`,
                      color: `#fff`,
                      background: e === a ? `#0C0C0E` : n,
                      padding: `7px 10px`,
                      borderRadius: 5,
                      transition: `background .3s`,
                    },
                    children: [String(e + 1).padStart(2, `0`), ` `, ze[e]],
                  }),
                  d(`div`, { style: { width: 26, height: 1.5, background: n } }),
                ],
              }),
            d(`div`, {
              style: {
                position: `absolute`,
                inset: -1,
                border: `1.5px solid ${n}`,
                opacity: Y(t * 1.4) * (e === 0 ? 0 : e === a ? 1 : 0.45),
                borderRadius: 16,
                pointerEvents: `none`,
              },
            }),
          ],
        },
        e
      );
  return p(`div`, {
    style: { position: `absolute`, left: 0, top: 0, width: X, height: Z, transformStyle: `preserve-3d` },
    children: [
      m(
        0,
        d(`div`, {
          style: {
            position: `absolute`,
            inset: 0,
            background: e.bg,
            borderRadius: 16,
            boxShadow: `0 ${30 + 60 * t}px ${70 + 80 * t}px -30px rgba(12,12,14,${0.34 + 0.22 * t})`,
            overflow: `hidden`,
          },
          children: d(`div`, {
            style: {
              position: `absolute`,
              right: -120,
              top: -140,
              width: 520,
              height: 520,
              borderRadius: 520,
              background: e.brand,
              opacity: s ? 0.16 : 0.22,
              filter: `blur(40px)`,
            },
          }),
        })
      ),
      m(
        1,
        d(`div`, {
          style: {
            position: `absolute`,
            inset: `0 48px`,
            display: `grid`,
            gridTemplateColumns: `repeat(12,1fr)`,
            gap: 20,
            opacity: 0.18 + 0.4 * Y(t * 2 - 0.2),
          },
          children: Array.from({ length: 12 }).map((e, t) =>
            d(
              `div`,
              {
                style: {
                  background: `rgba(255,61,110,.10)`,
                  borderLeft: `1px solid rgba(255,61,110,.28)`,
                  borderRight: `1px solid rgba(255,61,110,.28)`,
                },
              },
              t
            )
          ),
        }),
        { opacity: Y(t * 3) }
      ),
      m(
        2,
        d(`div`, {
          style: {
            position: `absolute`,
            left: 452,
            top: 104,
            width: 460,
            height: 448,
            borderRadius: 14,
            overflow: `hidden`,
            background: s ? `#222` : `#ddd`,
          },
          children:
            e.image && e.image.src
              ? d(`img`, {
                  src: e.image.src,
                  alt: e.image.alt || ``,
                  draggable: !1,
                  style: {
                    width: `100%`,
                    height: `100%`,
                    objectFit: `cover`,
                    display: `block`,
                    transform: `scale(${1.06 - t * 0.06})`,
                  },
                })
              : null,
        })
      ),
      m(
        3,
        p(l, {
          children: [
            p(`div`, {
              style: { ...f, left: 380, top: 372, width: 268 },
              children: [
                p(`div`, {
                  style: { font: `500 12px/1 ${K}`, color: c, display: `flex`, justifyContent: `space-between` },
                  children: [
                    d(`span`, { children: e.client || e.name }),
                    d(`span`, {
                      style: { width: 8, height: 8, borderRadius: 8, background: e.brand, display: `inline-block` },
                    }),
                  ],
                }),
                d(`div`, {
                  style: { font: `600 26px/1.05 ${K}`, letterSpacing: `-0.035em`, marginTop: 12 },
                  children: e.cardA,
                }),
                d(`div`, { style: { font: `400 12px/1.35 ${K}`, color: c, marginTop: 6 }, children: e.cardASub }),
                d(`div`, {
                  style: {
                    marginTop: 14,
                    height: 36,
                    borderRadius: 9,
                    background: e.brand,
                    color: u,
                    display: `flex`,
                    alignItems: `center`,
                    justifyContent: `center`,
                    font: `600 13px/1 ${K}`,
                  },
                  children: `Continue`,
                }),
              ],
            }),
            p(`div`, {
              style: {
                ...f,
                left: 660,
                top: 132,
                padding: `11px 14px`,
                display: `flex`,
                alignItems: `center`,
                gap: 9,
                font: `500 13px/1 ${K}`,
                whiteSpace: `nowrap`,
              },
              children: [
                d(`span`, {
                  style: {
                    width: 20,
                    height: 20,
                    borderRadius: 20,
                    background: e.brand,
                    display: `inline-flex`,
                    alignItems: `center`,
                    justifyContent: `center`,
                    color: u,
                    fontSize: 11,
                  },
                  children: `✓`,
                }),
                e.cardB,
              ],
            }),
          ],
        })
      ),
      m(
        4,
        p(`div`, {
          style: { position: `absolute`, inset: 0, color: e.fg, fontFamily: K },
          children: [
            p(`div`, {
              style: {
                position: `absolute`,
                left: 48,
                top: 34,
                right: 48,
                display: `flex`,
                alignItems: `center`,
                gap: 26,
                font: `500 14px/1 ${K}`,
              },
              children: [
                p(`span`, {
                  style: {
                    font: `700 19px/1 ${K}`,
                    letterSpacing: `-0.03em`,
                    display: `flex`,
                    alignItems: `center`,
                    gap: 8,
                  },
                  children: [
                    d(`span`, { style: { width: 16, height: 16, borderRadius: 5, background: e.brand } }),
                    e.name,
                  ],
                }),
                d(`span`, { style: { marginLeft: `auto`, opacity: 0.7 }, children: `Product` }),
                d(`span`, { style: { opacity: 0.7 }, children: `Pricing` }),
                d(`span`, { style: { opacity: 0.7 }, children: `Stories` }),
                d(`span`, {
                  style: { padding: `10px 14px`, borderRadius: 9, background: e.fg, color: e.bg },
                  children: `Get started`,
                }),
              ],
            }),
            d(`div`, {
              style: {
                position: `absolute`,
                left: 48,
                top: 140,
                width: 380,
                font: `600 56px/0.96 ${K}`,
                letterSpacing: `-0.05em`,
                textWrap: `balance`,
              },
              children: e.headline,
            }),
            p(`div`, {
              style: {
                position: `absolute`,
                left: 48,
                top: 318,
                width: 300,
                font: `400 15px/1.45 ${K}`,
                opacity: 0.72,
              },
              children: [(e.summary || ``).split(/[,.;]/)[0], `.`],
            }),
          ],
        }),
        { background: t > 0.01 ? Pe(e.bg, 0.55 * Y(t * 1.5)) : `transparent`, borderRadius: 16 }
      ),
      m(
        5,
        p(`svg`, {
          width: X,
          height: Z,
          style: { position: `absolute`, left: 0, top: 0, overflow: `visible` },
          children: [
            [
              [48, 176, 48, 140, `36`],
              [452, 80, 452, 104, `24`],
              [428, 300, 452, 300, `24`],
              [648, 460, 660, 460, `12`],
            ].map((e, t) =>
              p(
                `g`,
                {
                  children: [
                    d(`line`, { x1: e[0], y1: e[1], x2: e[2], y2: e[3], stroke: `#FF3D6E`, strokeWidth: 1.4 }),
                    d(`rect`, {
                      x: (e[0] + e[2]) / 2 - 15,
                      y: (e[1] + e[3]) / 2 - 9,
                      width: 30,
                      height: 18,
                      rx: 4,
                      fill: `#FF3D6E`,
                    }),
                    d(`text`, {
                      x: (e[0] + e[2]) / 2,
                      y: (e[1] + e[3]) / 2 + 4,
                      textAnchor: `middle`,
                      fill: `#fff`,
                      style: { font: `500 11px ${q}` },
                      children: e[4],
                    }),
                  ],
                },
                t
              )
            ),
            d(`line`, {
              x1: 48,
              y1: 0,
              x2: 48,
              y2: Z,
              stroke: `#FF3D6E`,
              strokeWidth: 0.9,
              strokeDasharray: `4 4`,
              opacity: 0.7,
            }),
            d(`line`, {
              x1: X - 48,
              y1: 0,
              x2: X - 48,
              y2: Z,
              stroke: `#FF3D6E`,
              strokeWidth: 0.9,
              strokeDasharray: `4 4`,
              opacity: 0.7,
            }),
            p(`g`, {
              transform: `translate(${X - 70} 86)`,
              children: [
                d(`circle`, { cx: 0, cy: 0, r: 15, fill: `#FF5B24`, stroke: `#fff`, strokeWidth: 2.5 }),
                d(`text`, {
                  x: 0,
                  y: 4.5,
                  textAnchor: `middle`,
                  fill: `#fff`,
                  style: { font: `600 12px ${K}` },
                  children: `M`,
                }),
              ],
            }),
          ],
        }),
        { opacity: Y(t * 2.2 - 0.2) }
      ),
    ],
  });
}
function G(e) {
  let t = Be.cases[0],
    {
      name: r = t.name,
      client: o = t.client,
      year: s = t.year,
      role: c = t.role,
      duration: l = t.duration,
      sector: u = t.sector,
      summary: f = t.summary,
      headline: m = t.headline,
      stat1: ee = t.stat1,
      stat1Label: h = t.stat1Label,
      stat2: te = t.stat2,
      stat2Label: ne = t.stat2Label,
      stat3: g = t.stat3,
      stat3Label: _ = t.stat3Label,
      tags: re = t.tags,
      bg: v = t.bg,
      fg: y = t.fg,
      brand: b = t.brand,
      cardTitle: x = t.cardA,
      cardDetail: S = t.cardASub,
      badge: ie = t.cardB,
      backLabel: C = `All work`,
      backLink: ae = `/work`,
      accent: w = `#4B3BFF`,
      ink: T = `#0C0C0E`,
      canvas: oe = `#ECECE8`,
    } = e,
    se = typeof e.cover == `string` ? e.cover : e.cover && e.cover.src ? e.cover.src : t.coverUrl;
  ke();
  let E = j(),
    ce = a(null),
    D = a(null),
    O = a(null),
    k = Ae(D, 1312),
    le = je(O, E, -1),
    A = E ? 1 : Le.out(Ie(le, 0.08, 0.4)),
    [M, N] = n(`flat`),
    [P, F] = n(0),
    [I, L] = n(-1);
  i(() => {
    let e = +(M === `layers`);
    if (E) {
      F(e);
      return;
    }
    let t = 0,
      n = performance.now(),
      r = P,
      i = () => {
        let a = Y((performance.now() - n) / 1100);
        F(r + (e - r) * Le.io3(a)), a < 1 && (t = requestAnimationFrame(i));
      };
    return (t = requestAnimationFrame(i)), () => cancelAnimationFrame(t);
  }, [M]);
  let ue = (e) => {
      let t = String(e).match(/^([^\d]*)([\d.,]+)(.*)$/);
      if (!t) return e;
      let n = parseFloat(t[2].replace(/,/g, ``)),
        r = (t[2].split(`.`)[1] || ``).length,
        i = n * A;
      return t[1] + (r ? i.toFixed(r) : Math.round(i).toLocaleString(`en-US`)) + t[3];
    },
    R = {
      name: r,
      client: o,
      summary: f,
      headline: m,
      bg: v,
      fg: y,
      brand: b,
      cardA: x,
      cardASub: S,
      cardB: ie,
      image: { src: se, alt: r },
    };
  (Z / X) * k;
  let de = k / X;
  return p(`section`, {
    ref: ce,
    className: `lfc`,
    style: { ...e.style, width: `100%`, overflow: `clip`, background: oe, color: T, fontFamily: K, "--lf-acc": w },
    children: [
      d(Me, {}),
      d(`style`, {
        children: `
            .lfc{container-type:inline-size}
            .lfc-in{max-width:1312px;margin:0 auto;padding:150px 64px 96px}
            .lfc-top{display:grid;grid-template-columns:minmax(0,1fr) 340px;gap:64px;align-items:end;margin-top:34px}
            .lfc-t{margin:0;font:600 140px/.9 ${K};letter-spacing:-.065em}
            .lfc-meta{background:rgba(255,255,255,.82);border:1px solid rgba(12,12,14,.09);border-radius:14px;overflow:hidden}
            .lfc-meta div{display:flex;justify-content:space-between;gap:12px;padding:11px 14px;border-top:1px solid rgba(12,12,14,.07);font:500 14px/1.25 ${K}}
            .lfc-meta div:first-child{border-top:0}
            .lfc-meta b{font:500 11px/1.6 ${q};letter-spacing:.04em;text-transform:uppercase;color:rgba(12,12,14,.5);font-weight:500}
            .lfc-seg{display:inline-flex;padding:3px;border-radius:10px;background:rgba(12,12,14,.06)}
            .lfc-seg button{border:0;background:transparent;font:500 13px/1 ${K};padding:9px 14px;border-radius:8px;cursor:pointer;color:rgba(12,12,14,.6);transition:background .25s,color .25s,box-shadow .25s}
            .lfc-seg button.on{background:#fff;color:${T};box-shadow:0 1px 3px rgba(12,12,14,.15)}
            .lfc-seg button:focus-visible{outline:2px solid ${w};outline-offset:2px}
            .lfc-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:28px}
            .lfc-stats>div{background:rgba(255,255,255,.78);border:1px solid rgba(12,12,14,.09);border-radius:14px;padding:18px 20px}
            .lfc-v{font:600 72px/.95 ${K};letter-spacing:-.06em;font-variant-numeric:tabular-nums}
            @container (max-width: 1000px){.lfc-in{padding:130px 32px 72px}.lfc-top{grid-template-columns:1fr;gap:28px}.lfc-t{font-size:92px}.lfc-v{font-size:54px}}
            @container (max-width: 640px){.lfc-in{padding:112px 20px 56px}.lfc-t{font-size:58px}.lfc-stats{grid-template-columns:1fr}.lfc-v{font-size:52px}}
            `,
      }),
      p(`div`, {
        className: `lfc-in`,
        children: [
          p(`a`, {
            href: ae,
            style: {
              display: `inline-flex`,
              alignItems: `center`,
              gap: 10,
              font: `500 12px/1 ${q}`,
              color: `rgba(12,12,14,.55)`,
              textDecoration: `none`,
            },
            children: [
              d(`span`, { style: { transform: `scaleX(-1)`, display: `inline-flex` }, children: d(W, { s: 12 }) }),
              C,
              d(`span`, { style: { opacity: 0.5 }, children: `/` }),
              d(`span`, { style: { color: T }, children: r }),
            ],
          }),
          p(`div`, {
            className: `lfc-top`,
            children: [
              p(`div`, {
                children: [
                  d(`h1`, { className: `lfc-t`, children: r }),
                  d(`p`, {
                    style: { margin: `26px 0 0`, font: `500 24px/1.32 ${K}`, letterSpacing: `-.025em`, maxWidth: 720 },
                    children: f,
                  }),
                ],
              }),
              d(`div`, {
                className: `lfc-meta`,
                children: [
                  [`Client`, o],
                  [`Year`, s],
                  [`Role`, c],
                  [`Duration`, l],
                  [`Sector`, u],
                ].map(([e, t]) =>
                  p(
                    `div`,
                    { children: [d(`b`, { children: e }), d(`span`, { style: { textAlign: `right` }, children: t })] },
                    e
                  )
                ),
              }),
            ],
          }),
          p(`div`, {
            style: {
              display: `flex`,
              justifyContent: `space-between`,
              alignItems: `center`,
              gap: 16,
              flexWrap: `wrap`,
              marginTop: 56,
              marginBottom: 14,
            },
            children: [
              p(`div`, {
                style: { font: `500 11px/1 ${q}`, color: `rgba(12,12,14,.5)` },
                children: [d(`span`, { style: { color: w }, children: `#` }), ` `, r, ` — Hero · 1920 × 1200`],
              }),
              p(`div`, {
                className: `lfc-seg`,
                role: `tablist`,
                "aria-label": `Artboard view`,
                children: [
                  d(`button`, {
                    className: M === `flat` ? `on` : ``,
                    onClick: () => N(`flat`),
                    role: `tab`,
                    "aria-selected": M === `flat`,
                    children: `Flat`,
                  }),
                  d(`button`, {
                    className: M === `layers` ? `on` : ``,
                    onClick: () => N(`layers`),
                    role: `tab`,
                    "aria-selected": M === `layers`,
                    children: `Layers`,
                  }),
                ],
              }),
            ],
          }),
          d(`div`, {
            ref: D,
            style: {
              position: `relative`,
              width: `100%`,
              aspectRatio: `${X} / ${Z}`,
              perspective: 2600,
              perspectiveOrigin: `50% 20%`,
            },
            children: d(`div`, {
              style: {
                position: `absolute`,
                left: 0,
                top: 0,
                width: X,
                height: Z,
                transformOrigin: `0 0`,
                transform: `scale(${de})`,
              },
              children: d(`div`, {
                style: {
                  position: `absolute`,
                  inset: 0,
                  transformStyle: `preserve-3d`,
                  transformOrigin: `50% 50%`,
                  transform: `translateY(${P * 40}px) rotateX(${P * 52}deg) rotateZ(${P * -32}deg) scale(${1 - P * 0.3})`,
                },
                children: d(Fe, { pr: R, e: P, accent: w, labels: !1, active: I, gapPx: 70 }),
              }),
            }),
          }),
          d(`div`, {
            style: {
              display: `flex`,
              gap: 6,
              flexWrap: `wrap`,
              marginTop: 18,
              opacity: 0.35 + 0.65 * P,
              transition: `opacity .3s`,
            },
            children: ze.map((e, t) =>
              p(
                `span`,
                {
                  onMouseEnter: () => {
                    L(t), M === `flat` && N(`layers`);
                  },
                  onMouseLeave: () => L(-1),
                  style: {
                    font: `500 11px/1 ${q}`,
                    padding: `7px 9px`,
                    borderRadius: 6,
                    background: t === I ? w : `rgba(12,12,14,.05)`,
                    color: t === I ? `#fff` : `rgba(12,12,14,.6)`,
                    cursor: `default`,
                    transition: `background .2s,color .2s`,
                  },
                  children: [String(t + 1).padStart(2, `0`), ` `, e],
                },
                e
              )
            ),
          }),
          d(`div`, {
            ref: O,
            className: `lfc-stats`,
            children: [
              [ee, h],
              [te, ne],
              [g, _],
            ].map(([e, t], n) =>
              p(
                `div`,
                {
                  children: [
                    d(`div`, { className: `lfc-v`, children: ue(e) }),
                    d(`div`, {
                      style: { font: `400 14px/1.4 ${K}`, color: `rgba(12,12,14,.62)`, marginTop: 10 },
                      children: t,
                    }),
                  ],
                },
                n
              )
            ),
          }),
          d(`div`, {
            style: { display: `flex`, flexWrap: `wrap`, gap: 6, marginTop: 18 },
            children: String(re || ``)
              .split(`,`)
              .map((e) =>
                d(
                  `span`,
                  {
                    style: {
                      font: `500 11px/1 ${q}`,
                      textTransform: `uppercase`,
                      letterSpacing: `.04em`,
                      padding: `8px 10px`,
                      borderRadius: 6,
                      border: `1px solid rgba(12,12,14,.1)`,
                      background: `rgba(255,255,255,.65)`,
                    },
                    children: e.trim(),
                  },
                  e
                )
              ),
          }),
        ],
      }),
    ],
  });
}
var K,
  q,
  J,
  Y,
  Ie,
  Le,
  Re,
  X,
  Z,
  ze,
  Be,
  Ve = e(() => {
    r(),
      f(),
      m(),
      x(),
      (K = `Geist, 'Inter Display', Inter, system-ui, sans-serif`),
      (q = `'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace`),
      (J = `cubic-bezier(.22,1,.36,1)`),
      (Y = (e, t = 0, n = 1) => Math.min(n, Math.max(t, e))),
      (Ie = (e, t, n) => Y((e - t) / (n - t))),
      (Le = {
        out: (e) => 1 - (1 - e) ** 4,
        inOut: (e) => (e < 0.5 ? 8 * e * e * e * e : 1 - (-2 * e + 2) ** 4 / 2),
        io3: (e) => (e < 0.5 ? 4 * e * e * e : 1 - (-2 * e + 2) ** 3 / 2),
      }),
      (Re = `
section[class^="lf"] *,footer[class^="lf"] *,header[class^="lf"] *,article[class^="lf"] *,section[class^="lf"],footer[class^="lf"],header[class^="lf"],article[class^="lf"]{box-sizing:border-box}
.lf-kick{font:500 11px/1 ${q};letter-spacing:.05em;text-transform:uppercase;color:rgba(12,12,14,.55);display:flex;align-items:center;gap:10px}
.lf-kick b{font-weight:500;color:var(--lf-acc,#4B3BFF)}
.lf-b{height:48px;padding:0 20px;border-radius:10px;display:inline-flex;align-items:center;gap:10px;font:500 15px/1 ${K};letter-spacing:-.015em;text-decoration:none;white-space:nowrap;transition:transform .35s ${J},box-shadow .35s ${J},background .2s,color .2s;cursor:pointer;border:0}
.lf-b:hover{transform:translateY(-2px);box-shadow:0 14px 26px -14px rgba(12,12,14,.55)}
.lf-b:active{transform:translateY(0) scale(.98)}
.lf-b:focus-visible,.lf-l:focus-visible{outline:2px solid var(--lf-acc,#4B3BFF);outline-offset:3px}
.lf-b.ink{background:#0C0C0E;color:#fff}.lf-b.acc{background:var(--lf-acc,#4B3BFF);color:#fff}.lf-b.ghost{background:rgba(255,255,255,.9);color:#0C0C0E;box-shadow:inset 0 0 0 1px rgba(12,12,14,.12)}
.lf-b svg{transition:transform .35s ${J}}.lf-b:hover svg{transform:translateX(3px)}
.lf-l{display:inline-flex;align-items:center;gap:10px;font:500 15px/1 ${K};letter-spacing:-.01em;text-decoration:none;color:inherit;padding-bottom:6px;border-bottom:1.5px solid currentColor;transition:gap .35s ${J},color .2s}
.lf-l:hover{gap:16px;color:var(--lf-acc,#4B3BFF)}
.lf-rv{transition:opacity .8s ${J},transform .8s ${J},filter .8s ${J}}
.lf-rv[data-seen="false"]{opacity:0;transform:translateY(18px);filter:blur(4px)}
@media (prefers-reduced-motion: reduce){.lf-rv{transition:none!important}.lf-rv[data-seen="false"]{opacity:1;transform:none;filter:none}}
`),
      (X = 960),
      (Z = 600),
      (ze = [`Background`, `Layout grid`, `Hero image`, `UI cards`, `Type`, `Redlines`]),
      (Be = {
        person: {
          name: `Noor Castell`,
          first: `Noor`,
          role: `Product designer`,
          city: `Rotterdam`,
          email: `hello@noorcastell.studio`,
          availability: `Booking projects from November`,
          current: `Design lead at Orrin`,
        },
        cases: [
          {
            slug: `orrin`,
            name: `Orrin`,
            client: `Orrin Payroll`,
            year: `2026`,
            role: `Design lead`,
            duration: `14 months`,
            sector: `Fintech`,
            summary: `Payroll for freelancers, rebuilt so a monthly pay run takes four minutes instead of an afternoon.`,
            headline: `Pay your freelancers in one tap.`,
            stat1: `4 min`,
            stat1Label: `average pay run, down from 3 h`,
            stat2: `−38%`,
            stat2Label: `failed first payments`,
            stat3: `4.8`,
            stat3Label: `App Store rating, 11k reviews`,
            tags: `Fintech, iOS, Design system`,
            bg: `#111214`,
            fg: `#F4F4F0`,
            brand: `#C8F25A`,
            cardA: `€12,480.00`,
            cardASub: `Pay run ready · 14 people`,
            cardB: `Invoice #0142 paid`,
            cover: `1498050108023-c5249f4df085`,
            gallery: [`1510519138101-570d1dca3d66`, `1532896374032-fdffb11e2b8e`],
            problem: [
              `Orrin's customers are small studios that pay between five and forty freelancers a month. Every pay run meant exporting invoices, checking bank details by hand and approving each payment one at a time.`,
              `Support logged the same complaint every week: people didn't trust the total until they had checked it line by line, so a 'quick' pay run took most of an afternoon.`,
            ],
            fix: [
              `I sat in on eleven pay runs over video and timed every step. Two steps did almost all the damage: matching invoices to people, and confirming bank details that hadn't changed in months.`,
              `We replaced the invoice list with a single pay run card that shows who, how much and what changed since last month. Only the changes ask for attention; everything else is pre-checked and collapsed.`,
            ],
            outcome: [
              `The median pay run fell from three hours to four minutes. Failed first payments dropped 38% because new bank details now get a one-cent test transfer before the real one.`,
              `The pay run card became the pattern for the rest of the app, and the design system we built around it now covers 214 components across iOS and web.`,
            ],
            learned: [
              `People don't want fewer screens, they want fewer decisions. The biggest win came from deciding what not to ask, not from redrawing the interface.`,
            ],
            coverUrl: `https://framerusercontent.com/images/EyNglsC5qO5YzdL87lJoka3is2g.jpg`,
            galleryUrls: [
              `https://framerusercontent.com/images/Sxgu1H6NXNCjj1tqm1LJuFogU.jpg`,
              `https://framerusercontent.com/images/kzSGuPb7NDE6q6hY00IANVcQ.jpg`,
            ],
          },
          {
            slug: `quayside`,
            name: `Quayside`,
            client: `Quayside Clinics`,
            year: `2025`,
            role: `Lead product designer`,
            duration: `9 months`,
            sector: `Health`,
            summary: `Online booking for a chain of 23 physio clinics, designed with the receptionists who used to take every call.`,
            headline: `Book physio in under a minute.`,
            stat1: `61%`,
            stat1Label: `of bookings now online`,
            stat2: `−2,400`,
            stat2Label: `phone calls a week`,
            stat3: `23`,
            stat3Label: `clinics on one system`,
            tags: `Health, Web app, Research`,
            bg: `#E6EFEA`,
            fg: `#0D2A22`,
            brand: `#0E7C66`,
            cardA: `Tue 14:30`,
            cardASub: `Knee rehab · Dr. Ilse Brandt`,
            cardB: `3 slots left today`,
            cover: `1576091160399-112ba8d25d1d`,
            gallery: [`1579477402070-798fd86c4904`, `1552960226-639240203497`],
            problem: [
              `Every Quayside clinic took bookings by phone. Receptionists spent the first two hours of each day on hold music and callbacks, and patients who called after six had to try again tomorrow.`,
              `An earlier booking widget failed because it asked patients to choose a treatment type they didn't know the name of.`,
            ],
            fix: [
              `I spent four mornings on reception desks, listening to calls. Patients describe where it hurts, not what treatment they need. So the new flow starts with a body map and a plain question: what's bothering you?`,
              `Receptionists got a shared day view that shows online bookings arriving in real time, with one tap to move or merge them.`,
            ],
            outcome: [
              `Within six months 61% of bookings were made online, and the clinics took 2,400 fewer phone calls a week. The receptionists now spend that time with the people in the waiting room.`,
              `No-shows fell 19% after we added a one-tap reschedule link to the reminder text.`,
            ],
            learned: [
              `The best research happened at the desk, not in the interview room. Watching one real call taught me more than a week of scripted sessions.`,
            ],
            coverUrl: `https://framerusercontent.com/images/bstKOBl540dvdv6ooe65n1qE.jpg`,
            galleryUrls: [
              `https://framerusercontent.com/images/ObTZh92R59nT6xictAIIoPkqJo.jpg`,
              `https://framerusercontent.com/images/bCEdvLZdZ5nozNKc6dAcHQU8J0.jpg`,
            ],
          },
          {
            slug: `holm-and-hearth`,
            name: `Holm & Hearth`,
            client: `Holm & Hearth`,
            year: `2025`,
            role: `Product and web designer`,
            duration: `6 months`,
            sector: `E-commerce`,
            summary: `A furniture store that sold mostly in person. The new shop explains fabrics, sizes and lead times before anyone has to ask.`,
            headline: `Furniture that fits the room.`,
            stat1: `+41%`,
            stat1Label: `online revenue in six months`,
            stat2: `−27%`,
            stat2Label: `returns for wrong size`,
            stat3: `9 s`,
            stat3Label: `to find a sofa that fits`,
            tags: `E-commerce, Shopify, Art direction`,
            bg: `#EFE6DA`,
            fg: `#2B1D14`,
            brand: `#B4532A`,
            cardA: `Linnea lounge chair`,
            cardASub: `€640 · Oat bouclé · ships in 3 wk`,
            cardB: `Fits: 82 cm doorway`,
            cover: `1493809842364-78817add7ffb`,
            gallery: [`1653972233597-05822baa3c4e`, `1631125915902-d8abe9225ff2`],
            problem: [
              `Holm & Hearth's showroom staff answered the same three questions all day: will it fit, what does the fabric feel like, and when will it arrive. The website answered none of them.`,
              `Almost a third of online returns were pieces that didn't fit through a door or up a staircase.`,
            ],
            fix: [
              `We added a 'Will it fit?' check to every product: enter your narrowest doorway and see a yes or no, with the packed size. Fabric swatches ship free within two days, and lead times sit next to the price.`,
              `I art-directed a new photography set shot in real flats, not a studio, so people could judge scale against ordinary rooms.`,
            ],
            outcome: [
              `Online revenue grew 41% in six months and returns for the wrong size fell 27%. The average visitor now finds a sofa that fits in nine seconds from the filter bar.`,
              `Showroom visits went up too: people arrive having already chosen, and come in to sit on it.`,
            ],
            learned: [
              `A small, honest tool beat a big immersive one. We shelved the 3D room planner and shipped a text field that answers the question people actually asked.`,
            ],
            coverUrl: `https://framerusercontent.com/images/ujO45Z407FBRhzl7h0svDSat8U.jpg`,
            galleryUrls: [
              `https://framerusercontent.com/images/Jbn0QwkwITm2L40Pq7ikShxQ2eA.jpg`,
              `https://framerusercontent.com/images/VmwnUqPBspNu7qvocsT6ErbxOOg.jpg`,
            ],
          },
          {
            slug: `vale`,
            name: `Vale`,
            client: `Vale Huts`,
            year: `2024`,
            role: `Product designer`,
            duration: `8 months`,
            sector: `Travel`,
            summary: `Booking for 140 mountain huts across Norway, built to work on a single bar of signal at the trailhead.`,
            headline: `Your bed on the mountain, sorted.`,
            stat1: `140`,
            stat1Label: `huts bookable offline`,
            stat2: `3×`,
            stat2Label: `more mid-week stays`,
            stat3: `180 kb`,
            stat3Label: `first load on 3G`,
            tags: `Travel, Mobile, Offline-first`,
            bg: `#0E2A3B`,
            fg: `#EEF3F5`,
            brand: `#F2B233`,
            cardA: `Hut Fjellro`,
            cardASub: `3 beds left · 7.4 km from trailhead`,
            cardB: `−2° tonight · clear`,
            cover: `1464822759023-fed622ff2c3b`,
            gallery: [`1506744038136-46273834b3fb`, `1631756964162-25c8c07579b5`],
            problem: [
              `Vale's huts were booked through a patchwork of email, a phone line and a paper book in each hut. Hikers found out a hut was full only when they arrived after a seven-hour walk.`,
              `Most bookings happen on the trail, where there is one bar of signal at best.`,
            ],
            fix: [
              `We designed offline-first: the app keeps the hut list, maps and your bookings on the phone, and queues a booking until it finds signal, then confirms by text.`,
              `Every screen had a weight budget. The first load is 180 kb, and the map uses simplified vector tiles that still show every hut and river crossing.`,
            ],
            outcome: [
              `All 140 huts are now bookable offline. Mid-week stays tripled because hikers can finally see which nights are quiet.`,
              `The wardens use the same app to mark beds as taken, so the paper books have been retired.`,
            ],
            learned: [
              `Designing for the worst connection made the product better for everyone. People on fast Wi-Fi noticed the speed first.`,
            ],
            coverUrl: `https://framerusercontent.com/images/P1vzgPktRcOHNQnFLjvjfYcjPk.jpg`,
            galleryUrls: [
              `https://framerusercontent.com/images/7SOhpNY3QBBLLaPOic8yXQ00E.jpg`,
              `https://framerusercontent.com/images/inG8N3OdJfNkUKQLVfJW8hJkHSo.jpg`,
            ],
          },
          {
            slug: `kiln-audio`,
            name: `Kiln Audio`,
            client: `Kiln Audio`,
            year: `2024`,
            role: `Web and brand designer`,
            duration: `4 months`,
            sector: `Consumer hardware`,
            summary: `A launch site and store for a small headphone maker, built around a sound test you can take in the browser.`,
            headline: `Hear the difference first.`,
            stat1: `11,200`,
            stat1Label: `pre-orders in launch week`,
            stat2: `4.1%`,
            stat2Label: `store conversion rate`,
            stat3: `62%`,
            stat3Label: `took the sound test`,
            tags: `Launch, E-commerce, Brand`,
            bg: `#F2C94C`,
            fg: `#1B1406`,
            brand: `#1B1406`,
            cardA: `Kiln One`,
            cardASub: `€249 · Charcoal · ships March`,
            cardB: `Sound test: 94% match`,
            cover: `1505740420928-5e560c06d30e`,
            gallery: [`1599669454699-248893623440`, `1583394838336-acd977736f90`],
            problem: [
              `Kiln had six people, one product and a launch date. Headphones are hard to sell online because nobody can hear them, and big brands win on reviews alone.`,
              `The founders wanted to explain their tuning, but every draft read like a spec sheet.`,
            ],
            fix: [
              `We built a two-minute listening test that plays the same track through four tuning curves and asks which one you prefer. Your answer becomes a recommendation, and the page explains why in one sentence.`,
              `The site uses one bold yellow, big product photography and plain copy. Specs live behind a toggle for the people who want them.`,
            ],
            outcome: [
              `Launch week brought 11,200 pre-orders. 62% of visitors took the sound test, and they converted at twice the rate of those who didn't.`,
              `The test now runs in their pop-up shops on an iPad, so the website and the store speak with one voice.`,
            ],
            learned: [
              `Let people do the thing the product is for, even in a simplified way. One interaction beat ten paragraphs about drivers.`,
            ],
            coverUrl: `https://framerusercontent.com/images/v5NNIau0zcJfok9ssoAb9E4SuOs.jpg`,
            galleryUrls: [
              `https://framerusercontent.com/images/oxXSyO88XZOelKSNl1iEH1s2sak.jpg`,
              `https://framerusercontent.com/images/gqoFEE7Bl7SRLhsDWxuVEHu7Kc.jpg`,
            ],
          },
          {
            slug: `tessel`,
            name: `Tessel`,
            client: `Tessel Architects`,
            year: `2023`,
            role: `Design systems lead`,
            duration: `7 months`,
            sector: `Architecture`,
            summary: `A project archive and design system for a 90-person architecture practice with thirty years of drawings.`,
            headline: `Thirty years of buildings, findable.`,
            stat1: `2,300`,
            stat1Label: `projects archived and searchable`,
            stat2: `−70%`,
            stat2Label: `time spent assembling bid decks`,
            stat3: `46`,
            stat3Label: `components in the system`,
            tags: `Design system, Web, Internal tools`,
            bg: `#DCDAD5`,
            fg: `#161616`,
            brand: `#161616`,
            cardA: `Harbour Library`,
            cardASub: `2019 · Civic · 6,400 m²`,
            cardB: `12 drawings linked`,
            cover: `1569258592171-357ea26da4df`,
            gallery: [`1522743791393-522312deeebf`, `1579724175242-0204ecac28cb`],
            problem: [
              `Tessel's best work was spread across three servers, a basement of flat files and the memories of four partners. Assembling a bid deck took a week of searching.`,
              `Their public website showed twelve projects, all over ten years old.`,
            ],
            fix: [
              `We catalogued 2,300 projects with a small, strict set of fields (year, type, size, status) and built an internal archive where any drawing is two filters away.`,
              `The same components power the public site, so publishing a project is a checkbox, not a design job.`,
            ],
            outcome: [
              `Bid decks now take about a day instead of a week. The public site shows 80 current projects and brought in two competition invitations in its first year.`,
              `The design system has 46 components and a written rulebook the office actually uses.`,
            ],
            learned: [
              `A design system is a list of decisions. The components were the easy part; agreeing what 'status' means took three workshops.`,
            ],
            coverUrl: `https://framerusercontent.com/images/kcShJz4dYJymSiptkbzpYB1JF4.jpg`,
            galleryUrls: [
              `https://framerusercontent.com/images/oki7L32K8gO2FzFf2oS4jv8l6gY.jpg`,
              `https://framerusercontent.com/images/kAeoEAuqyHJ9WMKNUxyv2ayLiV8.jpg`,
            ],
          },
        ],
        journal: [
          {
            slug: `write-the-empty-state-first`,
            title: `Write the empty state first`,
            date: `2026-09-02`,
            category: `Craft`,
            read: `5 min read`,
            cover: `1510519138101-570d1dca3d66`,
            excerpt: `The screen most people see on day one is the one we design last. I've started with it on every project for two years, and it keeps changing the product.`,
            body: [
              `Most products are designed full. The mockups show a dashboard with eighteen months of data, a busy inbox and a team of twelve. Then a real customer signs up and sees a grey box that says 'No items yet'.`,
              `So I now design the empty state before anything else. It forces the first question every product has to answer: what should a new person do in the next thirty seconds?`,
              `At Orrin, writing the empty pay run screen first changed the order of onboarding. Adding one freelancer, not connecting a bank, became the first step, because that was the smallest thing that made the screen useful.`,
              `The rule I use: an empty state must name one action, show what the screen will look like once it's done, and never apologise.`,
            ],
            coverUrl: `https://framerusercontent.com/images/Sxgu1H6NXNCjj1tqm1LJuFogU.jpg`,
          },
          {
            slug: `what-receptionists-taught-me`,
            title: `What receptionists taught me about booking flows`,
            date: `2026-07-18`,
            category: `Research`,
            read: `6 min read`,
            cover: `1576091160399-112ba8d25d1d`,
            excerpt: `Four mornings on a clinic front desk taught me more than a month of interviews. People describe where it hurts, not what they need.`,
            body: [
              `For the Quayside project I asked to sit on reception instead of running interviews. I wore a headset, took notes and said very little.`,
              `The pattern was obvious by the second morning: nobody asks for 'sports massage' or 'manual therapy'. They say 'my knee has been bad since the half-marathon'.`,
              `That became the first screen of the booking flow: a body map and a plain question. The treatment is chosen for you, and you can change it if you know better.`,
              `Research doesn't have to be a formal study. Sometimes the best method is to sit where the problem happens and listen.`,
            ],
            coverUrl: `https://framerusercontent.com/images/bstKOBl540dvdv6ooe65n1qE.jpg`,
          },
          {
            slug: `a-design-system-is-a-list-of-decisions`,
            title: `A design system is a list of decisions`,
            date: `2026-06-04`,
            category: `Systems`,
            read: `7 min read`,
            cover: `1569258592171-357ea26da4df`,
            excerpt: `Components are the easy part. The hard part is agreeing what 'primary' means, and writing it down where people will find it.`,
            body: [
              `Every design system I've inherited had a beautiful component library and no rules. Three teams used the same button in three different ways.`,
              `At Tessel we started with a document instead of a Figma file: forty short decisions, each one sentence long. 'A page has one primary action.' 'Status is one of five words.'`,
              `The components came later and were almost boring to build, because the arguments were already settled.`,
              `If your system is drifting, don't add components. Find the decision nobody wrote down.`,
            ],
            coverUrl: `https://framerusercontent.com/images/kcShJz4dYJymSiptkbzpYB1JF4.jpg`,
          },
          {
            slug: `the-four-minute-pay-run`,
            title: `The four-minute pay run`,
            date: `2026-04-22`,
            category: `Case notes`,
            read: `8 min read`,
            cover: `1498050108023-c5249f4df085`,
            excerpt: `How we cut a three-hour task to four minutes by removing decisions, not screens.`,
            body: [
              `When I joined Orrin, a pay run took most of an afternoon. The interface wasn't bad; it just asked the same questions every month.`,
              `I timed eleven real pay runs. Two steps took 80% of the time: matching invoices to people and re-checking bank details that hadn't changed.`,
              `We moved both into the background. The pay run card now shows only what changed since last month, and everything else is pre-checked.`,
              `The lesson I took away: count decisions, not clicks. A screen with one real decision beats a wizard with five fake ones.`,
            ],
            coverUrl: `https://framerusercontent.com/images/EyNglsC5qO5YzdL87lJoka3is2g.jpg`,
          },
          {
            slug: `how-i-run-a-design-critique`,
            title: `How I run a 45-minute design critique`,
            date: `2026-03-09`,
            category: `Process`,
            read: `4 min read`,
            cover: `1579477402070-798fd86c4904`,
            excerpt: `A fixed agenda, one question per person and no solutions in the first twenty minutes. Here is the format I use every week.`,
            body: [
              `Critiques go wrong when they turn into redesigns by committee. So mine follow a fixed shape.`,
              `Five minutes: the designer states the problem and the one thing they want feedback on. Twenty minutes: questions only, no fixes. Fifteen minutes: suggestions, each tied to the stated goal. Five minutes: the designer says what they'll change.`,
              `The questions-only rule is the important one. It makes people understand the work before they try to improve it.`,
              `Write the notes in the file, next to the frames. Feedback that lives in a chat thread is feedback that gets lost.`,
            ],
            coverUrl: `https://framerusercontent.com/images/ObTZh92R59nT6xictAIIoPkqJo.jpg`,
          },
          {
            slug: `prototype-in-the-real-font`,
            title: `Prototype in the real font, on the real phone`,
            date: `2026-01-27`,
            category: `Craft`,
            read: `3 min read`,
            cover: `1583394838336-acd977736f90`,
            excerpt: `Most usability problems I've missed were invisible on a 27-inch monitor. Test on the device, in the typeface, in daylight.`,
            body: [
              `A design that works on my monitor often fails on a five-year-old phone in the sun. Text that looked calm at 13 px becomes unreadable.`,
              `My rule is simple: nothing goes to review until I've used it on a real phone, outside, for five minutes.`,
              `It's cheap, and it catches the things that matter most: tap targets, contrast and how long the first screen takes to appear.`,
              `The best prototype isn't the most detailed one. It's the one closest to the real conditions.`,
            ],
            coverUrl: `https://framerusercontent.com/images/gqoFEE7Bl7SRLhsDWxuVEHu7Kc.jpg`,
          },
          {
            slug: `pricing-freelance-design`,
            title: `Pricing freelance design by the problem`,
            date: `2025-11-12`,
            category: `Business`,
            read: `6 min read`,
            cover: `1768471125958-78556538fadc`,
            excerpt: `I stopped quoting hours three years ago. Here's how I price a project by what the problem costs the client today.`,
            body: [
              `Hourly pricing punishes speed. The better you get, the less you earn, and the client worries about every meeting on the invoice.`,
              `Now I ask one question in the first call: what does this problem cost you each month? A three-hour pay run for forty studios is easy to put a number on.`,
              `I quote a fixed price for a defined outcome, with two check-ins where we can change scope in writing.`,
              `Clients rarely push back, because the conversation is about their business, not my time.`,
            ],
            coverUrl: `https://framerusercontent.com/images/EVzzVsdGSAc3N0sCk1OxGlBp7U.jpg`,
          },
          {
            slug: `designing-for-one-bar-of-signal`,
            title: `Designing for one bar of signal`,
            date: `2025-09-30`,
            category: `Case notes`,
            read: `5 min read`,
            cover: `1464822759023-fed622ff2c3b`,
            excerpt: `Vale's hikers book huts at the trailhead with almost no connection. Designing for that made the app faster for everyone.`,
            body: [
              `Most of Vale's bookings happen where the signal ends. So we set a rule before drawing anything: every screen must work offline.`,
              `That meant storing the hut list, maps and bookings on the phone, and queuing requests until a connection appears.`,
              `We also set a weight budget of 180 kb for the first load, which ruled out most of the heavy map libraries.`,
              `The side effect surprised us: people in cities rated the app faster than any travel app they used.`,
            ],
            coverUrl: `https://framerusercontent.com/images/P1vzgPktRcOHNQnFLjvjfYcjPk.jpg`,
          },
        ],
        testimonials: [
          {
            name: `Mara Lindqvist`,
            role: `Head of Product`,
            company: `Orrin`,
            quote: `Noor asked better questions in week one than we had in a year. The pay run redesign paid for itself in a month of support tickets.`,
            project: `Orrin`,
            color: `#FF5B24`,
            order: 1,
          },
          {
            name: `Idris Achterberg`,
            role: `Operations Director`,
            company: `Quayside Clinics`,
            quote: `She spent four mornings on our front desk before drawing anything. Our receptionists still talk about it, and the booking flow shows it.`,
            project: `Quayside`,
            color: `#0E7C66`,
            order: 2,
          },
          {
            name: `Saskia Holm`,
            role: `Co-founder`,
            company: `Holm & Hearth`,
            quote: `The 'will it fit?' check was a text field. It cut our returns by a quarter. Noor has no ego about the size of the idea.`,
            project: `Holm & Hearth`,
            color: `#B4532A`,
            order: 3,
          },
          {
            name: `Eirik Dahl`,
            role: `CTO`,
            company: `Vale Huts`,
            quote: `Offline-first sounded like an engineering problem until Noor made it a design rule. Every screen had a weight budget, and she kept us to it.`,
            project: `Vale`,
            color: `#2F6E8F`,
            order: 4,
          },
          {
            name: `Lotte Brink`,
            role: `Founder`,
            company: `Kiln Audio`,
            quote: `We launched with six people and a sound test in the browser. 11,000 pre-orders later, I'd hire Noor for anything.`,
            project: `Kiln Audio`,
            color: `#C99A0E`,
            order: 5,
          },
          {
            name: `Tomas Verhey`,
            role: `Partner`,
            company: `Tessel Architects`,
            quote: `She got ninety architects to agree on what 'status' means. That alone deserves an award.`,
            project: `Tessel`,
            color: `#4B3BFF`,
            order: 6,
          },
        ],
        services: [
          {
            n: `01`,
            title: `Product design`,
            body: `End-to-end design for web and mobile products, from the first sketch to the shipped screen. I work inside your team's rhythm, not beside it.`,
            items: [`UX and UI design`, `Prototyping`, `Usability testing`, `Design QA`],
            price: `From €9,500 / month`,
          },
          {
            n: `02`,
            title: `Websites`,
            body: `Marketing sites and launch pages that explain the product before anyone has to ask, built in Framer so your team can edit them.`,
            items: [`Art direction`, `Copy structure`, `Framer build`, `SEO basics`],
            price: `From €12,000 / project`,
          },
          {
            n: `03`,
            title: `Design systems`,
            body: `A written list of decisions first, then the components. Systems your team will actually use, documented where they work.`,
            items: [`Audit`, `Tokens and components`, `Documentation`, `Team onboarding`],
            price: `From €18,000 / project`,
          },
          {
            n: `04`,
            title: `Research sprints`,
            body: `Two weeks of watching real people use your product, then a short report with the three changes that matter most.`,
            items: [`Field visits`, `Interviews`, `Session recordings`, `Priority report`],
            price: `€7,500 fixed`,
          },
        ],
        process: [
          {
            n: `01`,
            title: `Discover`,
            body: `I sit where the problem happens: on the desk, in the field, in the support queue. One week, no slides.`,
            meta: `Week 1`,
          },
          {
            n: `02`,
            title: `Define`,
            body: `We agree the one outcome that matters and write it down with a number next to it.`,
            meta: `Week 2`,
          },
          {
            n: `03`,
            title: `Design`,
            body: `Prototypes in the real font on the real device, tested with five people every Friday.`,
            meta: `Weeks 3–8`,
          },
          {
            n: `04`,
            title: `Deliver`,
            body: `I stay through the build, review every pull request that touches the interface and measure the result.`,
            meta: `Weeks 8–12`,
          },
        ],
        numbers: [
          { v: `9`, u: `years`, l: `designing software for teams of 5 to 5,000` },
          { v: `31`, u: `products`, l: `shipped to production, and still running` },
          { v: `4.2`, u: `M`, l: `people use them every month` },
          { v: `12`, u: `systems`, l: `design systems built and documented` },
        ],
        faq: [
          {
            q: `What kind of projects do you take on?`,
            a: `Digital products and websites where a real workflow needs untangling: fintech, health, commerce, travel and internal tools. I work best with teams that can ship every week.`,
          },
          {
            q: `Do you work alone or with a team?`,
            a: `Usually alone, embedded in your team. For larger projects I bring in two long-time collaborators: a front-end developer and a researcher.`,
          },
          {
            q: `How do you price projects?`,
            a: `A fixed price for a defined outcome, agreed after a free 20-minute call. Monthly retainers are available for ongoing product work.`,
          },
          {
            q: `Which tools do you use?`,
            a: `Figma for design, Framer for websites and prototypes, and whatever your engineers use for the build. I'm happy to work in your files.`,
          },
          {
            q: `How soon can you start?`,
            a: `I book about six weeks ahead. The next opening is in November; research sprints can sometimes start sooner.`,
          },
          {
            q: `Do you work with clients outside Europe?`,
            a: `Yes. About a third of my clients are in North America. I keep four hours of overlap with your working day.`,
          },
          {
            q: `Can you just do the visual design?`,
            a: `I can, but it's rarely the best use of your budget. Most of the value comes from the research and decisions before the pixels.`,
          },
        ],
        timeline: [
          {
            v: `v2026`,
            title: `Design lead · Orrin`,
            body: `Leading design for payroll across iOS and web; built the Orrin design system.`,
            date: `2025 — now`,
          },
          {
            v: `v2023`,
            title: `Independent designer`,
            body: `Product and web projects for Quayside, Holm & Hearth, Vale, Kiln and Tessel.`,
            date: `2021 — 2025`,
          },
          {
            v: `v2019`,
            title: `Senior product designer · Fietsbank`,
            body: `Designed the bike-lease app used by 300,000 commuters in the Netherlands.`,
            date: `2019 — 2021`,
          },
          {
            v: `v2017`,
            title: `Product designer · Harbour Labs`,
            body: `A studio of twelve making internal tools for ports and logistics companies.`,
            date: `2017 — 2019`,
          },
        ],
        tools: [`Figma`, `Framer`, `FigJam`, `Maze`, `Notion`, `Linear`, `Rive`, `Protopie`],
      }),
      re(G, {
        name: { type: N.String, defaultValue: `Orrin` },
        client: { type: N.String, defaultValue: `Orrin Payroll` },
        year: { type: N.String, defaultValue: `2026` },
        role: { type: N.String, defaultValue: `Design lead` },
        duration: { type: N.String, defaultValue: `14 months` },
        sector: { type: N.String, defaultValue: `Fintech` },
        summary: { type: N.String, displayTextArea: !0, defaultValue: `Payroll for freelancers.` },
        headline: { type: N.String, defaultValue: `Pay your freelancers in one tap.` },
        stat1: { type: N.String, defaultValue: `4 min` },
        stat1Label: { type: N.String, defaultValue: `average pay run` },
        stat2: { type: N.String, defaultValue: `−38%` },
        stat2Label: { type: N.String, defaultValue: `failed payments` },
        stat3: { type: N.String, defaultValue: `4.8` },
        stat3Label: { type: N.String, defaultValue: `App Store rating` },
        tags: { type: N.String, defaultValue: `Fintech, iOS, Design system` },
        bg: { type: N.Color, title: `Background`, defaultValue: `#111214` },
        fg: { type: N.Color, title: `Foreground`, defaultValue: `#F4F4F0` },
        brand: { type: N.Color, title: `Brand`, defaultValue: `#C8F25A` },
        cardTitle: { type: N.String, title: `Card title`, defaultValue: `€12,480.00` },
        cardDetail: { type: N.String, title: `Card detail`, defaultValue: `Pay run ready · 14 people` },
        badge: { type: N.String, defaultValue: `Invoice #0142 paid` },
        cover: { type: N.ResponsiveImage, title: `Cover` },
        backLabel: { type: N.String, title: `Back label`, defaultValue: `All work` },
        backLink: { type: N.Link, title: `Back link`, defaultValue: `/work` },
        accent: { type: N.Color, title: `Selection`, defaultValue: `#4B3BFF` },
        ink: { type: N.Color, defaultValue: `#0C0C0E` },
        canvas: { type: N.Color, defaultValue: `#ECECE8` },
      });
  }),
  He,
  Ue,
  We,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et,
  tt,
  Q,
  nt,
  rt,
  it,
  at,
  ot,
  st,
  ct,
  $,
  lt;
e(() => {
  f(),
    x(),
    g(),
    m(),
    we(),
    Ve(),
    _e(),
    Ee(),
    ve(),
    pe(),
    Se(),
    Oe(),
    (He = v(G)),
    (Ue = C(R, { nodeId: `jp0ik_nvv`, override: B, scopeId: `hM9zdhcEx` })),
    (We = C(R, { nodeId: `uUBLdUrp_`, override: B, scopeId: `hM9zdhcEx` })),
    (Ge = C(F, { nodeId: `Te6Ifd8RY`, override: z, scopeId: `hM9zdhcEx` })),
    (Ke = C(F, { nodeId: `ytbB8GGw_`, override: z, scopeId: `hM9zdhcEx` })),
    (qe = C(R, { nodeId: `INLPMHCyZ`, override: B, scopeId: `hM9zdhcEx` })),
    (Je = C(R, { nodeId: `x0fbHviQC`, override: B, scopeId: `hM9zdhcEx` })),
    (Ye = C(_.div, { nodeId: `C2kKseqq1`, override: B, scopeId: `hM9zdhcEx` })),
    (Xe = v(Te)),
    (Ze = {
      lC6yh2acW: `(min-width: 1200px)`,
      sSQ2FO7A8: `(min-width: 810px) and (max-width: 1199.98px)`,
      VvcllxGLg: `(max-width: 809.98px)`,
    }),
    (Qe = []),
    ($e = `framer-kNzPE`),
    (et = { lC6yh2acW: `framer-v-gc2nu1`, sSQ2FO7A8: `framer-v-194zenu`, VvcllxGLg: `framer-v-jktjc6` }),
    (tt = (e, t, n) => (e && t ? `position` : n)),
    (Q = (e) =>
      typeof e == `object` && e && typeof e.src == `string` ? e : typeof e == `string` ? { src: e } : void 0),
    (nt = {
      opacity: 0.6,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1.1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0, duration: 0.3, ease: [0.22, 1, 0.36, 1], type: `tween` },
    }),
    (rt = () => ({
      from: { alias: `ZEyTqJiVH`, data: U, type: `Collection` },
      limit: { type: `LiteralValue`, value: 3 },
      orderBy: [{ collection: `ZEyTqJiVH`, name: `llOE2D3I0`, type: `Identifier` }],
      select: [
        { collection: `ZEyTqJiVH`, name: `uMhPzf_5e`, type: `Identifier` },
        { collection: `ZEyTqJiVH`, name: `ghbxT45IO`, type: `Identifier` },
        { collection: `ZEyTqJiVH`, name: `AbZkGmu78`, type: `Identifier` },
        { collection: `ZEyTqJiVH`, name: `JgC9dTohn`, type: `Identifier` },
        { collection: `ZEyTqJiVH`, name: `ZUZCqLL3T`, type: `Identifier` },
        { collection: `ZEyTqJiVH`, name: `tBFYJet7v`, type: `Identifier` },
        { collection: `ZEyTqJiVH`, name: `DM1ZsbGnY`, type: `Identifier` },
        { collection: `ZEyTqJiVH`, name: `beQO6liyS`, type: `Identifier` },
        { collection: `ZEyTqJiVH`, name: `GkYFszY1k`, type: `Identifier` },
        { collection: `ZEyTqJiVH`, name: `DQ301MZUa`, type: `Identifier` },
        { collection: `ZEyTqJiVH`, name: `KgWrzB3zz`, type: `Identifier` },
        { collection: `ZEyTqJiVH`, name: `SYAy8aJu3`, type: `Identifier` },
        { collection: `ZEyTqJiVH`, name: `g54DFSX3p`, type: `Identifier` },
        { collection: `ZEyTqJiVH`, name: `id`, type: `Identifier` },
      ],
    })),
    (it = ({ query: e, pageSize: t, children: n }) => n(I(e))),
    (at = { Desktop: `lC6yh2acW`, Phone: `VvcllxGLg`, Tablet: `sSQ2FO7A8` }),
    (ot = ({ value: e }) =>
      T() ? null : d(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (st = (e) => ({
      from: { alias: `hM9zdhcEx`, data: U, type: `Collection` },
      select: [
        { collection: `hM9zdhcEx`, name: `ghbxT45IO`, type: `Identifier` },
        { collection: `hM9zdhcEx`, name: `OCWqTbJ03`, type: `Identifier` },
        { collection: `hM9zdhcEx`, name: `JgC9dTohn`, type: `Identifier` },
        { collection: `hM9zdhcEx`, name: `YLMCAy5zX`, type: `Identifier` },
        { collection: `hM9zdhcEx`, name: `BR8LQe8tT`, type: `Identifier` },
        { collection: `hM9zdhcEx`, name: `AbZkGmu78`, type: `Identifier` },
        { collection: `hM9zdhcEx`, name: `ZUZCqLL3T`, type: `Identifier` },
        { collection: `hM9zdhcEx`, name: `tBFYJet7v`, type: `Identifier` },
        { collection: `hM9zdhcEx`, name: `gJChp7dZd`, type: `Identifier` },
        { collection: `hM9zdhcEx`, name: `wQ5IMKh7P`, type: `Identifier` },
        { collection: `hM9zdhcEx`, name: `uK_aHd0H0`, type: `Identifier` },
        { collection: `hM9zdhcEx`, name: `WL94xsCPJ`, type: `Identifier` },
        { collection: `hM9zdhcEx`, name: `qdJpNX0HX`, type: `Identifier` },
        { collection: `hM9zdhcEx`, name: `MAQQqOCkO`, type: `Identifier` },
        { collection: `hM9zdhcEx`, name: `CDvVvIlNS`, type: `Identifier` },
        { collection: `hM9zdhcEx`, name: `DQ301MZUa`, type: `Identifier` },
        { collection: `hM9zdhcEx`, name: `KgWrzB3zz`, type: `Identifier` },
        { collection: `hM9zdhcEx`, name: `SYAy8aJu3`, type: `Identifier` },
        { collection: `hM9zdhcEx`, name: `g54DFSX3p`, type: `Identifier` },
        { collection: `hM9zdhcEx`, name: `lK_SXi4Ik`, type: `Identifier` },
        { collection: `hM9zdhcEx`, name: `k7PZ7b7vU`, type: `Identifier` },
        { collection: `hM9zdhcEx`, name: `XxFkbjC4T`, type: `Identifier` },
        { collection: `hM9zdhcEx`, name: `w12KFyvFn`, type: `Identifier` },
        { collection: `hM9zdhcEx`, name: `aVvXJj6hO`, type: `Identifier` },
        { collection: `hM9zdhcEx`, name: `J2yUVdRvk`, type: `Identifier` },
        { collection: `hM9zdhcEx`, name: `DM1ZsbGnY`, type: `Identifier` },
        { collection: `hM9zdhcEx`, name: `beQO6liyS`, type: `Identifier` },
        { collection: `hM9zdhcEx`, name: `GkYFszY1k`, type: `Identifier` },
      ],
      where: e,
    })),
    (ct = ({ height: e, id: t, width: n, ...r }) => ({ ...r, variant: at[r.variant] ?? r.variant ?? `lC6yh2acW` })),
    ($ = D(
      c(function (e, n) {
        let r = a(null),
          i = n ?? r,
          s = ee(),
          { activeLocale: c, setLocale: f } = se(),
          m = L(),
          h = le(),
          [g] = I(st(fe(h, `hM9zdhcEx`)));
        if (!g) throw new ce(`No data matches path variables: ${JSON.stringify(h)}`);
        let {
          style: re,
          className: v,
          layoutId: y,
          variant: b,
          ghbxT45IO: x = g.ghbxT45IO ?? ``,
          OCWqTbJ03: S = g.OCWqTbJ03 ?? ``,
          JgC9dTohn: ie = g.JgC9dTohn ?? ``,
          YLMCAy5zX: C = g.YLMCAy5zX ?? ``,
          BR8LQe8tT: T = g.BR8LQe8tT ?? ``,
          AbZkGmu78: D = g.AbZkGmu78 ?? ``,
          ZUZCqLL3T: j = g.ZUZCqLL3T ?? ``,
          tBFYJet7v: N = g.tBFYJet7v ?? ``,
          gJChp7dZd: F = g.gJChp7dZd ?? ``,
          wQ5IMKh7P: pe = g.wQ5IMKh7P ?? ``,
          uK_aHd0H0: me = g.uK_aHd0H0 ?? ``,
          WL94xsCPJ: he = g.WL94xsCPJ ?? ``,
          qdJpNX0HX: _e = g.qdJpNX0HX ?? ``,
          MAQQqOCkO: ve = g.MAQQqOCkO ?? ``,
          CDvVvIlNS: z = g.CDvVvIlNS ?? ``,
          DQ301MZUa: ye = g.DQ301MZUa ?? ``,
          KgWrzB3zz: be = g.KgWrzB3zz ?? ``,
          SYAy8aJu3: B = g.SYAy8aJu3 ?? ``,
          g54DFSX3p: Se = g.g54DFSX3p,
          lK_SXi4Ik: V = g.lK_SXi4Ik,
          k7PZ7b7vU: H = g.k7PZ7b7vU,
          XxFkbjC4T: we = g.XxFkbjC4T ?? ``,
          w12KFyvFn: Ee = g.w12KFyvFn ?? ``,
          aVvXJj6hO: U = g.aVvXJj6hO ?? ``,
          J2yUVdRvk: Oe = g.J2yUVdRvk ?? ``,
          DM1ZsbGnY: ke = g.DM1ZsbGnY ?? `#09F`,
          beQO6liyS: Ae = g.beQO6liyS ?? `#09F`,
          GkYFszY1k: je = g.GkYFszY1k ?? `#09F`,
          ...Me
        } = ct(e);
        E(u(() => De({ ghbxT45IO: x, ZUZCqLL3T: j }, c), [x, j, c]));
        let [W, Ne] = ue(b, Ze, !1),
          Pe = A($e, ge, xe, Ce),
          Fe = t(oe)?.isLayoutTemplate,
          K = !!t(te)?.transition?.layout,
          q = tt(Fe, K);
        return (
          P({}),
          d(oe.Provider, {
            value: {
              activeVariantId: W,
              humanReadableVariantMap: at,
              primaryVariantId: `lC6yh2acW`,
              variantClassNames: et,
            },
            children: p(ne, {
              id: y ?? s,
              children: [
                d(ot, { value: `html body { background: rgb(255, 255, 255); }` }),
                p(_.div, {
                  ...Me,
                  className: A(Pe, `framer-gc2nu1`, v),
                  ref: i,
                  style: { ...re },
                  children: [
                    d(k, {
                      children: d(ae, {
                        className: `framer-u866ny-container`,
                        "data-code-component-plugin-id": `api`,
                        "data-framer-name": `01 Case header`,
                        isAuthoredByUser: !0,
                        layout: q,
                        name: `01 Case header`,
                        nodeId: `Nt86JsQIm`,
                        scopeId: `hM9zdhcEx`,
                        children: d(G, {
                          accent: `rgb(75, 59, 255)`,
                          backLabel: `All work`,
                          backLink: `/work`,
                          badge: B,
                          bg: ke,
                          brand: je,
                          canvas: `rgb(236, 236, 232)`,
                          cardDetail: be,
                          cardTitle: ye,
                          client: S,
                          cover: Q(Se),
                          duration: T,
                          fg: Ae,
                          headline: N,
                          height: `100%`,
                          id: `Nt86JsQIm`,
                          ink: `rgb(12, 12, 14)`,
                          layoutId: `Nt86JsQIm`,
                          name: x,
                          role: C,
                          sector: D,
                          stat1: F,
                          stat1Label: pe,
                          stat2: me,
                          stat2Label: he,
                          stat3: _e,
                          stat3Label: ve,
                          style: { width: `100%` },
                          summary: j,
                          tags: z,
                          width: `100%`,
                          year: ie,
                        }),
                      }),
                    }),
                    p(_.section, {
                      className: `framer-8rbxeq`,
                      "data-border": !0,
                      "data-framer-name": `02 The problem`,
                      layout: q,
                      children: [
                        p(`div`, {
                          className: `framer-x4ltyr`,
                          "data-framer-name": `Label`,
                          children: [
                            d(R, {
                              __fromCanvasComponent: !0,
                              children: d(o, {
                                children: d(`p`, {
                                  className: `framer-styles-preset-o8en2f`,
                                  "data-styles-preset": `MG0afWxxR`,
                                  dir: `auto`,
                                  style: { "--framer-text-color": `#4B3BFF` },
                                  children: `[02]`,
                                }),
                              }),
                              className: `framer-1e7ofqs`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            d(R, {
                              __fromCanvasComponent: !0,
                              children: d(o, {
                                children: d(`h2`, {
                                  className: `framer-styles-preset-mamhr0`,
                                  "data-styles-preset": `DXBcJdPa7`,
                                  dir: `auto`,
                                  style: { "--framer-text-color": `#0C0C0E` },
                                  children: `The problem`,
                                }),
                              }),
                              className: `framer-wx0hrs`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        d(Ue, {
                          __fromCanvasComponent: !0,
                          children: we,
                          className: `framer-ynywcn`,
                          fonts: [`Inter`],
                          stylesPresetsClassNames: { p: `framer-styles-preset-16wbxom` },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    p(_.section, {
                      className: `framer-ane7x`,
                      "data-border": !0,
                      "data-framer-name": `03 The fix`,
                      layout: q,
                      children: [
                        p(`div`, {
                          className: `framer-1gfjdts`,
                          "data-framer-name": `Label`,
                          children: [
                            d(R, {
                              __fromCanvasComponent: !0,
                              children: d(o, {
                                children: d(`p`, {
                                  className: `framer-styles-preset-o8en2f`,
                                  "data-styles-preset": `MG0afWxxR`,
                                  dir: `auto`,
                                  style: { "--framer-text-color": `#4B3BFF` },
                                  children: `[03]`,
                                }),
                              }),
                              className: `framer-rpr4a`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            d(R, {
                              __fromCanvasComponent: !0,
                              children: d(o, {
                                children: d(`h2`, {
                                  className: `framer-styles-preset-mamhr0`,
                                  "data-styles-preset": `DXBcJdPa7`,
                                  dir: `auto`,
                                  style: { "--framer-text-color": `#0C0C0E` },
                                  children: `The fix`,
                                }),
                              }),
                              className: `framer-1cucn3h`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        d(We, {
                          __fromCanvasComponent: !0,
                          children: Ee,
                          className: `framer-c7id31`,
                          fonts: [`Inter`],
                          stylesPresetsClassNames: { p: `framer-styles-preset-16wbxom` },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    p(_.section, {
                      className: `framer-1ywm5as`,
                      "data-framer-name": `04 Gallery`,
                      layout: q,
                      children: [
                        d(`div`, {
                          className: `framer-8viwv8`,
                          "data-framer-name": `Gallery 1`,
                          children: d(w, {
                            breakpoint: W,
                            overrides: {
                              sSQ2FO7A8: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  pixelHeight: 1370,
                                  pixelWidth: 2e3,
                                  sizes: `max((${m?.width || `100vw`} - 80px) / 2, 300px)`,
                                  ...Q(V),
                                },
                              },
                              VvcllxGLg: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  pixelHeight: 1370,
                                  pixelWidth: 2e3,
                                  sizes: `max(${m?.width || `100vw`} - 40px, 300px)`,
                                  ...Q(V),
                                },
                              },
                            },
                            children: d(Ge, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                pixelHeight: 1370,
                                pixelWidth: 2e3,
                                sizes: `max((${m?.width || `100vw`} - 144px) / 2, 300px)`,
                                ...Q(V),
                              },
                              className: `framer-18se84l`,
                              "data-framer-name": `Gallery 1 image`,
                            }),
                          }),
                        }),
                        d(`div`, {
                          className: `framer-1ueoeij`,
                          "data-framer-name": `Gallery 2`,
                          children: d(w, {
                            breakpoint: W,
                            overrides: {
                              sSQ2FO7A8: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  pixelHeight: 1333,
                                  pixelWidth: 2e3,
                                  sizes: `max((${m?.width || `100vw`} - 80px) / 2, 300px)`,
                                  ...Q(H),
                                },
                              },
                              VvcllxGLg: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  pixelHeight: 1333,
                                  pixelWidth: 2e3,
                                  sizes: `max(${m?.width || `100vw`} - 40px, 300px)`,
                                  ...Q(H),
                                },
                              },
                            },
                            children: d(Ke, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                pixelHeight: 1333,
                                pixelWidth: 2e3,
                                sizes: `max((${m?.width || `100vw`} - 144px) / 2, 300px)`,
                                ...Q(H),
                              },
                              className: `framer-16lv0v9`,
                              "data-framer-name": `Gallery 2 image`,
                            }),
                          }),
                        }),
                      ],
                    }),
                    p(_.section, {
                      className: `framer-4ymha0`,
                      "data-border": !0,
                      "data-framer-name": `05 The result`,
                      layout: q,
                      children: [
                        p(`div`, {
                          className: `framer-5uci76`,
                          "data-framer-name": `Label`,
                          children: [
                            d(R, {
                              __fromCanvasComponent: !0,
                              children: d(o, {
                                children: d(`p`, {
                                  className: `framer-styles-preset-o8en2f`,
                                  "data-styles-preset": `MG0afWxxR`,
                                  dir: `auto`,
                                  style: { "--framer-text-color": `#4B3BFF` },
                                  children: `[05]`,
                                }),
                              }),
                              className: `framer-8xw20g`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            d(R, {
                              __fromCanvasComponent: !0,
                              children: d(o, {
                                children: d(`h2`, {
                                  className: `framer-styles-preset-mamhr0`,
                                  "data-styles-preset": `DXBcJdPa7`,
                                  dir: `auto`,
                                  style: { "--framer-text-color": `#0C0C0E` },
                                  children: `The result`,
                                }),
                              }),
                              className: `framer-swf7kp`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        d(qe, {
                          __fromCanvasComponent: !0,
                          children: U,
                          className: `framer-1jrvli3`,
                          fonts: [`Inter`],
                          stylesPresetsClassNames: { p: `framer-styles-preset-16wbxom` },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    p(_.section, {
                      className: `framer-qfjymz`,
                      "data-border": !0,
                      "data-framer-name": `06 What I learned`,
                      layout: q,
                      children: [
                        p(`div`, {
                          className: `framer-jaq9gz`,
                          "data-framer-name": `Label`,
                          children: [
                            d(R, {
                              __fromCanvasComponent: !0,
                              children: d(o, {
                                children: d(`p`, {
                                  className: `framer-styles-preset-o8en2f`,
                                  "data-styles-preset": `MG0afWxxR`,
                                  dir: `auto`,
                                  style: { "--framer-text-color": `#4B3BFF` },
                                  children: `[06]`,
                                }),
                              }),
                              className: `framer-l6t97w`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            d(R, {
                              __fromCanvasComponent: !0,
                              children: d(o, {
                                children: d(`h2`, {
                                  className: `framer-styles-preset-mamhr0`,
                                  "data-styles-preset": `DXBcJdPa7`,
                                  dir: `auto`,
                                  style: { "--framer-text-color": `#0C0C0E` },
                                  children: `What I learned`,
                                }),
                              }),
                              className: `framer-1imddma`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        d(Je, {
                          __fromCanvasComponent: !0,
                          children: Oe,
                          className: `framer-1wgmwfp`,
                          fonts: [`Inter`],
                          stylesPresetsClassNames: { p: `framer-styles-preset-16wbxom` },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    p(_.section, {
                      className: `framer-1n28yy3`,
                      "data-framer-name": `07 More work`,
                      layout: q,
                      children: [
                        p(`div`, {
                          className: `framer-1ymfg8j`,
                          "data-framer-name": `Head`,
                          children: [
                            p(Ye, {
                              className: `framer-fr9iak`,
                              "data-framer-name": `Head copy`,
                              children: [
                                p(_.div, {
                                  className: `framer-f0ridv`,
                                  "data-framer-name": `Kicker`,
                                  children: [
                                    d(R, {
                                      __fromCanvasComponent: !0,
                                      children: d(o, {
                                        children: d(`p`, {
                                          className: `framer-styles-preset-o8en2f`,
                                          "data-styles-preset": `MG0afWxxR`,
                                          dir: `auto`,
                                          style: { "--framer-text-color": `#4B3BFF` },
                                          children: `[07]`,
                                        }),
                                      }),
                                      className: `framer-rn4pq2`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    d(R, {
                                      __fromCanvasComponent: !0,
                                      children: d(o, {
                                        children: d(`p`, {
                                          className: `framer-styles-preset-o8en2f`,
                                          "data-styles-preset": `MG0afWxxR`,
                                          dir: `auto`,
                                          style: { "--framer-text-color": `rgba(12, 12, 14, 0.55)` },
                                          children: `MORE WORK`,
                                        }),
                                      }),
                                      className: `framer-3ybpo`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                d(R, {
                                  __fromCanvasComponent: !0,
                                  children: d(o, {
                                    children: d(`h2`, {
                                      className: `framer-styles-preset-mamhr0`,
                                      "data-styles-preset": `DXBcJdPa7`,
                                      dir: `auto`,
                                      style: { "--framer-text-color": `#0C0C0E` },
                                      children: `Keep reading the file`,
                                    }),
                                  }),
                                  className: `framer-55o2i0`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            d(`div`, {
                              className: `framer-edhiei`,
                              "data-framer-name": `Head side`,
                              children: d(O, {
                                href: { webPageId: `lgsWNPjru` },
                                motionChild: !0,
                                nodeId: `kxvWBn56L`,
                                scopeId: `hM9zdhcEx`,
                                children: d(_.a, {
                                  className: `framer-5fkx17 framer-10e6rxt`,
                                  "data-border": !0,
                                  "data-framer-name": `Link All work`,
                                  whileHover: nt,
                                  children: d(R, {
                                    __fromCanvasComponent: !0,
                                    children: d(o, {
                                      children: d(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                          "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                          "--framer-font-size": `15px`,
                                          "--framer-font-weight": `500`,
                                          "--framer-letter-spacing": `-0.01em`,
                                          "--framer-line-height": `1em`,
                                          "--framer-text-color": `#0C0C0E`,
                                        },
                                        children: `All work  →`,
                                      }),
                                    }),
                                    className: `framer-1jeba22`,
                                    fonts: [`GF;Geist-500`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        d(`div`, {
                          className: `framer-l5wrvf`,
                          "data-framer-name": `Case list`,
                          children: d(M, {
                            children: d(it, {
                              query: rt(),
                              children: (e, t, n) =>
                                d(l, {
                                  children: e?.map(
                                    (
                                      {
                                        AbZkGmu78: e,
                                        beQO6liyS: t,
                                        DM1ZsbGnY: n,
                                        DQ301MZUa: r,
                                        g54DFSX3p: i,
                                        ghbxT45IO: a,
                                        GkYFszY1k: o,
                                        id: s,
                                        JgC9dTohn: c,
                                        KgWrzB3zz: l,
                                        SYAy8aJu3: u,
                                        tBFYJet7v: f,
                                        uMhPzf_5e: p,
                                        ZUZCqLL3T: m,
                                      },
                                      ee
                                    ) => (
                                      (p ??= ``),
                                      (a ??= ``),
                                      (e ??= ``),
                                      (c ??= ``),
                                      (m ??= ``),
                                      (f ??= ``),
                                      (n ??= `#09F`),
                                      (t ??= `#09F`),
                                      (o ??= `#09F`),
                                      (r ??= ``),
                                      (l ??= ``),
                                      (u ??= ``),
                                      d(
                                        ne,
                                        {
                                          id: `ZEyTqJiVH-${s}`,
                                          children: d(de.Provider, {
                                            value: { uMhPzf_5e: p },
                                            children: d(O, {
                                              href: { pathVariables: { uMhPzf_5e: p }, webPageId: `hM9zdhcEx` },
                                              motionChild: !0,
                                              nodeId: `y_3bBqhmH`,
                                              scopeId: `hM9zdhcEx`,
                                              children: d(_.a, {
                                                className: `framer-1h9lb4a framer-10e6rxt`,
                                                "data-framer-name": `Case cell`,
                                                children: d(k, {
                                                  children: d(ae, {
                                                    className: `framer-gmjpeg-container`,
                                                    "data-code-component-plugin-id": `api`,
                                                    "data-framer-name": `Layerfolio Case Card`,
                                                    isAuthoredByUser: !0,
                                                    name: `Layerfolio Case Card`,
                                                    nodeId: `zxOEppc6Y`,
                                                    scopeId: `hM9zdhcEx`,
                                                    children: d(Te, {
                                                      accent: `rgb(75, 59, 255)`,
                                                      badge: u,
                                                      bg: n,
                                                      brand: o,
                                                      cardDetail: l,
                                                      cardTitle: r,
                                                      cover: Q(i),
                                                      fg: t,
                                                      headline: f,
                                                      height: `100%`,
                                                      id: `zxOEppc6Y`,
                                                      index: ``,
                                                      layoutId: `zxOEppc6Y`,
                                                      name: a,
                                                      sector: e,
                                                      style: { width: `100%` },
                                                      summary: m,
                                                      width: `100%`,
                                                      year: c,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                        },
                                        s
                                      )
                                    )
                                  ),
                                }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                d(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-kNzPE.framer-10e6rxt, .framer-kNzPE .framer-10e6rxt { display: block; }`,
        `.framer-kNzPE.framer-gc2nu1 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1080px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-kNzPE .framer-u866ny-container, .framer-kNzPE .framer-gmjpeg-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-kNzPE .framer-8rbxeq, .framer-kNzPE .framer-ane7x, .framer-kNzPE .framer-4ymha0 { --border-bottom-width: 0px; --border-color: rgba(12, 12, 14, 0.1); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: #ecece8; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 48px; height: min-content; justify-content: flex-start; padding: 88px 64px 88px 64px; position: relative; width: 100%; }`,
        `.framer-kNzPE .framer-x4ltyr, .framer-kNzPE .framer-1gfjdts, .framer-kNzPE .framer-5uci76, .framer-kNzPE .framer-jaq9gz { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; max-width: 420px; min-width: 260px; padding: 0px; position: sticky; width: 1px; }`,
        `.framer-kNzPE .framer-1e7ofqs, .framer-kNzPE .framer-rpr4a, .framer-kNzPE .framer-8xw20g, .framer-kNzPE .framer-l6t97w, .framer-kNzPE .framer-rn4pq2, .framer-kNzPE .framer-3ybpo, .framer-kNzPE .framer-1jeba22 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-kNzPE .framer-wx0hrs, .framer-kNzPE .framer-1cucn3h, .framer-kNzPE .framer-swf7kp, .framer-kNzPE .framer-1imddma { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-kNzPE .framer-ynywcn, .framer-kNzPE .framer-c7id31, .framer-kNzPE .framer-1jrvli3, .framer-kNzPE .framer-1wgmwfp { flex: 1 0 0px; height: auto; max-width: 720px; min-width: 300px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-kNzPE .framer-1ywm5as { background-color: #ecece8; display: grid; flex: none; gap: 16px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(300px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; padding: 40px 64px 40px 64px; position: relative; width: 100%; }`,
        `.framer-kNzPE .framer-8viwv8, .framer-kNzPE .framer-1ueoeij { align-self: start; border-bottom-left-radius: 14px; border-bottom-right-radius: 14px; border-top-left-radius: 14px; border-top-right-radius: 14px; flex: none; height: 560px; justify-self: start; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-kNzPE .framer-18se84l, .framer-kNzPE .framer-16lv0v9 { flex: none; height: 100%; left: 0px; position: absolute; top: 0px; width: 100%; }`,
        `.framer-kNzPE .framer-qfjymz { --border-bottom-width: 0px; --border-color: rgba(12, 12, 14, 0.1); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: #e4e4df; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 48px; height: min-content; justify-content: flex-start; padding: 88px 64px 88px 64px; position: relative; width: 100%; }`,
        `.framer-kNzPE .framer-1n28yy3 { align-content: center; align-items: center; background-color: #ecece8; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; padding: 130px 64px 140px 64px; position: relative; width: 100%; }`,
        `.framer-kNzPE .framer-1ymfg8j { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; height: min-content; justify-content: space-between; max-width: 1312px; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kNzPE .framer-fr9iak { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; max-width: 760px; min-width: 300px; padding: 0px; position: relative; width: 1px; }`,
        `.framer-kNzPE .framer-f0ridv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
        `.framer-kNzPE .framer-55o2i0 { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-kNzPE .framer-edhiei { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; max-width: 420px; min-width: 280px; padding: 0px; position: relative; width: 1px; }`,
        `.framer-kNzPE .framer-5fkx17 { --border-bottom-width: 1.5px; --border-color: #0c0c0e; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px 0px 6px 0px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-kNzPE .framer-l5wrvf { display: grid; flex: none; gap: 72px 32px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(320px, 1fr)); height: min-content; justify-content: center; max-width: 1312px; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kNzPE .framer-1h9lb4a { align-content: flex-start; align-items: flex-start; align-self: start; cursor: pointer; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
        ...me,
        ...ye,
        ...V,
        `.framer-kNzPE[data-border="true"]::after, .framer-kNzPE [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-kNzPE.framer-gc2nu1 { height: min-content; width: 810px; } .framer-kNzPE .framer-8rbxeq, .framer-kNzPE .framer-ane7x, .framer-kNzPE .framer-4ymha0, .framer-kNzPE .framer-qfjymz { padding: 75px 32px 75px 32px; } .framer-kNzPE .framer-x4ltyr, .framer-kNzPE .framer-1gfjdts, .framer-kNzPE .framer-5uci76, .framer-kNzPE .framer-jaq9gz { position: relative; } .framer-kNzPE .framer-1ywm5as { padding: 40px 32px 40px 32px; } .framer-kNzPE .framer-8viwv8, .framer-kNzPE .framer-1ueoeij { height: 440px; } .framer-kNzPE .framer-1n28yy3 { padding: 104px 32px 112px 32px; } .framer-kNzPE .framer-l5wrvf { grid-template-columns: repeat(1, minmax(320px, 1fr)); }}`,
        `@media (max-width: 809.98px) { .framer-kNzPE.framer-gc2nu1 { height: min-content; width: 390px; } .framer-kNzPE .framer-8rbxeq, .framer-kNzPE .framer-ane7x, .framer-kNzPE .framer-4ymha0, .framer-kNzPE .framer-qfjymz { padding: 62px 20px 62px 20px; } .framer-kNzPE .framer-x4ltyr, .framer-kNzPE .framer-1gfjdts, .framer-kNzPE .framer-5uci76, .framer-kNzPE .framer-jaq9gz { position: relative; } .framer-kNzPE .framer-1ywm5as { grid-template-columns: repeat(1, minmax(300px, 1fr)); padding: 40px 20px 40px 20px; } .framer-kNzPE .framer-8viwv8, .framer-kNzPE .framer-1ueoeij { height: 300px; } .framer-kNzPE .framer-1n28yy3 { padding: 81px 20px 87px 20px; } .framer-kNzPE .framer-l5wrvf { grid-template-columns: repeat(1, minmax(320px, 1fr)); }}`,
      ],
      `framer-kNzPE`
    )),
    ($.displayName = `Case study`),
    ($.defaultProps = { height: 6264, width: 1200 }),
    b(
      $,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Geist`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Geist`,
              url: `https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_RruM4mJPby1QNtA.woff2`,
              weight: `500`,
            },
          ],
        },
        ...He,
        ...Xe,
        ...y(he),
        ...y(be),
        ...y(H),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = t.priority,
          i = S.get(rt(), n, r);
        return ie([() => S.get(st(fe(t.pathVariables, `hM9zdhcEx`)), n, r).preload(), () => i.preload()], t);
      },
    }),
    (lt = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerhM9zdhcEx`,
          slots: [],
          annotations: {
            framerAcceptsLayoutTemplate: `true`,
            framerContractVersion: `1`,
            framerImmutableVariables: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"sSQ2FO7A8":{"layout":["fixed","auto"]},"VvcllxGLg":{"layout":["fixed","auto"]}}}`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicHeight: `6264`,
            framerComponentViewportWidth: `true`,
            framerColorSyntax: `true`,
            framerAutoSizeImages: `true`,
            framerResponsiveScreen: `true`,
            framerIntrinsicWidth: `1200`,
            framerScrollSections: `false`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    });
})();
export { lt as __FramerMetadata__, $ as default, Qe as queryParamNames };
//# sourceMappingURL=UwL758ZbnRj3Vps1kacOH9WzoYuNAd_SBP83NOQdRG0.BWonyh4A.mjs.map
