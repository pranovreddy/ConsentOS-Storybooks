<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{ data: number[]; tone?: 'brand' | 'success' | 'danger'; height?: number; label?: string }>(), { tone: 'brand', height: 36, label: 'Trend' })
const colors = { brand: '#2563eb', success: '#15814c', danger: '#dc2626' }
const W = 200
const points = computed(() => {
  const min = Math.min(...props.data)
  const span = Math.max(...props.data) - min || 1
  return props.data.map((v, i) => [(i / (props.data.length - 1)) * W, props.height - 3 - ((v - min) / span) * (props.height - 8)])
})
const line = computed(() => points.value.map((p) => p.join(',')).join(' '))
const area = computed(() => `0,${props.height} ${line.value} ${W},${props.height}`)
</script>

<template>
  <svg :viewBox="`0 0 ${W} ${height}`" preserveAspectRatio="none" class="block w-full" :style="{ height: `${height}px` }" role="img" :aria-label="label">
    <polygon :points="area" :fill="colors[tone]" fill-opacity="0.12" />
    <polyline :points="line" fill="none" :stroke="colors[tone]" stroke-width="2" vector-effect="non-scaling-stroke" stroke-linejoin="round" />
  </svg>
</template>
