import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

// projectId/dataset are public identifiers (not secrets) — same values used
// by the Astro app's src/lib/sanity.ts via SANITY_PROJECT_ID/SANITY_DATASET.
const projectId = "qk7hsv5h";
const dataset = "portofolio";

const SINGLETONS = [
  { id: "siteSettings", type: "siteSettings", title: "Site settings" },
  { id: "navigation", type: "navigation", title: "Navigation menu" },
  { id: "socialLinks", type: "socialLinks", title: "Social & contact links" },
];

export default defineConfig({
  name: "ilmantara-studio",
  title: "Ilmantara",
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items(
            SINGLETONS.map(({ id, type, title }) =>
              S.listItem()
                .id(id)
                .title(title)
                .child(S.document().schemaType(type).documentId(id))
            )
          ),
    }),
  ],
});
