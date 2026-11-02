<script setup lang="ts">
import DonutChart, { type DonutSegment } from '../charts/DonutChart.vue'
import Icon from '../display/Icon.vue'

export interface StripMetric { label: string; value: string; share?: string; caption?: string; dot?: string; downloadable?: boolean }
/** Donut plus headline counts, for the top of a results page. */
defineProps<{ segments: DonutSegment[]; center: string; caption?: string; metrics: StripMetric[] }>()
</script>

<template>
  <section class="flex flex-wrap items-center gap-x-8 gap-y-5 rounded-xl border border-line bg-surface p-6 shadow-card">
    <DonutChart :segments="segments" :center="center" :caption="caption" :size="164" :thickness="20" />
    <dl class="grid min-w-0 flex-1 grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6">
      <div v-for="(metric, i) in metrics" :key="metric.label" class="min-w-0" :class="i > 0 && 'lg:border-l lg:border-line lg:pl-6'">
        <dt class="eyebrow flex items-center gap-1.5"><span v-if="metric.dot" class="size-2 rounded-full" :style="{ background: metric.dot }" aria-hidden="true" />{{ metric.label }}</dt>
        <dd class="mt-2 flex items-baseline gap-1.5">
          <span class="text-[32px] leading-10 font-semibold tracking-tight text-ink tnum">{{ metric.value }}</span>
          <span v-if="metric.share" class="text-sm font-medium text-ink-2">{{ metric.share }}</span>
          <button v-if="metric.downloadable" type="button" class="text-ink-2 hover:text-brand-600" :aria-label="`Download ${metric.label}`"><Icon name="download" /></button>
        </dd>
        <dd v-if="metric.caption" class="mt-1 text-[13px] leading-[18px] text-ink-2">{{ metric.caption }}</dd>
      </div>
    </dl>
  </section>
</template>
