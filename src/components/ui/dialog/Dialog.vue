<script setup lang="ts">
import { DialogRoot, type DialogRootEmits, type DialogRootProps } from 'reka-ui'
import { watch } from 'vue'

const props = defineProps<DialogRootProps>()
const emits = defineEmits<DialogRootEmits>()

// Prevent body scroll when dialog is open
watch(() => props.open, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}, { immediate: true })
</script>

<template>
  <DialogRoot v-bind="props" @update:open="emits['update:open']">
    <slot />
  </DialogRoot>
</template>
