export default {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "name", title: "Short brand name", type: "string", description: "Label shown on the work card (e.g. myart)." },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    { name: "description", title: "Description", type: "text", rows: 3 },
    { name: "category", title: "Category / tag", type: "string" },
    { name: "year", title: "Year", type: "string" },
    { name: "url", title: "Live URL", type: "url" },
    {
      name: "image",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt text", type: "string" }],
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower numbers show first on the Work page.",
    },
  ],
  orderings: [
    { title: "Manual order", name: "manualOrder", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "image" },
  },
};
