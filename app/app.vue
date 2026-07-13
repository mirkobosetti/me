<script setup lang="ts">
import { personalInfo, socialLinks } from '~/data/portfolio'
import { profile } from '#shared/site'

const route = useRoute()
const siteUrl = useRuntimeConfig().public.siteUrl

const site = {
  url: siteUrl,
  title: `${personalInfo.name} — ${personalInfo.title}`,
  description: profile.description,
  ogImage: `${siteUrl}/og.png`
}

useHead({
  titleTemplate: (t) => (t ? `${t} · Mirko Bosetti` : site.title),
  meta: [{ name: 'theme-color', content: '#0a0a0b' }],
  link: [{ rel: 'canonical', href: () => siteUrl + route.path }]
})

useSeoMeta({
  title: site.title,
  description: site.description,
  ogType: 'website',
  ogTitle: site.title,
  ogDescription: site.description,
  ogUrl: () => siteUrl + route.path,
  ogSiteName: 'Mirko Bosetti',
  ogImage: site.ogImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterCard: 'summary_large_image',
  twitterTitle: site.title,
  twitterDescription: site.description,
  twitterImage: site.ogImage
})

// JSON-LD for rich results / agentic crawlers
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Person',
            '@id': `${site.url}/#person`,
            name: personalInfo.name,
            jobTitle: personalInfo.title,
            worksFor: { '@type': 'Organization', name: 'Daze Technology s.r.l.' },
            address: { '@type': 'PostalAddress', addressLocality: personalInfo.location },
            url: site.url,
            email: socialLinks.email,
            sameAs: [socialLinks.github, socialLinks.linkedin]
          },
          {
            '@type': 'WebSite',
            name: personalInfo.name,
            url: site.url,
            publisher: { '@id': `${site.url}/#person` }
          }
        ]
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
