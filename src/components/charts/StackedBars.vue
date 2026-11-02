<script setup lang="ts">
import { computed } from 'vue'

/** Stacked columns with a value axis, for comparing lines of business. */
const props = withDefaults(defineProps<{
  categories: string[]
  series: { label: string; color: string; values: number[] }[]
  ticks?: number
  format?: (v: number) => string
  height?: number
}>(), { ticks: 5, height: 240, format: (v: number) => (v >= 1000 ? `${v / 1000}k` : String(v)) })

const W = 640
const pad = { t: 10, r: 8, b: 26, l: 44 }
const top = computed(() => {
  const max = Math.max(...props.categories.map((_, i) => props.series.reduce((sum, s) => sum + s.values[i], 0)), 1)
  const step = Math.pow(10, Math.floor(Math.log10(max)))
  return Math.ceil(max / step) * step
})
const y = (v: number) => pad.t + (1 - v / top.value) * (props.height - pad.t - pad.b)
const axis = computed(() => Array.from({ length: props.ticks + 1 }, (_, i) => (top.value / props.ticks) * i))
const band = computed(() => (W - pad.l - pad.r) / props.categories.length)
const columns = computed(() =>
  props.categories.map((label, i) => {
    let base = 0
    return {
      label,
      x: pad.l + band.value * i + band.value * 0.34,
      w: band.value * 0.32,
      parts: props.series.map((s) => {
        const part = { color: s.color, y: y(base + s.values[i]), h: y(base) - y(base + s.values[i]), label: s.label, value: s.values[i] }
        base += s.values[i]
        return part
      }),
    }
  }),
)
const summary = computed(() => props.categories.map((c, i) => `${c}: ${props.series.map((s) => `${s.label} ${props.format(s.values[i])}`).join(', ')}`).join('; '))
</script>

<template>
  <figure class="m-0">
    <ul class="mb-2 flex flex-wrap justify-end gap-x-4 gap-y-1">
      <li v-for="s in series" :key="s.label" class="flex items-center gap-1.5 text-xs text-ink-2"><span class="size-2.5 rounded-[3px]" :style="{ background: s.color }" aria-hidden="true" />{{ s.label }}</li>
    </ul>
    <svg :viewBox="`0 0 ${W} ${height}`" class="block w-full" role="img" :aria-label="summary">
      <g v-for="tick in axis" :key="tick">
        <line :x1="pad.l" :x2="W - pad.r" :y1="y(tick)" :y2="y(tick)" stroke="#e4e8f0" :stroke-dasharray="tick ? '3 4' : undefined" />
        <text :x="pad.l - 8" :y="y(tick) + 4" text-anchor="end" font-size="11" fill="#5c6781">{{ format(tick) }}</text>
      </g>
      <g v-for="col in columns" :key="col.label">
        <rect v-for="part in col.parts" :key="part.label" :x="col.x" :y="part.y" :width="col.w" :height="part.h" :fill="part.color"><title>{{ col.label }}, {{ part.label }}: {{ format(part.value) }}</title></rect>
        <text :x="col.x + col.w / 2" :y="height - 8" text-anchor="middle" font-size="11" fill="#5c6781">{{ col.label }}</text>
      </g>
    </svg>
  </figure>
</template>
