<script setup lang="ts">
import { usePdf } from '~/composables/usePdf'

const { openPdf } = usePdf()
const open = ref(false)

const links = [
  { label: 'about', to: '/#about' },
  { label: 'work', to: '/#experience' },
  { label: 'projects', to: '/#projects' },
  { label: 'skills', to: '/#skills' },
  { label: 'notes', to: '/#notes' },
  { label: 'contact', to: '/#contact' }
]
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md supports-[backdrop-filter]:bg-bg/60"
  >
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
      <NuxtLink to="/" class="group flex items-center gap-2 font-display text-lg font-bold">
        <span class="text-accent">mirko</span>
        <span class="text-faint">@portfolio</span>
        <span class="caret h-4" aria-hidden="true" />
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="hidden items-center gap-1 md:flex">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="rounded-[3px] px-3 py-2 font-mono text-sm text-muted transition-colors hover:text-accent"
        >
          <span class="text-faint">/</span>{{ link.label }}
        </NuxtLink>
        <UiButton size="sm" class="ml-2" @click="openPdf">
          <Icon name="mdi:file-account-outline" class="text-base" />
          CV
        </UiButton>
      </nav>

      <!-- Mobile toggle -->
      <button
        class="flex h-10 w-10 items-center justify-center rounded-[3px] border border-border text-text md:hidden"
        :aria-expanded="open"
        aria-label="Toggle menu"
        @click="open = !open"
      >
        <Icon :name="open ? 'mdi:close' : 'mdi:menu'" class="text-xl" />
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition name="page">
      <nav v-if="open" class="border-t border-border bg-surface px-4 py-3 md:hidden">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="block rounded-[3px] px-2 py-3 font-mono text-base text-muted transition-colors hover:text-accent"
          @click="open = false"
        >
          <span class="text-faint">~/</span>{{ link.label }}
        </NuxtLink>
        <UiButton size="md" class="mt-2 w-full" @click="openPdf(); open = false">
          <Icon name="mdi:file-account-outline" class="text-base" />
          View CV
        </UiButton>
      </nav>
    </Transition>
  </header>
</template>
