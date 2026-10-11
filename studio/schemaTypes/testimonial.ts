export default {
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    { name: "quote", title: "Quote", type: "text", rows: 4, validation: (Rule: any) => Rule.required() },
    { name: "name", title: "Client name", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "role", title: "Role / company", type: "string" },
    { name: "tag", title: "Project tag", type: "string", description: "Small label, e.g. myart." },
    {
      name: "color",
      title: "Avatar color",
      type: "string",
      description: "Hex color for the initials avatar. Empty = auto.",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower numbers show first.",
    },
  ],
  orderings: [{ title: "Manual order", name: "manualOrder", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "name", subtitle: "quote" },
  },
};
