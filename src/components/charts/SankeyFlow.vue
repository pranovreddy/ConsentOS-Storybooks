<script setup lang="ts">
import { computed } from 'vue'

/**
 * Column-based flow chart. Pixel heights are hand-assigned so small groups stay readable,
 * which is why the footnote says proportions are adjusted while counts are exact.
 */
export interface FlowNode { id: string; label: string; sub?: string; value: string; x: number; y: number; h: number; color?: string; align?: 'left' | 'right' }
export interface FlowLink { from: string; to: string; fromY?: number; toY?: number; h?: number; h2?: number; color?: string }
const props = withDefaults(defineProps<{ nodes: FlowNode[]; links: FlowLink[]; width?: number; height?: number; footnote?: string }>(), { width: 1000, height: 400 })
const BAR = 14
const byId = computed(() => Object.fromEntries(props.nodes.map((n) => [n.id, n])))
const paths = computed(() =>
  props.links.map((link) => {
    const a = byId.value[link.from]
    const b = byId.value[link.to]
    const h1 = link.h ?? a.h
    const h2 = link.h2 ?? link.h ?? b.h
    const y1 = a.y + (link.fromY ?? 0)
    const y2 = b.y + (link.toY ?? 0)
    const x1 = a.x + BAR
    const x2 = b.x
    const mid = (x1 + x2) / 2
    return {
      d: `M${x1} ${y1} C${mid} ${y1} ${mid} ${y2} ${x2} ${y2} L${x2} ${y2 + h2} C${mid} ${y2 + h2} ${mid} ${y1 + h1} ${x1} ${y1 + h1} Z`,
      fill: link.color ?? '#dbeafe',
    }
  }),
)
</script>

<template>
  <figure class="m-0">
    <svg :viewBox="`0 0 ${width} ${height}`" class="block w-full" role="img" :aria-label="nodes.map((n) => `${n.label} ${n.value}`).join(', ')">
      <path v-for="(p, i) in paths" :key="i" :d="p.d" :fill="p.fill" fill-opacity=".45" />
      <g v-for="n in nodes" :key="n.id">
        <rect :x="n.x" :y="n.y" :width="BAR" :height="Math.max(n.h, 2)" rx="1" :fill="n.color ?? '#bfdbfe'" />
        <text :x="n.align === 'left' ? n.x - 10 : n.x + BAR + 10" :y="n.y + n.h / 2 - 2" :text-anchor="n.align === 'left' ? 'end' : 'start'" font-size="14" fill="#1f2937">
          {{ n.label }}<tspan v-if="n.sub" font-size="11" fill="#6b7280"> {{ n.sub }}</tspan>
        </text>
        <text :x="n.align === 'left' ? n.x - 10 : n.x + BAR + 10" :y="n.y + n.h / 2 + 16" :text-anchor="n.align === 'left' ? 'end' : 'start'" font-size="15" font-weight="500" fill="#0b1a33">{{ n.value }}</text>
      </g>
    </svg>
    <figcaption v-if="footnote" class="mt-2 text-center text-xs text-ink-3">{{ footnote }}</figcaption>
  </figure>
</template>
