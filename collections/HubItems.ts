import type { CollectionConfig } from "payload"

export const HubItems: CollectionConfig = {
  slug: "hub-items",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "status"],
  },
  access: { read: () => true },
  fields: [
    { name: "title", type: "text", required: true },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: { position: "sidebar" },
    },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        "Telegram Bot",
        "Web App",
        "Backend Service",
        "Tool",
        "Library",
        "Other",
      ],
    },
    {
      name: "status",
      type: "select",
      defaultValue: "live",
      options: [
        { label: "Live", value: "live" },
        { label: "In Progress", value: "in-progress" },
        { label: "Archived", value: "archived" },
      ],
      admin: { position: "sidebar" },
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      admin: { position: "sidebar" },
    },
    { name: "summary", type: "textarea", required: true }, // short card blurb
    { name: "content", type: "richText" }, // full write-up, e.g. how the yt-dlp bot works
    { name: "coverImage", type: "upload", relationTo: "media" },
    {
      name: "tech",
      type: "array",
      fields: [{ name: "label", type: "text", required: true }],
    },
    {
      name: "links",
      type: "array",
      fields: [
        { name: "label", type: "text", required: true }, // "GitHub", "Telegram", "Live Demo"
        { name: "url", type: "text", required: true },
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
