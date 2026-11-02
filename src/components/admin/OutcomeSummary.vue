<script setup lang="ts">
import IconTile from '../display/IconTile.vue'
import Badge from '../display/Badge.vue'
import Icon from '../display/Icon.vue'
import type { IconName } from '@/icons'

export interface OutcomeStat { label: string; value: string; caption: string; icon: IconName; tone: 'neutral' | 'success' | 'warning' }
/** Final state of a migration: headline, status, timestamp and the three counts that add up. */
withDefaults(defineProps<{ title: string; description: string; status: string; time: string; stats: OutcomeStat[]; tone?: 'success' | 'pending' }>(), { tone: 'success' })
const valueTone = { neutral: 'text-ink', success: 'text-success-600', warning: 'text-warning-700' }
</script>

<template>
  <section class="rounded-xl border bg-gradient-to-br to-surface to-40% p-6" :class="tone === 'pending' ? 'border-warning-200 from-warning-50' : 'border-success-500/40 from-success-50'">
    <header class="flex flex-wrap items-start gap-4 border-b border-line pb-5">
      <IconTile :icon="tone === 'pending' ? 'clock' : 'check'" tone="solid-success" size="lg" :class="tone === 'pending' && '!bg-warning-500'" />
      <div class="min-w-56 flex-1">
        <h2 class="text-xl font-semibold tracking-tight text-ink">{{ title }}</h2>
        <p class="mt-1 text-sm text-ink-2">{{ description }}</p>
      </div>
      <div class="text-right">
        <Badge :variant="tone === 'pending' ? 'warning' : 'success'" dot>{{ status }}</Badge>
        <p class="mt-1.5 text-[13px] text-ink-3">{{ time }}</p>
      </div>
    </header>
    <ul class="mt-5 grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-6">
      <li v-for="stat in stats" :key="stat.label" class="flex gap-3">
        <IconTile :icon="stat.icon" :tone="stat.tone" />
        <div>
          <p class="eyebrow flex items-center gap-1.5">{{ stat.label }}<button type="button" class="text-ink-4 hover:text-brand-600" :aria-label="`Download ${stat.label}`"><Icon name="download" :size="13" /></button></p>
          <p class="mt-1 text-[26px] leading-8 font-semibold tracking-tight tnum" :class="valueTone[stat.tone]">{{ stat.value }}</p>
          <p class="mt-0.5 text-[13px] text-ink-3">{{ stat.caption }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>
