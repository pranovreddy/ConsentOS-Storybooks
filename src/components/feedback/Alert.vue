<script setup lang="ts">
import { computed } from 'vue'
import Icon from '../display/Icon.vue'
import type { IconName } from '@/icons'

/** Inline message. Error copy follows the spec: what happened, why, and what to do next. */
const props = withDefaults(defineProps<{ tone?: 'info' | 'success' | 'warning' | 'danger'; title?: string; dismissible?: boolean; icon?: IconName }>(), { tone: 'info' })
const emit = defineEmits<{ dismiss: [] }>()
const tones = {
  info: { box: 'border-brand-200 bg-brand-50', icon: 'text-brand-600', glyph: 'info' },
  success: { box: 'border-success-500/30 bg-success-50', icon: 'text-success-600', glyph: 'circle-check' },
  warning: { box: 'border-warning-200 bg-warning-50', icon: 'text-warning-700', glyph: 'warning' },
  danger: { box: 'border-danger-200 bg-danger-50', icon: 'text-danger-600', glyph: 'circle-alert' },
} as const
const tone = computed(() => tones[props.tone])
</script>

<template>
  <div class="flex items-start gap-3 rounded-md border p-3.5" :class="tone.box" :role="props.tone === 'danger' ? 'alert' : 'status'">
    <Icon :name="icon || tone.glyph" :size="18" :class="tone.icon" class="mt-px" />
    <div class="min-w-0 flex-1 text-[13px] leading-5 text-gray-700">
      <p v-if="title" class="text-sm font-semibold text-ink">{{ title }}</p>
      <slot />
      <div v-if="$slots.actions" class="mt-2 flex gap-2"><slot name="actions" /></div>
    </div>
    <button v-if="dismissible" type="button" aria-label="Dismiss" class="text-ink-3 hover:text-ink" @click="emit('dismiss')"><Icon name="x" /></button>
  </div>
</template>
