<script setup lang="ts">
import { DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogRoot, DialogTitle, DialogTrigger } from 'reka-ui'

/** Mobile sheet, used for language choice and opt-out reasons in DigiConsent. */
defineProps<{ title: string; description?: string }>()
const open = defineModel<boolean>('open', { default: false })
</script>

<template>
  <DialogRoot v-model:open="open">
    <DialogTrigger v-if="$slots.trigger" as-child><slot name="trigger" /></DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="fixed inset-0 z-50 bg-navy-900/45 animate-overlay" />
      <DialogContent class="fixed right-0 bottom-0 left-0 z-50 mx-auto max-h-[85vh] w-full max-w-[420px] overflow-auto rounded-t-2xl bg-surface px-5 pt-2 pb-6 shadow-pop animate-sheet" :aria-describedby="description ? undefined : ''">
        <span class="mx-auto mb-4 block h-1 w-10 rounded-full bg-gray-300" aria-hidden="true" />
        <DialogTitle class="text-lg font-semibold text-ink">{{ title }}</DialogTitle>
        <DialogDescription v-if="description" class="mt-1 text-sm text-ink-2">{{ description }}</DialogDescription>
        <div class="mt-4"><slot /></div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
