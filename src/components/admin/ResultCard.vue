<script setup lang="ts">
import { computed } from 'vue'
import Badge from '../display/Badge.vue'
import IconTile from '../display/IconTile.vue'
import type { IconName } from '@/icons'

/** Validation or verification outcome with a coloured edge: count, what it means, and what to do next. */
const props = withDefaults(defineProps<{
  tone?: 'brand' | 'warning' | 'neutral' | 'success' | 'attention' | 'danger'
  icon: IconName
  title: string
  tag?: string
  description?: string
}>(), { tone: 'neutral' })

const styles = {
  brand: { edge: 'border-l-brand-500', bg: 'bg-gradient-to-r from-surface to-brand-50', border: 'border-brand-200/70', tile: 'brand', tag: 'brand' },
  warning: { edge: 'border-l-warning-600', bg: 'bg-surface', border: 'border-line', tile: 'warning', tag: 'warning' },
  neutral: { edge: 'border-l-gray-300', bg: 'bg-surface', border: 'border-line', tile: 'neutral', tag: 'neutral' },
  success: { edge: 'border-l-success-600', bg: 'bg-gradient-to-r from-surface to-success-50', border: 'border-success-500/30', tile: 'success', tag: 'success' },
  attention: { edge: 'border-l-warning-500', bg: 'bg-gradient-to-r from-surface to-warning-50', border: 'border-warning-200', tile: 'warning', tag: 'warning' },
  danger: { edge: 'border-l-danger-600', bg: 'bg-gradient-to-r from-surface to-danger-50', border: 'border-danger-200', tile: 'danger', tag: 'danger' },
} as const
const style = computed(() => styles[props.tone])
</script>

<template>
  <article class="flex flex-wrap items-center gap-4 rounded-xl border border-l-4 p-5" :class="[style.edge, style.bg, style.border]">
    <IconTile :icon="icon" :tone="style.tile" size="lg" />
    <div class="min-w-64 flex-1">
      <h3 class="flex flex-wrap items-center gap-2 text-[15px] font-semibold text-ink">
        {{ title }}
        <Badge v-if="tag" :variant="style.tag">{{ tag }}</Badge>
      </h3>
      <p v-if="description || $slots.default" class="mt-1 max-w-2xl text-sm leading-[22px] text-ink-2"><slot>{{ description }}</slot></p>
    </div>
    <div v-if="$slots.actions" class="flex flex-wrap items-center gap-2"><slot name="actions" /></div>
  </article>
</template>
