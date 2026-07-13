<script setup lang="ts">
import { personalInfo, socialLinks } from '~/data/portfolio'

const site = {
  url: 'https://mirkobosetti.com',
  title: `${personalInfo.name} — ${personalInfo.title}`,
  description:
    'Mirko Bosetti, Frontend Developer based in Trento, Italy. 6+ years building fast, scalable web apps with the Vue.js and Nuxt ecosystem.'
}

useHead({
  titleTemplate: (t) => (t ? `${t} · Mirko Bosetti` : site.title),
  meta: [{ name: 'theme-color', content: '#0a0a0b' }]
})

useSeoMeta({
  title: site.title,
  description: site.description,
  ogType: 'website',
  ogTitle: site.title,
  ogDescription: site.description,
  ogUrl: site.url,
  ogSiteName: 'Mirko Bosetti',
  twitterCard: 'summary_large_image',
  twitterTitle: site.title,
  twitterDescription: site.description
})

// JSON-LD for rich results / agentic crawlers
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: personalInfo.name,
        jobTitle: personalInfo.title,
        address: { '@type': 'PostalAddress', addressLocality: personalInfo.location },
        url: site.url,
        email: socialLinks.email,
        sameAs: [socialLinks.github, socialLinks.linkedin]
      })
    }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
