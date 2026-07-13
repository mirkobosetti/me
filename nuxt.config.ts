import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-01',
  devtools: { enabled: true },

  modules: ['@nuxt/icon', '@vueuse/nuxt'],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()]
  },

  // Dark-locked terminal aesthetic
  app: {
    head: {
      htmlAttrs: { lang: 'en', class: 'dark' },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  icon: {
    serverBundle: 'local'
  },

  runtimeConfig: {
    databaseUrl: process.env.DATABASE_URL || process.env.NUXT_DATABASE_URL
  },

  nitro: {
    experimental: { tasks: true },
    // Daily keep-alive ping so the Neon compute stays warm (avoids cold starts).
    // On a persistent Node host this runs automatically. On AWS Lambda,
    // trigger GET /api/keep-alive from EventBridge instead (see server/api/keep-alive.get.ts).
    scheduledTasks: {
      '0 6 * * *': ['keep-alive']
    }
  }
})
