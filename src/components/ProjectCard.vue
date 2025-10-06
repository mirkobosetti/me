<script setup lang="ts">
interface Props {
  slug: string
  title: string
  description: string
  image: string
  technologies: string[]
}

defineProps<Props>()
</script>

<template>
  <Card
    class="overflow-hidden cursor-pointer py-0 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2"
  >
    <RouterLink :to="`/projects/${slug}`">
      <div class="overflow-hidden">
        <img
          :src="image"
          :alt="title"
          class="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <CardHeader class="pt-6">
        <CardTitle class="text-2xl transition-colors duration-300 hover:text-yellow-500">
          {{ title }}
        </CardTitle>
        <CardDescription>{{ description }}</CardDescription>
      </CardHeader>
      <CardContent class="py-6">
        <div class="flex flex-wrap gap-2">
          <Badge
            v-for="tech in technologies"
            :key="tech"
            variant="secondary"
            class="transition-colors duration-300 hover:bg-yellow-500 hover:text-black"
          >
            {{ tech }}
          </Badge>
        </div>
      </CardContent>
    </RouterLink>
  </Card>
</template>
