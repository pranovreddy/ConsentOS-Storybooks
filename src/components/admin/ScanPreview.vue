<script setup lang="ts">
import Icon from '../display/Icon.vue'
import LogoMark from '../display/LogoMark.vue'

/** Illustrates encrypted scanning with placeholder hex. It never shows real file contents. */
withDefaults(defineProps<{ fileName: string; lines?: number }>(), { lines: 12 })
const hex = (seed: number) => Array.from({ length: 4 }, (_, j) => ((seed * 2654435761 * (j + 3)) >>> 0).toString(16).padStart(8, '0').slice(0, 8)).join('  ')
</script>

<template>
  <div class="rounded-xl border border-line bg-gray-50 p-3" aria-hidden="true">
    <div class="rounded-lg border border-line bg-surface shadow-card">
      <div class="flex items-center justify-between gap-3 border-b border-line px-3 py-2">
        <span class="flex items-center gap-1.5 truncate font-mono text-[11px] font-medium text-ink"><Icon name="lock" :size="12" class="text-success-600" />{{ fileName }}</span>
        <span class="flex items-center gap-1 rounded-full bg-success-100 px-2 py-0.5 text-[10px] font-medium text-success-700"><Icon name="lock" :size="10" />Encrypted</span>
      </div>
      <div class="relative overflow-hidden px-3 py-2 font-mono text-[10.5px] leading-[1.7] whitespace-pre text-ink-2">
        <div v-for="i in lines" :key="i" :class="i === 2 && 'bg-brand-50'">{{ hex(i) }}</div>
      </div>
      <div class="flex items-center gap-2 px-3 pb-2.5"><LogoMark tile :size="14" /><span class="text-[11px] text-ink-2">Scanning</span></div>
    </div>
  </div>
</template>
