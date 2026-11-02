<script setup lang="ts">
import { ref } from 'vue'
import Icon from '../display/Icon.vue'
import ProgressBar from '../display/ProgressBar.vue'

/** Secure CSV drop target. Stays disabled until its prerequisite, such as an LOB, is set. */
withDefaults(defineProps<{
  state?: 'idle' | 'uploading' | 'done' | 'error'
  disabled?: boolean
  fileName?: string
  fileMeta?: string
  progress?: number
  errorText?: string
  hint?: string
}>(), { state: 'idle', progress: 0, hint: 'One file per upload. CSV only. Up to 100 MB' })
const emit = defineEmits<{ files: [files: FileList]; remove: [] }>()
const dragging = ref(false)
const input = ref<HTMLInputElement>()
function onDrop(e: DragEvent) {
  dragging.value = false
  if (e.dataTransfer?.files.length) emit('files', e.dataTransfer.files)
}
</script>

<template>
  <div
    class="rounded-md border border-dashed px-6 py-10 text-center transition-colors"
    :class="[
      disabled ? 'border-brand-200/70 bg-gray-50 opacity-70' : dragging ? 'border-brand-500 bg-brand-50' : 'border-brand-300 bg-surface',
      state === 'error' && 'border-danger-500 bg-danger-50',
      state === 'done' && 'border-success-500 bg-success-50 border-solid',
    ]"
    @dragover.prevent="dragging = !disabled"
    @dragleave="dragging = false"
    @drop.prevent="onDrop"
  >
    <template v-if="state === 'idle'">
      <div class="mx-auto flex size-24 items-center justify-center rounded-full bg-surface shadow-pop">
        <span class="relative text-brand-400">
          <Icon name="shield" :size="56" :stroke-width="1" fill="currentColor" fill-opacity="0.75" />
          <Icon name="upload" :size="18" class="absolute top-[19px] left-[19px] text-white" />
        </span>
      </div>
      <p class="mt-5 text-[15px] font-medium text-gray-600">
        Drop your CSV here, or
        <button type="button" :disabled="disabled" class="font-medium text-brand-600 hover:underline disabled:cursor-not-allowed disabled:no-underline" @click="input?.click()">browse</button>
      </p>
      <p class="mt-1 text-[13px] text-ink-3">{{ hint }}</p>
      <input ref="input" type="file" accept=".csv" class="sr-only" tabindex="-1" aria-label="Choose CSV file" @change="($event.target as HTMLInputElement).files && emit('files', ($event.target as HTMLInputElement).files!)" />
    </template>
    <div v-else class="mx-auto flex max-w-md items-center gap-3 text-left">
      <span class="flex size-11 shrink-0 items-center justify-center rounded-md" :class="state === 'error' ? 'bg-danger-100 text-danger-600' : state === 'done' ? 'bg-success-100 text-success-600' : 'bg-brand-50 text-brand-600'">
        <Icon :name="state === 'error' ? 'warning' : state === 'done' ? 'file-check' : 'file'" :size="20" />
      </span>
      <div class="min-w-0 flex-1">
        <p class="truncate font-mono text-[13px] font-medium text-ink">{{ fileName }}</p>
        <p v-if="state === 'error'" class="mt-0.5 text-[13px] text-danger-700">{{ errorText }}</p>
        <p v-else-if="state === 'done'" class="mt-0.5 text-[13px] text-success-700">{{ fileMeta }}</p>
        <ProgressBar v-else class="mt-2" :value="progress" size="sm" :label="`Encrypting and uploading ${fileName}`" />
      </div>
      <button type="button" aria-label="Remove file" class="text-ink-3 hover:text-ink" @click="emit('remove')"><Icon name="x" /></button>
    </div>
  </div>
</template>
