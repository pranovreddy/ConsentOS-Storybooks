<script setup lang="ts">
import { computed } from 'vue'

/** Column chart for category comparisons such as By Industry and Top 10 Enterprises. */
const props = withDefaults(defineProps<{ items: { label: string; value: number; display?: string }[]; height?: number }>(), { height: 160 })
const max = computed(() => Math.max(...props.items.map((i) => i.value), 1))
</script>

<template>
  <div class="flex items-end gap-2" :style="{ height: `${height + 36}px` }" role="img" :aria-label="items.map((i) => `${i.label} ${i.display ?? i.value}`).join(', ')">
    <div v-for="item in items" :key="item.label" class="flex min-w-0 flex-1 flex-col items-center gap-1.5">
      <span class="text-[11px] font-medium text-ink tnum">{{ item.display ?? item.value }}</span>
      <div class="w-full max-w-11 rounded-t-xs bg-brand-500 transition-colors hover:bg-brand-700" :style="{ height: `${(item.value / max) * height}px` }" />
      <span class="w-full truncate text-center text-[11px] text-ink-3" :title="item.label">{{ item.label }}</span>
    </div>
  </div>
</template>
