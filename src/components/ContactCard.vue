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
    <CardContent class="p-6">
      <div class="flex items-center gap-4">
        <div :class="`w-12 h-12 rounded-full ${iconColor}/20 flex items-center justify-center`">
          <iconify-icon :icon="icon" :class="`text-2xl ${iconColor}`" />
        </div>
        <div>
          <p class="font-semibold text-lg">{{ title }}</p>
          <a
            v-if="href"
            :href="href"
            :target="isExternal ? '_blank' : undefined"
            :rel="isExternal ? 'noopener noreferrer' : undefined"
            class="text-blue-500 hover:underline"
          >
            {{ value }}
          </a>
          <p v-else class="text-muted-foreground">{{ value }}</p>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
