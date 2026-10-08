import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  F as t,
  L as n,
  N as r,
  P as i,
  d as a,
  l as o,
  p as s,
  s as c,
  u as l,
  w as u,
  z as d,
} from "./react.CHR6xBda.mjs";
import { x as f } from "./motion.De9yD8td.mjs";
import { E as p, U as m, h as ee, o as h, r as te, t as ne, x as re, xt as ie } from "./framer.dKj5RJCl.mjs";
function ae() {
  r(() => {
    if (typeof document > `u` || document.getElementById(`lf-fonts`)) return;
    let e = document.createElement(`link`);
    (e.id = `lf-fonts`),
      (e.rel = `stylesheet`),
      (e.href = `https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap`),
      document.head.appendChild(e);
  }, []);
}
function oe(e) {
  let {
    name: n = `Mara Lindqvist`,
    role: r = `Head of Product`,
    company: i = `Orrin`,
    quote:
      a = `Noor asked better questions in week one than we had in a year. The pay run redesign paid for itself in a month of support tickets.`,
    project: s = `Orrin`,
    color: c = `#FF5B24`,
    accent: u = `#4B3BFF`,
  } = e;
  ae();
  let [d, f] = t(!1),
    p = n
      .split(` `)
      .map((e) => e[0])
      .slice(0, 2)
      .join(``);
  return l(`article`, {
    className: `lfq`,
    style: { ...e.style, position: `relative`, width: `100%`, fontFamily: g, color: `#0C0C0E` },
    children: [
      o(`style`, {
        children: `
            .lfq,.lfq *{box-sizing:border-box}
            .lfq-c{background:#fff;border-radius:16px;border:1px solid rgba(12,12,14,.09);box-shadow:0 22px 44px -34px rgba(12,12,14,.5);padding:18px 18px 16px;transition:transform .45s ${v},box-shadow .45s ${v},border-color .3s}
            .lfq-c:hover{transform:translateY(-4px);box-shadow:0 34px 60px -38px rgba(12,12,14,.6);border-color:rgba(12,12,14,.16)}
            .lfq-r{display:inline-flex;align-items:center;gap:6px;height:28px;padding:0 10px;border-radius:8px;border:0;background:rgba(12,12,14,.05);font:500 12px/1 ${g};color:#0C0C0E;cursor:pointer;transition:background .25s,color .25s}
            .lfq-r:hover{background:rgba(12,12,14,.1)}
            .lfq-r.on{background:${se.theo};color:#fff}
            .lfq-r:focus-visible{outline:2px solid ${u};outline-offset:2px}
            .lfq-r svg path{stroke-dasharray:14;stroke-dashoffset:14;transition:stroke-dashoffset .45s ${v}}
            .lfq-r.on svg path{stroke-dashoffset:0}
            `,
      }),
      l(`div`, {
        className: `lfq-c`,
        style: { opacity: d ? 0.72 : 1 },
        children: [
          l(`div`, {
            style: { display: `flex`, alignItems: `center`, gap: 10 },
            children: [
              o(`span`, {
                style: {
                  width: 34,
                  height: 34,
                  borderRadius: `50% 50% 50% 6px`,
                  background: c,
                  color: `#fff`,
                  display: `inline-flex`,
                  alignItems: `center`,
                  justifyContent: `center`,
                  font: `600 13px/1 ${g}`,
                  border: `2px solid #fff`,
                  boxShadow: `0 6px 14px ${c}55`,
                  flex: `none`,
                },
                children: p,
              }),
              l(`div`, {
                style: { minWidth: 0 },
                children: [
                  o(`div`, { style: { font: `600 14px/1.2 ${g}`, letterSpacing: `-.01em` }, children: n }),
                  l(`div`, {
                    style: { font: `400 12.5px/1.3 ${g}`, color: `rgba(12,12,14,.55)` },
                    children: [r, `, `, i],
                  }),
                ],
              }),
              l(`span`, {
                style: { marginLeft: `auto`, font: `500 10.5px/1 ${_}`, color: u, whiteSpace: `nowrap` },
                children: [`◇ `, s],
              }),
            ],
          }),
          l(`p`, {
            style: {
              margin: `16px 0 0`,
              font: `500 19px/1.42 ${g}`,
              letterSpacing: `-.02em`,
              textDecoration: d ? `line-through` : `none`,
              textDecorationColor: `rgba(12,12,14,.3)`,
            },
            children: [`“`, a, `”`],
          }),
          l(`div`, {
            style: {
              display: `flex`,
              alignItems: `center`,
              gap: 8,
              marginTop: 16,
              paddingTop: 12,
              borderTop: `1px solid rgba(12,12,14,.07)`,
            },
            children: [
              l(`button`, {
                className: `lfq-r${d ? ` on` : ``}`,
                onClick: () => f((e) => !e),
                "aria-pressed": d,
                children: [
                  l(`svg`, {
                    width: `12`,
                    height: `12`,
                    viewBox: `0 0 12 12`,
                    "aria-hidden": !0,
                    children: [
                      o(`circle`, {
                        cx: `6`,
                        cy: `6`,
                        r: `5.2`,
                        fill: `none`,
                        stroke: `currentColor`,
                        strokeWidth: `1.2`,
                        opacity: `.5`,
                      }),
                      o(`path`, {
                        d: `M3.4 6.2 5.2 8 8.8 4.2`,
                        fill: `none`,
                        stroke: `currentColor`,
                        strokeWidth: `1.5`,
                      }),
                    ],
                  }),
                  d ? `Resolved` : `Resolve`,
                ],
              }),
              o(`span`, { style: { font: `400 12px/1 ${g}`, color: `rgba(12,12,14,.5)` }, children: `1 reply · Noor` }),
              o(`span`, {
                style: { marginLeft: `auto`, display: `flex` },
                children: [`#4B3BFF`, c].map((e, t) =>
                  o(
                    `i`,
                    {
                      style: {
                        width: 18,
                        height: 18,
                        borderRadius: 18,
                        background: e,
                        border: `2px solid #fff`,
                        marginLeft: t ? -6 : 0,
                      },
                    },
                    t
                  )
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var g,
  _,
  se,
  v,
  ce = e(() => {
    n(),
      c(),
      u(),
      m(),
      (g = `Geist, 'Inter Display', Inter, system-ui, sans-serif`),
      (_ = `'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace`),
      (se = {
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
      (v = `cubic-bezier(.22,1,.36,1)`),
      p(oe, {
        name: { type: h.String, defaultValue: `Mara Lindqvist` },
        role: { type: h.String, defaultValue: `Head of Product` },
        company: { type: h.String, defaultValue: `Orrin` },
        quote: {
          type: h.String,
          displayTextArea: !0,
          defaultValue: `Noor asked better questions in week one than we had in a year.`,
        },
        project: { type: h.String, defaultValue: `Orrin` },
        color: { type: h.Color, title: `Avatar`, defaultValue: `#FF5B24` },
        accent: { type: h.Color, title: `Selection`, defaultValue: `#4B3BFF` },
      });
  });
function y(e, t, n) {
  return (
    t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e
  );
}
function le(e) {
  return typeof e == `function` ? e() : e;
}
function ue(e, t) {
  return B[e] > B[t];
}
function de(e) {
  let t;
  for (let n of e) {
    let e = le(n);
    if (((t === void 0 || ue(e, t)) && (t = e), t === `user-blocking`)) break;
  }
  return t;
}
function fe(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function b(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function x(e) {
  throw Error(`Unexpected value: ${e}`);
}
function S(e) {
  return typeof e == `string`;
}
function C(e) {
  return Number.isFinite(e);
}
function w(e) {
  return e === null;
}
function T(e) {
  if (w(e)) return 0;
  switch (e.type) {
    case `array`:
      return 1;
    case `boolean`:
      return 2;
    case `color`:
      return 3;
    case `date`:
      return 4;
    case `enum`:
      return 5;
    case `file`:
      return 6;
    case `responsiveimage`:
      return 10;
    case `link`:
      return 7;
    case `number`:
      return 8;
    case `object`:
      return 9;
    case `richtext`:
      return 11;
    case `string`:
      return 12;
    case `vectorsetitem`:
      return 13;
    default:
      x(e);
  }
}
function pe(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = k.read(e);
    n.push(t);
  }
  return { type: `array`, value: n };
}
function me(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) k.write(e, n);
}
function he(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = k.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function ge(e) {
  return { type: `boolean`, value: e.readUint8() !== 0 };
}
function _e(e, t) {
  e.writeUint8(+!!t.value);
}
function ve(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ye(e) {
  return { type: `color`, value: e.readString() };
}
function be(e, t) {
  e.writeString(t.value);
}
function xe(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Se(e) {
  let t = e.readInt64();
  return { type: `date`, value: new Date(t).toISOString() };
}
function Ce(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function we(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function Te(e) {
  return { type: `enum`, value: e.readString() };
}
function Ee(e, t) {
  e.writeString(t.value);
}
function De(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Oe(e) {
  return { type: `file`, value: e.readString() };
}
function ke(e, t) {
  e.writeString(t.value);
}
function Ae(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function je(e) {
  return { type: `link`, value: e.readJson() };
}
function Me(e, t) {
  e.writeJson(t.value);
}
function Ne(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Pe(e) {
  return { type: `number`, value: e.readFloat64() };
}
function Fe(e, t) {
  e.writeFloat64(t.value);
}
function Ie(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Le(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = k.read(e);
  }
  return { type: `object`, value: n };
}
function Re(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n)) e.writeString(t), k.write(e, r);
}
function ze(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = k.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function Be(e) {
  return { type: `responsiveimage`, value: e.readJson() };
}
function Ve(e, t) {
  e.writeJson(t.value);
}
function He(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Ue(e) {
  let t = e.readInt8();
  if (t === 0) return { type: `richtext`, value: e.readUint32() };
  if (t === 1) return { type: `richtext`, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function We(e, t) {
  if (C(t.value)) {
    e.writeInt8(0), e.writeUint32(t.value);
    return;
  }
  if (S(t.value)) {
    e.writeInt8(1), e.writeString(t.value);
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function Ge(e, t) {
  let n = e.value,
    r = t.value;
  if ((C(n) && C(r)) || (S(n) && S(r))) return n < r ? -1 : +(n > r);
  throw Error(`Invalid rich text pointer`);
}
function Ke(e) {
  return { type: `string`, value: e.readString() };
}
function qe(e, t) {
  e.writeString(t.value);
}
function Je(e, t, n) {
  let r = e.value,
    i = t.value;
  return n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())), r < i ? -1 : +(r > i);
}
function Ye(e) {
  return { type: `vectorsetitem`, value: e.readUint32() };
}
function Xe(e, t) {
  e.writeUint32(t.value);
}
function Ze(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
async function Qe(e) {
  let t = Math.floor(nt * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function $e(e, t) {
  let n = et(t),
    r = [],
    i = 0;
  for (let e of n) r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from);
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await J(a);
  if (s.status !== 200) throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new it(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    u.write(e.from, r), (d = n);
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function E(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return r.set(e, 0), r.set(t, e.length), r;
}
function et(e) {
  b(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) }) : n.push(e);
  }
  return n;
}
function D(e) {
  let t = {},
    n = e.readUint16();
  for (let r = 0; r < n; r++) {
    let n = e.readString();
    t[n] = k.read(e);
  }
  return t;
}
function* tt(e) {
  for (let t of e) yield* t.prioritySources;
}
var O,
  k,
  A,
  j,
  M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q,
  nt,
  rt,
  J,
  it,
  at,
  ot,
  st = e(() => {
    n(),
      m(),
      (A = Object.create),
      (j = Object.defineProperty),
      (M = Object.getOwnPropertyDescriptor),
      (N = Object.getOwnPropertyNames),
      (P = Object.getPrototypeOf),
      (F = Object.prototype.hasOwnProperty),
      (I = (e, t) =>
        function () {
          try {
            return t || (0, e[N(e)[0]])((t = { exports: {} }).exports, t), t.exports;
          } catch (e) {
            throw ((t = 0), e);
          }
        }),
      (L = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of N(t))
            F.call(e, i) || i === n || j(e, i, { get: () => t[i], enumerable: !(r = M(t, i)) || r.enumerable });
        return e;
      }),
      (R = (e, t, n) => (
        (n = e == null ? {} : A(P(e))),
        L(!t && e && e.__esModule ? n : j(n, `default`, { value: e, enumerable: !0 }), e)
      )),
      (z = R(
        I({
          "../../../node_modules/dataloader/index.js"(e, t) {
            var n,
              r = (function () {
                function e(e, t) {
                  if (typeof e != `function`)
                    throw TypeError(
                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                        e +
                        `.`
                    );
                  (this._batchLoadFn = e),
                    (this._maxBatchSize = (function (e) {
                      if (!(!e || !1 !== e.batch)) return 1;
                      var t = e && e.maxBatchSize;
                      if (t === void 0) return 1 / 0;
                      if (typeof t != `number` || t < 1)
                        throw TypeError(`maxBatchSize must be a positive number: ` + t);
                      return t;
                    })(t)),
                    (this._batchScheduleFn = (function (e) {
                      var t = e && e.batchScheduleFn;
                      if (t === void 0) return i;
                      if (typeof t != `function`) throw TypeError(`batchScheduleFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheKeyFn = (function (e) {
                      var t = e && e.cacheKeyFn;
                      if (t === void 0)
                        return function (e) {
                          return e;
                        };
                      if (typeof t != `function`) throw TypeError(`cacheKeyFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheMap = (function (e) {
                      if (!(!e || !1 !== e.cache)) return null;
                      var t = e && e.cacheMap;
                      if (t === void 0) return new Map();
                      if (t !== null) {
                        var n = [`get`, `set`, `delete`, `clear`].filter(function (e) {
                          return t && typeof t[e] != `function`;
                        });
                        if (n.length !== 0) throw TypeError(`Custom cacheMap missing methods: ` + n.join(`, `));
                      }
                      return t;
                    })(t)),
                    (this._batch = null),
                    (this.name = t && t.name ? t.name : null);
                }
                var t = e.prototype;
                return (
                  (t.load = function (e) {
                    if (e == null)
                      throw TypeError(
                        `The loader.load() function must be called with a value, but got: ` + String(e) + `.`
                      );
                    var t = (function (e) {
                        var t = e._batch;
                        if (t !== null && !t.hasDispatched && t.keys.length < e._maxBatchSize) return t;
                        var n = { hasDispatched: !1, keys: [], callbacks: [] };
                        return (
                          (e._batch = n),
                          e._batchScheduleFn(function () {
                            (function (e, t) {
                              var n;
                              if (((t.hasDispatched = !0), t.keys.length === 0)) {
                                o(t);
                                return;
                              }
                              try {
                                n = e._batchLoadFn(t.keys);
                              } catch (n) {
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              }
                              if (!n || typeof n.then != `function`)
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              n.then(function (e) {
                                if (!s(e))
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                      String(e) +
                                      `.`
                                  );
                                if (e.length !== t.keys.length)
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                      String(t.keys) +
                                      `

Values:
` +
                                      String(e)
                                  );
                                o(t);
                                for (var n = 0; n < t.callbacks.length; n++) {
                                  var r = e[n];
                                  r instanceof Error ? t.callbacks[n].reject(r) : t.callbacks[n].resolve(r);
                                }
                              }).catch(function (n) {
                                a(e, t, n);
                              });
                            })(e, n);
                          }),
                          n
                        );
                      })(this),
                      n = this._cacheMap,
                      r = this._cacheKeyFn(e);
                    if (n) {
                      var i = n.get(r);
                      if (i) {
                        var c = (t.cacheHits ||= []);
                        return new Promise(function (e) {
                          c.push(function () {
                            e(i);
                          });
                        });
                      }
                    }
                    t.keys.push(e);
                    var l = new Promise(function (e, n) {
                      t.callbacks.push({ resolve: e, reject: n });
                    });
                    return n && n.set(r, l), l;
                  }),
                  (t.loadMany = function (e) {
                    if (!s(e))
                      throw TypeError(
                        `The loader.loadMany() function must be called with Array<key> but got: ` + e + `.`
                      );
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(
                        this.load(e[n]).catch(function (e) {
                          return e;
                        })
                      );
                    return Promise.all(t);
                  }),
                  (t.clear = function (e) {
                    var t = this._cacheMap;
                    if (t) {
                      var n = this._cacheKeyFn(e);
                      t.delete(n);
                    }
                    return this;
                  }),
                  (t.clearAll = function () {
                    var e = this._cacheMap;
                    return e && e.clear(), this;
                  }),
                  (t.prime = function (e, t) {
                    var n = this._cacheMap;
                    if (n) {
                      var r,
                        i = this._cacheKeyFn(e);
                      n.get(i) === void 0 &&
                        (t instanceof Error ? (r = Promise.reject(t)).catch(function () {}) : (r = Promise.resolve(t)),
                        n.set(i, r));
                    }
                    return this;
                  }),
                  e
                );
              })(),
              i =
                typeof process == `object` && typeof process.nextTick == `function`
                  ? function (e) {
                      (n ||= Promise.resolve()),
                        n.then(function () {
                          process.nextTick(e);
                        });
                    }
                  : typeof setImmediate == `function`
                    ? function (e) {
                        setImmediate(e);
                      }
                    : function (e) {
                        setTimeout(e);
                      };
            function a(e, t, n) {
              o(t);
              for (var r = 0; r < t.keys.length; r++) e.clear(t.keys[r]), t.callbacks[r].reject(n);
            }
            function o(e) {
              if (e.cacheHits) for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
            }
            function s(e) {
              return (
                typeof e == `object` &&
                !!e &&
                typeof e.length == `number` &&
                (e.length === 0 || (e.length > 0 && Object.prototype.hasOwnProperty.call(e, e.length - 1)))
              );
            }
            t.exports = r;
          },
        })(),
        1
      )),
      (B = { background: 0, "user-visible": 1, "user-blocking": 2 }),
      (V = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8,
      }),
      (H =
        ((O = class e {
          getOffset() {
            return this.offset;
          }
          ensureLength(e) {
            let t = this.bytes.length;
            if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
          }
          readUint8() {
            let e = V.Uint8;
            this.ensureLength(e);
            let t = this.view.getUint8(this.offset);
            return (this.offset += e), t;
          }
          readUint16() {
            let e = V.Uint16;
            this.ensureLength(e);
            let t = this.view.getUint16(this.offset);
            return (this.offset += e), t;
          }
          readUint32() {
            let e = V.Uint32;
            this.ensureLength(e);
            let t = this.view.getUint32(this.offset);
            return (this.offset += e), t;
          }
          readUint64() {
            let e = this.readBigUint64();
            return Number(e);
          }
          readBigUint64() {
            let e = V.BigUint64;
            this.ensureLength(e);
            let t = this.view.getBigUint64(this.offset);
            return (this.offset += e), t;
          }
          readInt8() {
            let e = V.Int8;
            this.ensureLength(e);
            let t = this.view.getInt8(this.offset);
            return (this.offset += e), t;
          }
          readInt16() {
            let e = V.Int16;
            this.ensureLength(e);
            let t = this.view.getInt16(this.offset);
            return (this.offset += e), t;
          }
          readInt32() {
            let e = V.Int32;
            this.ensureLength(e);
            let t = this.view.getInt32(this.offset);
            return (this.offset += e), t;
          }
          readInt64() {
            let e = this.readBigInt64();
            return Number(e);
          }
          readBigInt64() {
            let e = V.BigInt64;
            this.ensureLength(e);
            let t = this.view.getBigInt64(this.offset);
            return (this.offset += e), t;
          }
          readFloat32() {
            let e = V.Float32;
            this.ensureLength(e);
            let t = this.view.getFloat32(this.offset);
            return (this.offset += e), t;
          }
          readFloat64() {
            let e = V.Float64;
            this.ensureLength(e);
            let t = this.view.getFloat64(this.offset);
            return (this.offset += e), t;
          }
          readBytes(e) {
            let t = this.offset,
              n = t + e,
              r = this.bytes.subarray(t, n);
            return (this.offset = n), r;
          }
          readString() {
            let t = this.readUint32(),
              n = this.readBytes(t);
            return e.textDecoder.decode(n);
          }
          readJson() {
            let e = this.readString();
            return JSON.parse(e);
          }
          constructor(e) {
            y(this, `bytes`, void 0),
              y(this, `offset`, 0),
              y(this, `view`, void 0),
              (this.bytes = e),
              (this.view = fe(this.bytes));
          }
        }),
        y(O, `textDecoder`, new TextDecoder()),
        O)),
      d !== void 0 && d.requestIdleCallback,
      (U = (e) => 2 ** e - 1),
      (W = (e) => -(2 ** (e - 1))),
      (G = (e) => 2 ** (e - 1) - 1),
      W(8),
      W(16),
      W(32),
      -(BigInt(2) ** BigInt(63)),
      U(8),
      U(16),
      U(32),
      BigInt(2) ** BigInt(64) - BigInt(1),
      G(8),
      G(16),
      G(32),
      BigInt(2) ** BigInt(63) - BigInt(1),
      (K = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return b(C(n), `Invalid chunkId`), b(C(r), `Invalid offset`), b(C(i), `Invalid length`), new e(n, r, i);
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(t) {
          let n = t.readUint16(),
            r = t.readUint32(),
            i = t.readUint32();
          return new e(n, r, i);
        }
        write(e) {
          e.writeUint16(this.chunkId), e.writeUint32(this.offset), e.writeUint32(this.length);
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
              ? 1
              : this.offset < e.offset
                ? -1
                : this.offset > e.offset
                  ? 1
                  : (b(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          y(this, `chunkId`, void 0),
            y(this, `offset`, void 0),
            y(this, `length`, void 0),
            (this.chunkId = e),
            (this.offset = t),
            (this.length = n);
        }
      }),
      ((e) => {
        (e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return pe(e);
            case 2:
              return ge(e);
            case 3:
              return ye(e);
            case 4:
              return Se(e);
            case 5:
              return Te(e);
            case 6:
              return Oe(e);
            case 7:
              return je(e);
            case 8:
              return Pe(e);
            case 9:
              return Le(e);
            case 10:
              return Be(e);
            case 11:
              return Ue(e);
            case 12:
              return Ke(e);
            case 13:
              return Ye(e);
            default:
              x(t);
          }
        }),
          (e.write = function (e, t) {
            let n = T(t);
            if ((e.writeUint8(n), !w(t)))
              switch (t.type) {
                case `array`:
                  return me(e, t);
                case `boolean`:
                  return _e(e, t);
                case `color`:
                  return be(e, t);
                case `date`:
                  return Ce(e, t);
                case `enum`:
                  return Ee(e, t);
                case `file`:
                  return ke(e, t);
                case `link`:
                  return Me(e, t);
                case `number`:
                  return Fe(e, t);
                case `object`:
                  return Re(e, t);
                case `responsiveimage`:
                  return Ve(e, t);
                case `richtext`:
                  return We(e, t);
                case `vectorsetitem`:
                  return Xe(e, t);
                case `string`:
                  return qe(e, t);
                default:
                  x(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = T(e),
              i = T(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (w(e) || w(t)) return 0;
            switch (e.type) {
              case `array`:
                return b(t.type === `array`), he(e, t, n);
              case `boolean`:
                return b(t.type === `boolean`), ve(e, t);
              case `color`:
                return b(t.type === `color`), xe(e, t);
              case `date`:
                return b(t.type === `date`), we(e, t);
              case `enum`:
                return b(t.type === `enum`), De(e, t);
              case `file`:
                return b(t.type === `file`), Ae(e, t);
              case `link`:
                return b(t.type === `link`), Ne(e, t);
              case `number`:
                return b(t.type === `number`), Ie(e, t);
              case `object`:
                return b(t.type === `object`), ze(e, t, n);
              case `responsiveimage`:
                return b(t.type === `responsiveimage`), He(e, t);
              case `richtext`:
                return b(t.type === `richtext`), Ge(e, t);
              case `vectorsetitem`:
                return b(t.type === `vectorsetitem`), Ze(e, t);
              case `string`:
                return b(t.type === `string`), Je(e, t, n);
              default:
                x(e);
            }
          });
      })((k ||= {})),
      (q = 3),
      (nt = 250),
      (rt = [408, 429, 500, 502, 503, 504]),
      (J = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!rt.includes(r.status) || ++n > q) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > q) throw e;
          }
          await Qe(n);
        }
      }),
      (it = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if ((b(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                (t = E(e.data.subarray(0, r), t)), (n = e.start);
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((b(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                (t = E(t, i)), (r = e.end);
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          y(this, `chunks`, []);
        }
      }),
      (at = class {
        scanItems(e) {
          return (
            this.itemsPromise
              ? this.isScanning && e && this.scanPrioritySources.add(e)
              : ((this.isScanning = !0),
                e && this.scanPrioritySources.add(e),
                (this.itemsPromise = J(this.url)
                  .then(async (e) => {
                    if (!e.ok) throw Error(`Request failed: ${e.status} ${e.statusText}`);
                    let t = await e.arrayBuffer(),
                      n = new H(new Uint8Array(t)),
                      r = [],
                      i = n.readUint32();
                    for (let e = 0; e < i; e++) {
                      let e = de(this.scanPrioritySources),
                        t = e ? ie({ batch: !0, priority: e }) : void 0;
                      t && (await t);
                      let i = n.getOffset(),
                        a = D(n),
                        o = n.getOffset() - i,
                        s = new K(this.id, i, o).toString(),
                        c = { pointer: s, data: a };
                      this.itemLoader.prime({ pointer: s, prioritySources: new Set() }, c), r.push(c);
                    }
                    return r;
                  })
                  .finally(() => {
                    (this.isScanning = !1), this.scanPrioritySources.clear();
                  }))),
            this.itemsPromise
          );
        }
        resolveItem(e, t) {
          let n = this.itemPrioritySources.get(e);
          n || ((n = new Set()), this.itemPrioritySources.set(e, n)), t && n.add(t);
          let r = this.itemLoader.load({ pointer: e, prioritySources: n }),
            i = () => this.itemPrioritySources.delete(e);
          return r.then(i, i), r;
        }
        constructor(e, t) {
          y(this, `id`, void 0),
            y(this, `url`, void 0),
            y(this, `itemsPromise`, void 0),
            y(this, `isScanning`, !1),
            y(this, `scanPrioritySources`, new Set()),
            y(this, `itemPrioritySources`, new Map()),
            y(
              this,
              `itemLoader`,
              new z.default(
                async (e) => {
                  let t = e.map(({ pointer: e }) => {
                      let t = K.fromString(e);
                      return { from: t.offset, to: t.offset + t.length };
                    }),
                    n = await $e(this.url, t),
                    r = [];
                  for (let t = 0; t < n.length; t++) {
                    let i = de(tt(e)),
                      a = i ? ie({ batch: !0, priority: i }) : void 0;
                    a && (await a);
                    let o = n[t];
                    b(o, `Missing range bytes`);
                    let s = D(new H(o)),
                      c = e[t]?.pointer;
                    b(c, `Missing pointer`), r.push({ pointer: c, data: s });
                  }
                  return r;
                },
                { maxBatchSize: 250, cacheKeyFn: (e) => e.pointer }
              )
            ),
            (this.id = e),
            (this.url = t);
        }
      }),
      (ot = class {
        async scanItems(e) {
          return (await Promise.all(this.chunks.map(async (t) => t.scanItems(e)))).flat();
        }
        resolveItems(e, t) {
          return Promise.all(
            e.map((e) => {
              let n = K.fromString(e),
                r = this.chunks[n.chunkId];
              return b(r, `Missing chunk`), r.resolveItem(e, t);
            })
          );
        }
        compareItems(e, t) {
          let n = K.fromString(e.pointer),
            r = K.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return k.compare(e, t, n);
        }
        constructor(e) {
          y(this, `options`, void 0),
            y(this, `id`, void 0),
            y(this, `schema`, void 0),
            y(this, `indexes`, void 0),
            y(this, `resolveRichText`, void 0),
            y(this, `resolveVectorSetItem`, void 0),
            y(this, `chunks`, void 0),
            (this.options = e),
            (this.chunks = this.options.chunks.map((e, t) => new at(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id);
        }
      });
  });
function ct(e) {
  return typeof e == `object` && !!e && !s(e) && pt in e;
}
function lt(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function ut(e, t, n) {
  for (let [r, i] of Object.entries(t)) {
    let t = e[r];
    if (typeof i == `number`) {
      e[r] = n(i, t);
      continue;
    }
    dt(t, i, n);
  }
}
function dt(e, t, n) {
  if (typeof t != `number`) {
    if (Array.isArray(t)) {
      if (!Array.isArray(e)) return;
      let [r] = t;
      for (let t = 0; t < e.length; t++) {
        let i = e[t];
        typeof r == `number` ? (e[t] = n(r, i)) : dt(i, r, n);
      }
      return;
    }
    typeof e != `object` || !e || Array.isArray(e) || ut(e, t, n);
  }
}
function ft(e) {
  let t = new Map();
  return (n) => {
    let r = t.get(n);
    if (r) return r;
    let s = (function t(n) {
      switch (n[0]) {
        case 1: {
          let [, ...e] = n;
          return a(i, void 0, ...e.map(t));
        }
        case 2: {
          let [, e, ...r] = n;
          return a(ee, e, ...r.map(t));
        }
        case 3: {
          let [, r, i, a] = n;
          ut(i, a, (n, r) => {
            if (n === 1) return r && t(r);
            if (typeof r != `string`) return r;
            let i = e[r];
            return i ? (ct(i) && i.preload(), i) : r;
          });
          let s = e[r];
          return (
            lt(s, `Module not found`),
            ct(s) && s.preload(),
            o(te, { componentIdentifier: r, children: (e) => o(ne, { component: s, props: { ...e, ...i } }) })
          );
        }
        case 4: {
          let [, e, r, ...i] = n,
            o = i.map(t);
          return a(e === `a` ? f.a : e, r, ...o);
        }
        case 5: {
          let [, e] = n;
          return e;
        }
      }
    })(JSON.parse(n));
    return t.set(n, s), s;
  };
}
var Y,
  X,
  pt,
  mt,
  Z,
  ht = e(() => {
    n(),
      c(),
      m(),
      u(),
      d !== void 0 && d.requestIdleCallback,
      (pt = `preload`),
      (mt =
        (((Y = mt || {})[(Y.Fragment = 1)] = `Fragment`),
        (Y[(Y.Link = 2)] = `Link`),
        (Y[(Y.Module = 3)] = `Module`),
        (Y[(Y.Tag = 4)] = `Tag`),
        (Y[(Y.Text = 5)] = `Text`),
        Y)),
      (Z = (((X = Z || {})[(X.RichText = 1)] = `RichText`), (X[(X.VectorSetItem = 2)] = `VectorSetItem`), X));
  }),
  gt,
  _t,
  vt,
  Q,
  $,
  yt = e(() => {
    m(),
      st(),
      ht(),
      (gt = {
        A01zKlqgA: { isNullable: !0, type: h.String },
        createdAt: { isNullable: !0, type: h.Date },
        HdhCYL7yq: { isNullable: !0, type: h.String },
        id: { isNullable: !1, type: h.String },
        JTQPB2tfM: { isNullable: !0, type: h.String },
        MF89GRIKE: { isNullable: !0, type: h.Color },
        nextItemId: { isNullable: !0, type: h.String },
        oRHCqWiJq: { isNullable: !0, type: h.String },
        previousItemId: { isNullable: !0, type: h.String },
        PVmwa23PL: { isNullable: !0, type: h.String },
        RZqQKJG4P: { isNullable: !0, type: h.Number },
        TvKgpp695: { isNullable: !0, type: h.String },
        updatedAt: { isNullable: !0, type: h.Date },
      }),
      (_t = []),
      (vt = (e) => {
        let t = _t[e];
        if (t) return t().then((e) => e.default);
      }),
      (Q = ft({})),
      new re(),
      ($ = {
        collectionByLocaleId: {
          default: new ot({
            chunks: [
              new URL(
                `./wfYBJOrXB-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/obuEtxmbahAtWZlEl4yZ/JGxXrQooo8ueLngUFBXA/wfYBJOrXB.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `f35f2efc-5298-41f9-9472-77302153a093default`,
            indexes: [],
            resolveRichText: Q,
            resolveVectorSetItem: vt,
            schema: gt,
          }),
        },
        displayName: `Testimonials`,
        id: `f35f2efc-5298-41f9-9472-77302153a093`,
      }),
      p($, {
        A01zKlqgA: { defaultValue: ``, title: `Name`, type: h.String },
        PVmwa23PL: { preventLocalization: !1, title: `Slug`, type: h.String },
        JTQPB2tfM: { defaultValue: ``, title: `Role`, type: h.String },
        TvKgpp695: { defaultValue: ``, title: `Company`, type: h.String },
        oRHCqWiJq: { defaultValue: ``, title: `Quote`, type: h.String },
        HdhCYL7yq: { defaultValue: ``, title: `Project`, type: h.String },
        RZqQKJG4P: { defaultValue: 0, title: `Order`, type: h.Number },
        MF89GRIKE: { defaultValue: `rgb(75, 59, 255)`, title: `Colour`, type: h.Color },
        createdAt: { title: `Created`, type: h.Date },
        updatedAt: { title: `Updated`, type: h.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/wfYBJOrXB:default`,
          title: `Previous`,
          type: h.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/wfYBJOrXB:default`,
          title: `Next`,
          type: h.CollectionReference,
        },
      });
  });
export { ce as i, $ as n, oe as r, yt as t };
//# sourceMappingURL=wfYBJOrXB.JqagdLZA.mjs.map
