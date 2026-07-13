<script setup lang="ts">
interface NoteData {
  canvas: string
  author: string
  description: string
}

const props = defineProps<{ open: boolean; saving?: boolean }>()
const emit = defineEmits<{
  'update:open': [value: boolean]
  save: [note: NoteData]
}>()

const SIZE = 300
const MAX_DESC = 50

const canvas = ref<HTMLCanvasElement>()
const ctx = ref<CanvasRenderingContext2D | null>(null)
const isDrawing = ref(false)
const author = ref('')
const description = ref('')
const error = ref('')

const currentColor = ref('#111111')
const pencilSize = ref<'S' | 'M' | 'L'>('S')
const history = ref<ImageData[]>([])
const step = ref(-1)

const colors = ['#111111', '#ffffff', '#ff6b6b', '#64b5f6', '#7ee787', '#ffc233', '#ffb74d', '#ba68c8']
const widthMap = { S: 2, M: 5, L: 10 }
const PAPER = '#e8e8e8'

const initCanvas = () => {
  if (!canvas.value) return
  canvas.value.width = SIZE
  canvas.value.height = SIZE
  ctx.value = canvas.value.getContext('2d')
  if (!ctx.value) return
  ctx.value.lineCap = 'round'
  ctx.value.lineJoin = 'round'
  ctx.value.fillStyle = PAPER
  ctx.value.fillRect(0, 0, SIZE, SIZE)
  history.value = []
  step.value = -1
  saveHistory()
}

const saveHistory = () => {
  if (!ctx.value || !canvas.value) return
  history.value = history.value.slice(0, step.value + 1)
  history.value.push(ctx.value.getImageData(0, 0, SIZE, SIZE))
  step.value = history.value.length - 1
  if (history.value.length > 40) {
    history.value.shift()
    step.value--
  }
}

const restore = () => {
  const img = history.value[step.value]
  if (img && ctx.value) ctx.value.putImageData(img, 0, 0)
}
const undo = () => step.value > 0 && (step.value--, restore())
const redo = () => step.value < history.value.length - 1 && (step.value++, restore())

const pos = (e: MouseEvent | TouchEvent) => {
  const rect = canvas.value!.getBoundingClientRect()
  const t = 'touches' in e ? e.touches[0] : (e as MouseEvent)
  if (!t) return { x: 0, y: 0 }
  return {
    x: ((t.clientX - rect.left) * SIZE) / rect.width,
    y: ((t.clientY - rect.top) * SIZE) / rect.height
  }
}

const start = (e: MouseEvent | TouchEvent) => {
  if (!ctx.value) return
  isDrawing.value = true
  const { x, y } = pos(e)
  ctx.value.strokeStyle = currentColor.value
  ctx.value.lineWidth = widthMap[pencilSize.value]
  ctx.value.beginPath()
  ctx.value.moveTo(x, y)
  ctx.value.lineTo(x, y)
  ctx.value.stroke()
}
const move = (e: MouseEvent | TouchEvent) => {
  if (!isDrawing.value || !ctx.value) return
  const { x, y } = pos(e)
  ctx.value.lineTo(x, y)
  ctx.value.stroke()
  ctx.value.beginPath()
  ctx.value.moveTo(x, y)
}
const end = () => {
  if (isDrawing.value) {
    isDrawing.value = false
    saveHistory()
  }
}

const cyclePencil = () => (pencilSize.value = pencilSize.value === 'S' ? 'M' : pencilSize.value === 'M' ? 'L' : 'S')
const erase = () => (currentColor.value = PAPER)
const clear = () => {
  if (!ctx.value) return
  ctx.value.fillStyle = PAPER
  ctx.value.fillRect(0, 0, SIZE, SIZE)
  saveHistory()
}

const sanitize = (s: string) => s.trim().replace(/[<>"']/g, '').slice(0, 100)

const isBlank = () => {
  const tmp = document.createElement('canvas')
  tmp.width = SIZE
  tmp.height = SIZE
  const c = tmp.getContext('2d')!
  c.fillStyle = PAPER
  c.fillRect(0, 0, SIZE, SIZE)
  return tmp.toDataURL() === canvas.value!.toDataURL()
}

const submit = () => {
  error.value = ''
  const a = sanitize(author.value)
  if (!a) return (error.value = 'Enter a name')
  if (a.length > 20) return (error.value = 'Name must be 20 characters or less')
  if (!canvas.value || isBlank()) return (error.value = 'Draw something first')
  emit('save', { canvas: canvas.value.toDataURL(), author: a, description: sanitize(description.value) })
}

const reset = () => {
  author.value = ''
  description.value = ''
  error.value = ''
  initCanvas()
}
defineExpose({ reset })

watch(
  () => props.open,
  (o) => o && nextTick(() => setTimeout(initCanvas, 60))
)
onMounted(() => props.open && initCanvas())
</script>

<template>
  <UiModal :open="open" title="draw a note" @update:open="emit('update:open', $event)">
    <div class="space-y-3">
      <!-- toolbar -->
      <div class="rounded-[4px] border border-border bg-surface-2 p-2.5">
        <div class="flex flex-wrap items-center justify-center gap-1.5">
          <button
            v-for="c in colors"
            :key="c"
            type="button"
            :aria-label="`color ${c}`"
            class="h-6 w-6 rounded-full border transition-transform"
            :class="currentColor === c ? 'scale-110 border-accent' : 'border-border-strong'"
            :style="{ backgroundColor: c }"
            @click="currentColor = c"
          />
        </div>
        <div class="mt-2 flex items-center justify-between">
          <div class="flex gap-1">
            <button type="button" class="rounded-[3px] p-1.5 text-muted hover:text-accent disabled:opacity-30" :disabled="step <= 0" @click="undo">
              <Icon name="mdi:undo" class="text-lg" />
            </button>
            <button type="button" class="rounded-[3px] p-1.5 text-muted hover:text-accent disabled:opacity-30" :disabled="step >= history.length - 1" @click="redo">
              <Icon name="mdi:redo" class="text-lg" />
            </button>
          </div>
          <div class="flex gap-1">
            <button type="button" class="rounded-[3px] p-1.5 text-muted hover:text-accent" aria-label="eraser" @click="erase">
              <Icon name="mdi:eraser" class="text-lg" />
            </button>
            <button type="button" class="rounded-[3px] p-1.5 text-muted hover:text-accent" aria-label="clear" @click="clear">
              <Icon name="mdi:delete-outline" class="text-lg" />
            </button>
            <button type="button" class="relative rounded-[3px] p-1.5 text-muted hover:text-accent" aria-label="pencil size" @click="cyclePencil">
              <Icon name="mdi:pencil" class="text-lg" />
              <span class="absolute -right-0.5 bottom-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-accent text-[9px] font-bold text-bg">{{ pencilSize }}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- canvas -->
      <div class="mx-auto w-full max-w-[300px] overflow-hidden rounded-[4px] border border-border-strong" :style="{ backgroundColor: PAPER }">
        <canvas
          ref="canvas"
          class="aspect-square w-full cursor-crosshair touch-none"
          @mousedown="start"
          @mousemove="move"
          @mouseup="end"
          @mouseleave="end"
          @touchstart.prevent="start"
          @touchmove.prevent="move"
          @touchend.prevent="end"
        />
      </div>

      <input
        v-model="author"
        type="text"
        placeholder="your name"
        maxlength="20"
        class="w-full rounded-[3px] border border-border bg-surface-2 px-3 py-2 font-mono text-sm text-text placeholder:text-faint focus:border-accent focus:outline-none"
      />
      <input
        v-model="description"
        type="text"
        placeholder="a short caption (optional)"
        :maxlength="MAX_DESC"
        class="w-full rounded-[3px] border border-border bg-surface-2 px-3 py-2 font-mono text-sm text-text placeholder:text-faint focus:border-accent focus:outline-none"
      />

      <p v-if="error" class="font-mono text-sm text-danger">! {{ error }}</p>

      <div class="flex items-center justify-between">
        <span class="font-mono text-xs text-faint">{{ description.length }}/{{ MAX_DESC }}</span>
        <div class="flex gap-2">
          <UiButton variant="ghost" size="sm" @click="emit('update:open', false)">Cancel</UiButton>
          <UiButton size="sm" :disabled="saving" @click="submit">
            <Icon :name="saving ? 'mdi:loading' : 'mdi:upload'" :class="['text-base', saving && 'animate-spin']" />
            {{ saving ? 'Saving' : 'Post' }}
          </UiButton>
        </div>
      </div>
    </div>
  </UiModal>
</template>
