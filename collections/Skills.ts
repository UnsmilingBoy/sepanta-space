import type { CollectionConfig } from "payload"

export const Skills: CollectionConfig = {
  slug: "skills",
  admin: { useAsTitle: "label", defaultColumns: ["label", "category"] },
  access: { read: () => true },
  fields: [
    { name: "label", type: "text", required: true },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Languages", value: "languages" },
        { label: "Frontend", value: "frontend" },
        { label: "Backend & Data", value: "backend" },
        { label: "Infrastructure & DevOps", value: "infrastructure" },
        { label: "Practices", value: "practices" },
      ],
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
      admin: { position: "sidebar" },
    },
  ],
}
