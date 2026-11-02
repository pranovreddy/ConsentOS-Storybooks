<script setup lang="ts">
/** Display number with an Indian-system unit (Cr, L, Lac, %), set smaller beside it. */
withDefaults(defineProps<{ value: string; unit?: string; tone?: 'ink' | 'brand' | 'success' | 'warning' | 'danger'; size?: 'md' | 'lg' | 'xl' }>(), { tone: 'ink', size: 'lg' })
const tones = { ink: 'text-ink', brand: 'text-brand-600', success: 'text-success-600', warning: 'text-warning-700', danger: 'text-danger-600' }
const sizes = { md: 'text-2xl', lg: 'text-[32px]', xl: 'text-[40px]' }
</script>

<template>
  <span class="inline-flex items-baseline gap-1 leading-none font-semibold tracking-tight tnum" :class="tones[tone]">
    <span :class="sizes[size]">{{ value }}</span>
    <span v-if="unit" class="text-sm font-normal tracking-normal" :class="tone === 'ink' ? 'text-ink-2' : ''">{{ unit }}</span>
  </span>
</template>
