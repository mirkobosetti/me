<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  current: number
  max: number
}>()

const remaining = computed(() => props.max - props.current)
const percentage = computed(() => (remaining.value / props.max) * 100)

// Calculate stroke dash array for the progress arc
const radius = 18
const circumference = 2 * Math.PI * radius
const strokeDashoffset = computed(() => {
  const progress = remaining.value / props.max
  return circumference * (1 - progress)
})

// Color based on remaining characters
const color = computed(() => {
  const percent = percentage.value
  if (percent > 50) return '#22c55e' // green
  if (percent > 25) return '#eab308' // yellow
  return '#ef4444' // red
})
</script>

<template>
  <div class="inline-flex items-center justify-center">
    <svg width="48" height="48" class="transform -rotate-90">
      <!-- Background circle -->
      <circle
        cx="24"
        cy="24"
        :r="radius"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        class="text-muted-foreground/20"
      />

      <!-- Progress arc -->
      <circle
        cx="24"
        cy="24"
        :r="radius"
        fill="none"
        :stroke="color"
        stroke-width="3"
        stroke-linecap="round"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="strokeDashoffset"
        class="transition-all duration-300"
      />
    </svg>

    <!-- Counter text -->
    <div class="absolute text-sm font-semibold" :style="{ color }">
      {{ remaining }}
    </div>
  </div>
</template>
