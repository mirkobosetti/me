<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  as?: string
}
const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  as: 'button'
})

const base =
  'inline-flex items-center justify-center gap-2 font-display font-bold uppercase tracking-wide whitespace-nowrap select-none rounded-[4px] transition-all duration-150 active:translate-y-px disabled:opacity-40 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-accent'

const variants = {
  primary:
    'bg-accent text-[#0a0a0b] border border-accent hover:bg-transparent hover:text-accent shadow-[0_0_0_0_rgba(255,194,51,0)] hover:shadow-[0_0_24px_-6px_rgba(255,194,51,0.6)]',
  outline:
    'bg-transparent text-text border border-border-strong hover:border-accent hover:text-accent',
  ghost: 'bg-transparent text-muted border border-transparent hover:text-accent hover:bg-surface-2'
}

const sizes = {
  sm: 'text-xs px-3 py-1.5',
  md: 'text-sm px-4 py-2.5',
  lg: 'text-base px-6 py-3'
}
</script>

<template>
  <component :is="props.as" :class="cn(base, variants[props.variant], sizes[props.size])">
    <slot />
  </component>
</template>
