<script setup lang="ts">
import { computed, ref } from 'vue'
import { PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'reka-ui'
import Icon from '../display/Icon.vue'
import Checkbox from './Checkbox.vue'

export interface MultiOption { label: string; value: string }
const props = withDefaults(defineProps<{ options: MultiOption[]; placeholder?: string; searchable?: boolean }>(), { placeholder: 'Select', searchable: true })
const model = defineModel<string[]>({ default: () => [] })
const query = ref('')
const filtered = computed(() => props.options.filter((o) => o.label.toLowerCase().includes(query.value.toLowerCase())))
const summary = computed(() => {
  if (!model.value.length) return props.placeholder
  const first = props.options.find((o) => o.value === model.value[0])?.label
  return model.value.length === 1 ? first : `${first} +${model.value.length - 1}`
})
function toggle(value: string) {
  model.value = model.value.includes(value) ? model.value.filter((v) => v !== value) : [...model.value, value]
}
</script>

<template>
  <PopoverRoot>
    <PopoverTrigger class="flex h-[var(--input-height-md)] w-full items-center justify-between gap-2 rounded-md border border-line bg-surface px-3 text-left text-[13px] outline-none focus:border-brand-500 focus:ring-3 focus:ring-brand-100" :class="model.length ? 'text-ink' : 'text-ink-3'">
      {{ summary }}
      <Icon name="chevron-down" class="text-ink-3" />
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent :side-offset="6" align="start" class="z-50 w-[var(--reka-popover-trigger-width)] rounded-md border border-line bg-surface p-1 shadow-pop">
        <input v-if="searchable" v-model="query" placeholder="Search" aria-label="Search options" class="mb-1 h-9 w-full rounded-sm bg-gray-100 px-2.5 text-sm outline-none placeholder:text-ink-4" />
        <ul class="max-h-60 overflow-auto">
          <li v-for="option in filtered" :key="option.value" class="rounded-sm px-2.5 py-2 hover:bg-brand-50">
            <Checkbox :model-value="model.includes(option.value)" @update:model-value="toggle(option.value)">{{ option.label }}</Checkbox>
          </li>
          <li v-if="!filtered.length" class="px-2.5 py-3 text-center text-[13px] text-ink-3">No matches for "{{ query }}"</li>
        </ul>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
