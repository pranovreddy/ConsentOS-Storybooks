<script setup lang="ts">
import { computed } from 'vue'

export interface DonutSegment { label: string; value: number; color: string }
const props = withDefaults(defineProps<{ segments: DonutSegment[]; center?: string; caption?: string; size?: number; thickness?: number; gap?: number }>(), { size: 200, thickness: 28, gap: 1.2 })

const arcs = computed(() => {
  const total = props.segments.reduce((sum, s) => sum + s.value, 0) || 1
  const r = (props.size - props.thickness) / 2
  const c = 2 * Math.PI * r
  let offset = 0
  return props.segments.map((s) => {
    const share = s.value / total
    const gap = props.segments.length > 1 ? (props.gap / 100) * c : 0
    const arc = { ...s, r, dash: `${Math.max(share * c - gap, 0.5)} ${c}`, offset: -offset * c - gap / 2 }
    offset += share
    return arc
  })
})
const summary = computed(() => props.segments.map((s) => `${s.label}: ${s.value}`).join(', '))
</script>

<template>
  <div class="relative inline-block shrink-0" :style="{ width: `${size}px`, height: `${size}px` }">
    <svg :width="size" :height="size" :viewBox="`0 0 ${size} ${size}`" role="img" :aria-label="summary" class="-rotate-90">
      <circle v-for="arc in arcs" :key="arc.label" :cx="size / 2" :cy="size / 2" :r="arc.r" fill="none" :stroke="arc.color" :stroke-width="thickness" :stroke-dasharray="arc.dash" :stroke-dashoffset="arc.offset" />
    </svg>
    <div v-if="center" class="absolute inset-0 flex flex-col items-center justify-center text-center">
      <span class="font-semibold tracking-tight text-ink tnum" :style="{ fontSize: `${Math.max(size * 0.12, 15)}px` }">{{ center }}</span>
      <span v-if="caption" class="text-xs text-ink-3">{{ caption }}</span>
    </div>
  </div>
</template>
