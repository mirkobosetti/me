# Portfolio — mirkobosetti

Personal portfolio of Mirko Bosetti, Frontend Developer. Server-rendered with **Nuxt 4**,
styled with **Tailwind v4**, wearing a dot-matrix terminal aesthetic built around the
[Doto](https://fonts.google.com/specimen/Doto) pixel typeface (paired with JetBrains Mono
for body copy).

## Stack

- **Nuxt 4** (Vue 3, Nitro) — SSR for SEO and agentic crawlers
- **Tailwind CSS v4** via the Vite plugin
- **@nuxt/icon** (mdi + lucide, local server bundle)
- **Neon Postgres** (`@neondatabase/serverless`) — the canvas guestbook ("notes") wall
- Deploy target: AWS (Nitro `aws-lambda` preset or Amplify; static assets on S3/CloudFront)

## Development

```bash
npm install
cp .env.example .env   # add your Supabase URL + anon key
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
- **AWS Lambda / serverless** — scheduled tasks don't run on Lambda. Point an **EventBridge**
  daily rule at `GET /api/keep-alive` instead.

## Scripts

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Dev server with HMR                  |
| `npm run build`   | Production build (`.output/`)        |
| `npm run preview` | Preview the production build         |
| `npm run generate`| Static generation (if going SSG)     |
| `npm run typecheck`| `vue-tsc` type check                |
