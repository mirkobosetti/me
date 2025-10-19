<script setup lang="ts">
import { ref, onMounted } from 'vue'
import NoteEditor from './NoteEditor.vue'
import { supabase, type Note } from '@/lib/supabase'
import {
  getUserIdentifier,
  canUserCreateNote,
  incrementUserNotesCount
} from '@/lib/userIdentifier'

interface NoteData {
  canvas: string
  author: string
  description: string
}

const notes = ref<Note[]>([])
const isEditorOpen = ref(false)
const isLoading = ref(false)
const error = ref<string | null>(null)
const userCanCreate = ref(true)
const userNotesRemaining = ref(3)

// Carica tutte le note dal database
const loadNotes = async () => {
  try {
    isLoading.value = true
    error.value = null

    const { data, error: fetchError } = await supabase
      .from('notes')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(50) // Limita a 50 note più recenti per performance

    if (fetchError) throw fetchError

    notes.value = data || []
  } catch (err) {
    console.error('Error loading notes:', err)
    error.value = 'Failed to load notes'
  } finally {
    isLoading.value = false
  }
}

// Verifica se l'utente può creare note
const checkUserLimit = async () => {
  const userId = getUserIdentifier()
  userCanCreate.value = await canUserCreateNote(userId)

  // Conta le note dell'utente corrente per mostrare quante ne restano
  const { count } = await supabase
    .from('notes')
    .select('*', { count: 'exact', head: true })
    .eq('user_identifier', userId)

  userNotesRemaining.value = 3 - (count || 0)
}

// Gestisce il salvataggio di una nuova nota
const handleSaveNote = async (noteData: NoteData) => {
  try {
    isLoading.value = true
    error.value = null

    const userId = getUserIdentifier()

    // Doppio controllo lato client
    const canCreate = await canUserCreateNote(userId)
    if (!canCreate) {
      error.value = 'You have reached the maximum of 3 notes'
      return
    }

    // Validazione input
    if (!noteData.canvas || !noteData.author || !noteData.description) {
      error.value = 'All fields are required'
      return
    }

    if (noteData.author.length > 20) {
      error.value = 'Author name must be 20 characters or less'
      return
    }

    if (noteData.description.length > 50) {
      error.value = 'Description must be 50 characters or less'
      return
    }

    // Inserisci nel database
    const { data, error: insertError } = await supabase
      .from('notes')
      .insert({
        canvas: noteData.canvas,
        author: noteData.author,
        description: noteData.description,
        user_identifier: userId
      })
      .select()
      .single()

    if (insertError) {
      // Controlla se è un errore di policy (limite raggiunto)
      if (insertError.message.includes('policy')) {
        error.value = 'You have reached the maximum of 3 notes'
      } else {
        throw insertError
      }
      return
    }

    // Incrementa il contatore locale
    incrementUserNotesCount(userId)

    // Aggiorna la lista locale
    if (data) {
      notes.value.unshift(data)
    }

    // Chiudi l'editor
    isEditorOpen.value = false

    // Ricontrolla il limite
    await checkUserLimit()

  } catch (err) {
    console.error('Error saving note:', err)
    error.value = 'Failed to save note. Please try again.'
  } finally {
    isLoading.value = false
  }
}

// Gestisce l'apertura dell'editor
const openEditor = async () => {
  await checkUserLimit()

  if (!userCanCreate.value) {
    error.value = 'You have already created 3 notes. That\'s the maximum allowed.'
    return
  }

  isEditorOpen.value = true
}

onMounted(async () => {
  await loadNotes()
  await checkUserLimit()
})
</script>

<template>
  <div id="notes" class="min-h-[50vh] my-16 max-w-4xl w-full scroll-mt-20 p-6">
    <SectionHeader icon="mdi:note-text" title="Notes">
      <template #rightButton>
        <Button @click="openEditor" class="md:w-auto ml-auto" :disabled="!userCanCreate">
          <iconify-icon icon="mdi:plus" class="mr-2 text-xl" />
          Leave me a note
          <span v-if="userNotesRemaining < 3" class="ml-2 text-xs opacity-70">
            ({{ userNotesRemaining }} left)
          </span>
        </Button>
      </template>
    </SectionHeader>

    <!-- Error Message -->
    <div v-if="error" class="mt-4 p-4 bg-red-500/10 border border-red-500/50 rounded-lg">
      <p class="text-red-400">{{ error }}</p>
      <button @click="error = null" class="text-sm underline mt-2">Dismiss</button>
    </div>

    <div class="mt-12 space-y-6">
      <!-- Note Editor Modal -->
      <NoteEditor
        :open="isEditorOpen"
        @update:open="isEditorOpen = $event"
        @save="handleSaveNote"
      />

      <!-- Loading State -->
      <div v-if="isLoading && notes.length === 0" class="text-center py-12">
        <p class="text-muted-foreground">Loading notes...</p>
      </div>

      <!-- Notes Display -->
      <div v-else-if="notes.length > 0" ref="display-cards" class="min-h-screen relative">
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

      <!-- Empty State -->
      <div v-else class="text-center py-12">
        <p class="text-muted-foreground">No notes yet. Be the first to leave one!</p>
      </div>
    </div>
  </div>
</template>
