<script setup lang="ts">
interface Props {
  icon: string
  iconColor?: string
  text: string
  boldText?: string
}

withDefaults(defineProps<Props>(), {
  iconColor: 'text-green-500'
})
</script>

<template>
  <li class="flex items-start gap-2">
    <iconify-icon :icon="icon" :class="`${iconColor} mt-1 flex-shrink-0`" />
    <span>
      <strong v-if="boldText">{{ boldText }}:</strong>
      {{ text }}
    </span>
  </li>
</template>
