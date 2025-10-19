<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

// Hide topbar on CV page
const showTopBar = computed(() => route.path !== '/cv')

useMeta({
  title: 'Mirko Bosetti'
})
</script>

<template>
  <metainfo />

  <TopBar v-if="showTopBar" />

  <RouterView />
</template>
