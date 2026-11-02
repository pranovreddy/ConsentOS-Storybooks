<script setup lang="ts">
import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogOverlay, AlertDialogPortal, AlertDialogRoot, AlertDialogTitle, AlertDialogTrigger } from 'reka-ui'
import Button from '../actions/Button.vue'
import IconTile from '../display/IconTile.vue'
import type { IconName } from '@/icons'

/** Two-button confirm for irreversible or legally binding actions, such as publishing a rate card's 6-month lock. */
withDefaults(defineProps<{ title: string; description: string; confirmLabel?: string; cancelLabel?: string; tone?: 'primary' | 'danger'; icon?: IconName }>(), { confirmLabel: 'Confirm', cancelLabel: 'Cancel', tone: 'primary' })
const open = defineModel<boolean>('open', { default: false })
const emit = defineEmits<{ confirm: [] }>()
</script>

<template>
  <AlertDialogRoot v-model:open="open">
    <AlertDialogTrigger v-if="$slots.trigger" as-child><slot name="trigger" /></AlertDialogTrigger>
    <AlertDialogPortal>
      <AlertDialogOverlay class="fixed inset-0 z-50 bg-navy-900/45 animate-overlay" />
      <AlertDialogContent class="fixed top-1/2 left-1/2 z-50 w-[92vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-surface p-6 shadow-pop animate-modal">
        <IconTile v-if="icon" :icon="icon" :tone="tone === 'danger' ? 'danger' : 'brand'" class="mb-4" />
        <AlertDialogTitle class="text-lg font-semibold tracking-tight text-ink">{{ title }}</AlertDialogTitle>
        <AlertDialogDescription class="mt-1.5 text-sm leading-[22px] text-ink-2">{{ description }}</AlertDialogDescription>
        <slot />
        <div class="mt-6 flex justify-end gap-2">
          <AlertDialogCancel as-child><Button variant="secondary">{{ cancelLabel }}</Button></AlertDialogCancel>
          <AlertDialogAction as-child><Button :variant="tone" @click="emit('confirm')">{{ confirmLabel }}</Button></AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialogPortal>
  </AlertDialogRoot>
</template>
