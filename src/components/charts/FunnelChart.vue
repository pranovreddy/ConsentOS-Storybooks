<script setup lang="ts">
import { computed } from 'vue'

/** Stage funnel. Widths narrow in equal steps for legibility, so the printed values are the source of truth. */
const props = withDefaults(defineProps<{ stages: { label: string; value: string }[]; height?: number }>(), { height: 280 })
const W = 420
const colors = ['#1d4ed8', '#2563eb', '#3b82f6', '#2563eb', '#1e40af', '#1d4ed8']
const rows = computed(() => {
  const h = props.height / props.stages.length
  const narrow = 0.46 / props.stages.length
  return props.stages.map((s, i) => {
    const inset = (n: number) => (W * narrow * n) / 2
    const a = inset(i)
    const b = inset(i + 1)
    return { ...s, color: colors[i % colors.length], y: i * h, h, points: `${a},${i * h} ${W - a},${i * h} ${W - b},${i * h + h - 3} ${b},${i * h + h - 3}` }
  })
})
</script>

<template>
  <svg :viewBox="`0 0 ${W} ${height}`" class="mx-auto block w-full max-w-md" role="img" :aria-label="stages.map((s) => `${s.label} ${s.value}`).join(', ')">
    <g v-for="row in rows" :key="row.label">
      <polygon :points="row.points" :fill="row.color" />
      <text :x="W / 2" :y="row.y + row.h / 2 - 3" text-anchor="middle" font-size="14" font-weight="600" fill="#fff">{{ row.value }}</text>
      <text :x="W / 2" :y="row.y + row.h / 2 + 13" text-anchor="middle" font-size="10.5" fill="#fff">{{ row.label }}</text>
    </g>
  </svg>
</template>
