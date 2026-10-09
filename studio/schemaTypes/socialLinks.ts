export default {
  name: "socialLinks",
  title: "Social & contact links",
  type: "document",
  // Singleton: the app always reads _id == "socialLinks". Drives the
  // footer's "Elsewhere" column; an item with an `mailto:` href also
  // becomes the "Copy email" button's target automatically.
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "items",
      title: "Links",
      type: "array",
      of: [
        {
          type: "object",
          name: "socialItem",
          fields: [
            { name: "label", title: "Label", type: "string", validation: (Rule: any) => Rule.required() },
            {
              name: "href",
              title: "Link",
              type: "string",
              description: "A URL, or mailto:address@example.com for the email entry.",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "muted",
              title: "Muted style",
              type: "boolean",
              description: "Displays this item dimmed with an @ icon instead of ↗ — used for the email entry.",
              initialValue: false,
            },
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
        title: "Social & contact links",
        subtitle: `${items?.length ?? 0} item${items?.length === 1 ? "" : "s"}`,
      };
    },
  },
};
