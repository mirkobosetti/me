<script setup lang="ts">
import {
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps
} from 'reka-ui'
import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'vue'

const props = defineProps<DialogContentProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<DialogContentEmits>()
</script>

<template>
  <DialogPortal>
    <DialogOverlay />
    <DialogContent
      v-bind="props"
      :class="
        cn(
          'fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg',
          props.class
        )
      "
      @escape-key-down="emits('escapeKeyDown', $event)"
      @pointer-down-outside="emits('pointerDownOutside', $event)"
      @focus-outside="emits('focusOutside', $event)"
      @interact-outside="emits('interactOutside', $event)"
      @open-auto-focus="emits('openAutoFocus', $event)"
      @close-auto-focus="emits('closeAutoFocus', $event)"
    >
      <slot />
    </DialogContent>
  </DialogPortal>
</template>
