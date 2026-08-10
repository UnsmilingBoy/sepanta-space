import type { CollectionConfig } from "payload"

export const Education: CollectionConfig = {
  slug: "education",
  admin: {
    useAsTitle: "degree",
    defaultColumns: ["degree", "school", "period"],
  },
  access: { read: () => true },
  fields: [
    { name: "degree", type: "text", required: true },
    { name: "school", type: "text", required: true },
    { name: "period", type: "text", required: true },
    { name: "gpa", type: "text" },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      admin: { position: "sidebar" },
    },
  ],
}
