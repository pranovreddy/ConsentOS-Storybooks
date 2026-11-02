<script setup lang="ts">
import Icon from '../display/Icon.vue'
import type { IconName } from '@/icons'

withDefaults(defineProps<{
  variant?: 'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'brand' | 'role'
  size?: 'sm' | 'md'
  dot?: boolean
  icon?: IconName
  caps?: boolean
}>(), { variant: 'neutral', size: 'md' })

const tones = {
  success: 'bg-success-100 text-success-700',
  warning: 'bg-warning-50 text-warning-700',
  danger: 'bg-danger-100 text-danger-700',
  info: 'bg-info-100 text-info-700',
  neutral: 'bg-gray-100 text-gray-600',
  brand: 'bg-brand-50 text-brand-700',
  role: 'bg-[#fff4da] text-[#8a6410]',
}
const dots = { success: 'bg-success-600', warning: 'bg-warning-600', danger: 'bg-danger-600', info: 'bg-info-600', neutral: 'bg-gray-400', brand: 'bg-brand-600', role: 'bg-[#8a6410]' }
</script>

<template>
  <span
    class="inline-flex items-center gap-1 rounded-full font-medium whitespace-nowrap"
    :class="[tones[variant], size === 'sm' ? 'px-2 py-px text-[11px] leading-4' : 'px-2.5 py-0.5 text-xs leading-[18px]', caps && 'tracking-wider uppercase']"
  >
    <span v-if="dot" class="size-1.5 rounded-full" :class="dots[variant]" aria-hidden="true" />
    <Icon v-if="icon" :name="icon" :size="12" />
    <slot />
  </span>
</template>
