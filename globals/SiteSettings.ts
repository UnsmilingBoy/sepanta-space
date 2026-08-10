import type { GlobalConfig } from "payload"

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  access: { read: () => true },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "title", type: "text", required: true },
    { name: "tagline", type: "text" },
    { name: "location", type: "text" },
    { name: "email", type: "text" },
    { name: "phone", type: "text" },
    { name: "website", type: "text" },
    { name: "github", type: "text" },
    { name: "linkedin", type: "text" },
    { name: "avatar", type: "upload", relationTo: "media" },
    { name: "about", type: "textarea", required: true },
  ],
}
