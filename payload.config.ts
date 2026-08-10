import sharp from "sharp"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import { postgresAdapter } from "@payloadcms/db-postgres"
import { buildConfig } from "payload"
import { Users } from "./collections/Users"
import { Media } from "./collections/Media"
import { Experience } from "./collections/Experience"
import { Education } from "./collections/Education"
import { Certifications } from "./collections/Cerficiations"
import { Skills } from "./collections/Skills"
import { Projects } from "./collections/Projects"
import { SiteSettings } from "./globals/SiteSettings"
import { HubItems } from "./collections/HubItems"

export default buildConfig({
  editor: lexicalEditor(),
  collections: [
    Users,
    Media,
    Experience,
    Education,
    Certifications,
    Skills,
    Projects,
    HubItems,
  ],
  globals: [SiteSettings],
  secret: process.env.PAYLOAD_SECRET || "",
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
      ssl: {
        rejectUnauthorized: false,
      },
    },
  }),
  sharp,
})
