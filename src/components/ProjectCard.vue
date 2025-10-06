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
  <Card class="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
    <RouterLink :to="`/projects/${slug}`">
      <img :src="image" :alt="title" class="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle class="text-2xl">{{ title }}</CardTitle>
        <CardDescription>{{ description }}</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="flex flex-wrap gap-2">
          <Badge v-for="tech in technologies" :key="tech" variant="secondary">
            {{ tech }}
          </Badge>
        </div>
      </CardContent>
    </RouterLink>
  </Card>
</template>
