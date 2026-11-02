<script setup lang="ts">
import Icon from '../display/Icon.vue'
import type { IconName } from '@/icons'

withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'danger-soft' | 'warning' | 'on-dark'
  size?: 'sm' | 'md' | 'lg'
  icon?: IconName
  iconRight?: IconName
  loading?: boolean
  disabled?: boolean
  block?: boolean
  type?: 'button' | 'submit' | 'reset'
}>(), { variant: 'primary', size: 'md', type: 'button' })

const variants = {
  primary: 'bg-brand-600 text-white shadow-primary hover:bg-brand-700',
  secondary: 'border border-line bg-surface text-gray-700 shadow-xs hover:bg-gray-50 hover:border-line-strong',
  ghost: 'text-gray-700 hover:bg-gray-100',
  danger: 'bg-danger-600 text-white shadow-xs hover:bg-danger-700',
  'danger-soft': 'border border-danger-200 bg-danger-50 text-danger-700 hover:bg-danger-100',
  warning: 'border border-warning-500/70 bg-surface text-warning-700 hover:bg-warning-50',
  'on-dark': 'text-white/85 hover:bg-white/10 hover:text-white',
}
const sizes = { sm: 'h-[var(--button-height-sm)] gap-1.5 rounded-md px-3 text-xs', md: 'h-[var(--button-height-md)] gap-2 rounded-md px-4 text-[13px]', lg: 'h-[var(--button-height-lg)] gap-2 rounded-md px-5 text-sm' }
</script>

<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :aria-busy="loading || undefined"
    class="inline-flex items-center justify-center font-medium whitespace-nowrap transition-colors duration-150 disabled:cursor-not-allowed"
    :class="[
      sizes[size],
      block && 'w-full',
      disabled && variant === 'primary' ? 'bg-[#c5d1ea] text-white shadow-none' : variants[variant],
      disabled && variant !== 'primary' && 'opacity-50',
      loading && 'opacity-80',
    ]"
  >
    <svg v-if="loading" class="size-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-opacity=".3" stroke-width="3" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
    </svg>
    <Icon v-else-if="icon" :name="icon" />
    <slot />
    <Icon v-if="iconRight" :name="iconRight" />
  </button>
</template>
