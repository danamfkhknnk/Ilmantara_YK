export default {
  name: "process",
  title: "Process section",
  type: "document",
  // Singleton: the app always reads _id == "process". Shared by the home
  // and work pages.
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "tags",
      title: "Pill tags",
      type: "array",
      of: [
        {
          type: "object",
          name: "processTag",
          fields: [
            { name: "label", title: "Label", type: "string", validation: (Rule: any) => Rule.required() },
            { name: "active", title: "Active", type: "boolean", initialValue: false },
          ],
          preview: { select: { title: "label" } },
        },
      ],
    },
    {
      name: "steps",
      title: "Steps",
      type: "array",
      of: [
        {
          type: "object",
          name: "processStep",
          fields: [
            { name: "index", title: "Index (01, 02, ...)", type: "string", validation: (Rule: any) => Rule.required() },
            { name: "week", title: "Week label", type: "string" },
            { name: "title", title: "Title", type: "string", validation: (Rule: any) => Rule.required() },
            { name: "shortBody", title: "Short body", type: "string", description: "One-liner shown in the legacy home layout." },
            { name: "fullBody", title: "Full body", type: "text", rows: 3, description: "Shown when the step is active." },
          ],
          preview: { select: { title: "title", subtitle: "week" } },
        },
      ],
    },
  ],
  preview: {
    select: { steps: "steps" },
    prepare({ steps }: { steps?: unknown[] }) {
      return {
        title: "Process section",
        subtitle: `${steps?.length ?? 0} step${steps?.length === 1 ? "" : "s"}`,
      };
    },
  },
};
