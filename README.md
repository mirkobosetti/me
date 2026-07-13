# Portfolio — mirkobosetti

Personal portfolio of Mirko Bosetti, Full Stack Web Developer. Server-rendered with **Nuxt 4**,
styled with **Tailwind v4**, wearing a dot-matrix terminal aesthetic built around the
[Doto](https://fonts.google.com/specimen/Doto) pixel typeface (paired with JetBrains Mono
for body copy).

## Stack

- **Nuxt 4** (Vue 3, Nitro) — SSR for SEO and agentic crawlers
- **Tailwind CSS v4** via the Vite plugin
- **@nuxt/icon** (mdi + lucide, local server bundle)
- **Neon Postgres** (`@neondatabase/serverless`) — the canvas guestbook ("notes") wall
- Deploy target: **Cloudflare Pages** (Nitro `cloudflare-pages` preset, auto-detected at build)

## Development

```bash
npm install
cp .env.example .env   # add your Neon DATABASE_URL
npm run dev            # http://localhost:3000
```

## Environment

The notes wall talks to Neon Postgres from server routes (`server/api/notes.*`). Set:

```
DATABASE_URL=postgresql://user:password@ep-xxxx-pooler.<region>.aws.neon.tech/neondb?sslmode=require
```

Grab the **pooled** connection string from Neon Console → Connection Details. The `notes`
table is created automatically on first boot (`server/plugins/init-db.ts`). Without
`DATABASE_URL` the notes section degrades gracefully to an offline state; the rest of the
site works unchanged.

## Keeping Neon warm

Neon free-tier scales compute to zero after inactivity (it does **not** delete the project
like Supabase did). A daily keep-alive ping avoids cold-start latency:

- **Node host** — a Nitro scheduled task runs `server/tasks/keep-alive.ts` daily
  (`nitro.scheduledTasks` in `nuxt.config.ts`).
- **Cloudflare Pages / serverless** — scheduled tasks don't run there. Point any external
  daily cron (Cloudflare Worker cron trigger, GitHub Actions schedule, cron-job.org) at
  `GET /api/keep-alive` instead.

## SEO / AI search

- `public/robots.txt` — allows all crawlers, AI bots included, and points to the sitemap
- `server/routes/sitemap.xml.get.ts` + `server/routes/llms.txt.get.ts` — generated at
  request time from `shared/site.ts`, so they stay in sync with the content
- `shared/site.ts` — single text-only source of truth for slugs, profile and summaries.
  **When adding a project or experience, update it too.**
- `scripts/generate-icons.mjs` — regenerates favicon set + `og.png` from the SVG sources
  (`public/favicon.svg`, `scripts/assets/*.svg`); needs `sharp` (devDep) and `ffmpeg`
- `scripts/optimize-images.mjs` — converts heavy screenshots to WebP before committing

## Scripts

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Dev server with HMR                  |
| `npm run build`   | Production build (`.output/`)        |
| `npm run preview` | Preview the production build         |
| `npm run generate`| Static generation (if going SSG)     |
| `npm run typecheck`| `vue-tsc` type check                |
