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

// Delete a note
const deleteNote = (id: string) => {
  notes.value = notes.value.filter((note) => note.id !== id)
  saveNotes()
}

// Format date
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}

onMounted(() => {
  loadNotes()
})
</script>

<template>
  <div id="notes" class="min-h-[50vh] my-16 max-w-4xl scroll-mt-20">
    <SectionHeader icon="mdi:note-text" title="Notes">
      <template #rightButton>
        <Button @click="isEditorOpen = true" class="w-full md:w-auto md:ml-auto">
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

      <!-- Notes List -->
      <div v-if="notes.length === 0" class="text-center py-12">
        <iconify-icon icon="mdi:note-off" class="text-6xl text-muted-foreground mb-4" />
        <p class="text-xl text-muted-foreground">
          No notes yet. Add your first note to get started!
        </p>
      </div>

      <div v-else class="grid md:grid-cols-2 gap-6">
        <Card
          v-for="note in notes"
          :key="note.id"
          class="hover:border-yellow-500/50 transition-colors overflow-hidden"
        >
          <div class="relative">
            <!-- Canvas Image -->
            <img
              :src="note.canvas"
              :alt="`Note by ${note.author}`"
              class="w-full h-48 object-cover bg-gray-200"
            />

            <!-- Delete Button Overlay -->
            <Button
              variant="ghost"
              size="sm"
              @click="deleteNote(note.id)"
              class="absolute top-2 right-2 bg-black/50 hover:bg-red-500 text-white backdrop-blur-sm"
            >
              <iconify-icon icon="mdi:delete" class="text-xl" />
            </Button>
          </div>

          <CardContent class="p-4">
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <p class="font-semibold text-lg">{{ note.author }}</p>
                <p class="text-xs text-muted-foreground flex items-center gap-1">
                  <iconify-icon icon="mdi:clock-outline" class="text-sm" />
                  {{ formatDate(note.createdAt) }}
                </p>
              </div>

              <p v-if="note.description" class="text-sm text-muted-foreground">
                {{ note.description }}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <!-- Notes Count -->
      <div v-if="notes.length > 0" class="text-center text-muted-foreground">
        <p class="text-base">
          {{ notes.length }} {{ notes.length === 1 ? 'note' : 'notes' }} saved
        </p>
      </div>
    </div>
  </div>
</template>
