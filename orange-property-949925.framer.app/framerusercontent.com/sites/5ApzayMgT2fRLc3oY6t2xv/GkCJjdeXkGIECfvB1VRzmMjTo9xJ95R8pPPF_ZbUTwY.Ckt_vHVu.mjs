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
  a as ee,
  c as l,
  j as te,
  l as u,
  o as d,
  s as ne,
  u as f,
  w as re,
  y as ie,
  z as p,
} from "./react.CHR6xBda.mjs";
import { a as ae, r as oe, t as se, x as m } from "./motion.De9yD8td.mjs";
import {
  E as h,
  L as g,
  R as ce,
  T as le,
  U as ue,
  Y as de,
  Z as _,
  _t as v,
  a as y,
  b,
  ct as fe,
  d as pe,
  dt as me,
  ft as x,
  gt as he,
  h as ge,
  i as S,
  k as _e,
  lt as ve,
  n as ye,
  o as C,
  ot as be,
  p as w,
  pt as xe,
  rt as T,
  st as Se,
  w as E,
  y as Ce,
} from "./framer.dKj5RJCl.mjs";
import { i as D, n as we, r as O, t as k } from "./MG0afWxxR.fLuX1diM.mjs";
import { n as A, t as Te } from "./LayerfolioAbout.Cg0zpMFm.mjs";
import { n as Ee, t as De } from "./LayerfolioFAQ.bBGt6o14.mjs";
import { a as Oe, c as ke, i as Ae, n as je, o as Me, r as Ne, s as Pe, t as Fe } from "./DXBcJdPa7.B57IyCzq.mjs";
import { n as Ie, t as j } from "./LayerfolioNumbers.CvciZhaS.mjs";
import { n as Le, t as Re } from "./LayerfolioPlayground.DDAJPmx5.mjs";
import { n as ze, t as M } from "./LayerfolioProcess.BXK22j4v.mjs";
import { i as Be, n as Ve, r as He, t as Ue } from "./wfYBJOrXB.JqagdLZA.mjs";
import { n as We, t as Ge } from "./LayerfolioServices.DKnfl_1V.mjs";
import { n as Ke, t as qe } from "./LayerfolioTicker.Ct6qWf3X.mjs";
import { i as N, t as Je } from "./OFjtzps4o.FJ9FaWY5.mjs";
import { a as P, c as F, i as I, n as Ye, o as Xe, r as Ze, s as Qe, t as $e } from "./RKf16m7gj.hzAw1-e7.mjs";
import { i as et, n as L, r as tt, t as nt } from "./wt0cdVoay.DMfFVmAe.mjs";
import { n as rt, r as it } from "./augiA20Il.BrrtdOwh.mjs";
function at() {
  i(() => {
    if (typeof document > `u` || document.getElementById(`lf-fonts`)) return;
    let e = document.createElement(`link`);
    (e.id = `lf-fonts`),
      (e.rel = `stylesheet`),
      (e.href = `https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap`),
      document.head.appendChild(e);
  }, []);
}
async function ot(e, t) {
  try {
    let n = await import(`./opentype.js@1.3.ChUACt7h.mjs`),
      r = n.default || n,
      i = await (await fetch(t)).arrayBuffer(),
      a = r.parse(i),
      o = a.unitsPerEm,
      s = -0.05,
      c = (e) => Math.round(e * 10) / 10,
      ee = 0,
      l = null,
      te = [];
    for (let t of e) {
      let e = a.charToGlyph(t);
      l && (ee += (a.getKerningValue(l, e) / o) * 1e3);
      let n = e.getPath(ee, 0, 1e3),
        r = ``,
        i = 0,
        u = 0,
        d = [];
      for (let e of n.commands)
        e.type === `M`
          ? ((r += `M${c(e.x)} ${c(e.y)}`), d.push([c(e.x), c(e.y), 0]))
          : e.type === `L`
            ? ((r += `L${c(e.x)} ${c(e.y)}`), d.push([c(e.x), c(e.y), 0]))
            : e.type === `Q`
              ? ((r += `Q${c(e.x1)} ${c(e.y1)} ${c(e.x)} ${c(e.y)}`),
                d.push([c(e.x1), c(e.y1), 1, c(i), c(u), c(e.x), c(e.y)]),
                d.push([c(e.x), c(e.y), 0]))
              : e.type === `C`
                ? ((r += `C${c(e.x1)} ${c(e.y1)} ${c(e.x2)} ${c(e.y2)} ${c(e.x)} ${c(e.y)}`),
                  d.push([c(e.x), c(e.y), 0]))
                : e.type === `Z` && (r += `Z`),
          e.x !== void 0 && ((i = e.x), (u = e.y));
      r && te.push({ ch: t, d: r, x: c(ee), w: c((e.advanceWidth / o) * 1e3), pts: d }),
        (ee += (e.advanceWidth / o) * 1e3 + s * 1e3),
        (l = e);
    }
    return { text: e, width: c(ee - s * 1e3), cap: gt.cap, glyphs: te };
  } catch {
    return null;
  }
}
function st({ x: e, y: t, color: n, label: r, o: i = 1, pen: a = !1 }) {
  return f(`div`, {
    style: {
      position: `absolute`,
      left: e,
      top: t,
      opacity: i,
      pointerEvents: `none`,
      zIndex: 30,
      willChange: `transform`,
    },
    children: [
      a
        ? f(`svg`, {
            width: `22`,
            height: `22`,
            viewBox: `0 0 22 22`,
            style: { position: `absolute`, left: -3, top: -3, filter: `drop-shadow(0 2px 3px rgba(0,0,0,.18))` },
            children: [
              u(`path`, {
                d: `M3 3 L9 17 L11.5 11.5 L17 9 Z`,
                fill: `#fff`,
                stroke: n,
                strokeWidth: `1.6`,
                strokeLinejoin: `round`,
              }),
              u(`circle`, { cx: `10`, cy: `10`, r: `1.6`, fill: n }),
            ],
          })
        : u(`svg`, {
            width: `20`,
            height: `22`,
            viewBox: `0 0 20 22`,
            style: { position: `absolute`, left: -2, top: -2, filter: `drop-shadow(0 2px 3px rgba(0,0,0,.2))` },
            children: u(`path`, {
              d: `M2.5 2.5 L2.5 18 L7 13.8 L10.2 20.4 L13 19.1 L9.9 12.6 L16 12.3 Z`,
              fill: n,
              stroke: `#fff`,
              strokeWidth: `1.4`,
              strokeLinejoin: `round`,
            }),
          }),
      u(`div`, {
        style: {
          position: `absolute`,
          left: 14,
          top: 17,
          background: n,
          color: `#fff`,
          font: `500 11px/1 ${H}`,
          letterSpacing: `-0.01em`,
          padding: `5px 7px`,
          borderRadius: `3px 8px 8px 8px`,
          whiteSpace: `nowrap`,
          boxShadow: `0 4px 10px rgba(0,0,0,.12)`,
        },
        children: r,
      }),
    ],
  });
}
function ct({ x: e, y: t, text: n, color: r, o: i, dy: a, icon: o = `diamond`, ax: s = 0 }) {
  return f(`div`, {
    style: {
      position: `absolute`,
      left: e,
      top: t,
      opacity: i,
      transform: `translate(${-s * 100}%, ${a}px)`,
      display: `flex`,
      alignItems: `center`,
      gap: 7,
      font: `500 11px/1 ${V}`,
      letterSpacing: `0.04em`,
      textTransform: `uppercase`,
      color: r,
      whiteSpace: `nowrap`,
    },
    children: [
      o === `diamond`
        ? f(`svg`, {
            width: `10`,
            height: `10`,
            viewBox: `0 0 10 10`,
            children: [
              u(`path`, { d: `M5 0.8 L9.2 5 L5 9.2 L0.8 5 Z`, fill: `none`, stroke: r, strokeWidth: `1.3` }),
              u(`path`, { d: `M5 3 L7 5 L5 7 L3 5 Z`, fill: r }),
            ],
          })
        : u(`span`, {
            style: {
              width: 7,
              height: 7,
              borderRadius: 9,
              background: `#19C37D`,
              boxShadow: `0 0 0 3px rgba(25,195,125,.18)`,
            },
          }),
      n,
    ],
  });
}
function lt(e) {
  let {
      name: t = `Noor Castell`,
      statementMuted: r = `Product designer in Rotterdam.`,
      statement: o = `I turn complicated workflows into software people actually keep open.`,
      currentRole: c = `Design lead at Orrin`,
      availability: d = `Booking projects from November`,
      primaryLabel: ne = `See selected work`,
      primaryLink: re = `#work`,
      secondaryLabel: ie = `Book a 20-min intro`,
      secondaryLink: ae = `/contact`,
      photo: oe = {
        src: `https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=900&q=80&auto=format&fit=crop`,
        alt: `Noor sketching interface ideas on a tablet`,
      },
      photoName: se = `at-the-desk.jpg`,
      accent: m = `#4B3BFF`,
      ink: h = `#0C0C0E`,
      canvas: g = `#ECECE8`,
      commentAuthor: ce = `Mara · PM`,
      commentText: le = `Can the name go bigger? It's the first thing a client reads.`,
      replyAuthor: ue = `Theo · Eng`,
      replyText: de = `Bumped it to 208. Shipping.`,
      projectName: _ = `Orrin`,
      projectAmount: v = `€12,480.00`,
      fontUrl: y = `https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_RQuQ4nQ.ttf`,
      previewTime: b = -1,
      previewScroll: fe = -1,
      showToolbar: pe = !1,
    } = e,
    me = e.fills && e.fills.length ? e.fills : Ct;
  at();
  let x = ve(),
    he = te(() => `lf` + Math.random().toString(36).slice(2, 8), []),
    ge = a(null),
    S = b >= 0 || x,
    [_e, ye] = n(() => ({ t: b >= 0 ? b : x ? 12 : 0, p: fe >= 0 ? fe : 0 })),
    [C, be] = n({ w: _t, h: vt }),
    [w, xe] = n(null),
    [T, Se] = n(() => (gt.text, gt)),
    [E, Ce] = n(t === gt.text);
  i(() => {
    if (t === gt.text) {
      Se(gt), Ce(!0);
      return;
    }
    Ce(!1);
    let e = !1;
    return (
      ot(t, y).then((t) => {
        !e && t && (Se(t), Ce(!0));
      }),
      () => {
        e = !0;
      }
    );
  }, [t, y]),
    s(() => {
      let e = ge.current;
      if (!e) return;
      let t = () => {
        let t = e.offsetWidth,
          n = e.offsetHeight;
        t > 2 && n > 2 && be((e) => (e.w === t && e.h === n ? e : { w: t, h: n }));
      };
      if ((t(), typeof ResizeObserver > `u`)) return;
      let n = new ResizeObserver(t);
      return n.observe(e), () => n.disconnect();
    }, []),
    i(() => {
      if (S || p === void 0) return;
      let e = p.matchMedia && p.matchMedia(`(prefers-reduced-motion: reduce)`).matches,
        t = 0,
        n = performance.now() - (e ? xt * 1e3 : 0),
        r = !0,
        i =
          typeof IntersectionObserver < `u`
            ? new IntersectionObserver((e) => {
                r = e[0].isIntersecting;
              })
            : null;
      i && ge.current && i.observe(ge.current);
      let a = () => {
        t = requestAnimationFrame(a);
        let i = (performance.now() - n) / 1e3;
        if (!r && i > xt) return;
        let o = ge.current,
          s = 0;
        if (o) {
          let e = o.getBoundingClientRect();
          s = bt(-e.top / Math.max(1, e.height));
        }
        ye((t) => (e && t.p === s && i > 13.4 ? t : { t: i, p: s }));
      };
      return (
        (t = requestAnimationFrame(a)),
        () => {
          cancelAnimationFrame(t), i && i.disconnect();
        }
      );
    }, [S]),
    i(() => {
      if (p === void 0) return;
      let e = p;
      (e.__layerfolio = e.__layerfolio || {}),
        (e.__layerfolio.hero = {
          ready: Promise.resolve(!0),
          render: (e, t = 0, n, r) =>
            ee(() => {
              ye({ t: e, p: t }),
                n !== void 0 && r !== void 0 && n >= 0 ? xe({ x: n, y: r }) : n !== void 0 && xe(null);
            }),
        });
    }, []);
  let { t: D, p: we } = _e,
    O = C.w < 900,
    k = O ? 420 : _t,
    A = O ? 860 : vt,
    Te = C.h - 56,
    Ee = O ? Math.min(C.w / k, Math.max(0.5, C.h / A)) : Math.min(C.w / _t, Math.max(0.3, C.h / vt)),
    De = (C.w - k * Ee) / 2,
    Oe = 56 + Math.max(0, (Te - (A - 56) * Ee) / 2) - 56 * Ee,
    ke = (e, t) => ({ x: (e - De) / Ee, y: (t - Oe) / Ee }),
    Ae = [];
  {
    let e = 0,
      n = 0,
      r = Array.from(t);
    for (let t = 0; t < r.length && n < T.glyphs.length; t++) {
      if (r[t] === ` `) {
        O && e++;
        continue;
      }
      T.glyphs[n] && T.glyphs[n].ch === r[t] && ((Ae[n] = e), n++);
    }
    for (; n < T.glyphs.length; n++) Ae[n] = e;
  }
  let je = Math.max(1, ...Ae.map((e) => e + 1)),
    Me = [],
    Ne = [];
  T.glyphs.forEach((e, t) => {
    let n = Ae[t];
    (Me[n] = Math.min(Me[n] ?? 1e9, e.x)), (Ne[n] = Math.max(Ne[n] ?? -1e9, e.x + e.w));
  });
  let Pe = Me.map((e, t) => Ne[t] - e),
    Fe = Math.max(1, ...Pe),
    Ie = O ? Math.min(124, (350 * 1e3) / Fe) : yt,
    j = Ie / 1e3,
    Le = T.cap * j + Ie * 0.2,
    Re = T.glyphs.map((e, t) => -Me[Ae[t]] + (Fe - Pe[Ae[t]]) / 2),
    ze = T.glyphs.map((e, t) => Ae[t] * Le),
    M = B(1, 1.04, R.inOut(z(D, 7.5, 8.5))),
    Be = Fe * j,
    Ve = k / 2 - Be / 2,
    He = O ? 196 : 232,
    Ue = He + T.cap * j,
    We = (e) => Ve + Re[e] * j,
    Ge = (e) => Ue + ze[e],
    Ke = O ? 10 : 14,
    qe = T.cap * j + (je - 1) * Le,
    N = { x: Ve - Ke, y: He - 26, w: Be + Ke * 2, h: qe + 26 + 22 },
    Je = N.x + N.w / 2,
    P = N.y + N.h / 2,
    F = { x: Je - (N.w * M) / 2, y: P - (N.h * M) / 2, w: N.w * M, h: N.h * M },
    I = -we * 50,
    Ye = T.glyphs.length,
    Xe = 0.35,
    Ze = Math.min(0.17, 1.9 / Math.max(1, Ye)),
    Qe = 0.75,
    $e = Xe + Ze * (Ye - 1) + Qe,
    et = $e - 0.35,
    L = $e + 0.35,
    tt = R.expo(z(D, L - 0.1, L + 0.45)),
    nt = 1 - z(D, L - 0.2, L + 0.3),
    rt = (e) => {
      let t = R.out(z(D, e, e + 0.8));
      return { o: t, dy: (1 - t) * 16, blur: (1 - t) * 6 };
    },
    it = D < $e ? `pen` : D > 4.7 && D < 5.4 ? `comment` : D > 7.3 && D < 8.6 ? `scale` : `move`,
    lt = null,
    St = -1;
  T.glyphs.forEach((e, t) => {
    let n = Xe + t * Ze,
      r = z(D, n, n + Qe);
    if (r > 0 && r < 1) {
      St = t;
      let n = e.pts.filter((e) => e[2] === 0),
        i = n[Math.min(n.length - 1, Math.floor(r * n.length))];
      lt = { x: We(t) + i[0] * j, y: Ge(t) + i[1] * j };
    }
  });
  let Dt = { x: N.x + N.w - (O ? 40 : 150), y: N.y + 30 },
    Ot = R.inOut(z(D, 3.9, 5)),
    kt = Math.max(0, D - 6.4),
    At = O
      ? {
          mS: { x: 470, y: 420 },
          mI: { x: 318, y: N.y + N.h + 230 },
          tS: { x: 180, y: 940 },
          tI: { x: 70, y: N.y + N.h + 250 },
        }
      : { mS: { x: 1520, y: 520 }, mI: { x: 1296, y: 470 }, tS: { x: 1040, y: 980 }, tI: { x: 1060, y: 560 } },
    jt = { x: B(At.mS.x, Dt.x + 6, Ot), y: B(At.mS.y, Dt.y + 4, Ot) };
  if (D > 6.4) {
    let e = R.inOut(z(D, 6.4, 7.4));
    jt = {
      x: B(Dt.x + 6, At.mI.x, e) + Math.sin(kt * 0.9) * 10 * e,
      y: B(Dt.y + 4, At.mI.y, e) + Math.cos(kt * 0.7) * 8 * e,
    };
  }
  let Mt = { x: F.x + F.w, y: F.y + F.h },
    Nt = R.inOut(z(D, 6.3, 7.35)),
    Pt = { x: B(At.tS.x, N.x + N.w, Nt), y: B(At.tS.y, N.y + N.h, Nt) };
  D > 7.35 && (Pt = { x: Mt.x, y: Mt.y });
  let Ft = { x: F.x + (O ? 60 : 170), y: P + 6 },
    It = { x: F.x + F.w - (O ? 70 : 190), y: P - 10 };
  if (D > 8.8) {
    let e = R.inOut(z(D, 8.8, 9.7));
    Pt = { x: B(Mt.x, Ft.x, e), y: B(Mt.y, Ft.y, e) };
  }
  if (D > 9.7) {
    let e = R.inOut(z(D, 9.7, 11.5));
    Pt = { x: B(Ft.x, It.x, e), y: Ft.y + (It.y - Ft.y) * e + Math.sin(e * Math.PI) * -28 };
  }
  if (D > 11.5) {
    let e = R.inOut(z(D, 11.5, 12.4)),
      t = Math.max(0, D - 12.4);
    Pt = { x: B(It.x, At.tI.x, e) + Math.sin(t * 0.8 + 1) * 9 * e, y: B(It.y, At.tI.y, e) + Math.cos(t * 0.6) * 7 * e };
  }
  let Lt = D > 9.45 && D < 11.9 ? Math.min(R.out(z(D, 9.45, 9.95)), 1 - R.inOut(z(D, 11.3, 11.9))) : 0,
    U = D > 4.95 && D < 5.25 ? 1 - Math.abs(D - 5.1) / 0.15 : 0,
    W = R.back(z(D, 5.05, 5.45)),
    Rt = Math.floor(z(D, 5.3, 6.4) * le.length),
    G = R.back(z(D, 8.7, 9.1)),
    K = R.inOut(z(D, 10.4, 10.9)),
    q = R.out(we),
    zt = q * 340,
    Bt = O ? N.y + N.h + 44 : 462,
    J = O ? Bt + 118 : 578,
    Y = O ? { x: 24, y: J + 128, w: 172, h: 124 } : { x: 304, y: 664, w: 208, h: 148 },
    Vt = O ? { x: 218, y: J + 120, sc: 0.86 } : { x: 930, y: 648, sc: 1 },
    Ht = [
      { id: `name`, x: F.x, y: F.y + I, w: F.w, h: F.h, label: `Name / vector` },
      { id: `statement`, x: O ? 20 : 300, y: Bt - 12, w: O ? 380 : 840, h: 90, label: `Statement` },
      { id: `cta`, x: O ? 20 : 506, y: J - 4, w: O ? 380 : 428, h: 48, label: `Buttons` },
      { id: `photo`, x: Y.x - q * 260, y: Y.y - q * 60, w: Y.w, h: Y.h, label: se },
      { id: `card`, x: Vt.x + q * 300, y: Vt.y - q * 120, w: 206 * Vt.sc, h: 176 * Vt.sc, label: `Now: ${_}` },
    ],
    X = w ? ke(w.x, w.y) : null,
    Z = X && D > xt - 1 ? Ht.find((e) => X.x >= e.x && X.x <= e.x + e.w && X.y >= e.y && X.y <= e.y + e.h) : void 0,
    Ut = a({ r: 0, x: 720, y: 300 }),
    Wt =
      Z && Z.id === `name` && X
        ? { r: 150, x: X.x, y: X.y }
        : Lt > 0
          ? { r: 150 * Lt, x: Pt.x, y: Pt.y + I - 8 }
          : { r: 0, x: Ut.current.x, y: Ut.current.y };
  if (S || Lt > 0) Ut.current = { ...Wt };
  else {
    let e = Ut.current;
    (e.r += (Wt.r - e.r) * 0.16), (e.x += (Wt.x - e.x) * 0.3), (e.y += (Wt.y - e.y) * 0.3);
  }
  let Gt = Ut.current,
    Kt = Math.floor(D / 1.4) % me.length,
    qt = a({ x: 0, y: 0 }),
    Jt = X && !S ? { x: (X.x - 720) / 720, y: (X.y - 450) / 450 } : { x: 0, y: 0 };
  S
    ? (qt.current = Jt)
    : ((qt.current.x += (Jt.x - qt.current.x) * 0.08), (qt.current.y += (Jt.y - qt.current.y) * 0.08));
  let Yt = (e) => `translate(${-qt.current.x * e}px, ${-qt.current.y * e}px)`,
    Xt = [];
  if (Z) {
    let e = Z,
      t = Ht.filter((t) => t !== e),
      n = (e, t, n, r) => Math.min(t, r) - Math.max(e, n) > 0,
      r = e.y + e.h / 2,
      i = e.x + e.w / 2,
      a = 20,
      o = k,
      s = 56,
      c = A;
    for (let r of t)
      n(e.y, e.y + e.h, r.y, r.y + r.h) &&
        (r.x + r.w <= e.x && (a = Math.max(a, r.x + r.w)), r.x >= e.x + e.w && (o = Math.min(o, r.x))),
        n(e.x, e.x + e.w, r.x, r.x + r.w) &&
          (r.y + r.h <= e.y && (s = Math.max(s, r.y + r.h)), r.y >= e.y + e.h && (c = Math.min(c, r.y)));
    Xt.push({ x1: a, y1: r, x2: e.x, y2: r, v: e.x - a }),
      Xt.push({ x1: e.x + e.w, y1: r, x2: o, y2: r, v: o - e.x - e.w }),
      Xt.push({ x1: i, y1: s, x2: i, y2: e.y, v: e.y - s }),
      Xt.push({ x1: i, y1: e.y + e.h, x2: i, y2: c, v: c - e.y - e.h });
  }
  let Q = Z || (D > L ? Ht[0] : null),
    Zt = (e) => Math.round(e).toString(),
    Qt = (e) => {
      if (S) return;
      let t = ge.current.getBoundingClientRect();
      xe({ x: e.clientX - t.left, y: e.clientY - t.top });
    },
    $t = rt(L + 0.05),
    en = rt(L + 0.2),
    tn = rt(L + 0.35),
    nn = rt(L + 0.5),
    rn = rt(L + 0.62),
    an = R.expo(z(D, L + 0.1, L + 1)),
    on = R.expo(z(D, 0, 0.6)),
    sn = R.out(z(D, 0, 0.5)),
    cn = D > L ? { a: F.x, b: F.x + F.w, c: F.y + I, d: F.y + F.h + I } : null,
    ln = X,
    $ = `rgba(12,12,14,0.10)`,
    un = {
      position: `absolute`,
      background: `rgba(255,255,255,0.82)`,
      backdropFilter: `blur(14px) saturate(1.4)`,
      WebkitBackdropFilter: `blur(14px) saturate(1.4)`,
      border: `1px solid ${$}`,
      borderRadius: 12,
      boxShadow: `0 1px 0 rgba(255,255,255,.8) inset, 0 18px 40px -18px rgba(12,12,14,.28), 0 2px 6px rgba(12,12,14,.05)`,
      overflow: `hidden`,
    },
    dn = [
      { ic: `frame`, n: `Home — Desktop`, d: 0, on: D < Xe },
      { ic: `vector`, n: `${t}`, d: 1, on: Z ? Z.id === `name` : D >= Xe && D < xt },
      { ic: `text`, n: `Statement`, d: 1, on: Z?.id === `statement` },
      { ic: `comp`, n: `Buttons`, d: 1, on: Z?.id === `cta` },
      { ic: `image`, n: se, d: 1, on: Z?.id === `photo` },
      { ic: `comp`, n: `Now: ${_}`, d: 1, on: Z?.id === `card` },
      { ic: `comment`, n: `Comment \xb7 ${ce.split(` `)[0]}`, d: 1, on: !Z && D > 5 && D < 6.4 },
    ];
  return f(`div`, {
    ref: ge,
    onPointerMove: Qt,
    onPointerLeave: () => !S && xe(null),
    style: {
      ...e.style,
      position: `relative`,
      width: `100%`,
      height: `100%`,
      minHeight: 560,
      overflow: `hidden`,
      background: g,
      cursor: S ? `default` : `none`,
      fontFamily: H,
      color: h,
      userSelect: `none`,
    },
    children: [
      u(`div`, {
        "aria-hidden": !0,
        style: {
          position: `absolute`,
          inset: 0,
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(12,12,14,0.16) 1px, transparent 1.2px)`,
          backgroundSize: `${24 * Ee * (1 - q * 0.12)}px ${24 * Ee * (1 - q * 0.12)}px`,
          backgroundPosition: `${De}px ${Oe - we * 40}px`,
          opacity: 0.9,
        },
      }),
      u(`div`, {
        "aria-hidden": !0,
        style: {
          position: `absolute`,
          inset: 0,
          background: `radial-gradient(1200px 520px at 50% 34%, rgba(255,255,255,0.75), rgba(255,255,255,0) 70%)`,
        },
      }),
      f(`div`, {
        style: {
          position: `absolute`,
          left: De,
          top: Oe,
          width: k,
          height: A,
          transform: `scale(${Ee})`,
          transformOrigin: `0 0`,
        },
        children: [
          f(`div`, {
            style: {
              position: `absolute`,
              inset: 0,
              transform: `translateY(${-we * 30}px) scale(${1 - q * 0.1})`,
              transformOrigin: `50% 40%`,
            },
            children: [
              f(`div`, {
                style: {
                  position: `absolute`,
                  left: O ? 20 : 44,
                  top: 84,
                  font: `500 11px/1 ${V}`,
                  color: `rgba(12,12,14,.5)`,
                  letterSpacing: `0.02em`,
                  opacity: sn,
                  display: `flex`,
                  gap: 10,
                },
                children: [
                  u(`span`, { style: { color: m }, children: `#` }),
                  ` Home — `,
                  O ? `Phone` : `Desktop`,
                  ` `,
                  u(`span`, { style: { opacity: 0.6 }, children: O ? `390 × 844` : `1440 × 900` }),
                ],
              }),
              u(ct, { x: N.x + 2, y: N.y - (O ? 56 : 34), text: c, color: m, o: $t.o, dy: $t.dy + I }),
              u(ct, {
                x: O ? N.x + 2 : N.x + N.w - 2,
                ax: +!O,
                y: N.y - 34,
                text: d,
                color: `rgba(12,12,14,.62)`,
                o: $t.o,
                dy: $t.dy + I,
                icon: `dot`,
              }),
              f(`div`, {
                style: { position: `absolute`, left: 0, top: I, width: k, height: A, pointerEvents: `none` },
                children: [
                  u(`h1`, {
                    style: {
                      position: `absolute`,
                      left: Ve,
                      top: He - Ie * 0.2,
                      width: O ? Be : void 0,
                      margin: 0,
                      font: `600 ${Ie}px/${O ? 1 : 1.2} ${H}`,
                      letterSpacing: `-0.05em`,
                      textAlign: `center`,
                      whiteSpace: O ? `normal` : `nowrap`,
                      color: E ? `transparent` : h,
                      transform: `scale(${M})`,
                      transformOrigin: `${Je - Ve}px ${P - He + Ie * 0.2}px`,
                    },
                    children: t,
                  }),
                  E &&
                    f(`svg`, {
                      width: k,
                      height: A,
                      viewBox: `0 0 ${k} ${A}`,
                      style: { position: `absolute`, left: 0, top: 0, overflow: `visible` },
                      "aria-hidden": !0,
                      children: [
                        f(`g`, {
                          transform: `translate(${Je} ${P}) scale(${M}) translate(${-Je} ${-P})`,
                          children: [
                            f(`defs`, {
                              children: [
                                u(`clipPath`, {
                                  id: `${he}-clip`,
                                  children: T.glyphs.map((e, t) =>
                                    u(`path`, { d: e.d, transform: `translate(${We(t)} ${Ge(t)}) scale(${j})` }, t)
                                  ),
                                }),
                                f(`radialGradient`, {
                                  id: `${he}-rg`,
                                  children: [
                                    u(`stop`, { offset: `0.72`, stopColor: `#fff` }),
                                    u(`stop`, { offset: `1`, stopColor: `#fff`, stopOpacity: `0` }),
                                  ],
                                }),
                                u(`mask`, {
                                  id: `${he}-mask`,
                                  maskUnits: `userSpaceOnUse`,
                                  x: -2e3,
                                  y: -3e3,
                                  width: 12e3,
                                  height: 6e3,
                                  children: u(`circle`, {
                                    cx: Je + (Gt.x - Je) / M,
                                    cy: P + (Gt.y - I - P) / M,
                                    r: Gt.r / M,
                                    fill: `url(#${he}-rg)`,
                                  }),
                                }),
                              ],
                            }),
                            f(`g`, {
                              children: [
                                T.glyphs.map((e, t) => {
                                  let n = Xe + t * Ze,
                                    r = R.inOut(z(D, n, n + Qe)),
                                    i = R.out(z(D, et + t * 0.03, L + t * 0.03));
                                  return f(
                                    `g`,
                                    {
                                      transform: `translate(${We(t)} ${Ge(t)}) scale(${j})`,
                                      children: [
                                        u(`path`, { d: e.d, fill: h, fillOpacity: i, stroke: `none` }),
                                        r > 0 &&
                                          i < 1 &&
                                          u(`path`, {
                                            d: e.d,
                                            fill: `none`,
                                            stroke: m,
                                            strokeWidth: 1.6 / j,
                                            pathLength: 1,
                                            strokeDasharray: `1 1`,
                                            strokeDashoffset: 1 - r,
                                            style: { opacity: 1 - i },
                                          }),
                                      ],
                                    },
                                    t
                                  );
                                }),
                                Gt.r > 1 &&
                                  u(`g`, {
                                    clipPath: `url(#${he}-clip)`,
                                    children: f(`g`, {
                                      mask: `url(#${he}-mask)`,
                                      children: [
                                        me.map((e, t) =>
                                          u(
                                            `image`,
                                            {
                                              href: e.src,
                                              x: N.x,
                                              y: N.y,
                                              width: N.w,
                                              height: N.h,
                                              preserveAspectRatio: `xMidYMid slice`,
                                              opacity: +(t === Kt),
                                            },
                                            t
                                          )
                                        ),
                                        u(`rect`, { x: N.x, y: N.y, width: N.w, height: N.h, fill: h, opacity: 0.18 }),
                                      ],
                                    }),
                                  }),
                              ],
                            }),
                            Gt.r > 1 &&
                              u(`circle`, {
                                cx: Je + (Gt.x - Je) / M,
                                cy: P + (Gt.y - I - P) / M,
                                r: (Gt.r / M) * 0.86,
                                fill: `none`,
                                stroke: m,
                                strokeWidth: 1,
                                strokeDasharray: `3 4`,
                                opacity: 0.55,
                              }),
                            nt > 0 &&
                              u(`g`, {
                                style: { opacity: nt },
                                children: T.glyphs.map((e, t) => {
                                  let n = Xe + t * Ze,
                                    r = z(D, n, n + Qe);
                                  if (r <= 0) return null;
                                  let i = e.pts.filter((e) => e[2] === 0),
                                    a = Math.ceil(r * i.length),
                                    o = [];
                                  t === St &&
                                    e.pts
                                      .filter((e) => e[2] === 1)
                                      .slice(0, Math.ceil(r * e.pts.filter((e) => e[2] === 1).length))
                                      .slice(-6)
                                      .forEach((e, n) => {
                                        let r = We(t) + e[0] * j,
                                          i = Ge(t) + e[1] * j;
                                        o.push(
                                          u(
                                            `line`,
                                            {
                                              x1: We(t) + e[3] * j,
                                              y1: Ge(t) + e[4] * j,
                                              x2: r,
                                              y2: i,
                                              stroke: m,
                                              strokeWidth: 0.8,
                                              opacity: 0.7,
                                            },
                                            `hl` + n
                                          )
                                        ),
                                          o.push(
                                            u(
                                              `line`,
                                              {
                                                x1: r,
                                                y1: i,
                                                x2: We(t) + e[5] * j,
                                                y2: Ge(t) + e[6] * j,
                                                stroke: m,
                                                strokeWidth: 0.8,
                                                opacity: 0.7,
                                              },
                                              `hm` + n
                                            )
                                          ),
                                          o.push(
                                            u(
                                              `circle`,
                                              { cx: r, cy: i, r: 2.6, fill: `#fff`, stroke: m, strokeWidth: 1 },
                                              `hc` + n
                                            )
                                          );
                                      });
                                  for (let e = 0; e < a; e++) {
                                    let n = i[e],
                                      r = t === St && e === a - 1;
                                    o.push(
                                      u(
                                        `rect`,
                                        {
                                          x: We(t) + n[0] * j - (r ? 3.5 : 2.5),
                                          y: Ge(t) + n[1] * j - (r ? 3.5 : 2.5),
                                          width: r ? 7 : 5,
                                          height: r ? 7 : 5,
                                          fill: r ? m : `#fff`,
                                          stroke: m,
                                          strokeWidth: 1,
                                        },
                                        `a` + e
                                      )
                                    );
                                  }
                                  return u(`g`, { children: o }, t);
                                }),
                              }),
                          ],
                        }),
                        tt > 0 &&
                          f(`g`, {
                            style: { opacity: tt },
                            children: [
                              u(`rect`, {
                                x: F.x,
                                y: F.y,
                                width: F.w,
                                height: F.h,
                                fill: `none`,
                                stroke: m,
                                strokeWidth: 1.5,
                              }),
                              [
                                [0, 0],
                                [0.5, 0],
                                [1, 0],
                                [1, 0.5],
                                [1, 1],
                                [0.5, 1],
                                [0, 1],
                                [0, 0.5],
                              ].map(([e, t], n) => {
                                let r = 9 * R.back(z(D, L + n * 0.04, L + 0.3 + n * 0.04));
                                return u(
                                  `rect`,
                                  {
                                    x: F.x + F.w * e - r / 2,
                                    y: F.y + F.h * t - r / 2,
                                    width: r,
                                    height: r,
                                    fill: `#fff`,
                                    stroke: m,
                                    strokeWidth: 1.5,
                                  },
                                  n
                                );
                              }),
                            ],
                          }),
                      ],
                    }),
                  f(`div`, {
                    style: {
                      position: `absolute`,
                      left: F.x + F.w / 2,
                      top: F.y + F.h + 10,
                      transform: `translateX(-50%) scale(${0.8 + 0.2 * tt})`,
                      opacity: tt * (Z && Z.id === `name` ? 0 : 1),
                      background: it === `scale` ? Tt : m,
                      color: `#fff`,
                      font: `500 11px/1 ${V}`,
                      padding: `5px 7px`,
                      borderRadius: 4,
                      whiteSpace: `nowrap`,
                      transition: `background .2s`,
                    },
                    children: [Zt(F.w), ` × `, Zt(F.h)],
                  }),
                ],
              }),
              f(`p`, {
                style: {
                  position: `absolute`,
                  left: O ? 20 : 300,
                  top: Bt + en.dy,
                  width: O ? 380 : 840,
                  margin: 0,
                  textAlign: `center`,
                  font: `500 ${O ? 22 : 33}px/1.16 ${H}`,
                  letterSpacing: `-0.032em`,
                  opacity: en.o,
                  filter: `blur(${en.blur}px)`,
                  textWrap: `balance`,
                },
                children: [f(`span`, { style: { color: `rgba(12,12,14,.46)` }, children: [r, ` `] }), o],
              }),
              f(`div`, {
                style: {
                  position: `absolute`,
                  left: 0,
                  width: k,
                  top: J + tn.dy,
                  display: `flex`,
                  flexWrap: `wrap`,
                  justifyContent: `center`,
                  gap: 10,
                  opacity: tn.o,
                },
                children: [
                  f(`a`, {
                    href: re,
                    className: `lf-btn lf-pri`,
                    style: { background: h, color: `#fff` },
                    children: [
                      ne,
                      u(`svg`, {
                        width: `14`,
                        height: `14`,
                        viewBox: `0 0 14 14`,
                        children: u(`path`, {
                          d: `M3 3 L11 11 M11 4.5 L11 11 L4.5 11`,
                          stroke: `currentColor`,
                          strokeWidth: `1.6`,
                          fill: `none`,
                        }),
                      }),
                    ],
                  }),
                  f(`a`, {
                    href: ae,
                    className: `lf-btn lf-sec`,
                    style: { background: `rgba(255,255,255,.9)`, color: h, border: `1px solid ${$}` },
                    children: [u(`span`, { style: { width: 7, height: 7, borderRadius: 9, background: m } }), ie],
                  }),
                ],
              }),
              f(`div`, {
                style: {
                  position: `absolute`,
                  left: Y.x - q * 260,
                  top: Y.y - q * 60 + nn.dy,
                  width: Y.w,
                  height: Y.h,
                  opacity: nn.o,
                  transform: Yt(10),
                },
                children: [
                  f(`div`, {
                    style: {
                      position: `absolute`,
                      left: 0,
                      top: -18,
                      font: `500 10px/1 ${V}`,
                      color: `rgba(12,12,14,.55)`,
                      display: `flex`,
                      gap: 6,
                    },
                    children: [u(`span`, { children: `▣` }), se],
                  }),
                  u(`img`, {
                    src: oe?.src,
                    alt: oe?.alt || ``,
                    draggable: !1,
                    style: {
                      width: `100%`,
                      height: `100%`,
                      objectFit: `cover`,
                      display: `block`,
                      borderRadius: 2,
                      boxShadow: `0 20px 40px -20px rgba(12,12,14,.45)`,
                    },
                  }),
                ],
              }),
              f(`div`, {
                style: {
                  position: `absolute`,
                  left: Vt.x + q * 300,
                  top: Vt.y - q * 120 + rn.dy,
                  width: 206,
                  opacity: rn.o,
                  transform: `${Yt(16)} scale(${Vt.sc})`,
                  transformOrigin: `0 0`,
                },
                children: [
                  f(`div`, {
                    style: {
                      position: `absolute`,
                      left: 0,
                      top: -18,
                      font: `500 10px/1 ${V}`,
                      color: m,
                      display: `flex`,
                      gap: 6,
                      whiteSpace: `nowrap`,
                    },
                    children: [u(`span`, { children: `◇` }), `Now: `, _, ` app`],
                  }),
                  f(`div`, {
                    style: {
                      background: `#fff`,
                      borderRadius: 14,
                      border: `1px solid ${$}`,
                      padding: 14,
                      boxShadow: `0 24px 44px -22px rgba(12,12,14,.42)`,
                      fontFamily: H,
                    },
                    children: [
                      f(`div`, {
                        style: {
                          display: `flex`,
                          justifyContent: `space-between`,
                          alignItems: `center`,
                          font: `500 11px/1 ${H}`,
                          color: `rgba(12,12,14,.55)`,
                        },
                        children: [
                          f(`span`, {
                            style: { display: `flex`, alignItems: `center`, gap: 6 },
                            children: [
                              u(`span`, {
                                style: {
                                  width: 16,
                                  height: 16,
                                  borderRadius: 5,
                                  background: h,
                                  display: `inline-block`,
                                },
                              }),
                              `Pay run · Oct`,
                            ],
                          }),
                          u(`span`, { style: { color: Tt }, children: `● Ready` }),
                        ],
                      }),
                      u(`div`, {
                        style: { font: `600 25px/1 ${H}`, letterSpacing: `-0.04em`, marginTop: 14 },
                        children: v,
                      }),
                      u(`div`, {
                        style: { font: `400 11px/1.3 ${H}`, color: `rgba(12,12,14,.5)`, marginTop: 5 },
                        children: `14 freelancers · paid Friday`,
                      }),
                      u(`div`, {
                        style: { display: `flex`, alignItems: `flex-end`, gap: 4, height: 38, marginTop: 12 },
                        children: [0.42, 0.6, 0.5, 0.78, 0.66, 0.92, 0.7, 1].map((e, t) =>
                          u(
                            `div`,
                            {
                              style: {
                                flex: 1,
                                height: `${e * 100 * R.out(z(D, L + 0.7 + t * 0.05, L + 1.3 + t * 0.05))}%`,
                                background: t === 7 ? m : `rgba(12,12,14,.12)`,
                                borderRadius: 3,
                              },
                            },
                            t
                          )
                        ),
                      }),
                      u(`div`, {
                        style: {
                          marginTop: 12,
                          height: 32,
                          borderRadius: 8,
                          background: m,
                          color: `#fff`,
                          display: `flex`,
                          alignItems: `center`,
                          justifyContent: `center`,
                          font: `500 12px/1 ${H}`,
                        },
                        children: `Approve pay run`,
                      }),
                    ],
                  }),
                ],
              }),
              W > 0 &&
                f(`div`, {
                  style: { position: `absolute`, left: Dt.x, top: Dt.y + I, zIndex: 20 },
                  children: [
                    f(`div`, {
                      style: {
                        position: `absolute`,
                        left: -14,
                        top: -30,
                        width: 28,
                        height: 28,
                        borderRadius: `50% 50% 50% 4px`,
                        background: wt,
                        color: `#fff`,
                        display: `flex`,
                        alignItems: `center`,
                        justifyContent: `center`,
                        font: `600 12px/1 ${H}`,
                        transform: `scale(${W})`,
                        transformOrigin: `0 100%`,
                        boxShadow: `0 6px 14px rgba(255,91,36,.35)`,
                        border: `2px solid #fff`,
                      },
                      children: [
                        ce[0],
                        K > 0 &&
                          u(`span`, {
                            style: {
                              position: `absolute`,
                              right: -9,
                              top: -7,
                              minWidth: 16,
                              height: 16,
                              borderRadius: 9,
                              background: h,
                              color: `#fff`,
                              font: `600 9px/16px ${H}`,
                              textAlign: `center`,
                              transform: `scale(${K})`,
                            },
                            children: `2`,
                          }),
                      ],
                    }),
                    f(`div`, {
                      style: {
                        position: `absolute`,
                        left: -290,
                        top: -6,
                        width: 262,
                        transform: `scale(${W * (1 - K)})`,
                        opacity: 1 - K,
                        transformOrigin: `100% 0`,
                        background: `#fff`,
                        borderRadius: 12,
                        border: `1px solid ${$}`,
                        boxShadow: `0 22px 44px -20px rgba(12,12,14,.35)`,
                        padding: `11px 12px`,
                      },
                      children: [
                        f(`div`, {
                          style: { font: `600 12px/1 ${H}`, display: `flex`, gap: 6, alignItems: `center` },
                          children: [
                            ce,
                            u(`span`, {
                              style: { font: `400 11px/1 ${H}`, color: `rgba(12,12,14,.45)` },
                              children: `just now`,
                            }),
                          ],
                        }),
                        f(`div`, {
                          style: { font: `400 13px/1.35 ${H}`, marginTop: 6, minHeight: 35, letterSpacing: `-0.01em` },
                          children: [
                            le.slice(0, Rt),
                            Rt < le.length &&
                              u(`span`, {
                                style: {
                                  display: `inline-block`,
                                  width: 1.5,
                                  height: 14,
                                  background: wt,
                                  verticalAlign: -2,
                                  marginLeft: 1,
                                },
                              }),
                          ],
                        }),
                        G > 0 &&
                          f(`div`, {
                            style: {
                              marginTop: 9,
                              paddingTop: 9,
                              borderTop: `1px solid ${$}`,
                              opacity: bt(G),
                              transform: `translateY(${(1 - bt(G)) * 6}px)`,
                            },
                            children: [
                              u(`div`, { style: { font: `600 12px/1 ${H}`, color: Tt }, children: ue }),
                              u(`div`, { style: { font: `400 13px/1.35 ${H}`, marginTop: 5 }, children: de }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              Z &&
                f(`svg`, {
                  width: k,
                  height: A,
                  style: {
                    position: `absolute`,
                    left: 0,
                    top: 0,
                    pointerEvents: `none`,
                    overflow: `visible`,
                    zIndex: 25,
                  },
                  "aria-hidden": !0,
                  children: [
                    Z.id !== `name` &&
                      u(`rect`, {
                        x: Z.x - 1,
                        y: Z.y - 1,
                        width: Z.w + 2,
                        height: Z.h + 2,
                        fill: `none`,
                        stroke: m,
                        strokeWidth: 1.5,
                      }),
                    Xt.filter((e) => e.v > 2).map((e, t) =>
                      f(
                        `g`,
                        {
                          children: [
                            u(`line`, { x1: e.x1, y1: e.y1, x2: e.x2, y2: e.y2, stroke: Et, strokeWidth: 1 }),
                            e.y1 === e.y2
                              ? f(l, {
                                  children: [
                                    u(`line`, { x1: e.x1, y1: e.y1 - 4, x2: e.x1, y2: e.y1 + 4, stroke: Et }),
                                    u(`line`, { x1: e.x2, y1: e.y2 - 4, x2: e.x2, y2: e.y2 + 4, stroke: Et }),
                                  ],
                                })
                              : f(l, {
                                  children: [
                                    u(`line`, { x1: e.x1 - 4, y1: e.y1, x2: e.x1 + 4, y2: e.y1, stroke: Et }),
                                    u(`line`, { x1: e.x2 - 4, y1: e.y2, x2: e.x2 + 4, y2: e.y2, stroke: Et }),
                                  ],
                                }),
                            f(`g`, {
                              transform: `translate(${(e.x1 + e.x2) / 2} ${(e.y1 + e.y2) / 2})`,
                              children: [
                                u(`rect`, { x: -17, y: -9, width: 34, height: 18, rx: 4, fill: Et }),
                                u(`text`, {
                                  x: 0,
                                  y: 4,
                                  textAnchor: `middle`,
                                  fill: `#fff`,
                                  style: { font: `500 10px ${V}` },
                                  children: Math.round(e.v),
                                }),
                              ],
                            }),
                          ],
                        },
                        t
                      )
                    ),
                    u(`g`, {
                      transform: `translate(${Z.x} ${Z.y - 8})`,
                      opacity: Z.id === `name` ? 0 : 1,
                      children: u(`text`, { x: 0, y: 0, fill: m, style: { font: `500 10px ${V}` }, children: Z.label }),
                    }),
                  ],
                }),
            ],
          }),
          !O &&
            f(l, {
              children: [
                f(`div`, {
                  style: {
                    ...un,
                    left: 36,
                    top: 590,
                    width: 236,
                    height: 262,
                    transform: `translateX(${(1 - an) * -40 - zt}px) ${Yt(5)}`,
                    opacity: an * (1 - q),
                  },
                  children: [
                    f(`div`, {
                      style: {
                        display: `flex`,
                        gap: 14,
                        padding: `12px 14px 10px`,
                        font: `600 12px/1 ${H}`,
                        borderBottom: `1px solid ${$}`,
                      },
                      children: [
                        u(`span`, { children: `Layers` }),
                        u(`span`, { style: { color: `rgba(12,12,14,.4)`, fontWeight: 500 }, children: `Assets` }),
                        u(`span`, {
                          style: { marginLeft: `auto`, font: `500 10px/1 ${V}`, color: `rgba(12,12,14,.4)` },
                          children: `Home`,
                        }),
                      ],
                    }),
                    u(`div`, {
                      style: { padding: `6px 6px` },
                      children: dn.map((e, t) =>
                        f(
                          `div`,
                          {
                            style: {
                              display: `flex`,
                              alignItems: `center`,
                              gap: 8,
                              height: 29,
                              padding: `0 8px 0 ${8 + e.d * 16}px`,
                              borderRadius: 6,
                              background: e.on ? `${m}1F` : `transparent`,
                              color: e.on ? m : h,
                              font: `${t === 0 ? 600 : 500} 12px/1 ${H}`,
                              letterSpacing: `-0.01em`,
                              whiteSpace: `nowrap`,
                              overflow: `hidden`,
                              transition: `background .25s, color .25s`,
                            },
                            children: [
                              u(pt, { kind: e.ic, color: e.on ? m : `rgba(12,12,14,.55)` }),
                              u(`span`, { style: { overflow: `hidden`, textOverflow: `ellipsis` }, children: e.n }),
                            ],
                          },
                          t
                        )
                      ),
                    }),
                  ],
                }),
                f(`div`, {
                  style: {
                    ...un,
                    left: 1168,
                    top: 548,
                    width: 236,
                    height: 304,
                    transform: `translateX(${(1 - an) * 40 + zt}px) ${Yt(5)}`,
                    opacity: an * (1 - q),
                  },
                  children: [
                    f(`div`, {
                      style: {
                        display: `flex`,
                        gap: 14,
                        padding: `12px 14px 10px`,
                        font: `600 12px/1 ${H}`,
                        borderBottom: `1px solid ${$}`,
                      },
                      children: [
                        u(`span`, { children: `Design` }),
                        u(`span`, { style: { color: `rgba(12,12,14,.4)`, fontWeight: 500 }, children: `Prototype` }),
                        u(`span`, { style: { color: `rgba(12,12,14,.4)`, fontWeight: 500 }, children: `Inspect` }),
                      ],
                    }),
                    f(`div`, {
                      style: { padding: `12px 14px`, display: `grid`, gap: 14 },
                      children: [
                        u(dt, {
                          title: Q ? Q.label : `Nothing selected`,
                          children: f(`div`, {
                            style: { display: `grid`, gridTemplateColumns: `1fr 1fr`, gap: 6 },
                            children: [
                              u(ft, { k: `X`, v: Q ? Zt(Q.x - 20) : `–` }),
                              u(ft, { k: `Y`, v: Q ? Zt(Q.y - 56) : `–` }),
                              u(ft, { k: `W`, v: Q ? Zt(Q.w) : `–`, hot: it === `scale`, accent: Tt }),
                              u(ft, { k: `H`, v: Q ? Zt(Q.h) : `–`, hot: it === `scale`, accent: Tt }),
                            ],
                          }),
                        }),
                        f(dt, {
                          title: `Text`,
                          children: [
                            f(`div`, {
                              style: { font: `500 12px/1 ${H}`, display: `flex`, justifyContent: `space-between` },
                              children: [
                                u(`span`, { children: `Geist` }),
                                u(`span`, { style: { color: `rgba(12,12,14,.5)` }, children: `Semibold` }),
                              ],
                            }),
                            f(`div`, {
                              style: { display: `grid`, gridTemplateColumns: `1fr 1fr`, gap: 6, marginTop: 8 },
                              children: [
                                u(ft, { k: `Aa`, v: Zt(yt * M), hot: it === `scale`, accent: Tt }),
                                u(ft, { k: `|A|`, v: `-5%` }),
                              ],
                            }),
                          ],
                        }),
                        u(dt, {
                          title: `Fill`,
                          children: u(`div`, {
                            style: { display: `flex`, alignItems: `center`, gap: 8, font: `500 12px/1 ${V}` },
                            children:
                              Gt.r > 20
                                ? f(l, {
                                    children: [
                                      u(`span`, {
                                        style: {
                                          width: 16,
                                          height: 16,
                                          borderRadius: 4,
                                          backgroundImage: `url(${me[Kt].src})`,
                                          backgroundSize: `cover`,
                                          border: `1px solid ${$}`,
                                        },
                                      }),
                                      `Image`,
                                      u(`span`, {
                                        style: { marginLeft: `auto`, color: `rgba(12,12,14,.45)` },
                                        children: me[Kt].alt,
                                      }),
                                    ],
                                  })
                                : f(l, {
                                    children: [
                                      u(`span`, {
                                        style: {
                                          width: 16,
                                          height: 16,
                                          borderRadius: 4,
                                          background: h,
                                          border: `1px solid ${$}`,
                                        },
                                      }),
                                      h.replace(`#`, ``).toUpperCase(),
                                      u(`span`, {
                                        style: { marginLeft: `auto`, color: `rgba(12,12,14,.45)` },
                                        children: `100%`,
                                      }),
                                    ],
                                  }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          !O &&
            f(`div`, {
              style: {
                ...un,
                left: k / 2 - 150,
                top: A - 58 - (1 - on) * -30,
                width: 300,
                height: 44,
                borderRadius: 12,
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
                gap: 4,
                opacity: on * (1 - q),
                overflow: `visible`,
              },
              children: [
                [`move`, `frame`, `pen`, `text`, `comment`, `scale`].map((e) =>
                  u(
                    `div`,
                    {
                      style: {
                        width: 36,
                        height: 32,
                        borderRadius: 8,
                        display: `flex`,
                        alignItems: `center`,
                        justifyContent: `center`,
                        background: it === e ? m : `transparent`,
                        transition: `background .2s`,
                      },
                      children: u(mt, { kind: e, color: it === e ? `#fff` : h }),
                    },
                    e
                  )
                ),
                u(`div`, { style: { width: 1, height: 20, background: $, margin: `0 6px` } }),
                u(`div`, { style: { font: `500 11px/1 ${V}`, color: `rgba(12,12,14,.55)` }, children: `100%` }),
              ],
            }),
          lt && u(st, { x: lt.x, y: lt.y + I, color: m, label: `${t.split(` `)[0]} \xb7 Pen`, pen: !0 }),
          D > 3.9 && u(st, { x: jt.x, y: jt.y, color: wt, label: ce }),
          U > 0 &&
            u(`div`, {
              style: {
                position: `absolute`,
                left: Dt.x - 16,
                top: Dt.y - 16 + I,
                width: 32,
                height: 32,
                borderRadius: 32,
                border: `2px solid ${wt}`,
                opacity: U,
                transform: `scale(${1.6 - U * 0.6})`,
              },
            }),
          D > 6.3 && u(st, { x: Pt.x, y: Pt.y + I, color: Tt, label: ue }),
          ln && !S && u(st, { x: ln.x, y: ln.y, color: m, label: `You` }),
          ln && S && u(st, { x: ln.x, y: ln.y, color: m, label: `You` }),
        ],
      }),
      pe && u(ut, { name: t, accent: m, ink: h, rule: $, o: sn, secondaryLink: ae }),
      u(ht, { compact: O, w: C.w, h: C.h, s: Ee, ox: De, oy: Oe, sel: cn, mouse: w, accent: m, o: sn, rule: $ }),
      u(`style`, {
        children: `
                .lf-btn{height:48px;padding:0 20px;border-radius:10px;display:inline-flex;align-items:center;gap:10px;font:500 15px/1 ${H};letter-spacing:-0.015em;text-decoration:none;transition:transform .35s cubic-bezier(.22,1,.36,1),box-shadow .35s cubic-bezier(.22,1,.36,1),background .2s;cursor:none}
                .lf-btn:hover{transform:translateY(-2px);box-shadow:0 14px 26px -14px rgba(12,12,14,.55)}
                .lf-btn:active{transform:translateY(0) scale(.98)}
                .lf-btn:focus-visible{outline:2px solid ${m};outline-offset:3px}
                .lf-pri svg{transition:transform .35s cubic-bezier(.22,1,.36,1)} .lf-pri:hover svg{transform:translate(2px,2px)}
            `,
      }),
    ],
  });
}
function ut({ name: e, accent: t, ink: n, rule: r, o: i, secondaryLink: a }) {
  return f(`div`, {
    style: {
      position: `absolute`,
      left: 0,
      top: 0,
      right: 0,
      height: 56,
      background: `rgba(252,252,250,.9)`,
      backdropFilter: `blur(12px)`,
      WebkitBackdropFilter: `blur(12px)`,
      borderBottom: `1px solid ${r}`,
      display: `flex`,
      alignItems: `center`,
      padding: `0 14px 0 16px`,
      gap: 16,
      zIndex: 40,
      opacity: 0.4 + 0.6 * i,
    },
    children: [
      f(`a`, {
        href: `/`,
        style: { display: `flex`, alignItems: `center`, gap: 10, textDecoration: `none`, color: n, minWidth: 0 },
        children: [
          f(`svg`, {
            width: `22`,
            height: `22`,
            viewBox: `0 0 22 22`,
            "aria-hidden": !0,
            children: [
              u(`rect`, { x: `3`, y: `12`, width: `16`, height: `7`, rx: `2`, fill: n, opacity: `.25` }),
              u(`rect`, { x: `3`, y: `7.5`, width: `16`, height: `7`, rx: `2`, fill: n, opacity: `.55` }),
              u(`rect`, { x: `3`, y: `3`, width: `16`, height: `7`, rx: `2`, fill: t }),
            ],
          }),
          u(`span`, {
            style: { font: `600 14px/1 ${H}`, letterSpacing: `-0.02em`, whiteSpace: `nowrap` },
            children: e,
          }),
          u(`span`, {
            style: { font: `400 13px/1 ${H}`, color: `rgba(12,12,14,.45)`, whiteSpace: `nowrap` },
            children: `/ Portfolio`,
          }),
          u(`span`, {
            style: {
              font: `500 10px/1 ${V}`,
              color: `rgba(12,12,14,.4)`,
              border: `1px solid ${r}`,
              padding: `3px 5px`,
              borderRadius: 4,
              whiteSpace: `nowrap`,
            },
            children: `v26.10`,
          }),
        ],
      }),
      f(`nav`, {
        style: {
          position: `absolute`,
          left: `50%`,
          transform: `translateX(-50%)`,
          display: `flex`,
          gap: 2,
          padding: 3,
          borderRadius: 10,
          background: `rgba(12,12,14,.045)`,
        },
        children: [
          u(`a`, {
            href: `/`,
            className: `lf-nav`,
            style: { background: `#fff`, color: n, boxShadow: `0 1px 2px rgba(12,12,14,.12)` },
            children: `Home`,
          }),
          [
            [`Work`, `/work`],
            [`About`, `/about`],
            [`Services`, `/services`],
            [`Journal`, `/journal`],
            [`Playground`, `/playground`],
          ].map(([e, t]) => u(`a`, { href: t, className: `lf-nav`, children: e }, e)),
        ],
      }),
      f(`div`, {
        style: { marginLeft: `auto`, display: `flex`, alignItems: `center`, gap: 10 },
        children: [
          u(`div`, {
            style: { display: `flex` },
            children: [
              [`M`, wt],
              [`T`, Tt],
              [`+3`, `#8A8A90`],
            ].map(([e, t], n) =>
              u(
                `span`,
                {
                  style: {
                    width: 26,
                    height: 26,
                    borderRadius: 26,
                    background: t,
                    color: `#fff`,
                    border: `2px solid #fcfcfa`,
                    marginLeft: n ? -7 : 0,
                    display: `flex`,
                    alignItems: `center`,
                    justifyContent: `center`,
                    font: `600 10px/1 ${H}`,
                  },
                  children: e,
                },
                n
              )
            ),
          }),
          u(`a`, { href: a, className: `lf-hire`, style: { background: n }, children: `Hire me` }),
        ],
      }),
      u(`style`, {
        children: `.lf-nav{height:30px;padding:0 12px;border-radius:7px;display:flex;align-items:center;font:500 13px/1 ${H};letter-spacing:-0.01em;color:rgba(12,12,14,.62);text-decoration:none;transition:color .2s,background .2s;cursor:none}.lf-nav:hover{color:${n};background:rgba(255,255,255,.7)}
            .lf-hire{height:34px;padding:0 14px;border-radius:9px;display:flex;align-items:center;color:#fff;font:500 13px/1 ${H};text-decoration:none;transition:transform .3s cubic-bezier(.22,1,.36,1);cursor:none}.lf-hire:hover{transform:translateY(-1px)}`,
      }),
    ],
  });
}
function dt({ title: e, children: t }) {
  return f(`div`, {
    children: [
      u(`div`, {
        style: {
          font: `600 11px/1 ${H}`,
          marginBottom: 9,
          color: `rgba(12,12,14,.8)`,
          whiteSpace: `nowrap`,
          overflow: `hidden`,
          textOverflow: `ellipsis`,
        },
        children: e,
      }),
      t,
    ],
  });
}
function ft({ k: e, v: t, hot: n, accent: r }) {
  return f(`div`, {
    style: {
      height: 28,
      borderRadius: 6,
      background: n ? `${r}1A` : `rgba(12,12,14,.045)`,
      display: `flex`,
      alignItems: `center`,
      gap: 8,
      padding: `0 8px`,
      font: `500 12px/1 ${V}`,
      color: n ? r : `#0C0C0E`,
      transition: `background .2s,color .2s`,
    },
    children: [u(`span`, { style: { color: `rgba(12,12,14,.4)`, fontSize: 10 }, children: e }), t],
  });
}
function pt({ kind: e, color: t }) {
  let n = { width: 12, height: 12, viewBox: `0 0 12 12`, style: { flex: `none` } };
  return e === `frame`
    ? u(`svg`, {
        ...n,
        children: u(`path`, { d: `M3.5 1v10M8.5 1v10M1 3.5h10M1 8.5h10`, stroke: t, strokeWidth: `1.2` }),
      })
    : e === `vector`
      ? f(`svg`, {
          ...n,
          children: [
            u(`path`, { d: `M2 10 C3 4 9 8 10 2`, stroke: t, strokeWidth: `1.2`, fill: `none` }),
            u(`rect`, { x: `0.8`, y: `8.8`, width: `2.4`, height: `2.4`, fill: t }),
            u(`rect`, { x: `8.8`, y: `0.8`, width: `2.4`, height: `2.4`, fill: t }),
          ],
        })
      : e === `text`
        ? u(`svg`, { ...n, children: u(`path`, { d: `M2 2.5h8M6 2.5v8`, stroke: t, strokeWidth: `1.3` }) })
        : e === `image`
          ? f(`svg`, {
              ...n,
              children: [
                u(`rect`, {
                  x: `1`,
                  y: `1.5`,
                  width: `10`,
                  height: `9`,
                  rx: `1.5`,
                  stroke: t,
                  strokeWidth: `1.2`,
                  fill: `none`,
                }),
                u(`path`, { d: `M1.5 9 L4.5 6 L7 8.2 L8.5 7 L10.5 9`, stroke: t, strokeWidth: `1.1`, fill: `none` }),
              ],
            })
          : e === `comp`
            ? u(`svg`, {
                ...n,
                children: u(`path`, {
                  d: `M6 0.8 L11.2 6 L6 11.2 L0.8 6 Z`,
                  stroke: t,
                  strokeWidth: `1.2`,
                  fill: `none`,
                }),
              })
            : u(`svg`, {
                ...n,
                children: u(`path`, {
                  d: `M2 2h8v6H5l-3 2.5z`,
                  stroke: t,
                  strokeWidth: `1.2`,
                  fill: `none`,
                  strokeLinejoin: `round`,
                }),
              });
}
function mt({ kind: e, color: t }) {
  let n = {
    width: 16,
    height: 16,
    viewBox: `0 0 16 16`,
    fill: `none`,
    stroke: t,
    strokeWidth: 1.4,
    strokeLinejoin: `round`,
  };
  return e === `move`
    ? u(`svg`, { ...n, children: u(`path`, { d: `M3 2 L3 13 L6.2 10 L8.5 14.5 L10.4 13.6 L8.2 9.2 L12.5 9 Z` }) })
    : e === `frame`
      ? u(`svg`, { ...n, children: u(`path`, { d: `M5 1.5v13M11 1.5v13M1.5 5h13M1.5 11h13` }) })
      : e === `pen`
        ? f(`svg`, {
            ...n,
            children: [
              u(`path`, { d: `M3 13 L5 7 L9.5 2.5 L13.5 6.5 L9 11 Z M3 13 L7 9` }),
              u(`circle`, { cx: `7.4`, cy: `8.6`, r: `1` }),
            ],
          })
        : e === `text`
          ? u(`svg`, { ...n, children: u(`path`, { d: `M3 3.5h10M8 3.5v10M6 13.5h4` }) })
          : e === `comment`
            ? u(`svg`, {
                ...n,
                children: u(`path`, { d: `M8 2.5a5.5 5.5 0 1 1-4.3 8.9L2.5 13.5l.6-3A5.5 5.5 0 0 1 8 2.5z` }),
              })
            : u(`svg`, {
                ...n,
                children: u(`path`, { d: `M2.5 13.5h4M2.5 13.5v-4M13.5 2.5h-4M13.5 2.5v4M3 13l10-10` }),
              });
}
function ht({ compact: e, w: t, h: n, s: r, ox: i, oy: a, sel: o, mouse: s, accent: c, o: ee, rule: l }) {
  let te = [],
    d = Math.floor((20 - i) / r / 10) * 10,
    ne = (t - i) / r;
  for (let e = d; e <= ne; e += 10) {
    let t = i + e * r;
    if (t < 20) continue;
    let n = e % 100 == 0;
    te.push(
      u(
        `line`,
        { x1: t, x2: t, y1: n ? 6 : e % 50 == 0 ? 12 : 15, y2: 20, stroke: `rgba(12,12,14,.28)`, strokeWidth: 1 },
        `x` + e
      )
    ),
      n &&
        te.push(
          u(
            `text`,
            { x: t + 3, y: 10, fill: `rgba(12,12,14,.45)`, style: { font: `400 8.5px ${V}` }, children: e },
            `xt` + e
          )
        );
  }
  let re = [],
    ie = Math.floor((76 - a) / r / 10) * 10,
    p = (n - a) / r;
  for (let e = ie; e <= p; e += 10) {
    let t = a + e * r - 56 - 20;
    if (t < 0) continue;
    let n = e % 100 == 0;
    re.push(
      u(
        `line`,
        { y1: t, y2: t, x1: n ? 6 : e % 50 == 0 ? 12 : 15, x2: 20, stroke: `rgba(12,12,14,.28)`, strokeWidth: 1 },
        `y` + e
      )
    ),
      n &&
        re.push(
          u(
            `text`,
            {
              x: 10,
              y: t + 3,
              fill: `rgba(12,12,14,.45)`,
              transform: `rotate(-90 10 ${t + 3})`,
              style: { font: `400 8.5px ${V}` },
              children: e,
            },
            `yt` + e
          )
        );
  }
  return f(`div`, {
    "aria-hidden": !0,
    style: { position: `absolute`, inset: 0, pointerEvents: `none`, opacity: ee },
    children: [
      f(`svg`, {
        width: t,
        height: 20,
        style: {
          position: `absolute`,
          left: 0,
          top: 56,
          background: `rgba(248,248,246,.92)`,
          borderBottom: `1px solid ${l}`,
        },
        children: [
          o && u(`rect`, { x: i + o.a * r, y: 0, width: (o.b - o.a) * r, height: 20, fill: c, opacity: 0.14 }),
          te,
          s && u(`line`, { x1: s.x, x2: s.x, y1: 0, y2: 20, stroke: c, strokeWidth: 1.5 }),
        ],
      }),
      !e &&
        f(`svg`, {
          width: 20,
          height: Math.max(0, n - 56 - 20),
          style: {
            position: `absolute`,
            left: 0,
            top: 76,
            background: `rgba(248,248,246,.92)`,
            borderRight: `1px solid ${l}`,
          },
          children: [
            o &&
              u(`rect`, { x: 0, y: a + o.c * r - 56 - 20, width: 20, height: (o.d - o.c) * r, fill: c, opacity: 0.14 }),
            re,
            s && u(`line`, { y1: s.y - 56 - 20, y2: s.y - 56 - 20, x1: 0, x2: 20, stroke: c, strokeWidth: 1.5 }),
          ],
        }),
      u(`div`, {
        style: {
          position: `absolute`,
          left: 0,
          top: 56,
          width: 20,
          height: 20,
          background: `rgba(248,248,246,1)`,
          borderRight: `1px solid ${l}`,
          borderBottom: `1px solid ${l}`,
        },
      }),
    ],
  });
}
var gt,
  _t,
  vt,
  yt,
  R,
  bt,
  z,
  B,
  xt,
  St,
  Ct,
  V,
  H,
  wt,
  Tt,
  Et,
  Dt = e(() => {
    r(),
      ne(),
      re(),
      d(),
      ue(),
      (gt = {
        text: `Noor Castell`,
        width: 5416,
        asc: 1005,
        desc: -295,
        cap: 710,
        glyphs: [
          {
            ch: `N`,
            d: `M210 0L80 0L80 -710L232 -710L538 -176L538 -710L668 -710L668 0L512 0L210 -519L210 0Z`,
            x: 0,
            w: 748,
            pts: [
              [210, 0, 0],
              [80, 0, 0],
              [80, -710, 0],
              [232, -710, 0],
              [538, -176, 0],
              [538, -710, 0],
              [668, -710, 0],
              [668, 0, 0],
              [512, 0, 0],
              [210, -519, 0],
              [210, 0, 0],
            ],
          },
          {
            ch: `o`,
            d: `M990 12L990 12Q911 12 851.5 -22.5Q792 -57 759.5 -120Q727 -183 727 -267L727 -267Q727 -352 759.5 -414.5Q792 -477 851.5 -511.5Q911 -546 990 -546L990 -546Q1069 -546 1128 -511.5Q1187 -477 1219.5 -414.5Q1252 -352 1252 -267L1252 -267Q1252 -183 1219.5 -120Q1187 -57 1128 -22.5Q1069 12 990 12ZM990 -92L990 -92Q1052 -92 1085.5 -138Q1119 -184 1119 -267L1119 -267Q1119 -349 1085.5 -395.5Q1052 -442 990 -442L990 -442Q928 -442 894 -395.5Q860 -349 860 -267L860 -267Q860 -184 894 -138Q928 -92 990 -92Z`,
            x: 688,
            w: 603,
            pts: [
              [990, 12, 0],
              [990, 12, 0],
              [911, 12, 1, 990, 12, 851.5, -22.5],
              [851.5, -22.5, 0],
              [792, -57, 1, 851.5, -22.5, 759.5, -120],
              [759.5, -120, 0],
              [727, -183, 1, 759.5, -120, 727, -267],
              [727, -267, 0],
              [727, -267, 0],
              [727, -352, 1, 727, -267, 759.5, -414.5],
              [759.5, -414.5, 0],
              [792, -477, 1, 759.5, -414.5, 851.5, -511.5],
              [851.5, -511.5, 0],
              [911, -546, 1, 851.5, -511.5, 990, -546],
              [990, -546, 0],
              [990, -546, 0],
              [1069, -546, 1, 990, -546, 1128, -511.5],
              [1128, -511.5, 0],
              [1187, -477, 1, 1128, -511.5, 1219.5, -414.5],
              [1219.5, -414.5, 0],
              [1252, -352, 1, 1219.5, -414.5, 1252, -267],
              [1252, -267, 0],
              [1252, -267, 0],
              [1252, -183, 1, 1252, -267, 1219.5, -120],
              [1219.5, -120, 0],
              [1187, -57, 1, 1219.5, -120, 1128, -22.5],
              [1128, -22.5, 0],
              [1069, 12, 1, 1128, -22.5, 990, 12],
              [990, 12, 0],
              [990, -92, 0],
              [990, -92, 0],
              [1052, -92, 1, 990, -92, 1085.5, -138],
              [1085.5, -138, 0],
              [1119, -184, 1, 1085.5, -138, 1119, -267],
              [1119, -267, 0],
              [1119, -267, 0],
              [1119, -349, 1, 1119, -267, 1085.5, -395.5],
              [1085.5, -395.5, 0],
              [1052, -442, 1, 1085.5, -395.5, 990, -442],
              [990, -442, 0],
              [990, -442, 0],
              [928, -442, 1, 990, -442, 894, -395.5],
              [894, -395.5, 0],
              [860, -349, 1, 894, -395.5, 860, -267],
              [860, -267, 0],
              [860, -267, 0],
              [860, -184, 1, 860, -267, 894, -138],
              [894, -138, 0],
              [928, -92, 1, 894, -138, 990, -92],
              [990, -92, 0],
            ],
          },
          {
            ch: `o`,
            d: `M1533 12L1533 12Q1454 12 1394.5 -22.5Q1335 -57 1302.5 -120Q1270 -183 1270 -267L1270 -267Q1270 -352 1302.5 -414.5Q1335 -477 1394.5 -511.5Q1454 -546 1533 -546L1533 -546Q1612 -546 1671 -511.5Q1730 -477 1762.5 -414.5Q1795 -352 1795 -267L1795 -267Q1795 -183 1762.5 -120Q1730 -57 1671 -22.5Q1612 12 1533 12ZM1533 -92L1533 -92Q1595 -92 1628.5 -138Q1662 -184 1662 -267L1662 -267Q1662 -349 1628.5 -395.5Q1595 -442 1533 -442L1533 -442Q1471 -442 1437 -395.5Q1403 -349 1403 -267L1403 -267Q1403 -184 1437 -138Q1471 -92 1533 -92Z`,
            x: 1231,
            w: 603,
            pts: [
              [1533, 12, 0],
              [1533, 12, 0],
              [1454, 12, 1, 1533, 12, 1394.5, -22.5],
              [1394.5, -22.5, 0],
              [1335, -57, 1, 1394.5, -22.5, 1302.5, -120],
              [1302.5, -120, 0],
              [1270, -183, 1, 1302.5, -120, 1270, -267],
              [1270, -267, 0],
              [1270, -267, 0],
              [1270, -352, 1, 1270, -267, 1302.5, -414.5],
              [1302.5, -414.5, 0],
              [1335, -477, 1, 1302.5, -414.5, 1394.5, -511.5],
              [1394.5, -511.5, 0],
              [1454, -546, 1, 1394.5, -511.5, 1533, -546],
              [1533, -546, 0],
              [1533, -546, 0],
              [1612, -546, 1, 1533, -546, 1671, -511.5],
              [1671, -511.5, 0],
              [1730, -477, 1, 1671, -511.5, 1762.5, -414.5],
              [1762.5, -414.5, 0],
              [1795, -352, 1, 1762.5, -414.5, 1795, -267],
              [1795, -267, 0],
              [1795, -267, 0],
              [1795, -183, 1, 1795, -267, 1762.5, -120],
              [1762.5, -120, 0],
              [1730, -57, 1, 1762.5, -120, 1671, -22.5],
              [1671, -22.5, 0],
              [1612, 12, 1, 1671, -22.5, 1533, 12],
              [1533, 12, 0],
              [1533, -92, 0],
              [1533, -92, 0],
              [1595, -92, 1, 1533, -92, 1628.5, -138],
              [1628.5, -138, 0],
              [1662, -184, 1, 1628.5, -138, 1662, -267],
              [1662, -267, 0],
              [1662, -267, 0],
              [1662, -349, 1, 1662, -267, 1628.5, -395.5],
              [1628.5, -395.5, 0],
              [1595, -442, 1, 1628.5, -395.5, 1533, -442],
              [1533, -442, 0],
              [1533, -442, 0],
              [1471, -442, 1, 1533, -442, 1437, -395.5],
              [1437, -395.5, 0],
              [1403, -349, 1, 1437, -395.5, 1403, -267],
              [1403, -267, 0],
              [1403, -267, 0],
              [1403, -184, 1, 1403, -267, 1437, -138],
              [1437, -138, 0],
              [1471, -92, 1, 1437, -138, 1533, -92],
              [1533, -92, 0],
            ],
          },
          {
            ch: `r`,
            d: `M1972 0L1844 0L1844 -534L1964 -534L1969 -386L1958 -388Q1970 -465 2003.5 -499.5Q2037 -534 2095 -534L2095 -534L2144 -534L2144 -424L2094 -424Q2053 -424 2026 -412Q1999 -400 1985.5 -374.5Q1972 -349 1972 -308L1972 -308L1972 0Z`,
            x: 1774,
            w: 409,
            pts: [
              [1972, 0, 0],
              [1844, 0, 0],
              [1844, -534, 0],
              [1964, -534, 0],
              [1969, -386, 0],
              [1958, -388, 0],
              [1970, -465, 1, 1958, -388, 2003.5, -499.5],
              [2003.5, -499.5, 0],
              [2037, -534, 1, 2003.5, -499.5, 2095, -534],
              [2095, -534, 0],
              [2095, -534, 0],
              [2144, -534, 0],
              [2144, -424, 0],
              [2094, -424, 0],
              [2053, -424, 1, 2094, -424, 2026, -412],
              [2026, -412, 0],
              [1999, -400, 1, 2026, -412, 1985.5, -374.5],
              [1985.5, -374.5, 0],
              [1972, -349, 1, 1985.5, -374.5, 1972, -308],
              [1972, -308, 0],
              [1972, -308, 0],
              [1972, 0, 0],
            ],
          },
          {
            ch: `C`,
            d: `M2691 16L2691 16Q2594 16 2520 -28.5Q2446 -73 2404 -155.5Q2362 -238 2362 -354L2362 -354Q2362 -468 2403 -551.5Q2444 -635 2518 -680.5Q2592 -726 2692 -726L2692 -726Q2828 -726 2903 -658.5Q2978 -591 3001 -470L3001 -470L2865 -463Q2852 -533 2809 -573Q2766 -613 2692 -613L2692 -613Q2632 -613 2588 -581Q2544 -549 2520 -491Q2496 -433 2496 -354L2496 -354Q2496 -274 2520.5 -216.5Q2545 -159 2589 -128Q2633 -97 2691 -97L2691 -97Q2770 -97 2813.5 -140.5Q2857 -184 2869 -260L2869 -260L3005 -253Q2991 -170 2951 -109.5Q2911 -49 2845.5 -16.5Q2780 16 2691 16Z`,
            x: 2319,
            w: 724,
            pts: [
              [2691, 16, 0],
              [2691, 16, 0],
              [2594, 16, 1, 2691, 16, 2520, -28.5],
              [2520, -28.5, 0],
              [2446, -73, 1, 2520, -28.5, 2404, -155.5],
              [2404, -155.5, 0],
              [2362, -238, 1, 2404, -155.5, 2362, -354],
              [2362, -354, 0],
              [2362, -354, 0],
              [2362, -468, 1, 2362, -354, 2403, -551.5],
              [2403, -551.5, 0],
              [2444, -635, 1, 2403, -551.5, 2518, -680.5],
              [2518, -680.5, 0],
              [2592, -726, 1, 2518, -680.5, 2692, -726],
              [2692, -726, 0],
              [2692, -726, 0],
              [2828, -726, 1, 2692, -726, 2903, -658.5],
              [2903, -658.5, 0],
              [2978, -591, 1, 2903, -658.5, 3001, -470],
              [3001, -470, 0],
              [3001, -470, 0],
              [2865, -463, 0],
              [2852, -533, 1, 2865, -463, 2809, -573],
              [2809, -573, 0],
              [2766, -613, 1, 2809, -573, 2692, -613],
              [2692, -613, 0],
              [2692, -613, 0],
              [2632, -613, 1, 2692, -613, 2588, -581],
              [2588, -581, 0],
              [2544, -549, 1, 2588, -581, 2520, -491],
              [2520, -491, 0],
              [2496, -433, 1, 2520, -491, 2496, -354],
              [2496, -354, 0],
              [2496, -354, 0],
              [2496, -274, 1, 2496, -354, 2520.5, -216.5],
              [2520.5, -216.5, 0],
              [2545, -159, 1, 2520.5, -216.5, 2589, -128],
              [2589, -128, 0],
              [2633, -97, 1, 2589, -128, 2691, -97],
              [2691, -97, 0],
              [2691, -97, 0],
              [2770, -97, 1, 2691, -97, 2813.5, -140.5],
              [2813.5, -140.5, 0],
              [2857, -184, 1, 2813.5, -140.5, 2869, -260],
              [2869, -260, 0],
              [2869, -260, 0],
              [3005, -253, 0],
              [2991, -170, 1, 3005, -253, 2951, -109.5],
              [2951, -109.5, 0],
              [2911, -49, 1, 2951, -109.5, 2845.5, -16.5],
              [2845.5, -16.5, 0],
              [2780, 16, 1, 2845.5, -16.5, 2691, 16],
              [2691, 16, 0],
            ],
          },
          {
            ch: `a`,
            d: `M3211 12L3211 12Q3127 12 3076 -26.5Q3025 -65 3025 -134L3025 -134Q3025 -203 3068 -242Q3111 -281 3199 -298L3199 -298L3376 -333Q3376 -390 3350 -418.5Q3324 -447 3273 -447L3273 -447Q3227 -447 3200.5 -425.5Q3174 -404 3164 -364L3164 -364L3034 -370Q3050 -455 3112 -500.5Q3174 -546 3273 -546L3273 -546Q3387 -546 3445.5 -488.5Q3504 -431 3504 -324L3504 -324L3504 -130Q3504 -109 3511.5 -101Q3519 -93 3534 -93L3534 -93L3551 -93L3551 0Q3545 2 3531.5 3Q3518 4 3504 4L3504 4Q3471 4 3445 -6.5Q3419 -17 3405 -43.5Q3391 -70 3391 -116L3391 -116L3402 -108Q3394 -73 3367.5 -45.5Q3341 -18 3301 -3Q3261 12 3211 12ZM3237 -81L3237 -81Q3280 -81 3311 -98Q3342 -115 3359 -145Q3376 -175 3376 -216L3376 -216L3376 -246L3238 -218Q3195 -209 3176.5 -191.5Q3158 -174 3158 -146L3158 -146Q3158 -115 3178.5 -98Q3199 -81 3237 -81Z`,
            x: 2986,
            w: 580,
            pts: [
              [3211, 12, 0],
              [3211, 12, 0],
              [3127, 12, 1, 3211, 12, 3076, -26.5],
              [3076, -26.5, 0],
              [3025, -65, 1, 3076, -26.5, 3025, -134],
              [3025, -134, 0],
              [3025, -134, 0],
              [3025, -203, 1, 3025, -134, 3068, -242],
              [3068, -242, 0],
              [3111, -281, 1, 3068, -242, 3199, -298],
              [3199, -298, 0],
              [3199, -298, 0],
              [3376, -333, 0],
              [3376, -390, 1, 3376, -333, 3350, -418.5],
              [3350, -418.5, 0],
              [3324, -447, 1, 3350, -418.5, 3273, -447],
              [3273, -447, 0],
              [3273, -447, 0],
              [3227, -447, 1, 3273, -447, 3200.5, -425.5],
              [3200.5, -425.5, 0],
              [3174, -404, 1, 3200.5, -425.5, 3164, -364],
              [3164, -364, 0],
              [3164, -364, 0],
              [3034, -370, 0],
              [3050, -455, 1, 3034, -370, 3112, -500.5],
              [3112, -500.5, 0],
              [3174, -546, 1, 3112, -500.5, 3273, -546],
              [3273, -546, 0],
              [3273, -546, 0],
              [3387, -546, 1, 3273, -546, 3445.5, -488.5],
              [3445.5, -488.5, 0],
              [3504, -431, 1, 3445.5, -488.5, 3504, -324],
              [3504, -324, 0],
              [3504, -324, 0],
              [3504, -130, 0],
              [3504, -109, 1, 3504, -130, 3511.5, -101],
              [3511.5, -101, 0],
              [3519, -93, 1, 3511.5, -101, 3534, -93],
              [3534, -93, 0],
              [3534, -93, 0],
              [3551, -93, 0],
              [3551, 0, 0],
              [3545, 2, 1, 3551, 0, 3531.5, 3],
              [3531.5, 3, 0],
              [3518, 4, 1, 3531.5, 3, 3504, 4],
              [3504, 4, 0],
              [3504, 4, 0],
              [3471, 4, 1, 3504, 4, 3445, -6.5],
              [3445, -6.5, 0],
              [3419, -17, 1, 3445, -6.5, 3405, -43.5],
              [3405, -43.5, 0],
              [3391, -70, 1, 3405, -43.5, 3391, -116],
              [3391, -116, 0],
              [3391, -116, 0],
              [3402, -108, 0],
              [3394, -73, 1, 3402, -108, 3367.5, -45.5],
              [3367.5, -45.5, 0],
              [3341, -18, 1, 3367.5, -45.5, 3301, -3],
              [3301, -3, 0],
              [3261, 12, 1, 3301, -3, 3211, 12],
              [3211, 12, 0],
              [3237, -81, 0],
              [3237, -81, 0],
              [3280, -81, 1, 3237, -81, 3311, -98],
              [3311, -98, 0],
              [3342, -115, 1, 3311, -98, 3359, -145],
              [3359, -145, 0],
              [3376, -175, 1, 3359, -145, 3376, -216],
              [3376, -216, 0],
              [3376, -216, 0],
              [3376, -246, 0],
              [3238, -218, 0],
              [3195, -209, 1, 3238, -218, 3176.5, -191.5],
              [3176.5, -191.5, 0],
              [3158, -174, 1, 3176.5, -191.5, 3158, -146],
              [3158, -146, 0],
              [3158, -146, 0],
              [3158, -115, 1, 3158, -146, 3178.5, -98],
              [3178.5, -98, 0],
              [3199, -81, 1, 3178.5, -98, 3237, -81],
              [3237, -81, 0],
            ],
          },
          {
            ch: `s`,
            d: `M3795 12L3795 12Q3714 12 3660.5 -11Q3607 -34 3579 -75Q3551 -116 3547 -168L3547 -168L3678 -174Q3685 -132 3712 -109Q3739 -86 3796 -86L3796 -86Q3841 -86 3864.5 -100.5Q3888 -115 3888 -146L3888 -146Q3888 -164 3879.5 -176Q3871 -188 3846.5 -197Q3822 -206 3775 -215L3775 -215Q3694 -229 3648 -249.5Q3602 -270 3583.5 -301Q3565 -332 3565 -378L3565 -378Q3565 -453 3622.5 -499.5Q3680 -546 3791 -546L3791 -546Q3868 -546 3917.5 -521.5Q3967 -497 3992.5 -456.5Q4018 -416 4022 -366L4022 -366L3892 -360Q3891 -385 3880 -405Q3869 -425 3847 -436.5Q3825 -448 3789 -448L3789 -448Q3744 -448 3720.5 -430Q3697 -412 3697 -382L3697 -382Q3697 -361 3706.5 -347Q3716 -333 3739 -324.5Q3762 -316 3802 -309L3802 -309Q3884 -297 3932 -276Q3980 -255 4000.5 -223.5Q4021 -192 4021 -148L4021 -148Q4021 -71 3959.5 -29.5Q3898 12 3795 12Z`,
            x: 3508,
            w: 553,
            pts: [
              [3795, 12, 0],
              [3795, 12, 0],
              [3714, 12, 1, 3795, 12, 3660.5, -11],
              [3660.5, -11, 0],
              [3607, -34, 1, 3660.5, -11, 3579, -75],
              [3579, -75, 0],
              [3551, -116, 1, 3579, -75, 3547, -168],
              [3547, -168, 0],
              [3547, -168, 0],
              [3678, -174, 0],
              [3685, -132, 1, 3678, -174, 3712, -109],
              [3712, -109, 0],
              [3739, -86, 1, 3712, -109, 3796, -86],
              [3796, -86, 0],
              [3796, -86, 0],
              [3841, -86, 1, 3796, -86, 3864.5, -100.5],
              [3864.5, -100.5, 0],
              [3888, -115, 1, 3864.5, -100.5, 3888, -146],
              [3888, -146, 0],
              [3888, -146, 0],
              [3888, -164, 1, 3888, -146, 3879.5, -176],
              [3879.5, -176, 0],
              [3871, -188, 1, 3879.5, -176, 3846.5, -197],
              [3846.5, -197, 0],
              [3822, -206, 1, 3846.5, -197, 3775, -215],
              [3775, -215, 0],
              [3775, -215, 0],
              [3694, -229, 1, 3775, -215, 3648, -249.5],
              [3648, -249.5, 0],
              [3602, -270, 1, 3648, -249.5, 3583.5, -301],
              [3583.5, -301, 0],
              [3565, -332, 1, 3583.5, -301, 3565, -378],
              [3565, -378, 0],
              [3565, -378, 0],
              [3565, -453, 1, 3565, -378, 3622.5, -499.5],
              [3622.5, -499.5, 0],
              [3680, -546, 1, 3622.5, -499.5, 3791, -546],
              [3791, -546, 0],
              [3791, -546, 0],
              [3868, -546, 1, 3791, -546, 3917.5, -521.5],
              [3917.5, -521.5, 0],
              [3967, -497, 1, 3917.5, -521.5, 3992.5, -456.5],
              [3992.5, -456.5, 0],
              [4018, -416, 1, 3992.5, -456.5, 4022, -366],
              [4022, -366, 0],
              [4022, -366, 0],
              [3892, -360, 0],
              [3891, -385, 1, 3892, -360, 3880, -405],
              [3880, -405, 0],
              [3869, -425, 1, 3880, -405, 3847, -436.5],
              [3847, -436.5, 0],
              [3825, -448, 1, 3847, -436.5, 3789, -448],
              [3789, -448, 0],
              [3789, -448, 0],
              [3744, -448, 1, 3789, -448, 3720.5, -430],
              [3720.5, -430, 0],
              [3697, -412, 1, 3720.5, -430, 3697, -382],
              [3697, -382, 0],
              [3697, -382, 0],
              [3697, -361, 1, 3697, -382, 3706.5, -347],
              [3706.5, -347, 0],
              [3716, -333, 1, 3706.5, -347, 3739, -324.5],
              [3739, -324.5, 0],
              [3762, -316, 1, 3739, -324.5, 3802, -309],
              [3802, -309, 0],
              [3802, -309, 0],
              [3884, -297, 1, 3802, -309, 3932, -276],
              [3932, -276, 0],
              [3980, -255, 1, 3932, -276, 4000.5, -223.5],
              [4000.5, -223.5, 0],
              [4021, -192, 1, 4000.5, -223.5, 4021, -148],
              [4021, -148, 0],
              [4021, -148, 0],
              [4021, -71, 1, 4021, -148, 3959.5, -29.5],
              [3959.5, -29.5, 0],
              [3898, 12, 1, 3959.5, -29.5, 3795, 12],
              [3795, 12, 0],
            ],
          },
          {
            ch: `t`,
            d: `M4381 0L4267 0Q4187 0 4149.5 -37Q4112 -74 4112 -153L4112 -153L4112 -659L4240 -659L4240 -165Q4240 -128 4256 -113.5Q4272 -99 4306 -99L4306 -99L4381 -99L4381 0ZM4381 -435L4028 -435L4028 -534L4381 -534L4381 -435Z`,
            x: 3983,
            w: 427,
            pts: [
              [4381, 0, 0],
              [4267, 0, 0],
              [4187, 0, 1, 4267, 0, 4149.5, -37],
              [4149.5, -37, 0],
              [4112, -74, 1, 4149.5, -37, 4112, -153],
              [4112, -153, 0],
              [4112, -153, 0],
              [4112, -659, 0],
              [4240, -659, 0],
              [4240, -165, 0],
              [4240, -128, 1, 4240, -165, 4256, -113.5],
              [4256, -113.5, 0],
              [4272, -99, 1, 4256, -113.5, 4306, -99],
              [4306, -99, 0],
              [4306, -99, 0],
              [4381, -99, 0],
              [4381, 0, 0],
              [4381, -435, 0],
              [4028, -435, 0],
              [4028, -534, 0],
              [4381, -534, 0],
              [4381, -435, 0],
            ],
          },
          {
            ch: `e`,
            d: `M4647 12L4647 12Q4567 12 4508 -22.5Q4449 -57 4417 -120Q4385 -183 4385 -267L4385 -267Q4385 -351 4417 -413.5Q4449 -476 4507.5 -511Q4566 -546 4644 -546L4644 -546Q4720 -546 4777.5 -512Q4835 -478 4866 -414Q4897 -350 4897 -260L4897 -260L4897 -231L4518 -231Q4522 -161 4556.5 -125.5Q4591 -90 4648 -90L4648 -90Q4691 -90 4719.5 -109.5Q4748 -129 4759 -164L4759 -164L4890 -156Q4868 -78 4803.5 -33Q4739 12 4647 12ZM4518 -317L4518 -317L4765 -317Q4761 -382 4728 -413.5Q4695 -445 4644 -445L4644 -445Q4593 -445 4559.5 -412Q4526 -379 4518 -317Z`,
            x: 4346,
            w: 591,
            pts: [
              [4647, 12, 0],
              [4647, 12, 0],
              [4567, 12, 1, 4647, 12, 4508, -22.5],
              [4508, -22.5, 0],
              [4449, -57, 1, 4508, -22.5, 4417, -120],
              [4417, -120, 0],
              [4385, -183, 1, 4417, -120, 4385, -267],
              [4385, -267, 0],
              [4385, -267, 0],
              [4385, -351, 1, 4385, -267, 4417, -413.5],
              [4417, -413.5, 0],
              [4449, -476, 1, 4417, -413.5, 4507.5, -511],
              [4507.5, -511, 0],
              [4566, -546, 1, 4507.5, -511, 4644, -546],
              [4644, -546, 0],
              [4644, -546, 0],
              [4720, -546, 1, 4644, -546, 4777.5, -512],
              [4777.5, -512, 0],
              [4835, -478, 1, 4777.5, -512, 4866, -414],
              [4866, -414, 0],
              [4897, -350, 1, 4866, -414, 4897, -260],
              [4897, -260, 0],
              [4897, -260, 0],
              [4897, -231, 0],
              [4518, -231, 0],
              [4522, -161, 1, 4518, -231, 4556.5, -125.5],
              [4556.5, -125.5, 0],
              [4591, -90, 1, 4556.5, -125.5, 4648, -90],
              [4648, -90, 0],
              [4648, -90, 0],
              [4691, -90, 1, 4648, -90, 4719.5, -109.5],
              [4719.5, -109.5, 0],
              [4748, -129, 1, 4719.5, -109.5, 4759, -164],
              [4759, -164, 0],
              [4759, -164, 0],
              [4890, -156, 0],
              [4868, -78, 1, 4890, -156, 4803.5, -33],
              [4803.5, -33, 0],
              [4739, 12, 1, 4803.5, -33, 4647, 12],
              [4647, 12, 0],
              [4518, -317, 0],
              [4518, -317, 0],
              [4765, -317, 0],
              [4761, -382, 1, 4765, -317, 4728, -413.5],
              [4728, -413.5, 0],
              [4695, -445, 1, 4728, -413.5, 4644, -445],
              [4644, -445, 0],
              [4644, -445, 0],
              [4593, -445, 1, 4644, -445, 4559.5, -412],
              [4559.5, -412, 0],
              [4526, -379, 1, 4559.5, -412, 4518, -317],
              [4518, -317, 0],
            ],
          },
          {
            ch: `l`,
            d: `M5159 0L5080 0Q5022 0 4987 -30Q4952 -60 4952 -126L4952 -126L4952 -710L5080 -710L5080 -139Q5080 -119 5090.5 -109Q5101 -99 5120 -99L5120 -99L5159 -99L5159 0Z`,
            x: 4882,
            w: 297,
            pts: [
              [5159, 0, 0],
              [5080, 0, 0],
              [5022, 0, 1, 5080, 0, 4987, -30],
              [4987, -30, 0],
              [4952, -60, 1, 4987, -30, 4952, -126],
              [4952, -126, 0],
              [4952, -126, 0],
              [4952, -710, 0],
              [5080, -710, 0],
              [5080, -139, 0],
              [5080, -119, 1, 5080, -139, 5090.5, -109],
              [5090.5, -109, 0],
              [5101, -99, 1, 5090.5, -109, 5120, -99],
              [5120, -99, 0],
              [5120, -99, 0],
              [5159, -99, 0],
              [5159, 0, 0],
            ],
          },
          {
            ch: `l`,
            d: `M5396 0L5317 0Q5259 0 5224 -30Q5189 -60 5189 -126L5189 -126L5189 -710L5317 -710L5317 -139Q5317 -119 5327.5 -109Q5338 -99 5357 -99L5357 -99L5396 -99L5396 0Z`,
            x: 5119,
            w: 297,
            pts: [
              [5396, 0, 0],
              [5317, 0, 0],
              [5259, 0, 1, 5317, 0, 5224, -30],
              [5224, -30, 0],
              [5189, -60, 1, 5224, -30, 5189, -126],
              [5189, -126, 0],
              [5189, -126, 0],
              [5189, -710, 0],
              [5317, -710, 0],
              [5317, -139, 0],
              [5317, -119, 1, 5317, -139, 5327.5, -109],
              [5327.5, -109, 0],
              [5338, -99, 1, 5327.5, -109, 5357, -99],
              [5357, -99, 0],
              [5357, -99, 0],
              [5396, -99, 0],
              [5396, 0, 0],
            ],
          },
        ],
      }),
      (_t = 1440),
      (vt = 900),
      (yt = 200),
      (R = {
        out: (e) => 1 - (1 - e) ** 4,
        expo: (e) => (e >= 1 ? 1 : 1 - 2 ** (-10 * e)),
        inOut: (e) => (e < 0.5 ? 8 * e * e * e * e : 1 - (-2 * e + 2) ** 4 / 2),
        back: (e) => 1 + 2.56 * (e - 1) ** 3 + 1.56 * (e - 1) ** 2,
      }),
      (bt = (e, t = 0, n = 1) => Math.min(n, Math.max(t, e))),
      (z = (e, t, n) => bt((e - t) / (n - t))),
      (B = (e, t, n) => e + (t - e) * n),
      (xt = 12.4),
      (St = (e) => `https://images.unsplash.com/photo-${e}?w=1600&q=80&auto=format&fit=crop`),
      (Ct = [
        { src: St(`1498050108023-c5249f4df085`), alt: `Orrin` },
        { src: St(`1576091160399-112ba8d25d1d`), alt: `Quayside` },
        { src: St(`1493809842364-78817add7ffb`), alt: `Holm & Hearth` },
        { src: St(`1464822759023-fed622ff2c3b`), alt: `Vale` },
      ]),
      (V = `'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace`),
      (H = `Geist, 'Inter Display', Inter, system-ui, sans-serif`),
      (wt = `#FF5B24`),
      (Tt = `#10B37A`),
      (Et = `#FF3D6E`),
      h(lt, {
        name: { type: C.String, title: `Name`, defaultValue: `Noor Castell` },
        statementMuted: { type: C.String, title: `Lead-in`, defaultValue: `Product designer in Rotterdam.` },
        statement: {
          type: C.String,
          title: `Statement`,
          displayTextArea: !0,
          defaultValue: `I turn complicated workflows into software people actually keep open.`,
        },
        currentRole: { type: C.String, title: `Current role`, defaultValue: `Design lead at Orrin` },
        availability: { type: C.String, title: `Availability`, defaultValue: `Booking projects from November` },
        primaryLabel: { type: C.String, title: `Button 1`, defaultValue: `See selected work` },
        primaryLink: { type: C.Link, title: `Button 1 link`, defaultValue: `#work` },
        secondaryLabel: { type: C.String, title: `Button 2`, defaultValue: `Book a 20-min intro` },
        secondaryLink: { type: C.Link, title: `Button 2 link`, defaultValue: `/contact` },
        photo: { type: C.ResponsiveImage, title: `Photo` },
        photoName: { type: C.String, title: `Photo label`, defaultValue: `at-the-desk.jpg` },
        projectName: { type: C.String, title: `Project`, defaultValue: `Orrin` },
        projectAmount: { type: C.String, title: `Project figure`, defaultValue: `€12,480.00` },
        commentAuthor: { type: C.String, title: `Comment by`, defaultValue: `Mara · PM` },
        commentText: {
          type: C.String,
          title: `Comment`,
          displayTextArea: !0,
          defaultValue: `Can the name go bigger? It's the first thing a client reads.`,
        },
        replyAuthor: { type: C.String, title: `Reply by`, defaultValue: `Theo · Eng` },
        replyText: { type: C.String, title: `Reply`, defaultValue: `Bumped it to 208. Shipping.` },
        accent: { type: C.Color, title: `Selection`, defaultValue: `#4B3BFF` },
        ink: { type: C.Color, title: `Ink`, defaultValue: `#0C0C0E` },
        canvas: { type: C.Color, title: `Canvas`, defaultValue: `#ECECE8` },
        fills: { type: C.Array, title: `Name fills`, control: { type: C.ResponsiveImage }, maxCount: 6 },
        fontUrl: {
          type: C.String,
          title: `Outline font (TTF)`,
          defaultValue: `https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_RQuQ4nQ.ttf`,
        },
        showToolbar: { type: C.Boolean, title: `Built-in file bar`, defaultValue: !1 },
        previewTime: { type: C.Number, title: `Preview time`, defaultValue: -1, min: -1, max: 14, step: 0.1 },
        previewScroll: { type: C.Number, title: `Preview scroll`, defaultValue: -1, min: -1, max: 1, step: 0.01 },
      });
  });
function Ot() {
  i(() => {
    if (typeof document > `u` || document.getElementById(`lf-fonts`)) return;
    let e = document.createElement(`link`);
    (e.id = `lf-fonts`),
      (e.rel = `stylesheet`),
      (e.href = `https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap`),
      document.head.appendChild(e);
  }, []);
}
function kt(e, t = 1440) {
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
function At(e, t) {
  if (p === void 0) return;
  let n = p;
  (n.__layerfolio = n.__layerfolio || {}), (n.__layerfolio[e] = { ready: Promise.resolve(!0), ...t });
}
function jt() {
  return u(`style`, { children: Bt });
}
function Mt({ s: e = 14 }) {
  return u(`svg`, {
    width: e,
    height: e,
    viewBox: `0 0 14 14`,
    "aria-hidden": !0,
    children: u(`path`, { d: `M2 7h10M8 3l4 4-4 4`, stroke: `currentColor`, strokeWidth: `1.6`, fill: `none` }),
  });
}
function Nt({ n: e, t, color: n }) {
  return f(`div`, {
    className: `lf-kick`,
    style: n ? { color: n } : void 0,
    children: [f(`b`, { children: [`[`, e, `]`] }), t],
  });
}
function Pt(e) {
  let t = (e || `#ffffff`).replace(`#`, ``).slice(0, 6);
  return (
    (parseInt(t.slice(0, 2), 16) * 0.3 + parseInt(t.slice(2, 4), 16) * 0.59 + parseInt(t.slice(4, 6), 16) * 0.11) /
      255 <
    0.5
  );
}
function Ft(e, t) {
  let n = (e || `#ffffff`).replace(`#`, ``).slice(0, 6);
  return `rgba(${parseInt(n.slice(0, 2), 16)},${parseInt(n.slice(2, 4), 16)},${parseInt(n.slice(4, 6), 16)},${t})`;
}
function It({ pr: e, e: t, accent: n = `#4B3BFF`, labels: r = !0, gapPx: i = 70, active: a = -1 }) {
  let o = i * t,
    s = Pt(e.bg),
    c = s ? `rgba(255,255,255,.64)` : `rgba(0,0,0,.56)`,
    ee = Pt(e.brand) ? `#fff` : `#111`,
    te = {
      position: `absolute`,
      background: s ? `rgba(30,31,34,.94)` : `#fff`,
      color: e.fg,
      borderRadius: 16,
      boxShadow: `0 ${18 + t * 24}px ${44 + t * 30}px -18px rgba(0,0,0,${0.34 + t * 0.16})`,
      border: s ? `1px solid rgba(255,255,255,.08)` : `1px solid rgba(0,0,0,.06)`,
      padding: `16px 18px`,
      fontFamily: U,
    },
    d = (e, i, s = {}) =>
      f(
        `div`,
        {
          style: {
            position: `absolute`,
            left: 0,
            top: 0,
            width: J,
            height: Y,
            transform: `translateZ(${e * o}px)`,
            transformStyle: `preserve-3d`,
            ...s,
          },
          children: [
            i,
            r &&
              f(`div`, {
                style: {
                  position: `absolute`,
                  right: 976,
                  top: Y - 26,
                  opacity: G(t * 1.6 - 0.3),
                  transform: `translateX(${(1 - t) * 10}px)`,
                  display: `flex`,
                  alignItems: `center`,
                  gap: 8,
                  whiteSpace: `nowrap`,
                },
                children: [
                  f(`div`, {
                    style: {
                      font: `500 15px/1 ${W}`,
                      color: `#fff`,
                      background: e === a ? `#0C0C0E` : n,
                      padding: `7px 10px`,
                      borderRadius: 5,
                      transition: `background .3s`,
                    },
                    children: [String(e + 1).padStart(2, `0`), ` `, Vt[e]],
                  }),
                  u(`div`, { style: { width: 26, height: 1.5, background: n } }),
                ],
              }),
            u(`div`, {
              style: {
                position: `absolute`,
                inset: -1,
                border: `1.5px solid ${n}`,
                opacity: G(t * 1.4) * (e === 0 ? 0 : e === a ? 1 : 0.45),
                borderRadius: 16,
                pointerEvents: `none`,
              },
            }),
          ],
        },
        e
      );
  return f(`div`, {
    style: { position: `absolute`, left: 0, top: 0, width: J, height: Y, transformStyle: `preserve-3d` },
    children: [
      d(
        0,
        u(`div`, {
          style: {
            position: `absolute`,
            inset: 0,
            background: e.bg,
            borderRadius: 16,
            boxShadow: `0 ${30 + 60 * t}px ${70 + 80 * t}px -30px rgba(12,12,14,${0.34 + 0.22 * t})`,
            overflow: `hidden`,
          },
          children: u(`div`, {
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
      d(
        1,
        u(`div`, {
          style: {
            position: `absolute`,
            inset: `0 48px`,
            display: `grid`,
            gridTemplateColumns: `repeat(12,1fr)`,
            gap: 20,
            opacity: 0.18 + 0.4 * G(t * 2 - 0.2),
          },
          children: Array.from({ length: 12 }).map((e, t) =>
            u(
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
        { opacity: G(t * 3) }
      ),
      d(
        2,
        u(`div`, {
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
              ? u(`img`, {
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
      d(
        3,
        f(l, {
          children: [
            f(`div`, {
              style: { ...te, left: 380, top: 372, width: 268 },
              children: [
                f(`div`, {
                  style: { font: `500 12px/1 ${U}`, color: c, display: `flex`, justifyContent: `space-between` },
                  children: [
                    u(`span`, { children: e.client || e.name }),
                    u(`span`, {
                      style: { width: 8, height: 8, borderRadius: 8, background: e.brand, display: `inline-block` },
                    }),
                  ],
                }),
                u(`div`, {
                  style: { font: `600 26px/1.05 ${U}`, letterSpacing: `-0.035em`, marginTop: 12 },
                  children: e.cardA,
                }),
                u(`div`, { style: { font: `400 12px/1.35 ${U}`, color: c, marginTop: 6 }, children: e.cardASub }),
                u(`div`, {
                  style: {
                    marginTop: 14,
                    height: 36,
                    borderRadius: 9,
                    background: e.brand,
                    color: ee,
                    display: `flex`,
                    alignItems: `center`,
                    justifyContent: `center`,
                    font: `600 13px/1 ${U}`,
                  },
                  children: `Continue`,
                }),
              ],
            }),
            f(`div`, {
              style: {
                ...te,
                left: 660,
                top: 132,
                padding: `11px 14px`,
                display: `flex`,
                alignItems: `center`,
                gap: 9,
                font: `500 13px/1 ${U}`,
                whiteSpace: `nowrap`,
              },
              children: [
                u(`span`, {
                  style: {
                    width: 20,
                    height: 20,
                    borderRadius: 20,
                    background: e.brand,
                    display: `inline-flex`,
                    alignItems: `center`,
                    justifyContent: `center`,
                    color: ee,
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
      d(
        4,
        f(`div`, {
          style: { position: `absolute`, inset: 0, color: e.fg, fontFamily: U },
          children: [
            f(`div`, {
              style: {
                position: `absolute`,
                left: 48,
                top: 34,
                right: 48,
                display: `flex`,
                alignItems: `center`,
                gap: 26,
                font: `500 14px/1 ${U}`,
              },
              children: [
                f(`span`, {
                  style: {
                    font: `700 19px/1 ${U}`,
                    letterSpacing: `-0.03em`,
                    display: `flex`,
                    alignItems: `center`,
                    gap: 8,
                  },
                  children: [
                    u(`span`, { style: { width: 16, height: 16, borderRadius: 5, background: e.brand } }),
                    e.name,
                  ],
                }),
                u(`span`, { style: { marginLeft: `auto`, opacity: 0.7 }, children: `Product` }),
                u(`span`, { style: { opacity: 0.7 }, children: `Pricing` }),
                u(`span`, { style: { opacity: 0.7 }, children: `Stories` }),
                u(`span`, {
                  style: { padding: `10px 14px`, borderRadius: 9, background: e.fg, color: e.bg },
                  children: `Get started`,
                }),
              ],
            }),
            u(`div`, {
              style: {
                position: `absolute`,
                left: 48,
                top: 140,
                width: 380,
                font: `600 56px/0.96 ${U}`,
                letterSpacing: `-0.05em`,
                textWrap: `balance`,
              },
              children: e.headline,
            }),
            f(`div`, {
              style: {
                position: `absolute`,
                left: 48,
                top: 318,
                width: 300,
                font: `400 15px/1.45 ${U}`,
                opacity: 0.72,
              },
              children: [(e.summary || ``).split(/[,.;]/)[0], `.`],
            }),
          ],
        }),
        { background: t > 0.01 ? Ft(e.bg, 0.55 * G(t * 1.5)) : `transparent`, borderRadius: 16 }
      ),
      d(
        5,
        f(`svg`, {
          width: J,
          height: Y,
          style: { position: `absolute`, left: 0, top: 0, overflow: `visible` },
          children: [
            [
              [48, 176, 48, 140, `36`],
              [452, 80, 452, 104, `24`],
              [428, 300, 452, 300, `24`],
              [648, 460, 660, 460, `12`],
            ].map((e, t) =>
              f(
                `g`,
                {
                  children: [
                    u(`line`, { x1: e[0], y1: e[1], x2: e[2], y2: e[3], stroke: `#FF3D6E`, strokeWidth: 1.4 }),
                    u(`rect`, {
                      x: (e[0] + e[2]) / 2 - 15,
                      y: (e[1] + e[3]) / 2 - 9,
                      width: 30,
                      height: 18,
                      rx: 4,
                      fill: `#FF3D6E`,
                    }),
                    u(`text`, {
                      x: (e[0] + e[2]) / 2,
                      y: (e[1] + e[3]) / 2 + 4,
                      textAnchor: `middle`,
                      fill: `#fff`,
                      style: { font: `500 11px ${W}` },
                      children: e[4],
                    }),
                  ],
                },
                t
              )
            ),
            u(`line`, {
              x1: 48,
              y1: 0,
              x2: 48,
              y2: Y,
              stroke: `#FF3D6E`,
              strokeWidth: 0.9,
              strokeDasharray: `4 4`,
              opacity: 0.7,
            }),
            u(`line`, {
              x1: J - 48,
              y1: 0,
              x2: J - 48,
              y2: Y,
              stroke: `#FF3D6E`,
              strokeWidth: 0.9,
              strokeDasharray: `4 4`,
              opacity: 0.7,
            }),
            f(`g`, {
              transform: `translate(${J - 70} 86)`,
              children: [
                u(`circle`, { cx: 0, cy: 0, r: 15, fill: `#FF5B24`, stroke: `#fff`, strokeWidth: 2.5 }),
                u(`text`, {
                  x: 0,
                  y: 4.5,
                  textAnchor: `middle`,
                  fill: `#fff`,
                  style: { font: `600 12px ${U}` },
                  children: `M`,
                }),
              ],
            }),
          ],
        }),
        { opacity: G(t * 2.2 - 0.2) }
      ),
    ],
  });
}
function Lt(e) {
  let {
      kicker: t = `Selected work`,
      number: r = `04`,
      accent: o = `#4B3BFF`,
      ink: s = `#0C0C0E`,
      canvas: c = `#ECECE8`,
      linkLabel: te = `Read the case study`,
      previewScroll: d = -1,
    } = e,
    ne = e.projects && e.projects.length ? e.projects : Ht;
  Ot();
  let re = ve(),
    ie = d >= 0 || re,
    ae = a(null),
    [oe, se] = n(d >= 0 ? d : re ? 0.09 : 0),
    [m, h] = n(900),
    [g, ce] = n(-1),
    le = kt(ae);
  i(() => {
    if (p === void 0) return;
    let e = () => h(p.innerHeight || 900);
    return e(), p.addEventListener(`resize`, e), () => p.removeEventListener(`resize`, e);
  }, []),
    i(() => {
      if (ie || p === void 0) return;
      let e = 0,
        t = -1,
        n = () => {
          e = 0;
          let r = ae.current;
          if (!r) return;
          let i = r.getBoundingClientRect(),
            a = G(-i.top / Math.max(1, i.height - p.innerHeight));
          (t = t < 0 ? a : t + (a - t) * 0.18),
            Math.abs(t - a) < 5e-4 && (t = a),
            se(t),
            t !== a && (e = requestAnimationFrame(n));
        },
        r = () => {
          e ||= requestAnimationFrame(n);
        };
      return (
        r(),
        p.addEventListener(`scroll`, r, { passive: !0 }),
        p.addEventListener(`resize`, r),
        () => {
          p.removeEventListener(`scroll`, r), p.removeEventListener(`resize`, r), e && cancelAnimationFrame(e);
        }
      );
    }, [ie]),
    i(() => {
      At(`work`, { render: (e) => ee(() => se(e)) });
    }, []);
  let ue = ne.length,
    de = oe * ue,
    _ = Math.min(ue - 1, Math.floor(de)),
    v = de - _,
    y = _ === ue - 1,
    b = zt.io3(K(v, 0.1, 0.46)) * (y ? 1 : 1 - zt.io3(K(v, 0.76, 0.94))),
    fe = y ? 0 : zt.inOut(K(v, 0.88, 1)),
    pe = _ === 0 ? 1 : zt.out(K(v, 0, 0.12)),
    me = ne[_],
    x = { ...me, image: me.image && me.image.src ? me.image : Ht[_ % Ht.length].image },
    he = v <= 0.001 ? 1 : zt.out(K(v, 0, 0.3)),
    ge = (e) => {
      let t = String(e).match(/^([^\d]*)([\d.,]+)(.*)$/);
      if (!t) return e;
      let n = parseFloat(t[2].replace(/,/g, ``)),
        r = (t[2].split(`.`)[1] || ``).length,
        i = n * he;
      return t[1] + (r ? i.toFixed(r) : Math.round(i).toLocaleString(`en-US`)) + t[3];
    },
    S = y ? 0 : zt.inOut(K(v, 0.86, 0.98)),
    _e = _ === 0 ? 1 : zt.out(K(v, 0, 0.14)),
    ye = _e * (1 - S),
    C = (1 - _e) * 24 - S * 24,
    be = g >= 0 ? g : b > 0.05 ? Math.min(5, Math.floor(K(v, 0.2, 0.72) * 6)) : -1,
    w = le < 1e3,
    xe = q(0, w ? 50 : 54, b),
    T = q(0, -34, b),
    Se = `rgba(12,12,14,.10)`,
    E = w ? 420 : 1440,
    Ce = w ? 860 : 900,
    D = Math.min(le / E, m / Ce),
    we = (le - E * D) / 2,
    O = u(`div`, {
      style: { display: `flex`, gap: 6, flexWrap: `wrap` },
      children: ne.map((e, t) =>
        f(
          `div`,
          {
            style: {
              font: `500 ${w ? 10 : 11}px/1 ${W}`,
              letterSpacing: `.05em`,
              textTransform: `uppercase`,
              padding: `6px 9px`,
              borderRadius: 6,
              background: t === _ ? s : `transparent`,
              color: t === _ ? `#fff` : `rgba(12,12,14,.5)`,
              transition: `background .3s, color .3s`,
            },
            children: [String(t + 1).padStart(2, `0`), w ? `` : ` ` + e.name],
          },
          t
        )
      ),
    }),
    k = u(`div`, {
      style: {
        display: `grid`,
        gridTemplateColumns: `repeat(3, 1fr)`,
        gap: w ? 10 : 18,
        marginTop: w ? 16 : 30,
        paddingTop: w ? 14 : 20,
        borderTop: `1px solid ${Se}`,
      },
      children: [
        [x.stat1, x.stat1Label],
        [x.stat2, x.stat2Label],
        [x.stat3, x.stat3Label],
      ].map(([e, t], n) =>
        f(
          `div`,
          {
            children: [
              u(`div`, {
                style: {
                  font: `600 ${w ? 24 : 34}px/1 ${U}`,
                  letterSpacing: `-0.045em`,
                  fontVariantNumeric: `tabular-nums`,
                },
                children: ge(e),
              }),
              u(`div`, {
                style: { font: `400 ${w ? 11 : 12.5}px/1.35 ${U}`, color: `rgba(12,12,14,.56)`, marginTop: 7 },
                children: t,
              }),
            ],
          },
          n
        )
      ),
    }),
    A = (e, t) =>
      u(`div`, {
        style: {
          position: `absolute`,
          left: 0,
          top: 0,
          width: J,
          height: Y,
          transformStyle: `preserve-3d`,
          transform: `translate3d(${fe * 1100}px, ${fe * -160 + (1 - pe) * 300}px, 0) rotateX(${xe}deg) rotateZ(${T}deg) scale(${q(e, t, b)})`,
          opacity: pe * (1 - fe * 0.9),
          transformOrigin: `50% 50%`,
        },
        children: u(It, { pr: x, e: b, accent: o, active: be, labels: !w, gapPx: w ? 60 : 72 }),
      });
  return f(`div`, {
    ref: ae,
    style: {
      ...e.style,
      position: `relative`,
      width: `100%`,
      height: `100%`,
      minHeight: 900,
      background: c,
      fontFamily: U,
      color: s,
      "--lf-acc": o,
    },
    children: [
      u(jt, {}),
      u(`div`, {
        "aria-hidden": !0,
        style: {
          position: `absolute`,
          left: 0,
          top: 0,
          width: 1,
          height: 1,
          overflow: `hidden`,
          opacity: 0.01,
          pointerEvents: `none`,
        },
        children: ne.map((e, t) =>
          u(
            `img`,
            { src: e.image && e.image.src ? e.image.src : Ht[t % Ht.length].image.src, alt: ``, width: 1, height: 1 },
            t
          )
        ),
      }),
      f(`div`, {
        style: { position: `sticky`, top: 0, height: ie ? m : `100vh`, minHeight: 560, overflow: `hidden` },
        children: [
          u(`div`, {
            "aria-hidden": !0,
            style: {
              position: `absolute`,
              inset: 0,
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(12,12,14,0.15) 1px, transparent 1.2px)`,
              backgroundSize: `24px 24px`,
            },
          }),
          u(`div`, {
            "aria-hidden": !0,
            style: {
              position: `absolute`,
              inset: 0,
              background: `radial-gradient(900px 640px at ${w ? `50% 30%` : `70% 55%`}, rgba(255,255,255,.85), rgba(255,255,255,0) 70%)`,
            },
          }),
          u(`div`, {
            style: {
              position: `absolute`,
              left: we,
              top: 0,
              width: E,
              height: Ce,
              transform: `scale(${D})`,
              transformOrigin: `0 0`,
            },
            children: w
              ? f(l, {
                  children: [
                    f(`div`, {
                      style: {
                        position: `absolute`,
                        left: 20,
                        top: 76,
                        right: 20,
                        display: `flex`,
                        justifyContent: `space-between`,
                        alignItems: `center`,
                      },
                      children: [u(Nt, { n: r, t }), O],
                    }),
                    u(`div`, {
                      style: {
                        position: `absolute`,
                        left: 20,
                        top: 128 + 26 * b,
                        width: 380,
                        height: 300,
                        perspective: 1800,
                        perspectiveOrigin: `50% 10%`,
                      },
                      children: u(`div`, {
                        style: {
                          position: `absolute`,
                          left: (380 - J) / 2,
                          top: (240 - Y) / 2 + 20 * b,
                          width: J,
                          height: Y,
                        },
                        children: A(0.395, 0.3),
                      }),
                    }),
                    f(`div`, {
                      style: {
                        position: `absolute`,
                        left: 20,
                        top: 432,
                        width: 380,
                        opacity: ye,
                        transform: `translateY(${C}px)`,
                      },
                      children: [
                        f(`div`, {
                          style: { font: `500 11px/1 ${W}`, color: `rgba(12,12,14,.5)` },
                          children: [x.client, ` · `, x.year],
                        }),
                        u(`h3`, {
                          style: { margin: `12px 0 0`, font: `600 52px/0.94 ${U}`, letterSpacing: `-0.055em` },
                          children: x.name,
                        }),
                        u(`p`, {
                          style: { margin: `12px 0 0`, font: `400 16px/1.45 ${U}`, color: `rgba(12,12,14,.78)` },
                          children: x.summary,
                        }),
                        k,
                        f(`a`, {
                          href: x.link,
                          className: `lf-l`,
                          style: { marginTop: 20 },
                          children: [te, u(Mt, {})],
                        }),
                      ],
                    }),
                  ],
                })
              : f(l, {
                  children: [
                    f(`div`, {
                      style: {
                        position: `absolute`,
                        left: 64,
                        top: 92,
                        right: 64,
                        display: `flex`,
                        alignItems: `center`,
                        gap: 14,
                      },
                      children: [u(Nt, { n: r, t }), u(`div`, { style: { flex: 1, height: 1, background: Se } }), O],
                    }),
                    f(`div`, {
                      style: {
                        position: `absolute`,
                        left: 64,
                        top: 170,
                        width: 440,
                        opacity: ye,
                        transform: `translateY(${C}px)`,
                      },
                      children: [
                        f(`div`, {
                          style: { font: `500 12px/1 ${W}`, color: `rgba(12,12,14,.5)`, display: `flex`, gap: 10 },
                          children: [
                            u(`span`, { children: x.client }),
                            u(`span`, { children: `·` }),
                            u(`span`, { children: x.year }),
                          ],
                        }),
                        u(`h3`, {
                          style: {
                            margin: `18px 0 0`,
                            font: `600 ${x.name.length > 9 ? 66 : 84}px/0.92 ${U}`,
                            letterSpacing: `-0.055em`,
                          },
                          children: x.name,
                        }),
                        u(`p`, {
                          style: {
                            margin: `20px 0 0`,
                            font: `400 19px/1.45 ${U}`,
                            letterSpacing: `-0.015em`,
                            color: `rgba(12,12,14,.78)`,
                          },
                          children: x.summary,
                        }),
                        k,
                        u(`div`, {
                          style: { display: `flex`, flexWrap: `wrap`, gap: 6, marginTop: 24 },
                          children: String(x.tags || ``)
                            .split(`,`)
                            .map((e) =>
                              u(
                                `span`,
                                {
                                  style: {
                                    font: `500 11px/1 ${W}`,
                                    textTransform: `uppercase`,
                                    letterSpacing: `0.04em`,
                                    padding: `7px 9px`,
                                    borderRadius: 6,
                                    border: `1px solid ${Se}`,
                                    background: `rgba(255,255,255,.65)`,
                                  },
                                  children: e.trim(),
                                },
                                e
                              )
                            ),
                        }),
                        f(`a`, {
                          href: x.link,
                          className: `lf-l`,
                          style: { marginTop: 28 },
                          children: [te, u(Mt, {})],
                        }),
                      ],
                    }),
                    u(`div`, {
                      style: {
                        position: `absolute`,
                        left: 64,
                        top: 760,
                        width: 440,
                        display: `flex`,
                        gap: 6,
                        flexWrap: `wrap`,
                        opacity: G(b * 2),
                      },
                      children: Vt.map((e, t) =>
                        f(
                          `div`,
                          {
                            onMouseEnter: () => ce(t),
                            onMouseLeave: () => ce(-1),
                            style: {
                              font: `500 11px/1 ${W}`,
                              padding: `7px 9px`,
                              borderRadius: 6,
                              background: t === be ? o : `rgba(12,12,14,.05)`,
                              color: t === be ? `#fff` : `rgba(12,12,14,.6)`,
                              cursor: `default`,
                              transition: `background .25s, color .25s`,
                            },
                            children: [String(t + 1).padStart(2, `0`), ` `, e],
                          },
                          e
                        )
                      ),
                    }),
                    f(`div`, {
                      style: {
                        position: `absolute`,
                        left: 540,
                        top: 170,
                        width: 860,
                        height: 640,
                        perspective: 2800,
                        perspectiveOrigin: `50% 20%`,
                      },
                      children: [
                        u(`div`, {
                          style: {
                            position: `absolute`,
                            left: (860 - J) / 2 + 40 * b,
                            top: 40 + 70 * b,
                            width: J,
                            height: Y,
                          },
                          children: A(0.86, 0.66),
                        }),
                        f(`div`, {
                          style: {
                            position: `absolute`,
                            left: (860 - J * 0.86) / 2,
                            top: 58,
                            font: `500 11px/1 ${W}`,
                            color: `rgba(12,12,14,.5)`,
                            opacity: (1 - G(b * 3)) * pe * (1 - fe),
                          },
                          children: [
                            u(`span`, { style: { color: o }, children: `#` }),
                            ` `,
                            x.name,
                            ` — Hero · 1920 × 1200`,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
          }),
        ],
      }),
    ],
  });
}
var U,
  W,
  Rt,
  G,
  K,
  q,
  zt,
  Bt,
  J,
  Y,
  Vt,
  Ht,
  X = e(() => {
    r(),
      ne(),
      re(),
      d(),
      ue(),
      (U = `Geist, 'Inter Display', Inter, system-ui, sans-serif`),
      (W = `'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace`),
      (Rt = `cubic-bezier(.22,1,.36,1)`),
      (G = (e, t = 0, n = 1) => Math.min(n, Math.max(t, e))),
      (K = (e, t, n) => G((e - t) / (n - t))),
      (q = (e, t, n) => e + (t - e) * n),
      (zt = {
        out: (e) => 1 - (1 - e) ** 4,
        inOut: (e) => (e < 0.5 ? 8 * e * e * e * e : 1 - (-2 * e + 2) ** 4 / 2),
        io3: (e) => (e < 0.5 ? 4 * e * e * e : 1 - (-2 * e + 2) ** 3 / 2),
      }),
      (Bt = `
section[class^="lf"] *,footer[class^="lf"] *,header[class^="lf"] *,article[class^="lf"] *,section[class^="lf"],footer[class^="lf"],header[class^="lf"],article[class^="lf"]{box-sizing:border-box}
.lf-kick{font:500 11px/1 ${W};letter-spacing:.05em;text-transform:uppercase;color:rgba(12,12,14,.55);display:flex;align-items:center;gap:10px}
.lf-kick b{font-weight:500;color:var(--lf-acc,#4B3BFF)}
.lf-b{height:48px;padding:0 20px;border-radius:10px;display:inline-flex;align-items:center;gap:10px;font:500 15px/1 ${U};letter-spacing:-.015em;text-decoration:none;white-space:nowrap;transition:transform .35s ${Rt},box-shadow .35s ${Rt},background .2s,color .2s;cursor:pointer;border:0}
.lf-b:hover{transform:translateY(-2px);box-shadow:0 14px 26px -14px rgba(12,12,14,.55)}
.lf-b:active{transform:translateY(0) scale(.98)}
.lf-b:focus-visible,.lf-l:focus-visible{outline:2px solid var(--lf-acc,#4B3BFF);outline-offset:3px}
.lf-b.ink{background:#0C0C0E;color:#fff}.lf-b.acc{background:var(--lf-acc,#4B3BFF);color:#fff}.lf-b.ghost{background:rgba(255,255,255,.9);color:#0C0C0E;box-shadow:inset 0 0 0 1px rgba(12,12,14,.12)}
.lf-b svg{transition:transform .35s ${Rt}}.lf-b:hover svg{transform:translateX(3px)}
.lf-l{display:inline-flex;align-items:center;gap:10px;font:500 15px/1 ${U};letter-spacing:-.01em;text-decoration:none;color:inherit;padding-bottom:6px;border-bottom:1.5px solid currentColor;transition:gap .35s ${Rt},color .2s}
.lf-l:hover{gap:16px;color:var(--lf-acc,#4B3BFF)}
.lf-rv{transition:opacity .8s ${Rt},transform .8s ${Rt},filter .8s ${Rt}}
.lf-rv[data-seen="false"]{opacity:0;transform:translateY(18px);filter:blur(4px)}
@media (prefers-reduced-motion: reduce){.lf-rv{transition:none!important}.lf-rv[data-seen="false"]{opacity:1;transform:none;filter:none}}
`),
      (J = 960),
      (Y = 600),
      (Vt = [`Background`, `Layout grid`, `Hero image`, `UI cards`, `Type`, `Redlines`]),
      (Ht = {
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
      }.cases
        .slice(0, 4)
        .map((e) => ({ ...e, link: `/work/${e.slug}`, image: { src: e.coverUrl, alt: e.name } }))),
      h(Lt, {
        number: { type: C.String, title: `Section no.`, defaultValue: `04` },
        kicker: { type: C.String, title: `Kicker`, defaultValue: `Selected work` },
        linkLabel: { type: C.String, title: `Link label`, defaultValue: `Read the case study` },
        projects: {
          type: C.Array,
          title: `Projects`,
          maxCount: 6,
          control: {
            type: C.Object,
            controls: {
              name: { type: C.String, defaultValue: `Orrin` },
              client: { type: C.String, defaultValue: `Orrin Payroll` },
              year: { type: C.String, defaultValue: `2026` },
              summary: { type: C.String, displayTextArea: !0, defaultValue: `Payroll for freelancers.` },
              headline: { type: C.String, defaultValue: `Pay your freelancers in one tap.` },
              stat1: { type: C.String, defaultValue: `4 min` },
              stat1Label: { type: C.String, defaultValue: `average pay run` },
              stat2: { type: C.String, defaultValue: `−38%` },
              stat2Label: { type: C.String, defaultValue: `failed payments` },
              stat3: { type: C.String, defaultValue: `4.8` },
              stat3Label: { type: C.String, defaultValue: `App Store rating` },
              tags: { type: C.String, defaultValue: `Fintech, iOS` },
              link: { type: C.Link },
              image: { type: C.ResponsiveImage },
              bg: { type: C.Color, defaultValue: `#111214` },
              fg: { type: C.Color, defaultValue: `#F4F4F0` },
              brand: { type: C.Color, defaultValue: `#C8F25A` },
              cardA: { type: C.String, defaultValue: `€12,480.00` },
              cardASub: { type: C.String, defaultValue: `Pay run ready` },
              cardB: { type: C.String, defaultValue: `Invoice paid` },
            },
          },
          defaultValue: Ht.map((e) => {
            let { image: t, ...n } = e;
            return n;
          }),
        },
        accent: { type: C.Color, title: `Selection`, defaultValue: `#4B3BFF` },
        ink: { type: C.Color, title: `Ink`, defaultValue: `#0C0C0E` },
        canvas: { type: C.Color, title: `Canvas`, defaultValue: `#ECECE8` },
        previewScroll: { type: C.Number, title: `Preview scroll`, defaultValue: -1, min: -1, max: 1, step: 0.01 },
      });
  }),
  Z,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Q,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  sn,
  cn,
  ln,
  $,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn;
e(() => {
  ne(),
    ue(),
    se(),
    re(),
    A(),
    Ee(),
    Dt(),
    Oe(),
    Ie(),
    Le(),
    ze(),
    Be(),
    We(),
    Ke(),
    X(),
    N(),
    Ue(),
    F(),
    Ae(),
    D(),
    I(),
    et(),
    rt(),
    (Z = g(lt)),
    (Ut = g(qe)),
    (Wt = g(Te)),
    (Gt = g(Lt)),
    (Kt = g(j)),
    (qt = g(Ge)),
    (Jt = g(M)),
    (Yt = v(m.div, { nodeId: `GavV4EpDU`, override: Pe, scopeId: `augiA20Il` })),
    (Xt = g(He)),
    (Q = v(m.div, { nodeId: `bTqHhTyL3`, override: ke, scopeId: `augiA20Il` })),
    (Zt = g(Re)),
    (Qt = v(m.div, { nodeId: `R8dllHkim`, override: Pe, scopeId: `augiA20Il` })),
    ($t = v(m.a, { nodeId: `FTH4cgi3W`, override: Me, scopeId: `augiA20Il` })),
    (en = v(m.div, { nodeId: `dXV5RvVxT`, override: ke, scopeId: `augiA20Il` })),
    (tn = g(De)),
    (nn = {
      aGjkpPAYu: `(min-width: 810px) and (max-width: 1199.98px)`,
      MlbiMfscS: `(max-width: 809.98px)`,
      WQLkyLRf1: `(min-width: 1200px)`,
    }),
    (rn = []),
    (an = `framer-loC11`),
    (on = { aGjkpPAYu: `framer-v-9jkrz8`, MlbiMfscS: `framer-v-1rbyuw2`, WQLkyLRf1: `framer-v-72rtr7` }),
    (sn = (e, t, n) => (e && t ? `position` : n)),
    (cn = {
      opacity: 0.6,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1.1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0, duration: 0.3, ease: [0.22, 1, 0.36, 1], type: `tween` },
    }),
    (ln = () => ({
      from: { alias: `bTqHhTyL3`, data: Ve, type: `Collection` },
      limit: { type: `LiteralValue`, value: 6 },
      orderBy: [{ collection: `bTqHhTyL3`, name: `RZqQKJG4P`, type: `Identifier` }],
      select: [
        { collection: `bTqHhTyL3`, name: `A01zKlqgA`, type: `Identifier` },
        { collection: `bTqHhTyL3`, name: `JTQPB2tfM`, type: `Identifier` },
        { collection: `bTqHhTyL3`, name: `TvKgpp695`, type: `Identifier` },
        { collection: `bTqHhTyL3`, name: `oRHCqWiJq`, type: `Identifier` },
        { collection: `bTqHhTyL3`, name: `HdhCYL7yq`, type: `Identifier` },
        { collection: `bTqHhTyL3`, name: `MF89GRIKE`, type: `Identifier` },
        { collection: `bTqHhTyL3`, name: `PVmwa23PL`, type: `Identifier` },
        { collection: `bTqHhTyL3`, name: `id`, type: `Identifier` },
      ],
    })),
    ($ = ({ query: e, pageSize: t, children: n }) => n(xe(e))),
    (un = (e) =>
      typeof e == `object` && e && typeof e.src == `string` ? e : typeof e == `string` ? { src: e } : void 0),
    (dn = () => ({
      from: { alias: `dXV5RvVxT`, data: Je, type: `Collection` },
      limit: { type: `LiteralValue`, value: 3 },
      orderBy: [{ collection: `dXV5RvVxT`, direction: `desc`, name: `NiLraK46Q`, type: `Identifier` }],
      select: [
        { collection: `dXV5RvVxT`, name: `oBID_p1Xh`, type: `Identifier` },
        { collection: `dXV5RvVxT`, name: `FmLDCt3qZ`, type: `Identifier` },
        { collection: `dXV5RvVxT`, name: `kAvOPB6_P`, type: `Identifier` },
        { collection: `dXV5RvVxT`, name: `XSW3vLzbA`, type: `Identifier` },
        { collection: `dXV5RvVxT`, name: `eayITx0fM`, type: `Identifier` },
        { collection: `dXV5RvVxT`, name: `yUeHeAL7P`, type: `Identifier` },
        { collection: `dXV5RvVxT`, name: `id`, type: `Identifier` },
      ],
    })),
    (fn = { Desktop: `WQLkyLRf1`, Phone: `MlbiMfscS`, Tablet: `aGjkpPAYu` }),
    (pn = ({ value: e }) =>
      fe() ? null : u(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (mn = ({ height: e, id: t, width: n, ...r }) => ({ ...r, variant: fn[r.variant] ?? r.variant ?? `WQLkyLRf1` })),
    (hn = he(
      c(function (e, n) {
        let r = a(null),
          i = n ?? r,
          s = ie(),
          { activeLocale: c, setLocale: ee } = me(),
          d = T(),
          { style: ne, className: re, layoutId: p, variant: se, ...h } = mn(e);
        x(te(() => it({}, c), [c]));
        let [g, ce] = Se(se, nn, !1),
          le = _e(an, k, Fe, nt, $e, P),
          ue = t(pe)?.isLayoutTemplate,
          de = !!t(ae)?.transition?.layout,
          _ = sn(ue, de);
        return (
          be({}),
          u(pe.Provider, {
            value: {
              activeVariantId: g,
              humanReadableVariantMap: fn,
              primaryVariantId: `WQLkyLRf1`,
              variantClassNames: on,
            },
            children: f(oe, {
              id: p ?? s,
              children: [
                u(pn, { value: `html body { background: rgb(236, 236, 232); }` }),
                f(m.div, {
                  ...h,
                  className: _e(le, `framer-72rtr7`, re),
                  ref: i,
                  style: { ...ne },
                  children: [
                    u(m.section, {
                      className: `framer-cop2yi`,
                      "data-framer-name": `01 Hero`,
                      layout: _,
                      children: u(S, {
                        children: u(y, {
                          className: `framer-191xy1y-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `Layerfolio Hero`,
                          isAuthoredByUser: !0,
                          name: `Layerfolio Hero`,
                          nodeId: `Gyq2olzQk`,
                          scopeId: `augiA20Il`,
                          children: u(lt, {
                            accent: `rgb(75, 59, 255)`,
                            availability: `Booking projects from November`,
                            canvas: `rgb(236, 236, 232)`,
                            commentAuthor: `Mara · PM`,
                            commentText: `Can the name go bigger? It's the first thing a client reads.`,
                            currentRole: `Design lead at Orrin`,
                            fills: [],
                            fontUrl: `https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_RQuQ4nQ.ttf`,
                            height: `100%`,
                            id: `Gyq2olzQk`,
                            ink: `rgb(12, 12, 14)`,
                            layoutId: `Gyq2olzQk`,
                            name: `Noor Castell`,
                            photoName: `at-the-desk.jpg`,
                            previewScroll: -1,
                            previewTime: -1,
                            primaryLabel: `See selected work`,
                            primaryLink: `#work`,
                            projectAmount: `€12,480.00`,
                            projectName: `Orrin`,
                            replyAuthor: `Theo · Eng`,
                            replyText: `Bumped it to 208. Shipping.`,
                            secondaryLabel: `Book a 20-min intro`,
                            secondaryLink: `/contact`,
                            showToolbar: !1,
                            statement: `I turn complicated workflows into software people actually keep open.`,
                            statementMuted: `Product designer in Rotterdam.`,
                            style: { height: `100%`, width: `100%` },
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    u(m.section, {
                      className: `framer-ilvls3`,
                      "data-framer-name": `02 Clients`,
                      layout: _,
                      children: u(S, {
                        children: u(y, {
                          className: `framer-1ytti07-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `Layerfolio Ticker`,
                          isAuthoredByUser: !0,
                          name: `Layerfolio Ticker`,
                          nodeId: `zU2dY4yHG`,
                          scopeId: `augiA20Il`,
                          children: u(qe, {
                            accent: `rgb(75, 59, 255)`,
                            canvas: `rgb(236, 236, 232)`,
                            clients: `Orrin · Fintech, Quayside Clinics · Health, Holm & Hearth · Commerce, Vale Huts · Travel, Kiln Audio · Hardware, Tessel Architects · Architecture, Fietsbank · Mobility, Harbour Labs · Logistics`,
                            height: `100%`,
                            id: `zU2dY4yHG`,
                            ink: `rgb(12, 12, 14)`,
                            label: `Shipped with`,
                            layoutId: `zU2dY4yHG`,
                            name: `Layerfolio Ticker`,
                            skills: `Interaction design, Prototyping, Design systems, User research, Framer sites, Service design, Motion, Workshops, Accessibility, Design QA`,
                            speed: 40,
                            style: { width: `100%` },
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    u(m.section, {
                      className: `framer-15ejxe3`,
                      "data-framer-name": `03 About`,
                      layout: _,
                      children: u(S, {
                        children: u(y, {
                          className: `framer-1fnw8xc-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `Layerfolio About`,
                          isAuthoredByUser: !0,
                          name: `Layerfolio About`,
                          nodeId: `igbHd72I5`,
                          scopeId: `augiA20Il`,
                          children: u(Te, {
                            accent: `rgb(75, 59, 255)`,
                            body: `I start where the problem happens: on the reception desk, in the pay run, at the trailhead. Then I design the fewest decisions that get someone from stuck to done, and I stay until it ships.`,
                            body2: `Before going independent I designed at Fietsbank and Harbour Labs. Today I lead design at Orrin and take one outside project at a time.`,
                            canvas: `rgb(236, 236, 232)`,
                            facts: `Based in|Rotterdam, NL;Working with|Teams of 5 to 5,000;Languages|English, Dutch, German`,
                            fileName: `at-the-desk.jpg`,
                            height: `100%`,
                            id: `igbHd72I5`,
                            ink: `rgb(12, 12, 14)`,
                            kicker: `About`,
                            layoutId: `igbHd72I5`,
                            link: `/about`,
                            linkLabel: `More about me`,
                            name: `Layerfolio About`,
                            number: `03`,
                            previewScroll: -1,
                            skills: `Research, Interaction design, Prototyping, Design systems, Framer, Workshops`,
                            statement: `I've spent nine years [untangling] the software people use at work, for {4.2M people} a month: payroll, physio bookings, furniture and mountain huts.`,
                            style: { width: `100%` },
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    u(m.section, {
                      className: `framer-ubiwo`,
                      "data-framer-name": `04 Selected work`,
                      layout: _,
                      children: u(S, {
                        children: u(y, {
                          className: `framer-ra0j3n-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `Layerfolio Work`,
                          isAuthoredByUser: !0,
                          name: `Layerfolio Work`,
                          nodeId: `suzVexhhE`,
                          scopeId: `augiA20Il`,
                          children: u(Lt, {
                            accent: `rgb(75, 59, 255)`,
                            canvas: `rgb(236, 236, 232)`,
                            height: `100%`,
                            id: `suzVexhhE`,
                            ink: `rgb(12, 12, 14)`,
                            kicker: `Selected work`,
                            layoutId: `suzVexhhE`,
                            linkLabel: `Read the case study`,
                            name: `Layerfolio Work`,
                            number: `04`,
                            previewScroll: -1,
                            projects: [
                              {
                                bg: `rgb(17, 18, 20)`,
                                brand: `rgb(200, 242, 90)`,
                                cardA: `€12,480.00`,
                                cardASub: `Pay run ready · 14 people`,
                                cardB: `Invoice #0142 paid`,
                                client: `Orrin Payroll`,
                                fg: `rgb(244, 244, 240)`,
                                headline: `Pay your freelancers in one tap.`,
                                id: `default-item-0`,
                                name: `Orrin`,
                                stat1: `4 min`,
                                stat1Label: `average pay run, down from 3 h`,
                                stat2: `−38%`,
                                stat2Label: `failed first payments`,
                                stat3: `4.8`,
                                stat3Label: `App Store rating, 11k reviews`,
                                summary: `Payroll for freelancers, rebuilt so a monthly pay run takes four minutes instead of an afternoon.`,
                                tags: `Fintech, iOS, Design system`,
                                year: `2026`,
                              },
                              {
                                bg: `rgb(230, 239, 234)`,
                                brand: `rgb(14, 124, 102)`,
                                cardA: `Tue 14:30`,
                                cardASub: `Knee rehab · Dr. Ilse Brandt`,
                                cardB: `3 slots left today`,
                                client: `Quayside Clinics`,
                                fg: `rgb(13, 42, 34)`,
                                headline: `Book physio in under a minute.`,
                                id: `default-item-1`,
                                name: `Quayside`,
                                stat1: `61%`,
                                stat1Label: `of bookings now online`,
                                stat2: `−2,400`,
                                stat2Label: `phone calls a week`,
                                stat3: `23`,
                                stat3Label: `clinics on one system`,
                                summary: `Online booking for a chain of 23 physio clinics, designed with the receptionists who used to take every call.`,
                                tags: `Health, Web app, Research`,
                                year: `2025`,
                              },
                              {
                                bg: `rgb(239, 230, 218)`,
                                brand: `rgb(180, 83, 42)`,
                                cardA: `Linnea lounge chair`,
                                cardASub: `€640 · Oat bouclé · ships in 3 wk`,
                                cardB: `Fits: 82 cm doorway`,
                                client: `Holm & Hearth`,
                                fg: `rgb(43, 29, 20)`,
                                headline: `Furniture that fits the room.`,
                                id: `default-item-2`,
                                name: `Holm & Hearth`,
                                stat1: `+41%`,
                                stat1Label: `online revenue in six months`,
                                stat2: `−27%`,
                                stat2Label: `returns for wrong size`,
                                stat3: `9 s`,
                                stat3Label: `to find a sofa that fits`,
                                summary: `A furniture store that sold mostly in person. The new shop explains fabrics, sizes and lead times before anyone has to ask.`,
                                tags: `E-commerce, Shopify, Art direction`,
                                year: `2025`,
                              },
                              {
                                bg: `rgb(14, 42, 59)`,
                                brand: `rgb(242, 178, 51)`,
                                cardA: `Hut Fjellro`,
                                cardASub: `3 beds left · 7.4 km from trailhead`,
                                cardB: `−2° tonight · clear`,
                                client: `Vale Huts`,
                                fg: `rgb(238, 243, 245)`,
                                headline: `Your bed on the mountain, sorted.`,
                                id: `default-item-3`,
                                name: `Vale`,
                                stat1: `140`,
                                stat1Label: `huts bookable offline`,
                                stat2: `3×`,
                                stat2Label: `more mid-week stays`,
                                stat3: `180 kb`,
                                stat3Label: `first load on 3G`,
                                summary: `Booking for 140 mountain huts across Norway, built to work on a single bar of signal at the trailhead.`,
                                tags: `Travel, Mobile, Offline-first`,
                                year: `2024`,
                              },
                            ],
                            style: { height: `100%`, width: `100%` },
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    u(m.section, {
                      className: `framer-ogx2nn`,
                      "data-framer-name": `05 Numbers`,
                      layout: _,
                      children: u(S, {
                        children: u(y, {
                          className: `framer-19uz7yo-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `Layerfolio Numbers`,
                          isAuthoredByUser: !0,
                          name: `Layerfolio Numbers`,
                          nodeId: `SuSMP_HNm`,
                          scopeId: `augiA20Il`,
                          children: u(j, {
                            accent: `rgb(75, 59, 255)`,
                            canvas: `rgb(236, 236, 232)`,
                            height: `100%`,
                            id: `SuSMP_HNm`,
                            ink: `rgb(12, 12, 14)`,
                            kicker: `In numbers`,
                            layoutId: `SuSMP_HNm`,
                            name: `Layerfolio Numbers`,
                            number: `05`,
                            previewScroll: -1,
                            stats: [],
                            style: { width: `100%` },
                            title: `The file so far`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    u(m.section, {
                      className: `framer-1v4gscp`,
                      "data-framer-name": `06 Services`,
                      layout: _,
                      children: u(S, {
                        children: u(y, {
                          className: `framer-b3zgul-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `Layerfolio Services`,
                          isAuthoredByUser: !0,
                          name: `Layerfolio Services`,
                          nodeId: `P_moQcqo4`,
                          scopeId: `augiA20Il`,
                          children: u(Ge, {
                            accent: `rgb(75, 59, 255)`,
                            canvas: `rgb(236, 236, 232)`,
                            ctaLabel: `Compare services`,
                            ctaLink: `/services`,
                            height: `100%`,
                            id: `P_moQcqo4`,
                            ink: `rgb(12, 12, 14)`,
                            intro: `Most projects start with a research sprint and move right. Each frame is a separate engagement, so you can start anywhere.`,
                            kicker: `Services`,
                            layoutId: `P_moQcqo4`,
                            name: `Layerfolio Services`,
                            number: `06`,
                            previewScroll: -1,
                            services: [],
                            style: { width: `100%` },
                            title: `Four ways to work together`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    u(m.section, {
                      className: `framer-10ejewb`,
                      "data-framer-name": `07 Process`,
                      layout: _,
                      children: u(S, {
                        children: u(y, {
                          className: `framer-alki2a-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `Layerfolio Process`,
                          isAuthoredByUser: !0,
                          name: `Layerfolio Process`,
                          nodeId: `WwLojopqX`,
                          scopeId: `augiA20Il`,
                          children: u(M, {
                            accent: `rgb(75, 59, 255)`,
                            canvas: `rgb(236, 236, 232)`,
                            height: `100%`,
                            id: `WwLojopqX`,
                            ink: `rgb(12, 12, 14)`,
                            kicker: `Process`,
                            layoutId: `WwLojopqX`,
                            name: `Layerfolio Process`,
                            number: `07`,
                            previewScroll: -1,
                            steps: [],
                            style: { width: `100%` },
                            title: `How a project runs`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    f(m.section, {
                      className: `framer-1pvs1zx`,
                      "data-framer-name": `08 Testimonials`,
                      layout: _,
                      children: [
                        f(`div`, {
                          className: `framer-131774l`,
                          "data-framer-name": `Head`,
                          children: [
                            f(Yt, {
                              className: `framer-9tzbly`,
                              "data-framer-name": `Head copy`,
                              children: [
                                f(m.div, {
                                  className: `framer-yavtn3`,
                                  "data-framer-name": `Kicker`,
                                  children: [
                                    u(E, {
                                      __fromCanvasComponent: !0,
                                      children: u(o, {
                                        children: u(`p`, {
                                          className: `framer-styles-preset-o8en2f`,
                                          "data-styles-preset": `MG0afWxxR`,
                                          dir: `auto`,
                                          style: { "--framer-text-color": `#4B3BFF` },
                                          children: `[08]`,
                                        }),
                                      }),
                                      className: `framer-teuso5`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    u(E, {
                                      __fromCanvasComponent: !0,
                                      children: u(o, {
                                        children: u(`p`, {
                                          className: `framer-styles-preset-o8en2f`,
                                          "data-styles-preset": `MG0afWxxR`,
                                          dir: `auto`,
                                          style: { "--framer-text-color": `rgba(12, 12, 14, 0.55)` },
                                          children: `TESTIMONIALS`,
                                        }),
                                      }),
                                      className: `framer-1olmx1t`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                u(E, {
                                  __fromCanvasComponent: !0,
                                  children: u(o, {
                                    children: u(`h2`, {
                                      className: `framer-styles-preset-mamhr0`,
                                      "data-styles-preset": `DXBcJdPa7`,
                                      dir: `auto`,
                                      style: { "--framer-text-color": `#0C0C0E` },
                                      children: `Comments left on the file`,
                                    }),
                                  }),
                                  className: `framer-1aqr1le`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            f(`div`, {
                              className: `framer-1kgrczf`,
                              "data-framer-name": `Head side`,
                              children: [
                                u(E, {
                                  __fromCanvasComponent: !0,
                                  children: u(o, {
                                    children: u(`p`, {
                                      className: `framer-styles-preset-16wbxom`,
                                      "data-styles-preset": `wt0cdVoay`,
                                      dir: `auto`,
                                      style: { "--framer-text-color": `rgba(12, 12, 14, 0.72)` },
                                      children: `Six clients, six threads. Resolve them if you’ve read enough.`,
                                    }),
                                  }),
                                  className: `framer-1gqloh5`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                u(ge, {
                                  href: { webPageId: `K1UjISgVS` },
                                  motionChild: !0,
                                  nodeId: `vekchFpXb`,
                                  scopeId: `augiA20Il`,
                                  children: u(m.a, {
                                    className: `framer-168xuya framer-lux5qc`,
                                    "data-border": !0,
                                    "data-framer-name": `Link Start a project`,
                                    whileHover: cn,
                                    children: u(E, {
                                      __fromCanvasComponent: !0,
                                      children: u(o, {
                                        children: u(`p`, {
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
                                          children: `Start a project  →`,
                                        }),
                                      }),
                                      className: `framer-19h7353`,
                                      fonts: [`GF;Geist-500`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        u(Q, {
                          className: `framer-1bp4t09`,
                          "data-framer-name": `Testimonials list`,
                          children: u(ye, {
                            children: u($, {
                              query: ln(),
                              children: (e, t, n) =>
                                u(l, {
                                  children: e?.map(
                                    (
                                      {
                                        A01zKlqgA: e,
                                        HdhCYL7yq: t,
                                        id: n,
                                        JTQPB2tfM: r,
                                        MF89GRIKE: i,
                                        oRHCqWiJq: a,
                                        PVmwa23PL: o,
                                        TvKgpp695: s,
                                      },
                                      c
                                    ) => (
                                      (e ??= ``),
                                      (r ??= ``),
                                      (s ??= ``),
                                      (a ??= ``),
                                      (t ??= ``),
                                      (i ??= `#09F`),
                                      (o ??= ``),
                                      u(
                                        oe,
                                        {
                                          id: `bTqHhTyL3-${n}`,
                                          children: u(Ce.Provider, {
                                            value: { PVmwa23PL: o },
                                            children: u(m.div, {
                                              className: `framer-12uugkm`,
                                              "data-framer-name": `Quote cell`,
                                              children: u(S, {
                                                children: u(y, {
                                                  className: `framer-fpbhl-container`,
                                                  "data-code-component-plugin-id": `api`,
                                                  "data-framer-name": `Layerfolio Quote`,
                                                  isAuthoredByUser: !0,
                                                  name: `Layerfolio Quote`,
                                                  nodeId: `fBpKuuWDN`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  children: u(He, {
                                                    accent: `rgb(75, 59, 255)`,
                                                    color: i,
                                                    company: s,
                                                    height: `100%`,
                                                    id: `fBpKuuWDN`,
                                                    layoutId: `fBpKuuWDN`,
                                                    name: e,
                                                    project: t,
                                                    quote: a,
                                                    role: r,
                                                    style: { width: `100%` },
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                        },
                                        n
                                      )
                                    )
                                  ),
                                }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    u(m.section, {
                      className: `framer-1adcovg`,
                      "data-framer-name": `09 Playground`,
                      layout: _,
                      children: u(S, {
                        children: u(y, {
                          className: `framer-jicmj4-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `Layerfolio Playground`,
                          isAuthoredByUser: !0,
                          name: `Layerfolio Playground`,
                          nodeId: `FwJYuFeNg`,
                          scopeId: `augiA20Il`,
                          children: u(Re, {
                            accent: `rgb(75, 59, 255)`,
                            canvas: `rgb(236, 236, 232)`,
                            height: `100%`,
                            id: `FwJYuFeNg`,
                            ink: `rgb(12, 12, 14)`,
                            intro: `Type experiments, motion studies and photos from the sketchbook. Drag anything around.`,
                            kicker: `Playground`,
                            layoutId: `FwJYuFeNg`,
                            link: `/playground`,
                            linkLabel: `Open the playground`,
                            name: `Layerfolio Playground`,
                            number: `09`,
                            photos: [],
                            style: { height: `100%`, width: `100%` },
                            title: `Things I make when nobody's paying`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    f(m.section, {
                      className: `framer-brdryc`,
                      "data-framer-name": `10 Journal`,
                      layout: _,
                      children: [
                        f(`div`, {
                          className: `framer-sna688`,
                          "data-framer-name": `Head`,
                          children: [
                            f(Qt, {
                              className: `framer-3kyat8`,
                              "data-framer-name": `Head copy`,
                              children: [
                                f(m.div, {
                                  className: `framer-a48aou`,
                                  "data-framer-name": `Kicker`,
                                  children: [
                                    u(E, {
                                      __fromCanvasComponent: !0,
                                      children: u(o, {
                                        children: u(`p`, {
                                          className: `framer-styles-preset-o8en2f`,
                                          "data-styles-preset": `MG0afWxxR`,
                                          dir: `auto`,
                                          style: { "--framer-text-color": `#4B3BFF` },
                                          children: `[10]`,
                                        }),
                                      }),
                                      className: `framer-xome25`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    u(E, {
                                      __fromCanvasComponent: !0,
                                      children: u(o, {
                                        children: u(`p`, {
                                          className: `framer-styles-preset-o8en2f`,
                                          "data-styles-preset": `MG0afWxxR`,
                                          dir: `auto`,
                                          style: { "--framer-text-color": `rgba(12, 12, 14, 0.55)` },
                                          children: `JOURNAL`,
                                        }),
                                      }),
                                      className: `framer-1n0bjts`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                u(E, {
                                  __fromCanvasComponent: !0,
                                  children: u(o, {
                                    children: u(`h2`, {
                                      className: `framer-styles-preset-mamhr0`,
                                      "data-styles-preset": `DXBcJdPa7`,
                                      dir: `auto`,
                                      style: { "--framer-text-color": `#0C0C0E` },
                                      children: `Notes from the file`,
                                    }),
                                  }),
                                  className: `framer-kq3c65`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            f(`div`, {
                              className: `framer-kkkf1f`,
                              "data-framer-name": `Head side`,
                              children: [
                                u(E, {
                                  __fromCanvasComponent: !0,
                                  children: u(o, {
                                    children: u(`p`, {
                                      className: `framer-styles-preset-16wbxom`,
                                      "data-styles-preset": `wt0cdVoay`,
                                      dir: `auto`,
                                      style: { "--framer-text-color": `rgba(12, 12, 14, 0.72)` },
                                      children: `Short essays on research, systems and the business of design. One a month, no newsletter pop-ups.`,
                                    }),
                                  }),
                                  className: `framer-1rgfhh0`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                u(ge, {
                                  href: { webPageId: `K4CF_nwDr` },
                                  motionChild: !0,
                                  nodeId: `b8_9V1_Y9`,
                                  scopeId: `augiA20Il`,
                                  children: u(m.a, {
                                    className: `framer-pi3xnb framer-lux5qc`,
                                    "data-border": !0,
                                    "data-framer-name": `Link Read the journal`,
                                    whileHover: cn,
                                    children: u(E, {
                                      __fromCanvasComponent: !0,
                                      children: u(o, {
                                        children: u(`p`, {
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
                                          children: `Read the journal  →`,
                                        }),
                                      }),
                                      className: `framer-12kkmya`,
                                      fonts: [`GF;Geist-500`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        u(en, {
                          className: `framer-qugcpb`,
                          "data-framer-name": `Journal list`,
                          children: u(ye, {
                            children: u($, {
                              query: dn(),
                              children: (e, t, n) =>
                                u(l, {
                                  children: e?.map(
                                    (
                                      {
                                        eayITx0fM: e,
                                        FmLDCt3qZ: t,
                                        id: n,
                                        kAvOPB6_P: r,
                                        oBID_p1Xh: i,
                                        XSW3vLzbA: a,
                                        yUeHeAL7P: s,
                                      },
                                      c
                                    ) => (
                                      (i ??= ``),
                                      (r ??= ``),
                                      (a ??= ``),
                                      (e ??= ``),
                                      (s ??= ``),
                                      u(
                                        oe,
                                        {
                                          id: `dXV5RvVxT-${n}`,
                                          children: u(Ce.Provider, {
                                            value: { oBID_p1Xh: i },
                                            children: u(ge, {
                                              href: { pathVariables: { oBID_p1Xh: i }, webPageId: `BipmdgWXJ` },
                                              motionChild: !0,
                                              nodeId: `FTH4cgi3W`,
                                              scopeId: `augiA20Il`,
                                              children: f($t, {
                                                className: `framer-1tc6xaf framer-lux5qc`,
                                                "data-border": !0,
                                                "data-framer-name": `Post card`,
                                                children: [
                                                  u(m.div, {
                                                    className: `framer-fzs0cd`,
                                                    "data-framer-name": `Cover`,
                                                    children: u(b, {
                                                      breakpoint: g,
                                                      overrides: {
                                                        aGjkpPAYu: {
                                                          background: {
                                                            alt: ``,
                                                            fit: `fill`,
                                                            pixelHeight: 1370,
                                                            pixelWidth: 2e3,
                                                            sizes: `calc(max((min(${d?.width || `100vw`} - 64px, 1312px) - 20px) / 2, 290px) - 20px)`,
                                                            ...un(t),
                                                          },
                                                        },
                                                        MlbiMfscS: {
                                                          background: {
                                                            alt: ``,
                                                            fit: `fill`,
                                                            pixelHeight: 1370,
                                                            pixelWidth: 2e3,
                                                            sizes: `calc(max(min(${d?.width || `100vw`} - 40px, 1312px), 290px) - 20px)`,
                                                            ...un(t),
                                                          },
                                                        },
                                                      },
                                                      children: u(w, {
                                                        background: {
                                                          alt: ``,
                                                          fit: `fill`,
                                                          pixelHeight: 1370,
                                                          pixelWidth: 2e3,
                                                          sizes: `calc(max((min(${d?.width || `100vw`} - 128px, 1312px) - 40px) / 3, 290px) - 20px)`,
                                                          ...un(t),
                                                        },
                                                        className: `framer-lux50d`,
                                                        "data-framer-name": `Cover image`,
                                                      }),
                                                    }),
                                                  }),
                                                  f(m.div, {
                                                    className: `framer-1i2xi1q`,
                                                    "data-framer-name": `Meta`,
                                                    children: [
                                                      u(E, {
                                                        __fromCanvasComponent: !0,
                                                        children: u(o, {
                                                          children: u(`p`, {
                                                            className: `framer-styles-preset-o8en2f`,
                                                            "data-styles-preset": `MG0afWxxR`,
                                                            dir: `auto`,
                                                            style: { "--framer-text-color": `#4B3BFF` },
                                                            children: `Category`,
                                                          }),
                                                        }),
                                                        className: `framer-1rfv6xm`,
                                                        fonts: [`Inter`],
                                                        text: r,
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                      u(E, {
                                                        __fromCanvasComponent: !0,
                                                        children: u(o, {
                                                          children: u(`p`, {
                                                            className: `framer-styles-preset-o8en2f`,
                                                            "data-styles-preset": `MG0afWxxR`,
                                                            dir: `auto`,
                                                            style: { "--framer-text-color": `rgba(12, 12, 14, 0.5)` },
                                                            children: `Read Time`,
                                                          }),
                                                        }),
                                                        className: `framer-1bg5t16`,
                                                        fonts: [`Inter`],
                                                        text: a,
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    ],
                                                  }),
                                                  f(m.div, {
                                                    className: `framer-6wfq0j`,
                                                    "data-framer-name": `Text`,
                                                    children: [
                                                      u(E, {
                                                        __fromCanvasComponent: !0,
                                                        children: u(o, {
                                                          children: u(`h3`, {
                                                            className: `framer-styles-preset-ewraam`,
                                                            "data-styles-preset": `RKf16m7gj`,
                                                            dir: `auto`,
                                                            style: { "--framer-text-color": `#0C0C0E` },
                                                            children: `Title`,
                                                          }),
                                                        }),
                                                        className: `framer-1t2361u`,
                                                        fonts: [`Inter`],
                                                        text: e,
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                      u(E, {
                                                        __fromCanvasComponent: !0,
                                                        children: u(o, {
                                                          children: u(`p`, {
                                                            className: `framer-styles-preset-dca0w5`,
                                                            "data-styles-preset": `dvaHobIu7`,
                                                            dir: `auto`,
                                                            style: { "--framer-text-color": `rgba(12, 12, 14, 0.68)` },
                                                            children: `Excerpt`,
                                                          }),
                                                        }),
                                                        className: `framer-4l1ith`,
                                                        fonts: [`Inter`],
                                                        text: s,
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            }),
                                          }),
                                        },
                                        n
                                      )
                                    )
                                  ),
                                }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    u(m.section, {
                      className: `framer-c3a1sy`,
                      "data-framer-name": `11 FAQ`,
                      layout: _,
                      children: u(S, {
                        children: u(y, {
                          className: `framer-1azlgg3-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `Layerfolio FAQ`,
                          isAuthoredByUser: !0,
                          name: `Layerfolio FAQ`,
                          nodeId: `LglFKQxon`,
                          scopeId: `augiA20Il`,
                          children: u(De, {
                            accent: `rgb(75, 59, 255)`,
                            canvas: `rgb(236, 236, 232)`,
                            contactLabel: `Ask something else`,
                            contactLink: `/contact`,
                            height: `100%`,
                            id: `LglFKQxon`,
                            ink: `rgb(12, 12, 14)`,
                            intro: `The questions I get in almost every first call. If yours isn't here, ask it in the form; I answer every one.`,
                            items: [],
                            kicker: `Questions`,
                            layoutId: `LglFKQxon`,
                            name: `Layerfolio FAQ`,
                            number: `11`,
                            style: { width: `100%` },
                            title: `Before you ask`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                u(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-loC11.framer-lux5qc, .framer-loC11 .framer-lux5qc { display: block; }`,
        `.framer-loC11.framer-72rtr7 { align-content: center; align-items: center; background-color: #ecece8; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-loC11 .framer-cop2yi { background-color: #ecece8; flex: none; height: 100vh; min-height: 680px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-loC11 .framer-191xy1y-container, .framer-loC11 .framer-ra0j3n-container, .framer-loC11 .framer-jicmj4-container, .framer-loC11 .framer-lux50d { flex: none; height: 100%; left: 0px; position: absolute; top: 0px; width: 100%; }`,
        `.framer-loC11 .framer-ilvls3, .framer-loC11 .framer-15ejxe3, .framer-loC11 .framer-ogx2nn, .framer-loC11 .framer-1v4gscp, .framer-loC11 .framer-10ejewb, .framer-loC11 .framer-c3a1sy { align-content: flex-start; align-items: flex-start; background-color: #ecece8; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-loC11 .framer-1ytti07-container, .framer-loC11 .framer-1fnw8xc-container, .framer-loC11 .framer-19uz7yo-container, .framer-loC11 .framer-b3zgul-container, .framer-loC11 .framer-alki2a-container, .framer-loC11 .framer-fpbhl-container, .framer-loC11 .framer-1azlgg3-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-loC11 .framer-ubiwo { background-color: #ecece8; flex: none; height: 420vh; position: relative; width: 100%; }`,
        `.framer-loC11 .framer-1pvs1zx, .framer-loC11 .framer-brdryc { align-content: center; align-items: center; background-color: #ecece8; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; padding: 120px 64px 130px 64px; position: relative; width: 100%; }`,
        `.framer-loC11 .framer-131774l, .framer-loC11 .framer-sna688 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; height: min-content; justify-content: space-between; max-width: 1312px; padding: 0px; position: relative; width: 100%; }`,
        `.framer-loC11 .framer-9tzbly, .framer-loC11 .framer-3kyat8 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; max-width: 760px; min-width: 300px; padding: 0px; position: relative; width: 1px; }`,
        `.framer-loC11 .framer-yavtn3, .framer-loC11 .framer-a48aou { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
        `.framer-loC11 .framer-teuso5, .framer-loC11 .framer-1olmx1t, .framer-loC11 .framer-19h7353, .framer-loC11 .framer-xome25, .framer-loC11 .framer-1n0bjts, .framer-loC11 .framer-12kkmya, .framer-loC11 .framer-1rfv6xm, .framer-loC11 .framer-1bg5t16 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-loC11 .framer-1aqr1le, .framer-loC11 .framer-kq3c65 { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-loC11 .framer-1kgrczf, .framer-loC11 .framer-kkkf1f { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; max-width: 420px; min-width: 280px; padding: 0px; position: relative; width: 1px; }`,
        `.framer-loC11 .framer-1gqloh5, .framer-loC11 .framer-1rgfhh0, .framer-loC11 .framer-1t2361u { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-loC11 .framer-168xuya, .framer-loC11 .framer-pi3xnb { --border-bottom-width: 1.5px; --border-color: #0c0c0e; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px 0px 6px 0px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-loC11 .framer-1bp4t09 { display: grid; flex: none; gap: 16px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(300px, 1fr)); height: min-content; justify-content: center; max-width: 1312px; padding: 0px; position: relative; width: 100%; }`,
        `.framer-loC11 .framer-12uugkm { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-loC11 .framer-1adcovg { background-color: #ecece8; flex: none; height: 900px; position: relative; width: 100%; }`,
        `.framer-loC11 .framer-qugcpb { display: grid; flex: none; gap: 48px 20px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(290px, 1fr)); height: min-content; justify-content: center; max-width: 1312px; padding: 0px; position: relative; width: 100%; }`,
        `.framer-loC11 .framer-1tc6xaf { --border-bottom-width: 1px; --border-color: rgba(12, 12, 14, 0.08); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; align-self: start; background-color: rgba(255, 255, 255, 0.72); border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; cursor: pointer; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; justify-self: start; padding: 10px 10px 18px 10px; position: relative; text-decoration: none; width: 100%; }`,
        `.framer-loC11 .framer-fzs0cd { border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; flex: none; height: 260px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-loC11 .framer-1i2xi1q { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 0px 6px 0px 6px; position: relative; width: 100%; }`,
        `.framer-loC11 .framer-6wfq0j { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px 6px 0px 6px; position: relative; width: 100%; }`,
        `.framer-loC11 .framer-4l1ith { --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 3; display: -webkit-box; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-line; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        ...we,
        ...je,
        ...L,
        ...Ye,
        ...Xe,
        `.framer-loC11[data-border="true"]::after, .framer-loC11 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-loC11.framer-72rtr7 { width: 810px; } .framer-loC11 .framer-1pvs1zx, .framer-loC11 .framer-brdryc { padding: 96px 32px 104px 32px; } .framer-loC11 .framer-1bp4t09 { grid-template-columns: repeat(2, minmax(300px, 1fr)); } .framer-loC11 .framer-qugcpb { grid-template-columns: repeat(2, minmax(290px, 1fr)); }}`,
        `@media (max-width: 809.98px) { .framer-loC11.framer-72rtr7 { width: 390px; } .framer-loC11 .framer-1pvs1zx, .framer-loC11 .framer-brdryc { padding: 74px 20px 81px 20px; } .framer-loC11 .framer-1bp4t09 { grid-template-columns: repeat(1, minmax(300px, 1fr)); } .framer-loC11 .framer-1adcovg { height: 760px; } .framer-loC11 .framer-qugcpb { grid-template-columns: repeat(1, minmax(290px, 1fr)); }}`,
      ],
      `framer-loC11`
    )),
    (hn.displayName = `Home`),
    (hn.defaultProps = { height: 13032, width: 1200 }),
    le(
      hn,
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
        ...Z,
        ...Ut,
        ...Wt,
        ...Gt,
        ...Kt,
        ...qt,
        ...Jt,
        ...Xt,
        ...Zt,
        ...tn,
        ...ce(O),
        ...ce(Ne),
        ...ce(tt),
        ...ce(Ze),
        ...ce(Qe),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (hn.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = t.priority,
          i = de.get(ln(), n, r),
          a = de.get(dn(), n, r);
        return _([() => i.preload(), () => a.preload()], t);
      },
    }),
    (gn = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FrameraugiA20Il`,
          slots: [],
          annotations: {
            framerAcceptsLayoutTemplate: `true`,
            framerDisplayContentsDiv: `false`,
            framerScrollSections: `false`,
            framerResponsiveScreen: `true`,
            framerIntrinsicWidth: `1200`,
            framerColorSyntax: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerComponentViewportWidth: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"aGjkpPAYu":{"layout":["fixed","auto"]},"MlbiMfscS":{"layout":["fixed","auto"]}}}`,
            framerImmutableVariables: `true`,
            framerIntrinsicHeight: `13032`,
            framerContractVersion: `1`,
            framerAutoSizeImages: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    });
})();
export { gn as __FramerMetadata__, hn as default, rn as queryParamNames };
//# sourceMappingURL=GkCJjdeXkGIECfvB1VRzmMjTo9xJ95R8pPPF_ZbUTwY.Ckt_vHVu.mjs.map
