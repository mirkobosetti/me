<script setup lang="ts">
interface Props {
  icon: string
  title: string
  iconColor?: string
}

withDefaults(defineProps<Props>(), {
  iconColor: 'text-yellow-500'
})
</script>

<template>
  <h2 class="text-3xl md:text-5xl font-bold mb-4 flex items-center gap-2 md:gap-4">
    <iconify-icon
      :icon="icon"
      :class="`inline-block mr-1 md:mr-2 text-2xl md:text-4xl ${iconColor}`"
    />
    <span>{{ title }}</span>
  </h2>
</template>
