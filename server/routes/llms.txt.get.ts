import { profile, socials, siteSummary } from '#shared/site'

/**
 * llms.txt — a concise, LLM-friendly summary of the site (llmstxt.org).
 * Generated from shared/site.ts so it never drifts from the real content.
 */
export default defineEventHandler((event) => {
  const { siteUrl } = useRuntimeConfig(event).public

  const projects = siteSummary.projects
    .map((p) => `- [${p.title}](${siteUrl}/projects/${p.slug}): ${p.description}`)
    .join('\n')

  const experiences = siteSummary.experiences
    .map((e) => `- [${e.company}](${siteUrl}/experiences/${e.slug}): ${e.role}, ${e.period}. ${e.description}`)
    .join('\n')

  setHeader(event, 'content-type', 'text/plain; charset=utf-8')
  return `# ${profile.name}

> ${profile.description}

Personal portfolio of ${profile.name}, ${profile.title} (${profile.yearsExperience} years of experience) based in ${profile.location}. Co-founder of Rhaeticon. Main stack: Vue.js, Nuxt, TypeScript, React, MUI, .NET, Node.js.

## Work experience

${experiences}

## Projects

${projects}

## Contact

- Website: ${siteUrl}
- CV: ${siteUrl}/cv.pdf
- GitHub: ${socials.github}
- LinkedIn: ${socials.linkedin}
- Email: ${socials.email}
`
})
