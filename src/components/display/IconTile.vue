<script setup lang="ts">
import Icon from './Icon.vue'
import type { IconName } from '@/icons'

withDefaults(defineProps<{
  icon: IconName
  tone?: 'brand' | 'success' | 'warning' | 'danger' | 'neutral' | 'solid-success'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  round?: boolean
}>(), { tone: 'brand', size: 'md' })

const tones = {
  brand: 'bg-brand-50 text-brand-600',
  success: 'bg-success-50 text-success-600',
  warning: 'bg-warning-50 text-warning-700',
  danger: 'bg-danger-100 text-danger-600',
  neutral: 'bg-gray-100 text-gray-600',
  'solid-success': 'bg-success-500 text-white',
}
const sizes = { xs: ['size-6 rounded-[6px]', 13], sm: ['size-8 rounded-sm', 16], md: ['size-11 rounded-md', 20], lg: ['size-14 rounded-lg', 26] } as const
</script>

<template>
  <span class="inline-flex shrink-0 items-center justify-center" :class="[tones[tone], sizes[size][0], round && '!rounded-full']">
    <Icon :name="icon" :size="sizes[size][1]" />
  </span>
</template>
