import { projectSlugs, experienceSlugs } from '#shared/site'

/** Sitemap generated from the shared slug lists — stays in sync with the data. */
export default defineEventHandler((event) => {
  const { siteUrl } = useRuntimeConfig(event).public
  const paths = [
    '/',
    ...projectSlugs.map((s) => `/projects/${s}`),
    ...experienceSlugs.map((s) => `/experiences/${s}`)
  ]

  setHeader(event, 'content-type', 'application/xml')
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${siteUrl}${p}</loc></url>`).join('\n')}
</urlset>`
})
