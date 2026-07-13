<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <span
    class="inline-flex items-center rounded-[3px] border border-border bg-surface-2/60 px-2.5 py-1 font-mono text-xs text-muted transition-colors hover:border-accent-dim hover:text-text"
  >
    {{ label }}
  </span>
</template>
