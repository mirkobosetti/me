<script setup lang="ts">
const { slug } = useRoute('/projects/[slug]').params

useMeta({
  title: `Mirko Bosetti | ${slug}`
})
</script>

<template>
  <h1>Project: {{ slug }}</h1>
  <p>This is the project page for {{ slug }}.</p>
</template>
