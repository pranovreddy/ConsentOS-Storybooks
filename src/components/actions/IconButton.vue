<script setup lang="ts">
import Icon from '../display/Icon.vue'
import type { IconName } from '@/icons'

withDefaults(defineProps<{
  icon: IconName
  label: string
  variant?: 'soft' | 'outline' | 'ghost' | 'on-brand' | 'round'
  size?: 'sm' | 'md' | 'lg'
  dot?: boolean
  disabled?: boolean
}>(), { variant: 'soft', size: 'md' })

const variants = {
  soft: 'rounded-sm border border-line bg-gray-100 text-gray-600 hover:bg-gray-200',
  outline: 'rounded-sm border border-line bg-surface text-gray-600 shadow-xs hover:bg-gray-50',
  ghost: 'rounded-sm text-gray-600 hover:bg-gray-100',
  'on-brand': 'rounded-full bg-white/15 text-white hover:bg-white/25',
  round: 'rounded-full border border-line bg-surface text-ink shadow-xs hover:bg-gray-50',
}
const sizes = { sm: 'size-7', md: 'size-9', lg: 'size-11' }
</script>

<template>
  <button
    type="button"
    :aria-label="label"
    :title="label"
    :disabled="disabled"
    class="relative inline-flex items-center justify-center transition-colors disabled:cursor-not-allowed disabled:opacity-40"
    :class="[variants[variant], sizes[size]]"
  >
    <Icon :name="icon" :size="size === 'sm' ? 14 : size === 'lg' ? 20 : 16" />
    <span v-if="dot" class="absolute top-1 right-1 size-2 rounded-full bg-danger-500 ring-2 ring-white" aria-hidden="true" />
  </button>
</template>
