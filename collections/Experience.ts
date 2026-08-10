import type { CollectionConfig } from "payload"

export const Experience: CollectionConfig = {
  slug: "experience",
  admin: { useAsTitle: "role", defaultColumns: ["role", "company", "period"] },
  access: { read: () => true },
  fields: [
    { name: "role", type: "text", required: true },
    { name: "company", type: "text", required: true },
    { name: "location", type: "text" },
    { name: "period", type: "text", required: true }, // e.g. "Jan 2024 – Present"
    {
      name: "type",
      type: "select",
      options: [
        "Full-time",
        "Part-time",
        "Freelance",
        "Contract",
        "Internship",
      ],
    },
    { name: "description", type: "textarea" },
    {
      name: "highlights",
      type: "array",
      fields: [{ name: "text", type: "text", required: true }],
    },
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
