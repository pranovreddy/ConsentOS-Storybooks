<script setup lang="ts">
import { computed } from 'vue'

/** Half-donut for status totals. Pair with ChartLegend for the values. */
const props = withDefaults(defineProps<{ segments: { label: string; value: number; color: string }[]; center?: string; caption?: string; width?: number; thickness?: number }>(), { width: 280, thickness: 38 })
const arcs = computed(() => {
  const total = props.segments.reduce((sum, s) => sum + s.value, 0) || 1
  const r = (props.width - props.thickness) / 2
  const len = Math.PI * r
  const gap = props.segments.length > 1 ? 1.5 : 0
  let done = 0
  return props.segments.map((s) => {
    const part = (s.value / total) * len
    const arc = { ...s, r, dash: `${Math.max(part - gap, 0.5)} ${2 * len}`, offset: -done }
    done += part
    return arc
  })
})
const h = computed(() => props.width / 2 + 2)
const summary = computed(() => props.segments.map((s) => `${s.label}: ${s.value}`).join(', '))
</script>

<template>
  <div class="relative mx-auto" :style="{ width: `${width}px`, maxWidth: '100%' }">
    <svg :viewBox="`0 0 ${width} ${h}`" class="block w-full" role="img" :aria-label="summary">
      <path
        v-for="arc in arcs"
        :key="arc.label"
        :d="`M ${thickness / 2} ${width / 2} A ${arc.r} ${arc.r} 0 0 1 ${width - thickness / 2} ${width / 2}`"
        fill="none"
        :stroke="arc.color"
        :stroke-width="thickness"
        :stroke-dasharray="arc.dash"
        :stroke-dashoffset="arc.offset"
      />
    </svg>
    <div v-if="center" class="absolute inset-x-0 bottom-0 text-center">
      <p class="text-[28px] leading-8 font-semibold tracking-tight text-ink tnum">{{ center }}</p>
      <p v-if="caption" class="eyebrow">{{ caption }}</p>
    </div>
  </div>
</template>
