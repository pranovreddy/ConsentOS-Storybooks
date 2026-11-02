<script setup lang="ts">
import { computed } from 'vue'

/** `rank` adds numbered circles for leaderboards; the default suits reason breakdowns. */
const props = defineProps<{ items: { label: string; value: number; display?: string }[]; rank?: boolean; max?: number }>()
const top = computed(() => props.max ?? Math.max(...props.items.map((i) => i.value)))
// Lighter bars for lower ranks.
const shade = (i: number) => ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe'][Math.min(i, 4)]
</script>

<template>
  <ol class="flex flex-col gap-4">
    <li v-for="(item, i) in items" :key="item.label" class="flex items-start gap-2.5">
      <span v-if="rank" class="mt-px flex size-[22px] shrink-0 items-center justify-center rounded-full bg-brand-50 text-[11px] font-semibold text-brand-700">{{ i + 1 }}</span>
      <div class="min-w-0 flex-1">
        <div class="mb-1.5 flex justify-between gap-2 text-sm">
          <span :class="rank ? 'font-medium text-ink' : 'text-gray-700'">{{ item.label }}</span>
          <span class="font-semibold text-ink tnum" :class="rank && 'font-mono text-[13px]'">{{ item.display ?? item.value }}</span>
        </div>
        <div class="h-1.5 overflow-hidden rounded-full bg-gray-100">
          <div class="h-full rounded-full" :style="{ width: `${(item.value / top) * 100}%`, background: rank ? '#3b82f6' : shade(i) }" />
        </div>
      </div>
    </li>
  </ol>
</template>
