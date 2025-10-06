<script setup lang="ts">
interface Props {
  title: string
  icon: string
  iconColor?: string
  items: string[]
  type?: 'badge' | 'list'
}

withDefaults(defineProps<Props>(), {
  iconColor: 'text-yellow-500',
  type: 'badge'
})
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle class="flex items-center gap-2 text-2xl">
        <iconify-icon :icon="icon" :class="iconColor" />
        {{ title }}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <!-- Badge variant -->
      <div v-if="type === 'badge'" class="flex flex-wrap gap-2">
        <Badge v-for="item in items" :key="item" class="text-base px-3 py-1">
          {{ item }}
        </Badge>
      </div>

      <!-- List variant -->
      <ul v-else class="space-y-2">
        <li v-for="item in items" :key="item" class="flex items-center gap-2">
          <iconify-icon icon="mdi:check" class="text-green-500" />
          <span>{{ item }}</span>
        </li>
      </ul>
    </CardContent>
  </Card>
</template>
