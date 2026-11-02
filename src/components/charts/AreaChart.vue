<script setup lang="ts">
import { computed, ref, useId } from 'vue'

const props = withDefaults(defineProps<{
  data: number[]
  xLabels?: string[]
  ySuffix?: string
  yTicks?: number
  height?: number
  label?: string
}>(), { ySuffix: '%', yTicks: 5, height: 220, label: 'Trend over time', xLabels: () => [] })

const W = 640
const pad = { t: 10, r: 8, b: 26, l: 40 }
const gid = useId()
const hover = ref<number | null>(null)
const range = computed(() => {
  const lo = Math.min(...props.data)
  const hi = Math.max(...props.data)
  const step = Math.max(Math.ceil((hi - lo) / (props.yTicks - 1) / 5) * 5, 1)
  const min = Math.floor(lo / step) * step
  return { min, max: min + step * (props.yTicks - 1), step }
})
const x = (i: number) => pad.l + (i / (props.data.length - 1)) * (W - pad.l - pad.r)
const y = (v: number) => pad.t + (1 - (v - range.value.min) / (range.value.max - range.value.min)) * (props.height - pad.t - pad.b)
const line = computed(() => props.data.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' '))
const area = computed(() => `${line.value} L${x(props.data.length - 1)} ${props.height - pad.b} L${x(0)} ${props.height - pad.b} Z`)
const ticks = computed(() => Array.from({ length: props.yTicks }, (_, i) => range.value.min + i * range.value.step))
const xTicks = computed(() => props.xLabels.map((label, i) => ({ label, at: x((i / Math.max(props.xLabels.length - 1, 1)) * (props.data.length - 1)) })))
function onMove(e: MouseEvent) {
  const box = (e.currentTarget as SVGElement).getBoundingClientRect()
  const px = ((e.clientX - box.left) / box.width) * W
  hover.value = Math.max(0, Math.min(props.data.length - 1, Math.round(((px - pad.l) / (W - pad.l - pad.r)) * (props.data.length - 1))))
}
</script>

<template>
  <svg :viewBox="`0 0 ${W} ${height}`" class="block w-full" role="img" :aria-label="label" @mousemove="onMove" @mouseleave="hover = null">
    <defs>
      <linearGradient :id="gid" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#2563eb" stop-opacity=".16" /><stop offset="1" stop-color="#2563eb" stop-opacity="0" />
      </linearGradient>
    </defs>
    <g v-for="tick in ticks" :key="tick">
      <line :x1="pad.l" :x2="W - pad.r" :y1="y(tick)" :y2="y(tick)" stroke="#e6eaf2" stroke-dasharray="3 4" />
      <text :x="pad.l - 8" :y="y(tick) + 4" text-anchor="end" font-size="11" fill="#6b7280">{{ tick }}{{ ySuffix }}</text>
    </g>
    <text v-for="tick in xTicks" :key="tick.label" :x="tick.at" :y="height - 6" text-anchor="middle" font-size="11" fill="#6b7280">{{ tick.label }}</text>
    <path :d="area" :fill="`url(#${gid})`" />
    <path :d="line" fill="none" stroke="#2563eb" stroke-width="2" stroke-linejoin="round" />
    <g v-if="hover !== null">
      <line :x1="x(hover)" :x2="x(hover)" :y1="pad.t" :y2="height - pad.b" stroke="#0b1a33" stroke-opacity=".25" />
      <circle :cx="x(hover)" :cy="y(data[hover])" r="4" fill="#2563eb" stroke="#fff" stroke-width="2" />
      <text :x="x(hover)" :y="Math.max(y(data[hover]) - 10, 12)" text-anchor="middle" font-size="12" font-weight="600" fill="#0b1a33">{{ data[hover] }}{{ ySuffix }}</text>
    </g>
  </svg>
</template>
