<script setup lang="ts">
import { DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogRoot, DialogTitle, DialogTrigger } from 'reka-ui'
import Icon from '../display/Icon.vue'

/** Right-side panel, 480px by default. Row click opens a drawer; "Open full page" leads to the detail route. */
withDefaults(defineProps<{ title: string; description?: string; width?: number }>(), { width: 480 })
const open = defineModel<boolean>('open', { default: false })
</script>

<template>
  <DialogRoot v-model:open="open">
    <DialogTrigger v-if="$slots.trigger" as-child><slot name="trigger" /></DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="fixed inset-0 z-50 bg-navy-900/35 animate-overlay" />
      <DialogContent class="fixed inset-y-0 right-0 z-50 flex max-w-full flex-col bg-surface shadow-pop animate-drawer" :style="{ width: `${width}px` }" :aria-describedby="description ? undefined : ''">
        <header class="flex items-start justify-between gap-4 border-b border-line px-5 py-4">
          <div>
            <DialogTitle class="text-base font-semibold text-ink">{{ title }}</DialogTitle>
            <DialogDescription v-if="description" class="mt-0.5 text-[13px] text-ink-2">{{ description }}</DialogDescription>
          </div>
          <DialogClose aria-label="Close" class="text-ink-3 hover:text-ink"><Icon name="x" :size="18" /></DialogClose>
        </header>
        <div class="flex-1 overflow-auto"><slot /></div>
        <footer v-if="$slots.footer" class="flex justify-end gap-2 border-t border-line px-5 py-3"><slot name="footer" /></footer>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
