<script setup lang="ts">
import Icon from '../display/Icon.vue'
import type { IconName } from '@/icons'

/** Connected single-choice control, for switching a view in place. Use FilterPills when options are filters. */
withDefaults(defineProps<{ options: { label: string; value: string; icon?: IconName }[]; ariaLabel?: string }>(), { ariaLabel: 'View' })
const model = defineModel<string>()
</script>

<template>
  <div class="inline-flex rounded-md bg-gray-200 p-0.5" role="group" :aria-label="ariaLabel">
    <button
      v-for="option in options"
      :key="option.value"
      type="button"
      :aria-pressed="model === option.value"
      class="inline-flex h-7 items-center gap-1.5 rounded-sm px-3 text-xs font-medium transition-colors"
      :class="model === option.value ? 'bg-surface text-ink shadow-xs' : 'text-ink-2 hover:text-ink'"
      @click="model = option.value"
    ><Icon v-if="option.icon" :name="option.icon" :size="14" />{{ option.label }}</button>
  </div>
</template>
