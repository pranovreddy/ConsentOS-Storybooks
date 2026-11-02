<script setup lang="ts">
withDefaults(defineProps<{
  value: number
  max?: number
  tone?: 'brand' | 'gradient' | 'success' | 'warning' | 'danger' | 'muted'
  size?: 'xs' | 'sm' | 'md'
  label?: string
}>(), { max: 100, tone: 'brand', size: 'sm', label: 'Progress' })

const tones = {
  brand: 'bg-brand-600',
  gradient: 'bg-gradient-to-r from-brand-300 to-brand-600',
  success: 'bg-success-600',
  warning: 'bg-warning-600',
  danger: 'bg-danger-600',
  muted: 'bg-gray-300',
}
const sizes = { xs: 'h-1', sm: 'h-1.5', md: 'h-2.5' }
</script>

<template>
  <div role="progressbar" :aria-label="label" :aria-valuenow="value" aria-valuemin="0" :aria-valuemax="max" class="w-full overflow-hidden rounded-full bg-gray-200/80" :class="sizes[size]">
    <div class="h-full rounded-full transition-[width] duration-300" :class="tones[tone]" :style="{ width: `${Math.min((value / max) * 100, 100)}%` }" />
  </div>
</template>
