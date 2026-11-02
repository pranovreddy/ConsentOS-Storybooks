<script setup lang="ts">
import { computed, ref } from 'vue'

/**
 * Tile cartogram of Indian states. Use it where official boundary GeoJSON is not available for a
 * choropleth. Same data contract: state code to value.
 */
const props = defineProps<{ values: Record<string, number>; unit?: string }>()
const tiles: [string, string, number, number][] = [
  ['JK', 'Jammu & Kashmir', 2, 0], ['LA', 'Ladakh', 3, 0],
  ['HP', 'Himachal Pradesh', 3, 1], ['PB', 'Punjab', 2, 1], ['UK', 'Uttarakhand', 4, 1],
  ['HR', 'Haryana', 3, 2], ['DL', 'Delhi', 4, 2], ['RJ', 'Rajasthan', 2, 2], ['UP', 'Uttar Pradesh', 5, 2], ['AR', 'Arunachal Pradesh', 9, 2],
  ['GJ', 'Gujarat', 1, 3], ['MP', 'Madhya Pradesh', 3, 3], ['CG', 'Chhattisgarh', 4, 3], ['BR', 'Bihar', 6, 3], ['SK', 'Sikkim', 7, 2], ['AS', 'Assam', 8, 3], ['NL', 'Nagaland', 9, 3],
  ['MH', 'Maharashtra', 2, 4], ['JH', 'Jharkhand', 5, 3], ['WB', 'West Bengal', 6, 4], ['OD', 'Odisha', 5, 4], ['ML', 'Meghalaya', 7, 3], ['MN', 'Manipur', 8, 4], ['TR', 'Tripura', 7, 4], ['MZ', 'Mizoram', 8, 5],
  ['GA', 'Goa', 2, 5], ['KA', 'Karnataka', 3, 5], ['TG', 'Telangana', 4, 4], ['AP', 'Andhra Pradesh', 4, 5],
  ['KL', 'Kerala', 3, 6], ['TN', 'Tamil Nadu', 4, 6],
]
const CELL = 46
const hover = ref<string | null>(null)
const max = computed(() => Math.max(...Object.values(props.values), 1))
function fill(code: string) {
  const v = props.values[code]
  if (v === undefined) return '#f3f4f7'
  const t = v / max.value
  return t > 0.8 ? '#2563eb' : t > 0.5 ? '#60a5fa' : t > 0.3 ? '#93c5fd' : t > 0.12 ? '#bfdbfe' : '#dbeafe'
}
const active = computed(() => tiles.find((t) => t[0] === hover.value))
</script>

<template>
  <div class="relative w-full max-w-[460px]">
    <svg :viewBox="`0 0 ${CELL * 10} ${CELL * 7}`" class="block w-full max-w-[460px]" role="img" aria-label="India state-wise values, tile map">
      <g v-for="[code, name, c, r] in tiles" :key="code" @mouseenter="hover = code" @mouseleave="hover = null">
        <title>{{ name }}: {{ values[code] ?? 'No data' }} {{ unit }}</title>
        <rect :x="c * CELL + 2" :y="r * CELL + 2" :width="CELL - 4" :height="CELL - 4" rx="6" :fill="fill(code)" :stroke="hover === code ? '#0b1a33' : 'none'" stroke-width="1.5" />
        <text :x="c * CELL + CELL / 2" :y="r * CELL + CELL / 2 + 4" text-anchor="middle" font-size="11" font-weight="500" :fill="(values[code] ?? 0) / max > 0.5 ? '#fff' : '#374151'" pointer-events="none">{{ code }}</text>
      </g>
    </svg>
    <div class="mt-2 flex items-center justify-between gap-4">
      <div class="w-48">
        <div class="h-1.5 rounded-full bg-gradient-to-r from-brand-100 to-brand-600" />
        <div class="mt-1 flex justify-between font-mono text-[10px] text-ink-3"><span>Low</span><span>High</span></div>
      </div>
      <p class="text-xs text-ink-2" aria-live="polite"><template v-if="active">{{ active[1] }}: <b class="font-semibold text-ink">{{ values[active[0]] ?? 'No data' }} {{ unit }}</b></template></p>
    </div>
  </div>
</template>
