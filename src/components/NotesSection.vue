<script setup lang="ts">
import { ref, onMounted } from 'vue'
import NoteEditor from './NoteEditor.vue'

interface Note {
  id: string
  canvas: string
  author: string
  description: string
  createdAt: string
}

interface NoteData {
  canvas: string
  author: string
  description: string
}

const notes = ref<Note[]>([])
const isEditorOpen = ref(false)

const STORAGE_KEY = 'portfolio_notes'

// Load notes from localStorage
const loadNotes = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      notes.value = JSON.parse(stored)
    }
  } catch (error) {
    console.error('Error loading notes:', error)
  }
}

// Save notes to localStorage
const saveNotes = () => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes.value))
  } catch (error) {
    console.error('Error saving notes:', error)
  }
}

// Handle save from editor
const handleSaveNote = (noteData: NoteData) => {
  const note: Note = {
    id: Date.now().toString(),
    canvas: noteData.canvas,
    author: noteData.author,
    description: noteData.description,
    createdAt: new Date().toISOString()
  }

  notes.value.unshift(note)
  saveNotes()
  isEditorOpen.value = false
}

onMounted(() => {
  loadNotes()
})
</script>

<template>
  <div id="notes" class="min-h-[50vh] my-16 max-w-4xl w-full scroll-mt-20 p-6">
    <SectionHeader icon="mdi:note-text" title="Notes">
      <template #rightButton>
        <Button @click="isEditorOpen = true" class="md:w-auto ml-auto">
          <iconify-icon icon="mdi:plus" class="mr-2 text-xl" />
          Leave me a note
        </Button>
      </template>
    </SectionHeader>

    <div class="mt-12 space-y-6">
      <!-- Note Editor Modal -->
      <NoteEditor
        :open="isEditorOpen"
        @update:open="isEditorOpen = $event"
        @save="handleSaveNote"
      />

      <div ref="display-cards" class="min-h-screen relative">
        <Card
          v-for="note in notes"
          :key="note.id"
          class="bg-gray-800 p-2 w-48 gap-2 absolute"
          :style="{
            left: `${Math.random() * 70}%`,
            top: `${Math.random() * 70}%`,
            transform: `rotate(${(Math.random() - 0.5) * 90}deg)`
          }"
        >
          <img
            :src="note.canvas"
            :alt="`Note by ${note.author}`"
            class="w-44 h-44 object-cover rounded-lg"
          />

          <CardContent class="p-0">
            <p class="font-semibold text-muted-foreground">{{ note.author }}</p>

            <p v-if="note.description">
              {{ note.description }}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>
