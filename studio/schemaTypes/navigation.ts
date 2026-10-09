export default {
  name: "navigation",
  title: "Navigation menu",
  type: "document",
  // Singleton: the app always reads _id == "navigation". Shared by the
  // header nav and the footer's "Pages" column.
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "items",
      title: "Menu items",
      type: "array",
      of: [
        {
          type: "object",
          name: "navItem",
          fields: [
            { name: "label", title: "Label", type: "string", validation: (Rule: any) => Rule.required() },
            { name: "href", title: "Link", type: "string", validation: (Rule: any) => Rule.required() },
          ],
          preview: {
            select: { title: "label", subtitle: "href" },
          },
        },
      ],
    },
  ],
  preview: {
    select: { items: "items" },
    prepare({ items }: { items?: unknown[] }) {
      return {
        title: "Navigation menu",
        subtitle: `${items?.length ?? 0} item${items?.length === 1 ? "" : "s"}`,
      };
    },
  },
};
