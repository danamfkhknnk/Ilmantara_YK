export default {
  name: "testimonialsSection",
  title: "Testimonials section",
  type: "document",
  // Singleton: the app always reads _id == "testimonialsSection". Holds the
  // section heading, supporting text and CTA shown above the quote grid.
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "supportingText",
      title: "Supporting text",
      type: "text",
      rows: 2,
    },
    {
      name: "ctaLabel",
      title: "CTA label",
      type: "string",
    },
    {
      name: "ctaHref",
      title: "CTA link",
      type: "string",
    },
  ],
  preview: {
    select: { title: "heading" },
    prepare({ title }: { title?: string }) {
      return { title: "Testimonials section", subtitle: title };
    },
  },
};
