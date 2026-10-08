import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  F as t,
  L as n,
  N as r,
  O as i,
  S as a,
  c as o,
  l as s,
  s as c,
  u as l,
  w as u,
  z as d,
} from "./react.CHR6xBda.mjs";
import { E as f, U as p, o as m } from "./framer.dKj5RJCl.mjs";
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
function _({ s: e = 14 }) {
  return s(`svg`, {
    width: e,
    height: e,
    viewBox: `0 0 14 14`,
    "aria-hidden": !0,
    children: s(`path`, { d: `M2 7h10M8 3l4 4-4 4`, stroke: `currentColor`, strokeWidth: `1.6`, fill: `none` }),
  });
}
function v({ color: e = `#4B3BFF`, size: t = 8, o: n = 1 }) {
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
function y(e) {
  let t = (e || `#ffffff`).replace(`#`, ``).slice(0, 6);
  return (
    (parseInt(t.slice(0, 2), 16) * 0.3 + parseInt(t.slice(2, 4), 16) * 0.59 + parseInt(t.slice(4, 6), 16) * 0.11) /
      255 <
    0.5
  );
}
function b(e, t) {
  let n = (e || `#ffffff`).replace(`#`, ``).slice(0, 6);
  return `rgba(${parseInt(n.slice(0, 2), 16)},${parseInt(n.slice(2, 4), 16)},${parseInt(n.slice(4, 6), 16)},${t})`;
}
function x({ pr: e, e: t, accent: n = `#4B3BFF`, labels: r = !0, gapPx: i = 70, active: a = -1 }) {
  let c = i * t,
    u = y(e.bg),
    d = u ? `rgba(255,255,255,.64)` : `rgba(0,0,0,.56)`,
    f = y(e.brand) ? `#fff` : `#111`,
    p = {
      position: `absolute`,
      background: u ? `rgba(30,31,34,.94)` : `#fff`,
      color: e.fg,
      borderRadius: 16,
      boxShadow: `0 ${18 + t * 24}px ${44 + t * 30}px -18px rgba(0,0,0,${0.34 + t * 0.16})`,
      border: u ? `1px solid rgba(255,255,255,.08)` : `1px solid rgba(0,0,0,.06)`,
      padding: `16px 18px`,
      fontFamily: C,
    },
    m = (e, i, o = {}) =>
      l(
        `div`,
        {
          style: {
            position: `absolute`,
            left: 0,
            top: 0,
            width: D,
            height: O,
            transform: `translateZ(${e * c}px)`,
            transformStyle: `preserve-3d`,
            ...o,
          },
          children: [
            i,
            r &&
              l(`div`, {
                style: {
                  position: `absolute`,
                  right: 976,
                  top: O - 26,
                  opacity: T(t * 1.6 - 0.3),
                  transform: `translateX(${(1 - t) * 10}px)`,
                  display: `flex`,
                  alignItems: `center`,
                  gap: 8,
                  whiteSpace: `nowrap`,
                },
                children: [
                  l(`div`, {
                    style: {
                      font: `500 15px/1 ${w}`,
                      color: `#fff`,
                      background: e === a ? `#0C0C0E` : n,
                      padding: `7px 10px`,
                      borderRadius: 5,
                      transition: `background .3s`,
                    },
                    children: [String(e + 1).padStart(2, `0`), ` `, k[e]],
                  }),
                  s(`div`, { style: { width: 26, height: 1.5, background: n } }),
                ],
              }),
            s(`div`, {
              style: {
                position: `absolute`,
                inset: -1,
                border: `1.5px solid ${n}`,
                opacity: T(t * 1.4) * (e === 0 ? 0 : e === a ? 1 : 0.45),
                borderRadius: 16,
                pointerEvents: `none`,
              },
            }),
          ],
        },
        e
      );
  return l(`div`, {
    style: { position: `absolute`, left: 0, top: 0, width: D, height: O, transformStyle: `preserve-3d` },
    children: [
      m(
        0,
        s(`div`, {
          style: {
            position: `absolute`,
            inset: 0,
            background: e.bg,
            borderRadius: 16,
            boxShadow: `0 ${30 + 60 * t}px ${70 + 80 * t}px -30px rgba(12,12,14,${0.34 + 0.22 * t})`,
            overflow: `hidden`,
          },
          children: s(`div`, {
            style: {
              position: `absolute`,
              right: -120,
              top: -140,
              width: 520,
              height: 520,
              borderRadius: 520,
              background: e.brand,
              opacity: u ? 0.16 : 0.22,
              filter: `blur(40px)`,
            },
          }),
        })
      ),
      m(
        1,
        s(`div`, {
          style: {
            position: `absolute`,
            inset: `0 48px`,
            display: `grid`,
            gridTemplateColumns: `repeat(12,1fr)`,
            gap: 20,
            opacity: 0.18 + 0.4 * T(t * 2 - 0.2),
          },
          children: Array.from({ length: 12 }).map((e, t) =>
            s(
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
        { opacity: T(t * 3) }
      ),
      m(
        2,
        s(`div`, {
          style: {
            position: `absolute`,
            left: 452,
            top: 104,
            width: 460,
            height: 448,
            borderRadius: 14,
            overflow: `hidden`,
            background: u ? `#222` : `#ddd`,
          },
          children:
            e.image && e.image.src
              ? s(`img`, {
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
        l(o, {
          children: [
            l(`div`, {
              style: { ...p, left: 380, top: 372, width: 268 },
              children: [
                l(`div`, {
                  style: { font: `500 12px/1 ${C}`, color: d, display: `flex`, justifyContent: `space-between` },
                  children: [
                    s(`span`, { children: e.client || e.name }),
                    s(`span`, {
                      style: { width: 8, height: 8, borderRadius: 8, background: e.brand, display: `inline-block` },
                    }),
                  ],
                }),
                s(`div`, {
                  style: { font: `600 26px/1.05 ${C}`, letterSpacing: `-0.035em`, marginTop: 12 },
                  children: e.cardA,
                }),
                s(`div`, { style: { font: `400 12px/1.35 ${C}`, color: d, marginTop: 6 }, children: e.cardASub }),
                s(`div`, {
                  style: {
                    marginTop: 14,
                    height: 36,
                    borderRadius: 9,
                    background: e.brand,
                    color: f,
                    display: `flex`,
                    alignItems: `center`,
                    justifyContent: `center`,
                    font: `600 13px/1 ${C}`,
                  },
                  children: `Continue`,
                }),
              ],
            }),
            l(`div`, {
              style: {
                ...p,
                left: 660,
                top: 132,
                padding: `11px 14px`,
                display: `flex`,
                alignItems: `center`,
                gap: 9,
                font: `500 13px/1 ${C}`,
                whiteSpace: `nowrap`,
              },
              children: [
                s(`span`, {
                  style: {
                    width: 20,
                    height: 20,
                    borderRadius: 20,
                    background: e.brand,
                    display: `inline-flex`,
                    alignItems: `center`,
                    justifyContent: `center`,
                    color: f,
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
        l(`div`, {
          style: { position: `absolute`, inset: 0, color: e.fg, fontFamily: C },
          children: [
            l(`div`, {
              style: {
                position: `absolute`,
                left: 48,
                top: 34,
                right: 48,
                display: `flex`,
                alignItems: `center`,
                gap: 26,
                font: `500 14px/1 ${C}`,
              },
              children: [
                l(`span`, {
                  style: {
                    font: `700 19px/1 ${C}`,
                    letterSpacing: `-0.03em`,
                    display: `flex`,
                    alignItems: `center`,
                    gap: 8,
                  },
                  children: [
                    s(`span`, { style: { width: 16, height: 16, borderRadius: 5, background: e.brand } }),
                    e.name,
                  ],
                }),
                s(`span`, { style: { marginLeft: `auto`, opacity: 0.7 }, children: `Product` }),
                s(`span`, { style: { opacity: 0.7 }, children: `Pricing` }),
                s(`span`, { style: { opacity: 0.7 }, children: `Stories` }),
                s(`span`, {
                  style: { padding: `10px 14px`, borderRadius: 9, background: e.fg, color: e.bg },
                  children: `Get started`,
                }),
              ],
            }),
            s(`div`, {
              style: {
                position: `absolute`,
                left: 48,
                top: 140,
                width: 380,
                font: `600 56px/0.96 ${C}`,
                letterSpacing: `-0.05em`,
                textWrap: `balance`,
              },
              children: e.headline,
            }),
            l(`div`, {
              style: {
                position: `absolute`,
                left: 48,
                top: 318,
                width: 300,
                font: `400 15px/1.45 ${C}`,
                opacity: 0.72,
              },
              children: [(e.summary || ``).split(/[,.;]/)[0], `.`],
            }),
          ],
        }),
        { background: t > 0.01 ? b(e.bg, 0.55 * T(t * 1.5)) : `transparent`, borderRadius: 16 }
      ),
      m(
        5,
        l(`svg`, {
          width: D,
          height: O,
          style: { position: `absolute`, left: 0, top: 0, overflow: `visible` },
          children: [
            [
              [48, 176, 48, 140, `36`],
              [452, 80, 452, 104, `24`],
              [428, 300, 452, 300, `24`],
              [648, 460, 660, 460, `12`],
            ].map((e, t) =>
              l(
                `g`,
                {
                  children: [
                    s(`line`, { x1: e[0], y1: e[1], x2: e[2], y2: e[3], stroke: `#FF3D6E`, strokeWidth: 1.4 }),
                    s(`rect`, {
                      x: (e[0] + e[2]) / 2 - 15,
                      y: (e[1] + e[3]) / 2 - 9,
                      width: 30,
                      height: 18,
                      rx: 4,
                      fill: `#FF3D6E`,
                    }),
                    s(`text`, {
                      x: (e[0] + e[2]) / 2,
                      y: (e[1] + e[3]) / 2 + 4,
                      textAnchor: `middle`,
                      fill: `#fff`,
                      style: { font: `500 11px ${w}` },
                      children: e[4],
                    }),
                  ],
                },
                t
              )
            ),
            s(`line`, {
              x1: 48,
              y1: 0,
              x2: 48,
              y2: O,
              stroke: `#FF3D6E`,
              strokeWidth: 0.9,
              strokeDasharray: `4 4`,
              opacity: 0.7,
            }),
            s(`line`, {
              x1: D - 48,
              y1: 0,
              x2: D - 48,
              y2: O,
              stroke: `#FF3D6E`,
              strokeWidth: 0.9,
              strokeDasharray: `4 4`,
              opacity: 0.7,
            }),
            l(`g`, {
              transform: `translate(${D - 70} 86)`,
              children: [
                s(`circle`, { cx: 0, cy: 0, r: 15, fill: `#FF5B24`, stroke: `#fff`, strokeWidth: 2.5 }),
                s(`text`, {
                  x: 0,
                  y: 4.5,
                  textAnchor: `middle`,
                  fill: `#fff`,
                  style: { font: `600 12px ${C}` },
                  children: `M`,
                }),
              ],
            }),
          ],
        }),
        { opacity: T(t * 2.2 - 0.2) }
      ),
    ],
  });
}
function S(e) {
  let n = A.cases[0],
    {
      name: a = n.name,
      sector: o = n.sector,
      year: c = n.year,
      summary: u = n.summary,
      headline: f = n.headline,
      bg: p = n.bg,
      fg: m = n.fg,
      brand: y = n.brand,
      cardTitle: b = n.cardA,
      cardDetail: S = n.cardASub,
      badge: k = n.cardB,
      index: j = ``,
      accent: M = `#4B3BFF`,
    } = e,
    N = typeof e.cover == `string` ? e.cover : e.cover && e.cover.src ? e.cover.src : n.coverUrl;
  h();
  let P = i(null),
    F = g(P, 640),
    [I, L] = t(!1),
    [R, z] = t(0);
  r(() => {
    if (d === void 0) return;
    let e = 0,
      t = performance.now(),
      n = R,
      r = I ? 0.55 : 0,
      i = () => {
        let a = T((performance.now() - t) / 700);
        z(n + (r - n) * E.io3(a)), a < 1 && (e = requestAnimationFrame(i));
      };
    return (e = requestAnimationFrame(i)), () => cancelAnimationFrame(e);
  }, [I]);
  let B = {
      name: a,
      client: a,
      summary: u,
      headline: f,
      bg: p,
      fg: m,
      brand: y,
      cardA: b,
      cardASub: S,
      cardB: k,
      image: { src: N, alt: a },
    },
    V = F / D;
  return l(`article`, {
    className: `lfcc`,
    onMouseEnter: () => L(!0),
    onMouseLeave: () => L(!1),
    style: {
      ...e.style,
      position: `relative`,
      width: `100%`,
      overflowX: `clip`,
      fontFamily: C,
      color: `#0C0C0E`,
      cursor: `pointer`,
    },
    children: [
      l(`div`, {
        style: {
          display: `flex`,
          justifyContent: `space-between`,
          font: `500 11px/1 ${w}`,
          color: `rgba(12,12,14,.5)`,
          marginBottom: 10,
        },
        children: [
          l(`span`, { children: [s(`span`, { style: { color: M }, children: `#` }), ` `, a, ` — Hero`] }),
          s(`span`, { children: I ? `Layers · 6` : `1920 × 1200` }),
        ],
      }),
      l(`div`, {
        ref: P,
        style: {
          position: `relative`,
          width: `100%`,
          aspectRatio: `${D} / ${O}`,
          perspective: 2200,
          perspectiveOrigin: `50% 10%`,
        },
        children: [
          s(`div`, {
            style: {
              position: `absolute`,
              left: 0,
              top: 0,
              width: D,
              height: O,
              transformOrigin: `0 0`,
              transform: `scale(${V})`,
            },
            children: s(`div`, {
              style: {
                position: `absolute`,
                inset: 0,
                transformStyle: `preserve-3d`,
                transformOrigin: `50% 50%`,
                transform: `translateY(${R * 40}px) rotateX(${R * 50}deg) rotateZ(${R * -28}deg) scale(${1 - R * 0.26})`,
              },
              children: s(x, { pr: B, e: R, accent: M, labels: !1, gapPx: 60 }),
            }),
          }),
          s(`div`, {
            style: { position: `absolute`, inset: -6, opacity: +!!I, transition: `opacity .3s`, pointerEvents: `none` },
            children: s(v, { color: M, size: 8, o: 1 - R * 1.6 }),
          }),
        ],
      }),
      l(`div`, {
        style: { display: `flex`, justifyContent: `space-between`, alignItems: `flex-start`, gap: 16, marginTop: 22 },
        children: [
          l(`div`, {
            children: [
              s(`h3`, {
                style: {
                  margin: 0,
                  font: `600 34px/1 ${C}`,
                  letterSpacing: `-.05em`,
                  color: I ? M : `#0C0C0E`,
                  transition: `color .3s`,
                },
                children: a,
              }),
              s(`p`, {
                style: { margin: `10px 0 0`, font: `400 16px/1.5 ${C}`, color: `rgba(12,12,14,.68)`, maxWidth: 480 },
                children: u,
              }),
            ],
          }),
          l(`div`, {
            style: { textAlign: `right`, flex: `none` },
            children: [
              l(`div`, {
                style: {
                  font: `500 11px/1.5 ${w}`,
                  letterSpacing: `.04em`,
                  textTransform: `uppercase`,
                  color: `rgba(12,12,14,.55)`,
                },
                children: [o, s(`br`, {}), c],
              }),
              s(`span`, {
                style: {
                  display: `inline-flex`,
                  marginTop: 10,
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  alignItems: `center`,
                  justifyContent: `center`,
                  background: I ? M : `rgba(12,12,14,.06)`,
                  color: I ? `#fff` : `#0C0C0E`,
                  transition: `background .3s,color .3s`,
                },
                children: s(_, {}),
              }),
            ],
          }),
        ],
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
  A,
  j = e(() => {
    n(),
      c(),
      u(),
      p(),
      (C = `Geist, 'Inter Display', Inter, system-ui, sans-serif`),
      (w = `'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace`),
      (T = (e, t = 0, n = 1) => Math.min(n, Math.max(t, e))),
      (E = {
        out: (e) => 1 - (1 - e) ** 4,
        inOut: (e) => (e < 0.5 ? 8 * e * e * e * e : 1 - (-2 * e + 2) ** 4 / 2),
        io3: (e) => (e < 0.5 ? 4 * e * e * e : 1 - (-2 * e + 2) ** 3 / 2),
      }),
      (D = 960),
      (O = 600),
      (k = [`Background`, `Layout grid`, `Hero image`, `UI cards`, `Type`, `Redlines`]),
      (A = {
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
      f(S, {
        name: { type: m.String, defaultValue: `Orrin` },
        sector: { type: m.String, defaultValue: `Fintech` },
        year: { type: m.String, defaultValue: `2026` },
        summary: { type: m.String, displayTextArea: !0, defaultValue: `Payroll for freelancers.` },
        headline: { type: m.String, defaultValue: `Pay your freelancers in one tap.` },
        bg: { type: m.Color, title: `Background`, defaultValue: `#111214` },
        fg: { type: m.Color, title: `Foreground`, defaultValue: `#F4F4F0` },
        brand: { type: m.Color, title: `Brand`, defaultValue: `#C8F25A` },
        cardTitle: { type: m.String, title: `Card title`, defaultValue: `€12,480.00` },
        cardDetail: { type: m.String, title: `Card detail`, defaultValue: `Pay run ready · 14 people` },
        badge: { type: m.String, defaultValue: `Invoice #0142 paid` },
        cover: { type: m.ResponsiveImage, title: `Cover` },
        index: { type: m.String, defaultValue: `` },
        accent: { type: m.Color, title: `Selection`, defaultValue: `#4B3BFF` },
      });
  });
export { j as n, S as t };
//# sourceMappingURL=LayerfolioCaseCard.Cb5dR2-h.mjs.map
