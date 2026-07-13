<script setup lang="ts">
const props = defineProps<{ open: boolean; title?: string }>()
const emit = defineEmits<{ 'update:open': [value: boolean] }>()

const panel = ref<HTMLElement>()

const close = () => emit('update:open', false)

const onKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.open) close()
}

watch(
  () => props.open,
  (isOpen) => {
    if (import.meta.client) {
      document.body.style.overflow = isOpen ? 'hidden' : ''
      if (isOpen) nextTick(() => panel.value?.focus())
    }
  }
)

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  if (import.meta.client) document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition name="page">
      <div
        v-if="open"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        :aria-label="title"
      >
        <div class="absolute inset-0 bg-bg/80 backdrop-blur-sm" @click="close" />
        <div
          ref="panel"
          tabindex="-1"
          class="relative z-10 w-full max-w-md rounded-[6px] border border-border-strong bg-surface p-5 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.8)] focus:outline-none"
        >
          <div class="mb-4 flex items-center justify-between">
            <h3 class="font-display text-lg font-bold">
              <span class="text-faint">~/</span>{{ title }}
            </h3>
            <button
              class="flex h-8 w-8 items-center justify-center rounded-[3px] text-muted transition-colors hover:text-accent"
              aria-label="Close"
              @click="close"
            >
              <Icon name="mdi:close" class="text-xl" />
            </button>
          </div>
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
