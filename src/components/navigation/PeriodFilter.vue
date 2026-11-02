<script setup lang="ts">
import { computed } from 'vue'
import FilterPills from './FilterPills.vue'
import DateField from '../forms/DateField.vue'

/** Preset date ranges with an optional custom range, for analytics panels and exports. */
const props = withDefaults(defineProps<{ presets?: { label: string; value: string }[] }>(), {
  presets: () => [
    { label: '7D', value: '7d' },
    { label: '30D', value: '30d' },
    { label: '90D', value: '90d' },
    { label: 'Custom', value: 'custom' },
  ],
})
const period = defineModel<string>({ default: '30d' })
const from = defineModel<string>('from', { default: '' })
const to = defineModel<string>('to', { default: '' })
const isCustom = computed(() => period.value === 'custom' && props.presets.some((p) => p.value === 'custom'))
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <FilterPills v-model="period" :options="presets" aria-label="Period" />
    <div v-if="isCustom" class="flex items-center gap-2">
      <DateField v-model="from" aria-label="From date" />
      <span class="text-xs text-ink-3">to</span>
      <DateField v-model="to" aria-label="To date" :min="from" />
    </div>
  </div>
</template>
