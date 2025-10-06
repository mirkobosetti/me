<script setup lang="ts">
interface Props {
  icon: string
  iconColor: string
  title: string
  value: string
  href?: string
  isExternal?: boolean
}

withDefaults(defineProps<Props>(), {
  isExternal: false
})
</script>

<template>
  <Card>
    <CardContent class="p-4 md:p-6">
      <div class="flex items-center gap-3 md:gap-4">
        <div
          :class="`w-10 h-10 md:w-12 md:h-12 rounded-full ${iconColor}/20 flex items-center justify-center flex-shrink-0`"
        >
          <iconify-icon :icon="icon" :class="`text-xl md:text-2xl ${iconColor}`" />
        </div>
        <div class="min-w-0 flex-1">
          <p class="font-semibold text-sm md:text-lg">{{ title }}</p>
          <a
            v-if="href"
            :href="href"
            :target="isExternal ? '_blank' : undefined"
            :rel="isExternal ? 'noopener noreferrer' : undefined"
            class="text-blue-500 hover:underline text-sm md:text-base break-words"
          >
            {{ value }}
          </a>
          <p v-else class="text-muted-foreground text-sm md:text-base break-words">{{ value }}</p>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
