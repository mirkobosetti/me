<script setup lang="ts">
import { projectsDetailData } from '~/data/projectsDetail'
import { socialLinks } from '~/data/portfolio'

const route = useRoute()
const slug = computed(() => String(route.params.slug).toLowerCase())
const project = computed(() => projectsDetailData[slug.value] ?? null)

const isVideo = computed(() => /\.(mp4|webm|mov)$/i.test(project.value?.media ?? ''))

if (!project.value) {
  setResponseStatus(useRequestEvent(), 404)
}

useSeoMeta({
  title: () => (project.value ? project.value.name : 'Not found'),
  description: () => project.value?.description
})
</script>

<template>
  <div class="mx-auto max-w-5xl px-4 py-12 sm:px-6">
    <UiButton as="NuxtLink" to="/#projects" variant="ghost" size="sm">
      <Icon name="mdi:arrow-left" /> Back
    </UiButton>

    <!-- not found -->
    <div v-if="!project" class="py-28 text-center">
      <Icon name="mdi:folder-off-outline" class="text-7xl text-faint" />
      <h1 class="mt-6 font-display text-4xl font-bold">404 · project not found</h1>
      <p class="mt-3 font-mono text-sm text-muted">"{{ slug }}" doesn't exist (yet).</p>
      <UiButton as="NuxtLink" to="/" class="mt-8">Back home</UiButton>
    </div>

    <template v-else>
      <header class="mt-8">
        <div class="flex flex-wrap items-center gap-3 font-mono text-xs text-faint">
          <span class="rounded-[3px] border border-border bg-surface-2 px-2 py-1 text-accent">
            {{ project.category }}
          </span>
          <span>{{ project.date }}</span>
        </div>
        <h1 class="mt-4 font-display text-4xl font-black leading-[0.95] sm:text-6xl">
          {{ project.name }}
        </h1>
        <p class="mt-3 max-w-[60ch] font-mono text-lg text-muted">{{ project.tagline }}</p>

        <div v-if="project.links" class="mt-6 flex flex-wrap gap-3">
          <UiButton v-if="project.links.live" as="a" :href="project.links.live" target="_blank" rel="noopener noreferrer">
            <Icon name="mdi:open-in-new" /> Live site
          </UiButton>
          <UiButton v-if="project.links.github" as="a" :href="project.links.github" target="_blank" rel="noopener noreferrer" variant="outline">
            <Icon name="mdi:github" /> Source
          </UiButton>
        </div>
      </header>

      <!-- media -->
      <div
        class="mx-auto mt-10 flex max-w-3xl justify-center overflow-hidden rounded-[6px] border border-border bg-surface-2"
      >
        <video
          v-if="isVideo"
          :src="project.media"
          class="max-h-[70vh] w-full object-contain"
          controls
          autoplay
          muted
          loop
          playsinline
        />
        <img
          v-else
          :src="project.media"
          :alt="project.name"
          class="max-h-[70vh] w-full object-contain"
        />
      </div>

      <!-- about + features -->
      <div class="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          <h2 class="font-display text-2xl font-bold">
            <span class="text-faint">##</span> about
          </h2>
          <p class="mt-4 max-w-[70ch] font-mono text-sm leading-relaxed text-muted">
            {{ project.description }}
          </p>

          <h2 class="mt-10 font-display text-2xl font-bold">
            <span class="text-faint">##</span> features
          </h2>
          <ul class="mt-4 space-y-2.5">
            <li
              v-for="(f, i) in project.features"
              :key="i"
              class="flex gap-2.5 font-mono text-sm text-muted"
            >
              <Icon name="mdi:chevron-right" class="mt-0.5 shrink-0 text-signal" />
              <span>{{ f }}</span>
            </li>
          </ul>
        </div>

        <aside class="lg:sticky lg:top-24 lg:self-start">
          <UiCard class="p-5">
            <h3 class="font-display text-lg font-bold">Tech stack</h3>
            <div class="mt-4 flex flex-wrap gap-2">
              <TechBadge v-for="t in project.technologies" :key="t" :label="t" />
            </div>
          </UiCard>
        </aside>
      </div>

      <!-- cta -->
      <UiCard class="mt-12 flex flex-col items-center gap-4 p-8 text-center sm:p-10">
        <h2 class="font-display text-2xl font-bold">Building something similar?</h2>
        <div class="flex flex-wrap justify-center gap-3">
          <UiButton as="a" :href="`mailto:${socialLinks.email}`">
            <Icon name="mdi:send" /> Get in touch
          </UiButton>
          <UiButton as="NuxtLink" to="/#projects" variant="outline">
            <Icon name="mdi:view-grid-outline" /> More projects
          </UiButton>
        </div>
      </UiCard>
    </template>
  </div>
</template>
