import type { CollectionConfig } from "payload"

export const Certifications: CollectionConfig = {
  slug: "certifications",
  admin: { useAsTitle: "name", defaultColumns: ["name", "year"] },
  access: { read: () => true },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "year", type: "text", required: true },
    { name: "link", type: "text" },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      admin: { position: "sidebar" },
    },
  ],
}
