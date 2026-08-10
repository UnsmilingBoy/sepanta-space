import type { CollectionConfig } from "payload"

export const Projects: CollectionConfig = {
  slug: "projects",
  admin: { useAsTitle: "name", defaultColumns: ["name", "link"] },
  access: { read: () => true },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "link", type: "text" }, // e.g. "github.com/you/repo"
    { name: "description", type: "textarea" },
    {
      name: "tech",
      type: "array",
      fields: [{ name: "label", type: "text", required: true }],
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      admin: { position: "sidebar" },
    },
  ],
}
