<script setup lang="ts">
import { DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogRoot, DialogTitle, DialogTrigger } from 'reka-ui'
import Icon from '../display/Icon.vue'

withDefaults(defineProps<{ title: string; description?: string; size?: 'sm' | 'md' | 'lg' }>(), { size: 'md' })
const open = defineModel<boolean>('open', { default: false })
const widths = { sm: 'max-w-sm', md: 'max-w-lg', lg: 'max-w-3xl' }
</script>

<template>
  <DialogRoot v-model:open="open">
    <DialogTrigger v-if="$slots.trigger" as-child><slot name="trigger" /></DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="fixed inset-0 z-50 bg-navy-900/45 animate-overlay" />
      <DialogContent class="fixed top-1/2 left-1/2 z-50 max-h-[85vh] w-[92vw] -translate-x-1/2 -translate-y-1/2 overflow-auto rounded-xl bg-surface p-6 shadow-pop animate-modal" :class="widths[size]" :aria-describedby="description ? undefined : ''">
        <div class="flex items-start justify-between gap-4">
          <DialogTitle class="text-lg font-semibold tracking-tight text-ink">{{ title }}</DialogTitle>
          <DialogClose aria-label="Close" class="text-ink-3 hover:text-ink"><Icon name="x" :size="18" /></DialogClose>
        </div>
        <DialogDescription v-if="description" class="mt-1.5 text-sm leading-[22px] text-ink-2">{{ description }}</DialogDescription>
        <div class="mt-4 text-sm text-gray-700"><slot /></div>
        <div v-if="$slots.footer" class="mt-6 flex justify-end gap-2"><slot name="footer" /></div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
