<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

interface NoteData {
  canvas: string
  author: string
  description: string
}

const props = defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  'update:open': [value: boolean]
  save: [note: NoteData]
}>()

const canvas = ref<HTMLCanvasElement>()
const ctx = ref<CanvasRenderingContext2D | null>(null)
const isDrawing = ref(false)
const author = ref('')
const description = ref('')
const MAX_DESCRIPTION_LENGTH = 50

// Drawing state
const currentColor = ref('#000000')
const pencilSize = ref<'small' | 'medium' | 'large'>('small')
const history = ref<ImageData[]>([])
const historyStep = ref(-1)

const colors = [
  { name: 'Black', value: '#000000' },
  { name: 'White', value: '#FFFFFF' },
  { name: 'Red', value: '#E57373' },
  { name: 'Blue', value: '#64B5F6' },
  { name: 'Green', value: '#81C784' },
  { name: 'Yellow', value: '#FFD54F' },
  { name: 'Orange', value: '#FFB74D' },
  { name: 'Purple', value: '#BA68C8' }
]

const getPencilWidth = () => {
  switch (pencilSize.value) {
    case 'small':
      return 2
    case 'medium':
      return 5
    case 'large':
      return 10
    default:
      return 2
  }
}

const cyclePencilSize = () => {
  if (pencilSize.value === 'small') pencilSize.value = 'medium'
  else if (pencilSize.value === 'medium') pencilSize.value = 'large'
  else pencilSize.value = 'small'
}

const initCanvas = () => {
  if (!canvas.value) return

  canvas.value.width = 300
  canvas.value.height = 300

  ctx.value = canvas.value.getContext('2d')
  if (!ctx.value) return

  ctx.value.lineCap = 'round'
  ctx.value.lineJoin = 'round'

  // Fill with light gray background
  ctx.value.fillStyle = '#E5E5E5'
  ctx.value.fillRect(0, 0, 300, 300)

  saveHistory()
}

const saveHistory = () => {
  if (!ctx.value || !canvas.value) return

  const imageData = ctx.value.getImageData(0, 0, canvas.value.width, canvas.value.height)

  // Remove any history after current step
  history.value = history.value.slice(0, historyStep.value + 1)

  history.value.push(imageData)
  historyStep.value = history.value.length - 1

  // Limit history to 50 steps
  if (history.value.length > 50) {
    history.value.shift()
    historyStep.value--
  }
}

const undo = () => {
  if (historyStep.value > 0) {
    historyStep.value--
    restoreHistory()
  }
}

const redo = () => {
  if (historyStep.value < history.value.length - 1) {
    historyStep.value++
    restoreHistory()
  }
}

const restoreHistory = () => {
  if (!ctx.value || !canvas.value) return

  const imageData = history.value[historyStep.value]
  if (imageData) {
    ctx.value.putImageData(imageData, 0, 0)
  }
}

const startDrawing = (e: MouseEvent | TouchEvent) => {
  if (!ctx.value || !canvas.value) return

  isDrawing.value = true
  const rect = canvas.value.getBoundingClientRect()
  const x =
    'touches' in e && e.touches && e.touches.length > 0 && e.touches[0]
      ? e.touches[0].clientX
      : (e as MouseEvent).clientX - rect.left
  const y =
    'touches' in e && e.touches && e.touches.length > 0 && e.touches[0]
      ? e.touches[0].clientY
      : (e as MouseEvent).clientY - rect.top

  ctx.value.strokeStyle = currentColor.value
  ctx.value.lineWidth = getPencilWidth()
  ctx.value.beginPath()
  ctx.value.moveTo(x, y)
  ctx.value.lineTo(x, y)
  ctx.value.stroke()
}

const draw = (e: MouseEvent | TouchEvent) => {
  if (!isDrawing.value || !ctx.value || !canvas.value) return

  const rect = canvas.value.getBoundingClientRect()
  const x =
    'touches' in e && e.touches && e.touches.length > 0 && e.touches[0]
      ? e.touches[0].clientX
      : (e as MouseEvent).clientX - rect.left
  const y =
    'touches' in e && e.touches && e.touches.length > 0 && e.touches[0]
      ? e.touches[0].clientY
      : (e as MouseEvent).clientY - rect.top

  ctx.value.lineTo(x, y)
  ctx.value.stroke()
  ctx.value.beginPath()
  ctx.value.moveTo(x, y)
}

const stopDrawing = () => {
  if (isDrawing.value) {
    isDrawing.value = false
    saveHistory()
  }
}

const resetCanvas = () => {
  if (!ctx.value || !canvas.value) return

  const rect = canvas.value.getBoundingClientRect()
  ctx.value.fillStyle = '#E5E5E5'
  ctx.value.fillRect(0, 0, rect.width, rect.height)

  saveHistory()
}

const eraseMode = () => {
  currentColor.value = '#E5E5E5'
}

const handleSave = () => {
  if (!canvas.value) return

  const noteData: NoteData = {
    canvas: canvas.value.toDataURL(),
    author: author.value,
    description: description.value
  }

  emit('save', noteData)
  handleClose()
}

const handleClose = () => {
  emit('update:open', false)
  // Reset form
  author.value = ''
  description.value = ''
  resetCanvas()
  history.value = []
  historyStep.value = -1
}

const canSave = () => {
  return author.value.trim().length > 0
}

watch(
  () => props.open,
  (newVal) => {
    if (newVal) {
      // Small delay to ensure canvas is rendered
      setTimeout(() => {
        if (canvas.value) {
          initCanvas()
        }
      }, 150)
    }
  }
)

onMounted(() => {
  if (canvas.value) {
    initCanvas()
  }
})
</script>

<template>
  <Dialog :open="open" @update:open="emit('update:open', $event)">
    <DialogContent class="max-w-md max-h-[90vh] overflow-y-auto">
      <div class="space-y-4">
        <!-- Tools and Canvas Layout -->
        <div class="flex flex-col gap-4 items-center justify-center">
          <!-- Color Palette and Tools -->
          <div class="pt-3 px-4 bg-muted rounded-lg">
            <!-- Colors -->
            <div class="flex gap-2 items-center justify-center">
              <button
                v-for="color in colors"
                :key="color.value"
                type="button"
                :class="[
                  'w-8 h-8 rounded-full border transition-all',
                  currentColor === color.value ? 'border-yellow-500 scale-110' : 'border-gray-400'
                ]"
                :style="{ backgroundColor: color.value }"
                @click="currentColor = color.value"
              />
            </div>
            <div class="flex gap-2 items-center justify-between mt-2">
              <div class="flex gap-2">
                <button
                  type="button"
                  class="p-2 hover:bg-background rounded transition"
                  @click="undo"
                  :disabled="historyStep <= 0"
                  :class="{ 'opacity-50 cursor-not-allowed': historyStep <= 0 }"
                >
                  <iconify-icon icon="mdi:undo" class="text-2xl" />
                </button>

                <button
                  type="button"
                  class="p-2 hover:bg-background rounded transition"
                  @click="redo"
                  :disabled="historyStep >= history.length - 1"
                  :class="{ 'opacity-50 cursor-not-allowed': historyStep >= history.length - 1 }"
                >
                  <iconify-icon icon="mdi:redo" class="text-2xl" />
                </button>
              </div>

              <div class="flex gap-2">
                <button
                  type="button"
                  class="p-2 hover:bg-background rounded transition"
                  @click="eraseMode"
                >
                  <iconify-icon icon="mdi:eraser" class="text-2xl" />
                </button>

                <button
                  type="button"
                  class="p-2 hover:bg-background rounded transition"
                  @click="resetCanvas"
                >
                  <iconify-icon icon="mdi:delete" class="text-2xl" />
                </button>

                <button
                  type="button"
                  class="p-2 hover:bg-background rounded transition relative"
                  @click="cyclePencilSize"
                >
                  <iconify-icon icon="mdi:pencil" class="text-2xl" />
                  <span
                    class="absolute bottom-3 -right-0 bg-yellow-500 text-black text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold"
                  >
                    {{ pencilSize === 'small' ? 'S' : pencilSize === 'medium' ? 'M' : 'L' }}
                  </span>
                </button>
              </div>
            </div>
          </div>

          <!-- Canvas -->
          <div class="border-2 border-gray-300 rounded-lg overflow-hidden bg-gray-200 h-80 w-80">
            <canvas
              ref="canvas"
              class="w-80 h-80 cursor-crosshair touch-none"
              @mousedown="startDrawing"
              @mousemove="draw"
              @mouseup="stopDrawing"
              @mouseleave="stopDrawing"
              @touchstart.prevent="startDrawing"
              @touchmove.prevent="draw"
              @touchend.prevent="stopDrawing"
            />
          </div>
        </div>

        <!-- Author Name -->
        <div>
          <input
            v-model="author"
            type="text"
            placeholder="Author name"
            class="w-full p-2 px-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-yellow-500"
            maxlength="20"
          />
        </div>

        <!-- Description -->
        <div>
          <input
            v-model="description"
            placeholder="Description"
            :maxlength="MAX_DESCRIPTION_LENGTH"
            class="w-full p-2 px-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <!-- Actions -->
        <div class="flex gap-3 justify-between items-center">
          <CircularCounter :current="description.length" :max="MAX_DESCRIPTION_LENGTH" />

          <div class="flex gap-3">
            <Button variant="outline" @click="handleClose"> Cancel </Button>
            <Button @click="handleSave" :disabled="!canSave()">
              <iconify-icon icon="mdi:upload" class="mr-2 text-xl" />
              Upload
            </Button>
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>
