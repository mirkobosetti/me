<script setup lang="ts">
import { socialLinks } from '~/data/portfolio'

const year = 2026
const socials = [
  { icon: 'mdi:github', href: socialLinks.github, label: 'GitHub' },
  { icon: 'mdi:linkedin', href: socialLinks.linkedin, label: 'LinkedIn' },
  { icon: 'mdi:email-outline', href: `mailto:${socialLinks.email}`, label: 'Email' }
]
</script>

<template>
  <footer class="border-t border-border">
    <div
      class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6"
    >
      <p class="font-mono text-xs text-faint">
        <span class="text-signal">$</span> echo "built by Mirko Bosetti · {{ year }}"
      </p>
      <div class="flex items-center gap-1">
        <a
          v-for="s in socials"
          :key="s.label"
          :href="s.href"
          :target="s.href.startsWith('http') ? '_blank' : undefined"
          :rel="s.href.startsWith('http') ? 'noopener noreferrer' : undefined"
          :aria-label="s.label"
          class="flex h-9 w-9 items-center justify-center rounded-[3px] text-muted transition-colors hover:text-accent"
        >
          <Icon :name="s.icon" class="text-xl" />
        </a>
      </div>
    </div>
  </footer>
</template>
