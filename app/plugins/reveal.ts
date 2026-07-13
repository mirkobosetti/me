/**
 * `v-reveal` — lightweight, self-healing scroll reveal.
 * Content is visible by default (SSR / no-JS safe). On the client it starts
 * hidden and fades up once it enters the viewport, then stays visible.
 * Honors prefers-reduced-motion (instantly visible, no transform).
 *
 * Usage: v-reveal  |  v-reveal="120"  (delay ms)
 */
export default defineNuxtPlugin((nuxtApp) => {
  const reduced =
    import.meta.client && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  let observer: IntersectionObserver | null = null
  const getObserver = () => {
    if (observer || !import.meta.client || reduced) return observer
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.opacity = '1'
            el.style.transform = 'none'
            observer?.unobserve(el)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    return observer
  }

  nuxtApp.vueApp.directive('reveal', {
    // Registered on the server too so SSR can resolve the directive.
    getSSRProps: () => ({}),
    beforeMount(el: HTMLElement, binding) {
      if (!import.meta.client || reduced) return
      const delay = typeof binding.value === 'number' ? binding.value : 0
      el.style.opacity = '0'
      el.style.transform = 'translateY(16px)'
      el.style.transition = `opacity 0.55s ease ${delay}ms, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${delay}ms`
    },
    mounted(el: HTMLElement) {
      getObserver()?.observe(el)
    },
    beforeUnmount(el: HTMLElement) {
      observer?.unobserve(el)
    }
  })
})
