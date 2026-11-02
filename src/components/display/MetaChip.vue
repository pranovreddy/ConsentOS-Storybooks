<script setup lang="ts">
import Icon from './Icon.vue'
import type { IconName } from '@/icons'

/** Mono context chip, such as the LOB and file name on the migration flow header. */
defineProps<{ icon?: IconName }>()
</script>

<template>
  <span class="inline-flex h-8 items-center gap-1.5 rounded-sm border border-line bg-gray-100/70 px-2.5 font-mono text-xs text-gray-700">
    <Icon v-if="icon" :name="icon" :size="14" /><slot />
  </span>
</template>
