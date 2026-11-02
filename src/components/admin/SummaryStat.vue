<script setup lang="ts">
/** Compact stat tile for list pages: number, label, and the names behind the count. */
withDefaults(defineProps<{ value: string; label: string; detail?: string; tone?: 'ink' | 'danger' | 'warning' | 'success' | 'brand' }>(), { tone: 'ink' })
const tones = { ink: 'text-ink', danger: 'text-danger-600', warning: 'text-warning-700', success: 'text-success-600', brand: 'text-brand-600' }
</script>

<template>
  <article class="rounded-lg border border-line bg-surface p-4 shadow-card">
    <p class="text-[28px] leading-9 font-semibold tracking-tight tnum" :class="tones[tone]">{{ value }}</p>
    <p class="text-sm font-medium text-ink">{{ label }}</p>
    <p v-if="detail" class="mt-1 text-[13px] text-ink-3">{{ detail }}</p>
  </article>
</template>
