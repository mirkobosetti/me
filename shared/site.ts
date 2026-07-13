/**
 * Text-only site data shared between the app and the Nitro server routes
 * (sitemap.xml, llms.txt). No asset imports allowed here — server routes
 * can't process them. Keep in sync with app/data/portfolio.ts.
 */

export const profile = {
  name: 'Mirko Bosetti',
  title: 'Full Stack Web Developer',
  location: 'Trento, Italy',
  yearsExperience: '6+',
  description:
    'Mirko Bosetti, Full Stack Web Developer based in Trento, Italy. 6+ years building fast, scalable web apps with Vue.js, Nuxt, React and .NET.'
}

export const socials = {
  github: 'https://github.com/mirkobosetti',
  linkedin: 'https://www.linkedin.com/in/mirkobosetti',
  email: 'mirkobosetti1998@gmail.com'
}

/** Slugs with a detail page under /projects/ (keys of projectsDetailData). */
export const projectSlugs = [
  'pixellini-sbarazzini',
  'portfolio-website',
  'drinkando',
  'kingmaker',
  'carai',
  'streetsai'
] as const
export type ProjectSlug = (typeof projectSlugs)[number]

/** Slugs served by /experiences/ (derived from company names). */
export const experienceSlugs = ['daze', 'cving', 'oripan'] as const
export type ExperienceSlug = (typeof experienceSlugs)[number]

/** Short summaries used to generate /llms.txt. */
export const siteSummary = {
  projects: [
    {
      slug: 'pixellini-sbarazzini',
      title: 'Pixellini Sbarazzini',
      description: 'Interactive particle image effect built with TypeScript and the Canvas API.'
    },
    {
      slug: 'portfolio-website',
      title: 'Portfolio Website',
      description: 'This site — Nuxt 4 SSR portfolio with a terminal/pixel aesthetic and a canvas guestbook on Neon Postgres.'
    },
    {
      slug: 'drinkando',
      title: 'Drinkando',
      description: 'Mobile-first party drinking game built with Vue.js and Pinia.'
    },
    {
      slug: 'kingmaker',
      title: 'Kingmaker',
      description: 'Companion app for the Pathfinder: Kingmaker RPG (Vue.js, MongoDB).'
    },
    {
      slug: 'carai',
      title: 'CarAI',
      description: 'Self-driving car simulation with neural networks and genetic algorithms in TypeScript.'
    },
    {
      slug: 'streetsai',
      title: 'StreetsAI',
      description: 'AI city and self-driving simulator with real-world OpenStreetMap integration.'
    }
  ],
  experiences: [
    {
      slug: 'daze',
      company: 'Daze (Daze Technology s.r.l.)',
      role: 'Full Stack Web Developer',
      period: '01/2026 - Present',
      description: 'E-mobility / EV charging platforms — React, MUI and .NET APIs, Scrum with Jira.'
    },
    {
      slug: 'cving',
      company: 'Cving',
      role: 'Front-end Developer',
      period: '02/2022 - 01/2026',
      description: 'Recruiting platform — Vue 2/3, Nuxt, back-office dashboard and a WebRTC video interview system.'
    },
    {
      slug: 'oripan',
      company: 'Oripan',
      role: 'Software Developer',
      period: '08/2019 - 02/2022',
      description: 'Enterprise software — Vue.js, jQuery and ASP.NET Core, warehouse management systems.'
    }
  ]
}
