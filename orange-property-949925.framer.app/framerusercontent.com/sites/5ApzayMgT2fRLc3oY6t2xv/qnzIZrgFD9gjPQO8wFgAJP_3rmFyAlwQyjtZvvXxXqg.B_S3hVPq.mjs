import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  O as n,
  P as r,
  _ as i,
  c as a,
  j as o,
  l as s,
  s as c,
  u as l,
  w as u,
  y as d,
} from "./react.CHR6xBda.mjs";
import { a as f, r as p, t as m, x as h } from "./motion.De9yD8td.mjs";
import {
  E as g,
  L as _,
  R as v,
  T as y,
  U as b,
  Y as x,
  Z as S,
  _t as C,
  a as w,
  c as ee,
  ct as T,
  d as E,
  dt as te,
  ft as ne,
  gt as D,
  h as re,
  ht as O,
  i as k,
  j as ie,
  k as A,
  l as j,
  n as ae,
  o as M,
  ot as oe,
  pt as N,
  rt as P,
  st as se,
  u as ce,
  w as F,
  y as le,
} from "./framer.dKj5RJCl.mjs";
import { i as ue, n as de, r as fe, t as pe } from "./MG0afWxxR.fLuX1diM.mjs";
import { n as me, t as I } from "./LayerfolioFAQ.bBGt6o14.mjs";
import { a as he, c as ge, i as _e, n as ve, o as L, r as ye, s as be, t as xe } from "./DXBcJdPa7.B57IyCzq.mjs";
import { i as Se, n as Ce, r as R, t as we } from "./wfYBJOrXB.JqagdLZA.mjs";
import { a as Te, c as Ee, i as De, n as Oe, o as ke, r as Ae, s as je, t as Me } from "./RKf16m7gj.hzAw1-e7.mjs";
import { n as Ne, t as z } from "./LayerfolioPageHero.CJa02tpI.mjs";
import Pe, { t as Fe } from "./czCOFbfmbdls08mfdgW26aNpdwpxVPtfmG0E5rypHl0.Qqf1Dg4H.mjs";
function B(e, ...t) {
  let n = {};
  return t?.forEach((t) => t && Object.assign(n, e[t])), n;
}
var V,
  Ie,
  H,
  U,
  W,
  G,
  K,
  q,
  Le,
  Re,
  J,
  ze = e(() => {
    c(),
      b(),
      m(),
      u(),
      (V = { ZZ6mtEhEN: { hover: !0 } }),
      (Ie = [`ZZ6mtEhEN`, `oWxRcnd1p`, `rdIB3auD8`, `dzPFHdPDp`]),
      (H = `framer-ZWHTy`),
      (U = {
        dzPFHdPDp: `framer-v-vwkt1j`,
        oWxRcnd1p: `framer-v-1vj2uwb`,
        rdIB3auD8: `framer-v-ic22yc`,
        ZZ6mtEhEN: `framer-v-1vdy7pg`,
      }),
      (W = { delay: 0, duration: 0.35, ease: [0.22, 1, 0.36, 1], type: `tween` }),
      (G = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          a = o(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(f.Provider, { value: a, children: n });
      }),
      (K = { Default: `ZZ6mtEhEN`, Error: `dzPFHdPDp`, Pending: `rdIB3auD8`, Success: `oWxRcnd1p` }),
      (q = h.create(r)),
      (Le = ({ height: e, id: t, width: n, ...r }) => ({ ...r, variant: K[r.variant] ?? r.variant ?? `ZZ6mtEhEN` })),
      (Re = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = D(
        i(function (e, t) {
          let i = n(null),
            a = t ?? i,
            o = d(),
            { activeLocale: c, setLocale: l } = te();
          P();
          let { style: u, className: f, layoutId: m, variant: g, ..._ } = Le(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: C,
              setGestureState: w,
              setVariant: ee,
              variants: T,
            } = O({
              cycleOrder: Ie,
              defaultVariant: `ZZ6mtEhEN`,
              enabledGestures: V,
              ref: a,
              variant: g,
              variantClassNames: U,
            }),
            E = Re(e, T),
            ne = A(H);
          return s(p, {
            id: m ?? o,
            children: s(q, {
              animate: T,
              initial: !1,
              children: s(G, {
                value: W,
                children: s(h.button, {
                  ..._,
                  ...x,
                  className: A(ne, `framer-1vdy7pg`, f, y),
                  "data-framer-name": `Default`,
                  "data-reset": `button`,
                  layoutDependency: E,
                  layoutId: `ZZ6mtEhEN`,
                  ref: a,
                  style: {
                    backgroundColor: `rgb(12, 12, 14)`,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    ...u,
                  },
                  variants: {
                    "ZZ6mtEhEN-hover": { backgroundColor: `rgb(75, 59, 255)` },
                    dzPFHdPDp: { backgroundColor: `rgb(255, 61, 110)` },
                    oWxRcnd1p: { backgroundColor: `rgb(16, 179, 122)` },
                    rdIB3auD8: { backgroundColor: `rgb(58, 58, 68)` },
                  },
                  ...B(
                    {
                      "ZZ6mtEhEN-hover": { "data-framer-name": void 0 },
                      dzPFHdPDp: { "data-framer-name": `Error` },
                      oWxRcnd1p: { "data-framer-name": `Success` },
                      rdIB3auD8: { "data-framer-name": `Pending` },
                    },
                    v,
                    S
                  ),
                  children: s(F, {
                    __fromCanvasComponent: !0,
                    children: s(r, {
                      children: s(h.p, {
                        dir: `auto`,
                        style: {
                          "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                          "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                          "--framer-font-size": `15px`,
                          "--framer-font-weight": `500`,
                          "--framer-letter-spacing": `-0.015em`,
                          "--framer-line-height": `1em`,
                          "--framer-text-color": `var(--extracted-r6o4lv, #FFFFFF)`,
                        },
                        children: `Send to Noor  →`,
                      }),
                    }),
                    className: `framer-n84yjk`,
                    "data-framer-name": `Label`,
                    fonts: [`GF;Geist-500`],
                    layoutDependency: E,
                    layoutId: `emS84Q2Oq`,
                    style: { "--extracted-r6o4lv": `#FFFFFF` },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...B(
                      {
                        dzPFHdPDp: {
                          children: s(r, {
                            children: s(h.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                "--framer-font-size": `15px`,
                                "--framer-font-weight": `500`,
                                "--framer-letter-spacing": `-0.015em`,
                                "--framer-line-height": `1em`,
                                "--framer-text-color": `var(--extracted-r6o4lv, #FFFFFF)`,
                              },
                              children: `Something broke. Try email?`,
                            }),
                          }),
                        },
                        oWxRcnd1p: {
                          children: s(r, {
                            children: s(h.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                "--framer-font-size": `15px`,
                                "--framer-font-weight": `500`,
                                "--framer-letter-spacing": `-0.015em`,
                                "--framer-line-height": `1em`,
                                "--framer-text-color": `var(--extracted-r6o4lv, #FFFFFF)`,
                              },
                              children: `Sent. Reply within a day  ✓`,
                            }),
                          }),
                        },
                        rdIB3auD8: {
                          children: s(r, {
                            children: s(h.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `R0Y7R2Vpc3QtNTAw`,
                                "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                "--framer-font-size": `15px`,
                                "--framer-font-weight": `500`,
                                "--framer-letter-spacing": `-0.015em`,
                                "--framer-line-height": `1em`,
                                "--framer-text-color": `var(--extracted-r6o4lv, #FFFFFF)`,
                              },
                              children: `Sending…`,
                            }),
                          }),
                        },
                      },
                      v,
                      S
                    ),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-ZWHTy.framer-1hx61wd, .framer-ZWHTy .framer-1hx61wd { display: block; }`,
          `.framer-ZWHTy.framer-1vdy7pg { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 50px; justify-content: center; padding: 0px 22px 0px 22px; position: relative; width: min-content; }`,
          `.framer-ZWHTy .framer-n84yjk { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        ],
        `framer-ZWHTy`
      )),
      (J.displayName = `Submit Button`),
      (J.defaultProps = { height: 50, width: 200 }),
      g(J, {
        variant: {
          options: [`ZZ6mtEhEN`, `oWxRcnd1p`, `rdIB3auD8`, `dzPFHdPDp`],
          optionTitles: [`Default`, `Success`, `Pending`, `Error`],
          title: `Variant`,
          type: M.Enum,
        },
      }),
      y(
        J,
        [
          {
            explicitInter: !0,
            fonts: [
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
        ],
        { supportsExplicitInterCodegen: !0 }
      );
  }),
  Be,
  Ve,
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
  Y,
  $e,
  et,
  tt,
  nt,
  X,
  rt,
  Z,
  it,
  at,
  Q,
  $;
e(() => {
  c(),
    b(),
    m(),
    u(),
    ze(),
    me(),
    he(),
    Ne(),
    Se(),
    we(),
    Ee(),
    _e(),
    ue(),
    De(),
    Fe(),
    (Be = _(z)),
    (Ve = _(J)),
    (He = C(h.a, { nodeId: `XUIlqtUvY`, override: L, scopeId: `K1UjISgVS` })),
    (Ue = C(h.div, { nodeId: `FGZtB4bgf`, override: L, scopeId: `K1UjISgVS` })),
    (We = C(h.div, { nodeId: `qVjXt1xQb`, override: L, scopeId: `K1UjISgVS` })),
    (Ge = C(h.div, { nodeId: `smHxkCi6p`, override: L, scopeId: `K1UjISgVS` })),
    (Ke = _(I)),
    (qe = C(h.div, { nodeId: `pslZpzOC5`, override: be, scopeId: `K1UjISgVS` })),
    (Je = _(R)),
    (Ye = C(h.div, { nodeId: `SI6r_rWIj`, override: ge, scopeId: `K1UjISgVS` })),
    (Xe = {
      CFrTZHgP9: `(max-width: 809.98px)`,
      DvVYeXYwZ: `(min-width: 1200px)`,
      s5onZwT3b: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (Ze = () => typeof document < `u`),
    (Qe = []),
    (Y = `framer-ER8cl`),
    ($e = { CFrTZHgP9: `framer-v-ignp0t`, DvVYeXYwZ: `framer-v-s1o7k8`, s5onZwT3b: `framer-v-mgzn2t` }),
    (et = (e, t, n) => (e && t ? `position` : n)),
    (tt = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (nt = (e, t, n) => {
      switch (e.state) {
        case `success`:
          return t.success ?? n;
        case `pending`:
          return t.pending ?? n;
        case `error`:
          return t.error ?? n;
        case `incomplete`:
          return t.incomplete ?? n;
        default:
          return n;
      }
    }),
    (X = () => ({
      from: { alias: `SI6r_rWIj`, data: Ce, type: `Collection` },
      limit: { type: `LiteralValue`, value: 3 },
      orderBy: [{ collection: `SI6r_rWIj`, name: `RZqQKJG4P`, type: `Identifier` }],
      select: [
        { collection: `SI6r_rWIj`, name: `A01zKlqgA`, type: `Identifier` },
        { collection: `SI6r_rWIj`, name: `JTQPB2tfM`, type: `Identifier` },
        { collection: `SI6r_rWIj`, name: `TvKgpp695`, type: `Identifier` },
        { collection: `SI6r_rWIj`, name: `oRHCqWiJq`, type: `Identifier` },
        { collection: `SI6r_rWIj`, name: `HdhCYL7yq`, type: `Identifier` },
        { collection: `SI6r_rWIj`, name: `MF89GRIKE`, type: `Identifier` },
        { collection: `SI6r_rWIj`, name: `PVmwa23PL`, type: `Identifier` },
        { collection: `SI6r_rWIj`, name: `id`, type: `Identifier` },
      ],
    })),
    (rt = ({ query: e, pageSize: t, children: n }) => n(N(e))),
    (Z = { Desktop: `DvVYeXYwZ`, Phone: `CFrTZHgP9`, Tablet: `s5onZwT3b` }),
    (it = ({ value: e }) =>
      T() ? null : s(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (at = ({ height: e, id: t, width: n, ...r }) => ({ ...r, variant: Z[r.variant] ?? r.variant ?? `DvVYeXYwZ` })),
    (Q = D(
      i(function (e, i) {
        let c = n(null),
          u = i ?? c,
          m = d(),
          { activeLocale: g, setLocale: _ } = te();
        P();
        let { style: v, className: y, layoutId: b, variant: x, ...S } = at(e);
        ne(o(() => Pe({}, g), [g]));
        let [C, T] = se(x, Xe, !1),
          D = A(Y, pe, Me, Te, xe),
          O = t(E)?.isLayoutTemplate,
          ie = !!t(f)?.transition?.layout,
          M = et(O, ie),
          N = () => !Ze() || ![`s5onZwT3b`, `CFrTZHgP9`].includes(C);
        return (
          oe({}),
          s(E.Provider, {
            value: {
              activeVariantId: C,
              humanReadableVariantMap: Z,
              primaryVariantId: `DvVYeXYwZ`,
              variantClassNames: $e,
            },
            children: l(p, {
              id: b ?? m,
              children: [
                s(it, { value: `html body { background: rgb(255, 255, 255); }` }),
                l(h.div, {
                  ...S,
                  className: A(D, `framer-s1o7k8`, y),
                  ref: u,
                  style: { ...v },
                  children: [
                    s(k, {
                      children: s(w, {
                        className: `framer-97jhzx-container`,
                        "data-code-component-plugin-id": `api`,
                        "data-framer-name": `01 Page header`,
                        isAuthoredByUser: !0,
                        layout: M,
                        name: `01 Page header`,
                        nodeId: `kKw5A43rB`,
                        scopeId: `K1UjISgVS`,
                        children: s(z, {
                          accent: `rgb(75, 59, 255)`,
                          canvas: `rgb(236, 236, 232)`,
                          cursor: `Mara · PM`,
                          facts: `Reply within 1 day|Free 20-min intro|Booking November`,
                          height: `100%`,
                          id: `kKw5A43rB`,
                          ink: `rgb(12, 12, 14)`,
                          layoutId: `kKw5A43rB`,
                          lead: `Tell me what's slow, confusing or costing you support tickets. I reply within one working day with a first idea and a fixed price.`,
                          name: `01 Page header`,
                          path: `Portfolio / Contact`,
                          style: { width: `100%` },
                          title: `Start a project`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    l(h.section, {
                      className: `framer-1armgf2`,
                      "data-framer-name": `02 Form`,
                      layout: M,
                      children: [
                        l(`div`, {
                          className: `framer-15tjujx`,
                          "data-border": !0,
                          "data-framer-name": `Form panel`,
                          children: [
                            l(`div`, {
                              className: `framer-1du8nob`,
                              "data-border": !0,
                              "data-framer-name": `Panel bar`,
                              children: [
                                s(F, {
                                  __fromCanvasComponent: !0,
                                  children: s(r, {
                                    children: s(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `R0Y7R2Vpc3QtNjAw`,
                                        "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                        "--framer-font-size": `13px`,
                                        "--framer-font-weight": `600`,
                                        "--framer-line-height": `1em`,
                                        "--framer-text-color": `#0C0C0E`,
                                      },
                                      children: `New comment · Project brief`,
                                    }),
                                  }),
                                  className: `framer-1bmq7vl`,
                                  fonts: [`GF;Geist-600`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                N() &&
                                  s(F, {
                                    __fromCanvasComponent: !0,
                                    children: s(r, {
                                      children: s(`p`, {
                                        className: `framer-styles-preset-o8en2f`,
                                        "data-styles-preset": `MG0afWxxR`,
                                        dir: `auto`,
                                        style: { "--framer-text-color": `rgba(12, 12, 14, 0.45)` },
                                        children: `ALL FIELDS GO STRAIGHT TO NOOR`,
                                      }),
                                    }),
                                    className: `framer-18jccpp hidden-mgzn2t hidden-ignp0t`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                              ],
                            }),
                            s(ee, {
                              action: `https://api.framer.com/forms/v1/forms/addf254e-7d6e-43ab-8af2-14e52237cd93/submit`,
                              className: `framer-g5umo1`,
                              "data-framer-name": `Form`,
                              nodeId: `EpmGhBlFl`,
                              children: (e) =>
                                l(a, {
                                  children: [
                                    l(`div`, {
                                      className: `framer-o6ms20`,
                                      "data-framer-name": `Row 1`,
                                      children: [
                                        l(`label`, {
                                          className: `framer-1gpru96`,
                                          "data-framer-name": `Your name`,
                                          children: [
                                            s(F, {
                                              __fromCanvasComponent: !0,
                                              children: s(r, {
                                                children: s(`p`, {
                                                  className: `framer-styles-preset-o8en2f`,
                                                  "data-styles-preset": `MG0afWxxR`,
                                                  dir: `auto`,
                                                  style: { "--framer-text-color": `rgba(12, 12, 14, 0.55)` },
                                                  children: `YOUR NAME`,
                                                }),
                                              }),
                                              className: `framer-1nkwg9z`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            s(j, {
                                              className: `framer-jeqw0t`,
                                              inputName: `Name`,
                                              placeholder: `Ada Byron`,
                                              required: !0,
                                              type: `text`,
                                            }),
                                          ],
                                        }),
                                        l(`label`, {
                                          className: `framer-lo62s3`,
                                          "data-framer-name": `Email`,
                                          children: [
                                            s(F, {
                                              __fromCanvasComponent: !0,
                                              children: s(r, {
                                                children: s(`p`, {
                                                  className: `framer-styles-preset-o8en2f`,
                                                  "data-styles-preset": `MG0afWxxR`,
                                                  dir: `auto`,
                                                  style: { "--framer-text-color": `rgba(12, 12, 14, 0.55)` },
                                                  children: `EMAIL`,
                                                }),
                                              }),
                                              className: `framer-1dm7hf`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            s(j, {
                                              className: `framer-ak3at5`,
                                              inputName: `Email`,
                                              placeholder: `ada@company.com`,
                                              required: !0,
                                              type: `email`,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    l(`div`, {
                                      className: `framer-1tr5hfw`,
                                      "data-framer-name": `Row 2`,
                                      children: [
                                        l(`label`, {
                                          className: `framer-19ebhd`,
                                          "data-framer-name": `Company`,
                                          children: [
                                            s(F, {
                                              __fromCanvasComponent: !0,
                                              children: s(r, {
                                                children: s(`p`, {
                                                  className: `framer-styles-preset-o8en2f`,
                                                  "data-styles-preset": `MG0afWxxR`,
                                                  dir: `auto`,
                                                  style: { "--framer-text-color": `rgba(12, 12, 14, 0.55)` },
                                                  children: `COMPANY`,
                                                }),
                                              }),
                                              className: `framer-aeos4t`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            s(j, {
                                              className: `framer-8qccnu`,
                                              inputName: `Company`,
                                              placeholder: `Company or product`,
                                              required: !1,
                                              type: `text`,
                                            }),
                                          ],
                                        }),
                                        l(`label`, {
                                          className: `framer-1ccycin`,
                                          "data-framer-name": `Budget`,
                                          children: [
                                            s(F, {
                                              __fromCanvasComponent: !0,
                                              children: s(r, {
                                                children: s(`p`, {
                                                  className: `framer-styles-preset-o8en2f`,
                                                  "data-styles-preset": `MG0afWxxR`,
                                                  dir: `auto`,
                                                  style: { "--framer-text-color": `rgba(12, 12, 14, 0.55)` },
                                                  children: `BUDGET`,
                                                }),
                                              }),
                                              className: `framer-7k6vq5`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            s(ce, {
                                              className: `framer-19bikqs`,
                                              inputName: `Budget`,
                                              selectOptions: [
                                                {
                                                  title: `Research sprint · €7,500`,
                                                  type: `option`,
                                                  value: `Research sprint · €7,500`,
                                                },
                                                { title: `€10k – €25k`, type: `option`, value: `€10k – €25k` },
                                                { title: `€25k – €50k`, type: `option`, value: `€25k – €50k` },
                                                { title: `€50k+`, type: `option`, value: `€50k+` },
                                                { title: `Not sure yet`, type: `option`, value: `Not sure yet` },
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    l(`label`, {
                                      className: `framer-7wa3g7`,
                                      "data-framer-name": `Message`,
                                      children: [
                                        s(F, {
                                          __fromCanvasComponent: !0,
                                          children: s(r, {
                                            children: s(`p`, {
                                              className: `framer-styles-preset-o8en2f`,
                                              "data-styles-preset": `MG0afWxxR`,
                                              dir: `auto`,
                                              style: { "--framer-text-color": `rgba(12, 12, 14, 0.55)` },
                                              children: `WHAT’S THE PROBLEM?`,
                                            }),
                                          }),
                                          className: `framer-bhx1d6`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        s(j, {
                                          className: `framer-x0r9l8`,
                                          inputName: `Message`,
                                          placeholder: `What's slow or confusing today, who feels it, and what would 'fixed' look like?`,
                                          required: !0,
                                          type: `textarea`,
                                        }),
                                      ],
                                    }),
                                    s(k, {
                                      height: 50,
                                      children: s(w, {
                                        className: `framer-7cqguc-container`,
                                        "data-framer-name": `Submit`,
                                        name: `Submit`,
                                        nodeId: `u8HjFIBiJ`,
                                        scopeId: `K1UjISgVS`,
                                        children: s(J, {
                                          height: `100%`,
                                          id: `u8HjFIBiJ`,
                                          layoutId: `u8HjFIBiJ`,
                                          name: `Submit`,
                                          type: `submit`,
                                          variant: nt(
                                            e,
                                            { error: `dzPFHdPDp`, pending: `rdIB3auD8`, success: `oWxRcnd1p` },
                                            tt(`ZZ6mtEhEN`)
                                          ),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                            }),
                          ],
                        }),
                        l(`aside`, {
                          className: `framer-152l1iu`,
                          "data-framer-name": `Details`,
                          children: [
                            s(re, {
                              href: `mailto:hello@noorcastell.studio`,
                              motionChild: !0,
                              nodeId: `XUIlqtUvY`,
                              scopeId: `K1UjISgVS`,
                              children: l(He, {
                                className: `framer-tw98ti framer-thj70v`,
                                "data-border": !0,
                                "data-framer-name": `hello@noorcastell.studio`,
                                children: [
                                  s(F, {
                                    __fromCanvasComponent: !0,
                                    children: s(r, {
                                      children: s(`p`, {
                                        className: `framer-styles-preset-o8en2f`,
                                        "data-styles-preset": `MG0afWxxR`,
                                        dir: `auto`,
                                        style: { "--framer-text-color": `#4B3BFF` },
                                        children: `EMAIL`,
                                      }),
                                    }),
                                    className: `framer-1c9w6ud`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  s(F, {
                                    __fromCanvasComponent: !0,
                                    children: s(r, {
                                      children: s(`h3`, {
                                        className: `framer-styles-preset-ewraam`,
                                        "data-styles-preset": `RKf16m7gj`,
                                        dir: `auto`,
                                        style: { "--framer-text-color": `#0C0C0E` },
                                        children: `hello@noorcastell.studio`,
                                      }),
                                    }),
                                    className: `framer-rx537m`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  s(F, {
                                    __fromCanvasComponent: !0,
                                    children: s(r, {
                                      children: s(`p`, {
                                        className: `framer-styles-preset-dca0w5`,
                                        "data-styles-preset": `dvaHobIu7`,
                                        dir: `auto`,
                                        style: { "--framer-text-color": `rgba(12, 12, 14, 0.66)` },
                                        children: `Prefer email? Write directly. Attach anything: screenshots, a Loom, a napkin sketch.`,
                                      }),
                                    }),
                                    className: `framer-9312c0`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            }),
                            l(Ue, {
                              className: `framer-8b7cam`,
                              "data-border": !0,
                              "data-framer-name": `Replies within a day`,
                              children: [
                                s(F, {
                                  __fromCanvasComponent: !0,
                                  children: s(r, {
                                    children: s(`p`, {
                                      className: `framer-styles-preset-o8en2f`,
                                      "data-styles-preset": `MG0afWxxR`,
                                      dir: `auto`,
                                      style: { "--framer-text-color": `#4B3BFF` },
                                      children: `RESPONSE TIME`,
                                    }),
                                  }),
                                  className: `framer-1s1hayc`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                s(F, {
                                  __fromCanvasComponent: !0,
                                  children: s(r, {
                                    children: s(`h3`, {
                                      className: `framer-styles-preset-ewraam`,
                                      "data-styles-preset": `RKf16m7gj`,
                                      dir: `auto`,
                                      style: { "--framer-text-color": `#0C0C0E` },
                                      children: `Replies within a day`,
                                    }),
                                  }),
                                  className: `framer-jpazy2`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                s(F, {
                                  __fromCanvasComponent: !0,
                                  children: s(r, {
                                    children: s(`p`, {
                                      className: `framer-styles-preset-dca0w5`,
                                      "data-styles-preset": `dvaHobIu7`,
                                      dir: `auto`,
                                      style: { "--framer-text-color": `rgba(12, 12, 14, 0.66)` },
                                      children: `Monday to Friday, 9:00–18:00 Rotterdam time. Four hours of overlap with New York.`,
                                    }),
                                  }),
                                  className: `framer-98l554`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            l(We, {
                              className: `framer-1fp1bwk`,
                              "data-border": !0,
                              "data-framer-name": `Next opening: November`,
                              children: [
                                s(F, {
                                  __fromCanvasComponent: !0,
                                  children: s(r, {
                                    children: s(`p`, {
                                      className: `framer-styles-preset-o8en2f`,
                                      "data-styles-preset": `MG0afWxxR`,
                                      dir: `auto`,
                                      style: { "--framer-text-color": `#4B3BFF` },
                                      children: `AVAILABILITY`,
                                    }),
                                  }),
                                  className: `framer-17bo6f9`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                s(F, {
                                  __fromCanvasComponent: !0,
                                  children: s(r, {
                                    children: s(`h3`, {
                                      className: `framer-styles-preset-ewraam`,
                                      "data-styles-preset": `RKf16m7gj`,
                                      dir: `auto`,
                                      style: { "--framer-text-color": `#0C0C0E` },
                                      children: `Next opening: November`,
                                    }),
                                  }),
                                  className: `framer-hn07r2`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                s(F, {
                                  __fromCanvasComponent: !0,
                                  children: s(r, {
                                    children: s(`p`, {
                                      className: `framer-styles-preset-dca0w5`,
                                      "data-styles-preset": `dvaHobIu7`,
                                      dir: `auto`,
                                      style: { "--framer-text-color": `rgba(12, 12, 14, 0.66)` },
                                      children: `One outside project at a time. Research sprints can sometimes start sooner.`,
                                    }),
                                  }),
                                  className: `framer-htjdsy`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            l(Ge, {
                              className: `framer-1muds00`,
                              "data-border": !0,
                              "data-framer-name": `Maashaven 12, Rotterdam`,
                              children: [
                                s(F, {
                                  __fromCanvasComponent: !0,
                                  children: s(r, {
                                    children: s(`p`, {
                                      className: `framer-styles-preset-o8en2f`,
                                      "data-styles-preset": `MG0afWxxR`,
                                      dir: `auto`,
                                      style: { "--framer-text-color": `#4B3BFF` },
                                      children: `STUDIO`,
                                    }),
                                  }),
                                  className: `framer-14hivpg`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                s(F, {
                                  __fromCanvasComponent: !0,
                                  children: s(r, {
                                    children: s(`h3`, {
                                      className: `framer-styles-preset-ewraam`,
                                      "data-styles-preset": `RKf16m7gj`,
                                      dir: `auto`,
                                      style: { "--framer-text-color": `#0C0C0E` },
                                      children: `Maashaven 12, Rotterdam`,
                                    }),
                                  }),
                                  className: `framer-s0bv7n`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                s(F, {
                                  __fromCanvasComponent: !0,
                                  children: s(r, {
                                    children: s(`p`, {
                                      className: `framer-styles-preset-dca0w5`,
                                      "data-styles-preset": `dvaHobIu7`,
                                      dir: `auto`,
                                      style: { "--framer-text-color": `rgba(12, 12, 14, 0.66)` },
                                      children: `Coffee on the harbour, or a video call from anywhere.`,
                                    }),
                                  }),
                                  className: `framer-1b1tf73`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    s(k, {
                      children: s(w, {
                        className: `framer-mbaxwz-container`,
                        "data-code-component-plugin-id": `api`,
                        "data-framer-name": `03 FAQ`,
                        isAuthoredByUser: !0,
                        layout: M,
                        name: `03 FAQ`,
                        nodeId: `nI4fK6KNf`,
                        scopeId: `K1UjISgVS`,
                        children: s(I, {
                          accent: `rgb(75, 59, 255)`,
                          canvas: `rgb(236, 236, 232)`,
                          contactLabel: `Ask something else`,
                          contactLink: `/contact`,
                          height: `100%`,
                          id: `nI4fK6KNf`,
                          ink: `rgb(12, 12, 14)`,
                          intro: `The questions I get in almost every first call. If yours isn't here, ask it in the form; I answer every one.`,
                          items: [],
                          kicker: `Questions`,
                          layoutId: `nI4fK6KNf`,
                          name: `03 FAQ`,
                          number: `03`,
                          style: { width: `100%` },
                          title: `Before you ask`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    l(h.section, {
                      className: `framer-abxscn`,
                      "data-framer-name": `04 Testimonials`,
                      layout: M,
                      children: [
                        s(`div`, {
                          className: `framer-1ai2i1`,
                          "data-framer-name": `Head`,
                          children: l(qe, {
                            className: `framer-1dy6ect`,
                            "data-framer-name": `Head copy`,
                            children: [
                              l(h.div, {
                                className: `framer-xhbon2`,
                                "data-framer-name": `Kicker`,
                                children: [
                                  s(F, {
                                    __fromCanvasComponent: !0,
                                    children: s(r, {
                                      children: s(`p`, {
                                        className: `framer-styles-preset-o8en2f`,
                                        "data-styles-preset": `MG0afWxxR`,
                                        dir: `auto`,
                                        style: { "--framer-text-color": `#4B3BFF` },
                                        children: `[04]`,
                                      }),
                                    }),
                                    className: `framer-1h64dv1`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  s(F, {
                                    __fromCanvasComponent: !0,
                                    children: s(r, {
                                      children: s(`p`, {
                                        className: `framer-styles-preset-o8en2f`,
                                        "data-styles-preset": `MG0afWxxR`,
                                        dir: `auto`,
                                        style: { "--framer-text-color": `rgba(12, 12, 14, 0.55)` },
                                        children: `TESTIMONIALS`,
                                      }),
                                    }),
                                    className: `framer-qnor3x`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              s(F, {
                                __fromCanvasComponent: !0,
                                children: s(r, {
                                  children: s(`h2`, {
                                    className: `framer-styles-preset-mamhr0`,
                                    "data-styles-preset": `DXBcJdPa7`,
                                    dir: `auto`,
                                    style: { "--framer-text-color": `#0C0C0E` },
                                    children: `You’d be in good company`,
                                  }),
                                }),
                                className: `framer-x9tepu`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        }),
                        s(Ye, {
                          className: `framer-1x6m12g`,
                          "data-framer-name": `Testimonials list`,
                          children: s(ae, {
                            children: s(rt, {
                              query: X(),
                              children: (e, t, n) =>
                                s(a, {
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
                                        TvKgpp695: c,
                                      },
                                      l
                                    ) => (
                                      (e ??= ``),
                                      (r ??= ``),
                                      (c ??= ``),
                                      (a ??= ``),
                                      (t ??= ``),
                                      (i ??= `#09F`),
                                      (o ??= ``),
                                      s(
                                        p,
                                        {
                                          id: `SI6r_rWIj-${n}`,
                                          children: s(le.Provider, {
                                            value: { PVmwa23PL: o },
                                            children: s(h.div, {
                                              className: `framer-b5wznb`,
                                              "data-framer-name": `Quote cell`,
                                              children: s(k, {
                                                children: s(w, {
                                                  className: `framer-ecvwe2-container`,
                                                  "data-code-component-plugin-id": `api`,
                                                  "data-framer-name": `Layerfolio Quote`,
                                                  isAuthoredByUser: !0,
                                                  name: `Layerfolio Quote`,
                                                  nodeId: `l8d4uP8Nt`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `K1UjISgVS`,
                                                  children: s(R, {
                                                    accent: `rgb(75, 59, 255)`,
                                                    color: i,
                                                    company: c,
                                                    height: `100%`,
                                                    id: `l8d4uP8Nt`,
                                                    layoutId: `l8d4uP8Nt`,
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
                  ],
                }),
                s(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-ER8cl.framer-thj70v, .framer-ER8cl .framer-thj70v { display: block; }`,
        `.framer-ER8cl.framer-s1o7k8 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1080px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-ER8cl .framer-97jhzx-container, .framer-ER8cl .framer-mbaxwz-container, .framer-ER8cl .framer-ecvwe2-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-ER8cl .framer-1armgf2 { align-content: flex-start; align-items: flex-start; background-color: #ecece8; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 24px; height: min-content; justify-content: flex-start; padding: 24px 64px 130px 64px; position: relative; width: 100%; }`,
        `.framer-ER8cl .framer-15tjujx { --border-bottom-width: 1px; --border-color: rgba(12, 12, 14, 0.09); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: rgba(255, 255, 255, 0.85); border-bottom-left-radius: 18px; border-bottom-right-radius: 18px; border-top-left-radius: 18px; border-top-right-radius: 18px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; min-width: 320px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-ER8cl .framer-1du8nob { --border-bottom-width: 1px; --border-color: rgba(12, 12, 14, 0.08); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; height: min-content; justify-content: space-between; padding: 14px 20px 14px 20px; position: relative; width: 100%; }`,
        `.framer-ER8cl .framer-1bmq7vl, .framer-ER8cl .framer-18jccpp, .framer-ER8cl .framer-1nkwg9z, .framer-ER8cl .framer-1dm7hf, .framer-ER8cl .framer-aeos4t, .framer-ER8cl .framer-7k6vq5, .framer-ER8cl .framer-bhx1d6, .framer-ER8cl .framer-1c9w6ud, .framer-ER8cl .framer-1s1hayc, .framer-ER8cl .framer-17bo6f9, .framer-ER8cl .framer-14hivpg, .framer-ER8cl .framer-1h64dv1, .framer-ER8cl .framer-qnor3x { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-ER8cl .framer-g5umo1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; padding: 24px 20px 24px 20px; position: relative; width: 100%; }`,
        `.framer-ER8cl .framer-o6ms20, .framer-ER8cl .framer-1tr5hfw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 14px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ER8cl .framer-1gpru96, .framer-ER8cl .framer-lo62s3, .framer-ER8cl .framer-19ebhd, .framer-ER8cl .framer-1ccycin { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; min-width: 220px; padding: 0px; position: relative; width: 1px; }`,
        `.framer-ER8cl .framer-jeqw0t, .framer-ER8cl .framer-ak3at5, .framer-ER8cl .framer-8qccnu { --framer-input-background: rgba(12, 12, 14, 0.04); --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(12, 12, 14, 0.1); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #4B3BFF; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1.5px; --framer-input-font-color: #0c0c0e; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-mask-image: none; --framer-input-padding: 0px 14px 0px 14px; --framer-input-placeholder-color: rgba(12, 12, 14, 0.4); flex: none; height: 48px; position: relative; width: 100%; }`,
        `.framer-ER8cl .framer-19bikqs { --framer-input-background: rgba(12, 12, 14, 0.04); --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(12, 12, 14, 0.1); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: #0c0c0e; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 0px 14px 0px 14px; flex: none; height: 48px; position: relative; width: 100%; }`,
        `.framer-ER8cl .framer-7wa3g7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ER8cl .framer-x0r9l8 { --framer-input-background: rgba(12, 12, 14, 0.04); --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(12, 12, 14, 0.1); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #4B3BFF; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1.5px; --framer-input-font-color: #0c0c0e; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-mask-image: none; --framer-input-padding: 14px; --framer-input-placeholder-color: rgba(12, 12, 14, 0.4); flex: none; height: 170px; position: relative; width: 100%; }`,
        `.framer-ER8cl .framer-7cqguc-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-ER8cl .framer-152l1iu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 380px; }`,
        `.framer-ER8cl .framer-tw98ti { --border-bottom-width: 1px; --border-color: rgba(12, 12, 14, 0.09); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: rgba(255, 255, 255, 0.78); border-bottom-left-radius: 14px; border-bottom-right-radius: 14px; border-top-left-radius: 14px; border-top-right-radius: 14px; cursor: pointer; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 18px; position: relative; text-decoration: none; width: 100%; }`,
        `.framer-ER8cl .framer-rx537m, .framer-ER8cl .framer-9312c0, .framer-ER8cl .framer-jpazy2, .framer-ER8cl .framer-98l554, .framer-ER8cl .framer-hn07r2, .framer-ER8cl .framer-htjdsy, .framer-ER8cl .framer-s0bv7n, .framer-ER8cl .framer-1b1tf73 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ER8cl .framer-8b7cam, .framer-ER8cl .framer-1fp1bwk, .framer-ER8cl .framer-1muds00 { --border-bottom-width: 1px; --border-color: rgba(12, 12, 14, 0.09); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: rgba(255, 255, 255, 0.78); border-bottom-left-radius: 14px; border-bottom-right-radius: 14px; border-top-left-radius: 14px; border-top-right-radius: 14px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 18px; position: relative; width: 100%; }`,
        `.framer-ER8cl .framer-abxscn { align-content: center; align-items: center; background-color: #ecece8; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; padding: 130px 64px 140px 64px; position: relative; width: 100%; }`,
        `.framer-ER8cl .framer-1ai2i1 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; height: min-content; justify-content: space-between; max-width: 1312px; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ER8cl .framer-1dy6ect { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; max-width: 760px; min-width: 300px; padding: 0px; position: relative; width: 1px; }`,
        `.framer-ER8cl .framer-xhbon2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
        `.framer-ER8cl .framer-x9tepu { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-ER8cl .framer-1x6m12g { display: grid; flex: none; gap: 16px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(300px, 1fr)); height: min-content; justify-content: center; max-width: 1312px; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ER8cl .framer-b5wznb { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
        ...de,
        ...Oe,
        ...ke,
        ...ve,
        `.framer-ER8cl[data-border="true"]::after, .framer-ER8cl [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-ER8cl.framer-s1o7k8 { height: min-content; width: 810px; } .framer-ER8cl .framer-1armgf2 { padding: 24px 32px 104px 32px; } .framer-ER8cl .framer-152l1iu { width: 100%; } .framer-ER8cl .framer-abxscn { padding: 104px 32px 112px 32px; } .framer-ER8cl .framer-1x6m12g { grid-template-columns: repeat(2, minmax(300px, 1fr)); }}`,
        `@media (max-width: 809.98px) { .framer-ER8cl.framer-s1o7k8 { height: min-content; width: 390px; } .framer-ER8cl .framer-1armgf2 { padding: 24px 20px 81px 20px; } .framer-ER8cl .framer-152l1iu { width: 100%; } .framer-ER8cl .framer-abxscn { padding: 81px 20px 87px 20px; } .framer-ER8cl .framer-1x6m12g { grid-template-columns: repeat(1, minmax(300px, 1fr)); }}`,
      ],
      `framer-ER8cl`
    )),
    (Q.displayName = `Contact`),
    (Q.defaultProps = { height: 3962, width: 1200 }),
    y(
      Q,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Geist`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Geist`,
              url: `https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_RQuQ4mJPby1QNtA.woff2`,
              weight: `600`,
            },
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
          ],
        },
        ...Be,
        ...Ve,
        ...Ke,
        ...Je,
        ...v(fe),
        ...v(Ae),
        ...v(je),
        ...v(ye),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = t.priority,
          i = x.get(X(), n, r);
        return S([() => i.preload(), () => ie(J, {}, t)], t);
      },
    }),
    ($ = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerK1UjISgVS`,
          slots: [],
          annotations: {
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"s5onZwT3b":{"layout":["fixed","auto"]},"CFrTZHgP9":{"layout":["fixed","auto"]}}}`,
            framerComponentViewportWidth: `true`,
            framerAutoSizeImages: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicWidth: `1200`,
            framerIntrinsicHeight: `3962`,
            framerColorSyntax: `true`,
            framerImmutableVariables: `true`,
            framerScrollSections: `false`,
            framerResponsiveScreen: `true`,
            framerContractVersion: `1`,
            framerLayoutTemplateFlowEffect: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    });
})();
export { $ as __FramerMetadata__, Q as default, Qe as queryParamNames };
//# sourceMappingURL=qnzIZrgFD9gjPQO8wFgAJP_3rmFyAlwQyjtZvvXxXqg.B_S3hVPq.mjs.map
