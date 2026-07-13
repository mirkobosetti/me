import type { RouterConfig } from '@nuxt/schema'

// Robust hash-anchor scrolling with a sticky-header offset, reliable on
// initial load / refresh as well as in-app navigation.
export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition

    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ el: to.hash, top: 72, behavior: 'smooth' })
        }, 120)
      })
    }

    if (to.path !== from.path) return { top: 0 }
  }
}
