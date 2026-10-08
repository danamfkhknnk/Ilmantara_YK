import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { A as t, O as n, _ as r, j as i, l as a, s as o, u as s, w as c, y as l } from "./react.CHR6xBda.mjs";
import { a as u, r as d, t as f, x as p } from "./motion.De9yD8td.mjs";
import {
  L as m,
  T as h,
  U as g,
  a as _,
  ct as v,
  d as y,
  dt as b,
  ft as x,
  gt as S,
  i as C,
  k as w,
  ot as T,
  rt as E,
  st as D,
} from "./framer.dKj5RJCl.mjs";
import { n as O, t as k } from "./LayerfolioNumbers.CvciZhaS.mjs";
import { n as A, t as j } from "./LayerfolioPlayground.DDAJPmx5.mjs";
import { n as M, t as N } from "./LayerfolioTicker.Ct6qWf3X.mjs";
import { n as P, t as F } from "./LayerfolioPageHero.CJa02tpI.mjs";
import I, { t as L } from "./HNCl8UIZ44Q3fDTkbGI2hz_z5tNQSRMmzSMppcPuCQo.DdzlI_4k.mjs";
var R, z, B, V, H, U, W, G, K, q, J, Y, X, Z;
e(() => {
  o(),
    g(),
    f(),
    c(),
    O(),
    P(),
    A(),
    M(),
    L(),
    (R = m(F)),
    (z = m(j)),
    (B = m(N)),
    (V = m(k)),
    (H = {
      Q0H8xFQ_D: `(min-width: 810px) and (max-width: 1199.98px)`,
      sUTrz4Mzg: `(max-width: 809.98px)`,
      ZsDNH3hkK: `(min-width: 1200px)`,
    }),
    (U = []),
    (W = `framer-ZxL32`),
    (G = { Q0H8xFQ_D: `framer-v-1yxrwc`, sUTrz4Mzg: `framer-v-v2hmtu`, ZsDNH3hkK: `framer-v-17g74g0` }),
    (K = (e, t, n) => (e && t ? `position` : n)),
    (q = { Desktop: `ZsDNH3hkK`, Phone: `sUTrz4Mzg`, Tablet: `Q0H8xFQ_D` }),
    (J = ({ value: e }) =>
      v() ? null : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Y = ({ height: e, id: t, width: n, ...r }) => ({ ...r, variant: q[r.variant] ?? r.variant ?? `ZsDNH3hkK` })),
    (X = S(
      r(function (e, r) {
        let o = n(null),
          c = r ?? o,
          f = l(),
          { activeLocale: m, setLocale: h } = b();
        E();
        let { style: g, className: v, layoutId: S, variant: O, ...A } = Y(e);
        x(i(() => I({}, m), [m]));
        let [M, P] = D(O, H, !1),
          L = w(W),
          R = t(y)?.isLayoutTemplate,
          z = !!t(u)?.transition?.layout,
          B = K(R, z);
        return (
          T({}),
          a(y.Provider, {
            value: {
              activeVariantId: M,
              humanReadableVariantMap: q,
              primaryVariantId: `ZsDNH3hkK`,
              variantClassNames: G,
            },
            children: s(d, {
              id: S ?? f,
              children: [
                a(J, { value: `html body { background: rgb(255, 255, 255); }` }),
                s(p.div, {
                  ...A,
                  className: w(L, `framer-17g74g0`, v),
                  ref: c,
                  style: { ...g },
                  children: [
                    a(C, {
                      children: a(_, {
                        className: `framer-1akxfvg-container`,
                        "data-code-component-plugin-id": `api`,
                        "data-framer-name": `01 Page header`,
                        isAuthoredByUser: !0,
                        layout: B,
                        name: `01 Page header`,
                        nodeId: `xuNEYmJdr`,
                        scopeId: `X0DFBkfWc`,
                        children: a(F, {
                          accent: `rgb(75, 59, 255)`,
                          canvas: `rgb(236, 236, 232)`,
                          cursor: `You`,
                          facts: `Side projects|Updated monthly|Drag anything`,
                          height: `100%`,
                          id: `xuNEYmJdr`,
                          ink: `rgb(12, 12, 14)`,
                          layoutId: `xuNEYmJdr`,
                          lead: `Unpaid, unfinished and mostly for fun. Type experiments, motion studies and photos from the sketchbook. Everything on the board can be dragged.`,
                          name: `01 Page header`,
                          path: `Portfolio / Playground`,
                          style: { width: `100%` },
                          title: `Playground`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    a(p.section, {
                      className: `framer-x4mml`,
                      "data-framer-name": `02 Board`,
                      layout: B,
                      children: a(C, {
                        children: a(_, {
                          className: `framer-xbsk0i-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `Layerfolio Board`,
                          isAuthoredByUser: !0,
                          name: `Layerfolio Board`,
                          nodeId: `CStxAcnTq`,
                          scopeId: `X0DFBkfWc`,
                          children: a(j, {
                            accent: `rgb(75, 59, 255)`,
                            canvas: `rgb(236, 236, 232)`,
                            height: `100%`,
                            id: `CStxAcnTq`,
                            ink: `rgb(12, 12, 14)`,
                            intro: `Type experiments, motion studies and photos from the sketchbook. Drag anything around.`,
                            kicker: `The board`,
                            layoutId: `CStxAcnTq`,
                            link: `/playground`,
                            linkLabel: `Open the playground`,
                            name: `Layerfolio Board`,
                            number: `02`,
                            photos: [],
                            style: { height: `100%`, width: `100%` },
                            title: `Pin it, move it, leave it messy`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    a(C, {
                      children: a(_, {
                        className: `framer-af4oxo-container`,
                        "data-code-component-plugin-id": `api`,
                        "data-framer-name": `03 Skills`,
                        isAuthoredByUser: !0,
                        layout: B,
                        name: `03 Skills`,
                        nodeId: `sZloORXin`,
                        scopeId: `X0DFBkfWc`,
                        children: a(N, {
                          accent: `rgb(75, 59, 255)`,
                          canvas: `rgb(236, 236, 232)`,
                          clients: `Variable fonts · Type, Rive · Motion, Three.js · 3D, Risograph · Print, Film photos · Camera, Bike parts · Sculpture`,
                          height: `100%`,
                          id: `sZloORXin`,
                          ink: `rgb(12, 12, 14)`,
                          label: `Currently playing with`,
                          layoutId: `sZloORXin`,
                          name: `03 Skills`,
                          skills: `Squash and stretch, Kinetic type, Colour systems, Generative grids, Sound design, Paper prototypes`,
                          speed: 40,
                          style: { width: `100%` },
                          width: `100%`,
                        }),
                      }),
                    }),
                    a(C, {
                      children: a(_, {
                        className: `framer-16ftwjf-container`,
                        "data-code-component-plugin-id": `api`,
                        "data-framer-name": `04 Numbers`,
                        isAuthoredByUser: !0,
                        layout: B,
                        name: `04 Numbers`,
                        nodeId: `SXcxbiYC0`,
                        scopeId: `X0DFBkfWc`,
                        children: a(k, {
                          accent: `rgb(75, 59, 255)`,
                          canvas: `rgb(236, 236, 232)`,
                          height: `100%`,
                          id: `SXcxbiYC0`,
                          ink: `rgb(12, 12, 14)`,
                          kicker: `In numbers`,
                          layoutId: `SXcxbiYC0`,
                          name: `04 Numbers`,
                          number: `04`,
                          previewScroll: -1,
                          stats: [
                            {
                              id: `gHmiUgRAM`,
                              label: `started this year, 11 finished`,
                              unit: `experiments`,
                              value: `38`,
                            },
                            { id: `taVeKLzdS`, label: `drawn, none of them released`, unit: `typefaces`, value: `6` },
                            { id: `kFCFfCgE8`, label: `shot on film, 40 worth keeping`, unit: `photos`, value: `212` },
                            { id: `gZQ3ja2j_`, label: `rebuilt from parts, still squeaks`, unit: `bike`, value: `1` },
                          ],
                          style: { width: `100%` },
                          title: `Side-project stats`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                a(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-ZxL32.framer-vf7jac, .framer-ZxL32 .framer-vf7jac { display: block; }`,
        `.framer-ZxL32.framer-17g74g0 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1080px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-ZxL32 .framer-1akxfvg-container, .framer-ZxL32 .framer-af4oxo-container, .framer-ZxL32 .framer-16ftwjf-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-ZxL32 .framer-x4mml { background-color: #ecece8; flex: none; height: 960px; position: relative; width: 100%; }`,
        `.framer-ZxL32 .framer-xbsk0i-container { flex: none; height: 100%; left: 0px; position: absolute; top: 0px; width: 100%; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-ZxL32.framer-17g74g0 { height: min-content; width: 810px; }}`,
        `@media (max-width: 809.98px) { .framer-ZxL32.framer-17g74g0 { height: min-content; width: 390px; } .framer-ZxL32 .framer-x4mml { height: 760px; }}`,
      ],
      `framer-ZxL32`
    )),
    (X.displayName = `Playground`),
    (X.defaultProps = { height: 4392, width: 1200 }),
    h(X, [{ explicitInter: !0, fonts: [] }, ...R, ...z, ...B, ...V], { supportsExplicitInterCodegen: !0 }),
    (Z = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerX0DFBkfWc`,
          slots: [],
          annotations: {
            framerAutoSizeImages: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerIntrinsicWidth: `1200`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicHeight: `4392`,
            framerContractVersion: `1`,
            framerComponentViewportWidth: `true`,
            framerScrollSections: `false`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"Q0H8xFQ_D":{"layout":["fixed","auto"]},"sUTrz4Mzg":{"layout":["fixed","auto"]}}}`,
            framerImmutableVariables: `true`,
            framerDisplayContentsDiv: `false`,
            framerColorSyntax: `true`,
            framerResponsiveScreen: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    });
})();
export { Z as __FramerMetadata__, X as default, U as queryParamNames };
//# sourceMappingURL=SkQkC59oYKxQArrxuIJ7gdxqGJngv6OOuTtowwq8gbA.Cy1FmZzO.mjs.map
