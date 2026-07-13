<script setup lang="ts">
import { projectSlugs } from '#shared/site'

const props = defineProps<{
  slug: string
  title: string
  description: string
  image: string
  technologies: string[]
  index: number
}>()

// Projects without a detail page (e.g. gestoide) render as a plain card
// instead of a link to a 404.
const hasDetail = (projectSlugs as readonly string[]).includes(props.slug)
const NuxtLink = resolveComponent('NuxtLink')
</script>

<template>
  <component
    :is="hasDetail ? NuxtLink : 'div'"
    :to="hasDetail ? `/projects/${slug}` : undefined"
    class="group relative flex h-full flex-col overflow-hidden rounded-[4px] border border-border bg-surface/60 transition-colors duration-200"
    :class="hasDetail ? 'hover:border-accent-dim' : ''"
  >
    <!-- media -->
    <div class="relative aspect-16/10 overflow-hidden bg-surface-2">
      <img
        v-if="image"
        :src="image"
        :alt="title"
        loading="lazy"
        class="h-full w-full object-cover opacity-90 transition duration-300 group-hover:scale-[1.03] group-hover:opacity-100"
      />
      <div
        v-else
        class="flex h-full w-full items-center justify-center text-faint"
        aria-hidden="true"
      >
        <Icon name="mdi:code-tags" class="text-5xl" />
      </div>
      <span
        class="absolute left-3 top-3 rounded-[3px] bg-bg/80 px-2 py-0.5 font-mono text-xs text-accent backdrop-blur"
      >
        {{ String(index + 1).padStart(2, '0') }}
      </span>
    </div>

    <!-- body -->
    <div class="flex flex-1 flex-col gap-3 p-4">
      <div class="flex items-start justify-between gap-2">
        <h3 class="font-display text-xl font-bold leading-tight">{{ title }}</h3>
        <Icon
          v-if="hasDetail"
          name="mdi:arrow-top-right"
          class="mt-1 shrink-0 text-lg text-faint transition-colors group-hover:text-accent"
        />
      </div>
      <p class="line-clamp-2 min-h-[2.6rem] font-mono text-sm leading-relaxed text-muted">
        {{ description }}
      </p>
      <div class="mt-auto flex flex-wrap gap-1.5 pt-2">
        <TechBadge v-for="tech in technologies.slice(0, 4)" :key="tech" :label="tech" />
      </div>
    </div>
  </component>
</template>
