export default {
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  // Singleton: the app always reads _id == "siteSettings".
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "name",
      title: "Studio name",
      type: "string",
      description: "Shown in the header logo, the big footer mark, and the footer copyright line.",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      description: "Shown in the footer, e.g. \"Yogyakarta, Indonesia\".",
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: { title: "name", subtitle: "location" },
  },
};
