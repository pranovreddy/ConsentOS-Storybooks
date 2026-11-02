<script lang="ts">
import { reactive } from 'vue'
export interface Toast { id: number; tone: 'success' | 'danger' | 'warning' | 'info'; title: string; action?: string; duration?: number }
const toasts = reactive<Toast[]>([])
let next = 1
/** Fire from anywhere. Auto-dismisses after 5s, per the spec. Failed optimistic writes pass an `action` such as "Retry". */
export function useToast() {
  return {
    show(toast: Omit<Toast, 'id'>) {
      const id = next++
      toasts.push({ ...toast, id })
      setTimeout(() => dismiss(id), toast.duration ?? 5000)
    },
    dismiss,
  }
}
function dismiss(id: number) {
  const i = toasts.findIndex((t) => t.id === id)
  if (i >= 0) toasts.splice(i, 1)
}
</script>

<script setup lang="ts">
import Icon from '../display/Icon.vue'

const glyph = { success: 'circle-check', danger: 'circle-alert', warning: 'warning', info: 'info' } as const
const color = { success: 'text-success-500', danger: 'text-danger-500', warning: 'text-warning-500', info: 'text-brand-300' }
</script>

<template>
  <Teleport to="body">
    <ol class="fixed right-6 bottom-6 z-[60] flex w-[360px] max-w-[calc(100vw-32px)] flex-col gap-2" aria-live="polite">
      <li v-for="toast in toasts" :key="toast.id" class="flex items-center gap-3 rounded-md bg-navy-900 px-4 py-3 text-sm text-white shadow-bar">
        <Icon :name="glyph[toast.tone]" :size="18" :class="color[toast.tone]" />
        <span class="flex-1">{{ toast.title }}</span>
        <button v-if="toast.action" type="button" class="font-medium text-brand-300 hover:underline" @click="dismiss(toast.id)">{{ toast.action }}</button>
        <button type="button" aria-label="Dismiss" class="text-white/60 hover:text-white" @click="dismiss(toast.id)"><Icon name="x" :size="14" /></button>
      </li>
    </ol>
  </Teleport>
</template>
