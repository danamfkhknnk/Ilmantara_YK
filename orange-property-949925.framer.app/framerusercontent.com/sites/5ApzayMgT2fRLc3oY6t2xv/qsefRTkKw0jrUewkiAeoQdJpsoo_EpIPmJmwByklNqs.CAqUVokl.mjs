import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { U as t, x as n, z as r } from "./framer.dKj5RJCl.mjs";
import { i, t as a } from "./OFjtzps4o.FJ9FaWY5.mjs";
function o(e, t) {
  let n = e?.eayITx0fM,
    r = e?.yUeHeAL7P;
  return {
    breakpoints: [
      { hash: `1vkum1a`, mediaQuery: `(min-width: 1200px)` },
      { hash: `15ct33o`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `18iqbyq`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `${r === void 0 ? `{{yUeHeAL7P}}` : l(r)}`,
    elements: {},
    robots: `max-image-preview:large`,
    serializationId: `framer-US6ST`,
    title: `${n === void 0 ? `{{eayITx0fM}}` : l(n)} \xb7 Noor Castell`,
    viewport: `width=device-width`,
  };
}
async function s(e, t) {
  let i = new n(),
    s = {
      from: { alias: `BipmdgWXJ`, data: a, type: `Collection` },
      select: [
        { collection: `BipmdgWXJ`, name: `eayITx0fM`, type: `Identifier` },
        { collection: `BipmdgWXJ`, name: `yUeHeAL7P`, type: `Identifier` },
      ],
      where: r(e, `BipmdgWXJ`),
    },
    c = await i.query(s, t);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, t);
}
async function c(e, t) {
  let r = new n(),
    i = {
      from: { alias: `BipmdgWXJ`, data: a, type: `Collection` },
      select: [
        { collection: `BipmdgWXJ`, name: `eayITx0fM`, type: `Identifier` },
        { collection: `BipmdgWXJ`, name: `yUeHeAL7P`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `BipmdgWXJ`, name: t, type: `Identifier` });
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
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
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
//# sourceMappingURL=qsefRTkKw0jrUewkiAeoQdJpsoo_EpIPmJmwByklNqs.CAqUVokl.mjs.map
