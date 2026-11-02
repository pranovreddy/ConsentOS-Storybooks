<script setup lang="ts">
import Icon from '../display/Icon.vue'
import type { IconName } from '@/icons'

withDefaults(defineProps<{ href?: string; icon?: IconName; arrow?: boolean; size?: 'sm' | 'md' }>(), { href: '#', arrow: true, size: 'md' })
</script>

<template>
  <a :href="href" class="inline-flex items-center gap-1 font-medium text-brand-600 hover:underline underline-offset-2" :class="size === 'sm' ? 'text-[13px]' : 'text-sm'">
    <Icon v-if="icon" :name="icon" :size="14" />
    <slot />
    <Icon v-if="arrow" name="arrow-right" :size="14" />
  </a>
</template>
