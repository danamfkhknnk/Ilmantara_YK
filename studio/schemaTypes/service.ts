export default {
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "description", title: "Description", type: "text", rows: 3 },
    {
      name: "features",
      title: "Deliverables / bullets",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "price",
      title: "Price label",
      type: "string",
      description: 'e.g. "From €9,500 / month". Leave empty to hide the price row.',
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower numbers show first.",
    },
  ],
  orderings: [
    { title: "Manual order", name: "manualOrder", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", subtitle: "price" },
  },
};
