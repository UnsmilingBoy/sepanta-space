# Next.js template

This is a Next.js template with shadcn/ui.

## Adding components

To add components to your app, run the following command:

```bash
npx shadcn@latest add button
```

This will place the ui components in the `components` directory.

## Using components

To use the components in your app, import them as follows:

```tsx
import { Button } from "@/components/ui/button";
```

```
sepanta-space
├─ .prettierignore
├─ .prettierrc
├─ AGENTS.md
├─ app
│  ├─ (frontend)
│  │  ├─ data
│  │  │  └─ resume.ts
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ (payload)
│  │  ├─ admin
│  │  │  ├─ importMap.js
│  │  │  └─ [[...segments]]
│  │  │     ├─ not-found.tsx
│  │  │     └─ page.tsx
│  │  ├─ api
│  │  │  ├─ graphql
│  │  │  │  └─ route.ts
│  │  │  ├─ graphql-playground
│  │  │  │  └─ route.ts
│  │  │  └─ [...slug]
│  │  │     └─ route.ts
│  │  ├─ custom.scss
│  │  └─ layout.tsx
│  ├─ favicon.ico
│  └─ globals.css
├─ collections
│  ├─ Media.ts
│  └─ Users.ts
├─ components
│  ├─ resume-header.tsx
│  ├─ theme-provider.tsx
│  └─ ui
│     ├─ accordion.tsx
│     ├─ avatar.tsx
│     ├─ badge.tsx
│     ├─ button.tsx
│     ├─ card.tsx
│     ├─ carousel.tsx
│     ├─ dropdown-menu.tsx
│     ├─ fade-int.tsx
│     ├─ resizable.tsx
│     ├─ separator.tsx
│     ├─ skills-collapsible.tsx
│     └─ tabs.tsx
├─ components.json
├─ docker-compose.yml
├─ Dockerfile
├─ eslint.config.mjs
├─ hooks
│  └─ useTypingAnimations.tsx
├─ lib
│  └─ utils.ts
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ payload-types.ts
├─ payload.config.ts
├─ postcss.config.mjs
├─ public
├─ README.md
└─ tsconfig.json

```