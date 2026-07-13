<script setup lang="ts">
withDefaults(defineProps<{ hover?: boolean; as?: string }>(), { hover: false, as: 'div' })
</script>

<template>
  <component
    :is="as"
    :class="
      cn(
        'relative rounded-[4px] border border-border bg-surface/70 backdrop-blur-sm',
        hover &&
          'transition-colors duration-200 hover:border-border-strong hover:bg-surface-2/80'
      )
    "
  >
    <slot />
  </component>
</template>
