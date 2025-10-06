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
  <h2 class="text-5xl font-bold mb-4 flex items-center gap-4">
    <iconify-icon :icon="icon" :class="`inline-block mr-2 ${iconColor}`" />
    <span>{{ title }}</span>
  </h2>
</template>
