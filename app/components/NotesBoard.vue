<script setup lang="ts">
import type { PublicNote } from '~~/server/utils/db'
import { getUserIdentifier } from '~/lib/userIdentifier'

const MAX = 3

const userId = ref('')

// `me` is reactive: once the identifier is known on the client, useFetch
// refetches and the server marks our notes with `mine` (identifiers of
// other visitors are never exposed).
const { data: notes, pending, error, refresh } = await useFetch<PublicNote[]>('/api/notes', {
  query: { me: userId },
  default: () => []
})

const editorOpen = ref(false)
const saving = ref(false)
const postError = ref('')
const editor = ref()

const remaining = computed(() => {
  if (!userId.value) return MAX
  const mine = (notes.value ?? []).filter((n) => n.mine).length
  return Math.max(0, MAX - mine)
})

onMounted(() => {
  userId.value = getUserIdentifier()
})

// deterministic tilt so SSR and client match
const tilt = (id: string) => {
  let h = 0
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) & 0xffff
  return ((h % 900) / 100 - 4.5).toFixed(2)
}

const openEditor = () => {
  postError.value = ''
  if (remaining.value <= 0) {
    postError.value = `You've reached the maximum of ${MAX} notes`
    return
  }
  editorOpen.value = true
}

const handleSave = async (note: { canvas: string; author: string; description: string }) => {
  saving.value = true
  postError.value = ''
  try {
    await $fetch('/api/notes', {
      method: 'POST',
      body: { ...note, user_identifier: userId.value || getUserIdentifier() }
    })
    editorOpen.value = false
    editor.value?.reset()
    await refresh()
  } catch (e: unknown) {
    const err = e as { data?: { message?: string }; statusMessage?: string }
    postError.value = err?.data?.message || err?.statusMessage || 'Failed to save note'
  } finally {
    saving.value = false
  }
}
</script>

<template>
  <div>
    <div class="flex flex-wrap items-center justify-between gap-3">
      <p class="font-mono text-xs text-faint">
        <span class="text-signal">{{ (notes ?? []).length }}</span> notes on the wall
      </p>
      <UiButton size="sm" :disabled="remaining <= 0" @click="openEditor">
        <Icon name="mdi:draw" class="text-base" />
        Leave a note
        <span v-if="remaining < MAX" class="ml-1 text-xs opacity-70">({{ remaining }} left)</span>
      </UiButton>
    </div>

    <p v-if="postError" class="mt-3 font-mono text-sm text-danger">! {{ postError }}</p>

    <!-- loading -->
    <div v-if="pending" class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      <div
        v-for="i in 4"
        :key="i"
        class="aspect-square animate-pulse rounded-[4px] border border-border bg-surface-2"
      />
    </div>

    <!-- error -->
    <div
      v-else-if="error"
      class="mt-8 rounded-[4px] border border-border bg-surface/40 p-8 text-center"
    >
      <Icon name="mdi:wifi-off" class="text-3xl text-faint" />
      <p class="mt-2 font-mono text-sm text-muted">Couldn't reach the wall. Try again later.</p>
    </div>

    <!-- notes -->
    <div
      v-else-if="(notes ?? []).length"
      class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
    >
      <figure
        v-for="note in notes"
        :key="note.id"
        class="group rounded-[4px] border border-border-strong bg-[#f4f4f4] p-2 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.7)] transition-transform duration-200 hover:z-10 hover:rotate-0 hover:scale-[1.04]"
        :style="{ rotate: `${tilt(note.id)}deg` }"
      >
        <img
          :src="note.canvas"
          :alt="`Note by ${note.author}`"
          loading="lazy"
          class="aspect-square w-full rounded-[2px] object-cover"
        />
        <figcaption class="px-0.5 pt-2 font-mono text-[#1a1a1a]">
          <p class="truncate text-sm font-bold">{{ note.author }}</p>
          <p v-if="note.description" class="truncate text-xs text-[#555]">{{ note.description }}</p>
        </figcaption>
      </figure>
    </div>

    <!-- empty -->
    <div v-else class="mt-8 rounded-[4px] border border-dashed border-border p-10 text-center">
      <Icon name="mdi:gesture-tap" class="text-4xl text-faint" />
      <p class="mt-3 font-mono text-sm text-muted">No notes yet. Be the first to draw one.</p>
    </div>

    <NoteEditor ref="editor" v-model:open="editorOpen" :saving="saving" @save="handleSave" />
  </div>
</template>
