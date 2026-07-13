<script setup lang="ts">
definePageMeta({ layout: 'bare' })

useSeoMeta({
  title: 'CV',
  robots: 'noindex'
})
</script>

<template>
  <div class="flex min-h-[100dvh] flex-col bg-bg">
    <div class="flex items-center justify-between border-b border-border px-4 py-3 sm:px-6">
      <NuxtLink to="/" class="flex items-center gap-2 font-display text-lg font-bold">
        <Icon name="mdi:arrow-left" class="text-xl" />
        <span class="text-accent">mirko</span><span class="text-faint">@portfolio</span>
      </NuxtLink>
      <UiButton as="a" href="/cv.pdf" download size="sm">
        <Icon name="mdi:download" class="text-base" /> Download
      </UiButton>
    </div>
    <object data="/cv.pdf" type="application/pdf" class="w-full flex-1">
      <div class="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
        <p class="font-mono text-sm text-muted">Your browser can't display the PDF inline.</p>
        <UiButton as="a" href="/cv.pdf" target="_blank" rel="noopener noreferrer">
          <Icon name="mdi:file-pdf-box" class="text-base" /> Open CV
        </UiButton>
      </div>
    </object>
  </div>
</template>
