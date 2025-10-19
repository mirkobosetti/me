import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Se c'è una posizione salvata (tornando indietro con il browser), usa quella
    if (savedPosition) {
      return savedPosition
    }

    // Se ci spostiamo verso una pagina di dettaglio (project o experience), vai in cima
    if (to.path.includes('/projects/') || to.path.includes('/experiences/')) {
      return { top: 0, behavior: 'instant' }
    }

    // Se torniamo alla home da una pagina di progetto, vai alla sezione progetti
    if (to.path === '/' && from.path.includes('/projects/')) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const projectsSection = document.getElementById('projects')
          if (projectsSection) {
            resolve({
              el: '#projects',
              top: -80, // offset per la navbar sticky
              behavior: 'smooth'
            })
          } else {
            resolve({ top: 0, behavior: 'smooth' })
          }
        }, 100)
      })
    }

    // Se torniamo alla home da una pagina di experience, vai alla sezione experiences
    if (to.path === '/' && from.path.includes('/experiences/')) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const experiencesSection = document.getElementById('experiences')
          if (experiencesSection) {
            resolve({
              el: '#experiences',
              top: -80, // offset per la navbar sticky
              behavior: 'smooth'
            })
          } else {
            resolve({ top: 0, behavior: 'smooth' })
          }
        }, 100)
      })
    }

    // In tutti gli altri casi, vai in cima
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
