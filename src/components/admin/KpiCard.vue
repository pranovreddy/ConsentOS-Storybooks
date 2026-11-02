<script setup lang="ts">
import BigStat from '../display/BigStat.vue'
import DeltaPill from '../display/DeltaPill.vue'
import Eyebrow from '../display/Eyebrow.vue'
import IconTile from '../display/IconTile.vue'
import ProgressBar from '../display/ProgressBar.vue'
import Sparkline from '../charts/Sparkline.vue'
import Spinner from '../feedback/Spinner.vue'
import type { IconName } from '@/icons'

/** Metric card. `tone` tints the header gradient: the lead metric is brand, revocations and failures are danger. */
withDefaults(defineProps<{
  label: string
  value?: string
  unit?: string
  caption?: string
  icon?: IconName
  tone?: 'plain' | 'brand' | 'danger'
  delta?: string
  deltaTone?: 'good' | 'bad' | 'neutral'
  trend?: number[]
  trendTone?: 'brand' | 'success' | 'danger'
  progress?: number
  loading?: boolean
}>(), { tone: 'plain', deltaTone: 'good', trendTone: 'brand' })
</script>

<template>
  <article
    class="flex min-h-[208px] flex-col overflow-hidden rounded-lg border border-line p-5 shadow-card"
    :class="tone === 'brand' ? 'bg-gradient-to-b from-brand-50 to-surface to-55%' : tone === 'danger' ? 'bg-gradient-to-b from-danger-100 to-surface to-55%' : 'bg-surface'"
  >
    <div class="flex items-start justify-between gap-3">
      <Eyebrow mono :class="tone === 'brand' ? '!text-brand-700' : tone === 'danger' ? '!text-danger-600' : ''">{{ label }}</Eyebrow>
      <IconTile v-if="icon" :icon="icon" :tone="tone === 'danger' ? 'danger' : 'brand'" size="sm" class="-mt-1 -mr-1" />
    </div>
    <div v-if="loading" class="flex flex-1 flex-col items-center justify-center gap-2 text-center">
      <Spinner />
      <p class="text-sm font-semibold text-ink">Loading data</p>
    </div>
    <template v-else>
      <BigStat class="mt-2" :value="value!" :unit="unit" :tone="tone === 'brand' ? 'brand' : tone === 'danger' ? 'danger' : 'ink'" />
      <p v-if="caption" class="mt-2 text-[13px] text-ink-2">{{ caption }}</p>
      <div v-if="delta" class="mt-2"><DeltaPill :tone="deltaTone" :direction="deltaTone === 'neutral' ? 'down' : 'up'">{{ delta }}</DeltaPill></div>
      <div class="mt-auto pt-3">
        <ProgressBar v-if="progress !== undefined" :value="progress" size="md" :label="label" />
        <Sparkline v-else-if="trend" :data="trend" :tone="trendTone" :label="`${label} trend`" />
      </div>
    </template>
  </article>
</template>
