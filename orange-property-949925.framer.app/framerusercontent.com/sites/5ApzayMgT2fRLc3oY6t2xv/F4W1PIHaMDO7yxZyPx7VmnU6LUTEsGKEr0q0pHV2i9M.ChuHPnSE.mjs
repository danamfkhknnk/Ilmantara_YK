import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { U as t, x as n, z as r } from "./framer.dKj5RJCl.mjs";
import { i, t as a } from "./JEK16_748.DwPxubdt.mjs";
function o(e, t) {
  let n = e?.ghbxT45IO,
    r = e?.ZUZCqLL3T;
  return {
    breakpoints: [
      { hash: `gc2nu1`, mediaQuery: `(min-width: 1200px)` },
      { hash: `194zenu`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `jktjc6`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `${r === void 0 ? `{{ZUZCqLL3T}}` : l(r)}`,
    elements: {},
    robots: `max-image-preview:large`,
    serializationId: `framer-kNzPE`,
    title: `${n === void 0 ? `{{ghbxT45IO}}` : l(n)} case study \xb7 Noor Castell`,
    viewport: `width=device-width`,
  };
}
async function s(e, t) {
  let i = new n(),
    s = {
      from: { alias: `hM9zdhcEx`, data: a, type: `Collection` },
      select: [
        { collection: `hM9zdhcEx`, name: `ghbxT45IO`, type: `Identifier` },
        { collection: `hM9zdhcEx`, name: `ZUZCqLL3T`, type: `Identifier` },
      ],
      where: r(e, `hM9zdhcEx`),
    },
    c = await i.query(s, t);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, t);
}
async function c(e, t) {
  let r = new n(),
    i = {
      from: { alias: `hM9zdhcEx`, data: a, type: `Collection` },
      select: [
        { collection: `hM9zdhcEx`, name: `ghbxT45IO`, type: `Identifier` },
        { collection: `hM9zdhcEx`, name: `ZUZCqLL3T`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `hM9zdhcEx`, name: t, type: `Identifier` });
  return (await r.query(i, t)).map((n) => ({
    metadata: o(n, t),
    pathVariables: Object.fromEntries(e.map((e) => [e, n[e]])),
  }));
}
var l,
  u,
  d,
  f = e(() => {
    t(),
      i(),
      (l = (e) => (typeof e == `string` ? e : String(e))),
      (u = 1),
      (d = {
        exports: {
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      });
  });
f();
export {
  d as __FramerMetadata__,
  o as default,
  c as fetchAllMetadata,
  s as fetchMetadata,
  u as metadataVersion,
  f as t,
};
//# sourceMappingURL=F4W1PIHaMDO7yxZyPx7VmnU6LUTEsGKEr0q0pHV2i9M.ChuHPnSE.mjs.map
