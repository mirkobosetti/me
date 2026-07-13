<script setup lang="ts">
import { workExperiences } from '~/data/portfolio'
import { socialLinks } from '~/data/portfolio'

const route = useRoute()
const slug = computed(() => String(route.params.slug).toLowerCase())
const exp = computed(() => workExperiences.find((e) => e.company.name.toLowerCase() === slug.value) ?? null)

const event = useRequestEvent()
if (!exp.value && event) {
  setResponseStatus(event, 404)
}

useSeoMeta({
  title: () => (exp.value ? `${exp.value.company.name} · ${exp.value.title}` : 'Not found'),
  description: () => exp.value?.description,
  ogTitle: () =>
    exp.value ? `${exp.value.title} @ ${exp.value.company.name} · Mirko Bosetti` : 'Not found',
  ogDescription: () => exp.value?.description,
  ogType: 'article',
  robots: () => (exp.value ? undefined : 'noindex')
})
</script>

<template>
  <div class="mx-auto max-w-5xl px-4 py-12 sm:px-6">
    <UiButton as="NuxtLink" to="/#experience" variant="ghost" size="sm">
      <Icon name="mdi:arrow-left" /> Back
    </UiButton>

    <div v-if="!exp" class="py-28 text-center">
      <Icon name="mdi:briefcase-off-outline" class="text-7xl text-faint" />
      <h1 class="mt-6 font-display text-4xl font-bold">404 · role not found</h1>
      <UiButton as="NuxtLink" to="/" class="mt-8">Back home</UiButton>
    </div>

    <template v-else>
      <header class="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
        <div class="flex h-24 w-24 shrink-0 items-center justify-center rounded-[6px] border border-border bg-bg p-4">
          <img :src="exp.logo" :alt="`${exp.company.name} logo`" class="max-h-full max-w-full object-contain" />
        </div>
        <div>
          <h1 class="font-display text-4xl font-black leading-tight sm:text-5xl">{{ exp.title }}</h1>
          <div class="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-sm text-muted">
            <span class="flex items-center gap-1.5">
              <Icon name="mdi:office-building-outline" class="text-accent" />{{ exp.company.name }}
            </span>
            <span class="flex items-center gap-1.5">
              <Icon name="mdi:calendar-range" class="text-accent" />{{ exp.period }}
            </span>
            <span class="flex items-center gap-1.5">
              <Icon name="mdi:map-marker-outline" class="text-accent" />{{ exp.location
              }}{{ exp.remote ? ' · Remote' : '' }}
            </span>
          </div>
        </div>
      </header>

      <p class="mt-8 max-w-[72ch] font-mono text-base leading-relaxed text-muted">
        {{ exp.company.description }}
      </p>

      <div class="mt-10 grid gap-8 lg:grid-cols-[1fr_300px]">
        <div>
          <h2 class="font-display text-2xl font-bold"><span class="text-faint">##</span> what I did</h2>
          <ul class="mt-4 space-y-3">
            <li
              v-for="(c, i) in exp.contributions"
              :key="i"
              class="flex gap-2.5 font-mono text-sm leading-relaxed text-muted"
            >
              <Icon name="mdi:chevron-right" class="mt-0.5 shrink-0 text-signal" />
              <span>{{ c.description }}</span>
            </li>
          </ul>

          <template v-if="exp.milestones?.length">
            <h2 class="mt-10 font-display text-2xl font-bold"><span class="text-faint">##</span> milestones</h2>
            <div class="mt-4 grid gap-4 sm:grid-cols-2">
              <UiCard v-for="(m, i) in exp.milestones" :key="i" class="p-4">
                <div class="flex items-center gap-2">
                  <span class="flex h-7 w-7 items-center justify-center rounded-[3px] bg-accent font-display text-sm font-bold text-bg">
                    {{ i + 1 }}
                  </span>
                  <h3 class="font-display text-base font-bold">{{ m.title }}</h3>
                </div>
                <p class="mt-2 font-mono text-sm text-muted">{{ m.description }}</p>
              </UiCard>
            </div>
          </template>
        </div>

        <aside class="lg:sticky lg:top-24 lg:self-start">
          <UiCard class="p-5">
            <h3 class="font-display text-lg font-bold">Tech stack</h3>
            <div class="mt-4 flex flex-wrap gap-2">
              <TechBadge v-for="t in exp.technologies" :key="t" :label="t" />
            </div>
          </UiCard>
        </aside>
      </div>

      <UiCard class="mt-12 flex flex-col items-center gap-4 p-8 text-center">
        <h2 class="font-display text-2xl font-bold">Want to work together?</h2>
        <UiButton as="a" :href="`mailto:${socialLinks.email}`">
          <Icon name="mdi:send" /> Get in touch
        </UiButton>
      </UiCard>
    </template>
  </div>
</template>
