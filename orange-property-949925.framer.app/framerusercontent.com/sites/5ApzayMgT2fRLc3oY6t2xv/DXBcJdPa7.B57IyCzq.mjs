import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { N as t, l as n, s as r, w as i } from "./react.CHR6xBda.mjs";
import { A as a, U as o } from "./framer.dKj5RJCl.mjs";
function s() {
  t(() => {
    if (p || typeof document > `u`) return;
    p = !0;
    let e = document.createElement(`style`);
    (e.id = `lfm-css`), (e.textContent = f), document.head.appendChild(e);
  }, []);
}
function c(e) {
  return (t) => (s(), n(e, { ...t, className: m(t.className, `lfm-reveal`) }));
}
function l(e) {
  return (t) => (s(), n(e, { ...t, className: m(t.className, `lfm-stagger`) }));
}
function u(e) {
  return (t) => (s(), n(e, { ...t, className: m(t.className, `lfm-lift`) }));
}
function d(e) {
  return (t) => (s(), n(e, { ...t, className: m(t.className, `lfm-zoom`) }));
}
var f,
  p,
  m,
  h = e(() => {
    r(),
      i(),
      (f = `
@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    .lfm-reveal { animation: lfmUp linear both; animation-timeline: view(); animation-range: entry 0% cover 28%; }
    .lfm-stagger > * { animation: lfmUp linear both; animation-timeline: view(); animation-range: entry 0% cover 30%; }
    .lfm-stagger > *:nth-child(2) { animation-range: entry 6% cover 34%; }
    .lfm-stagger > *:nth-child(3) { animation-range: entry 12% cover 38%; }
    .lfm-stagger > *:nth-child(4) { animation-range: entry 18% cover 42%; }
    .lfm-zoom { animation: lfmZoom linear both; animation-timeline: view(); animation-range: entry 0% exit 100%; }
  }
}
@keyframes lfmUp { from { opacity: .001; translate: 0 28px; filter: blur(5px); } to { opacity: 1; translate: 0 0; filter: blur(0); } }
@keyframes lfmZoom { from { scale: 1.12; } to { scale: 1; } }
.lfm-lift { transition: translate .5s cubic-bezier(.22,1,.36,1), box-shadow .5s cubic-bezier(.22,1,.36,1); }
.lfm-lift:hover { translate: 0 -6px; box-shadow: 0 34px 60px -40px rgba(12,12,14,.55); }
.lfm-lift img { transition: scale .8s cubic-bezier(.22,1,.36,1); }
.lfm-lift:hover img { scale: 1.05; }
.lfm-lift:focus-visible { outline: 2px solid #4B3BFF; outline-offset: 4px; }
`),
      (p = !1),
      (m = (...e) => e.filter(Boolean).join(` `));
  }),
  g,
  _,
  v,
  y = e(() => {
    o(),
      a.loadFonts([`GF;Geist-600`, `GF;Geist-900`, `GF;Geist-900italic`, `GF;Geist-600italic`]),
      (g = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Geist`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Geist`,
              url: `https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_RQuQ4mJPby1QNtA.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Geist`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Geist`,
              url: `https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_RNeQ4mJPby1QNtA.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Geist`,
              openType: !0,
              source: `google`,
              style: `italic`,
              uiFamilyName: `Geist`,
              url: `https://fonts.gstatic.com/s/geist/v5/gyBjhwUxId8gMEwZAluvzlxA9ojEVKB52Zna6VEdtKCL.woff2`,
              weight: `900`,
            },
            {
              cssFamilyName: `Geist`,
              openType: !0,
              source: `google`,
              style: `italic`,
              uiFamilyName: `Geist`,
              url: `https://fonts.gstatic.com/s/geist/v5/gyBjhwUxId8gMEwZAluvzlxA9ojEVKAO2Zna6VEdtKCL.woff2`,
              weight: `600`,
            },
          ],
        },
      ]),
      (_ = [
        `.framer-FdDEL .framer-styles-preset-mamhr0:not(.rich-text-wrapper), .framer-FdDEL .framer-styles-preset-mamhr0.rich-text-wrapper h2 { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 56px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 600; --framer-letter-spacing: -0.05em; --framer-line-height: 0.98em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #0c0c0e; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-FdDEL .framer-styles-preset-mamhr0:not(.rich-text-wrapper), .framer-FdDEL .framer-styles-preset-mamhr0.rich-text-wrapper h2 { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 44px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 600; --framer-letter-spacing: -0.05em; --framer-line-height: 0.98em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #0c0c0e; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-FdDEL .framer-styles-preset-mamhr0:not(.rich-text-wrapper), .framer-FdDEL .framer-styles-preset-mamhr0.rich-text-wrapper h2 { --framer-font-family: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-bold-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-family-italic: "Geist", "Geist Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 36px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 600; --framer-letter-spacing: -0.05em; --framer-line-height: 0.98em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #0c0c0e; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (v = `framer-FdDEL`);
  });
export { h as a, l as c, y as i, d as l, _ as n, u as o, g as r, c as s, v as t };
//# sourceMappingURL=DXBcJdPa7.B57IyCzq.mjs.map
