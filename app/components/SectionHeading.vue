<script setup lang="ts">
defineProps<{ index: string; path: string }>()
</script>

<template>
  <div v-reveal class="flex items-baseline gap-3 sm:gap-4">
    <span class="font-mono text-sm text-accent">{{ index }}</span>
    <h2 class="font-display text-2xl font-bold sm:text-3xl">
      <span class="text-faint">~/</span>{{ path }}
    </h2>
    <span class="mb-1.5 h-px flex-1 bg-border" aria-hidden="true" />
  </div>
</template>
