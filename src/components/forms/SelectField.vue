<script setup lang="ts">
import { SelectContent, SelectIcon, SelectItem, SelectItemIndicator, SelectItemText, SelectPortal, SelectRoot, SelectTrigger, SelectValue, SelectViewport } from 'reka-ui'
import Icon from '../display/Icon.vue'

export interface SelectOption { label: string; value: string; disabled?: boolean }
withDefaults(defineProps<{
  options: SelectOption[]
  placeholder?: string
  invalid?: boolean
  disabled?: boolean
  size?: 'sm' | 'md'
  ariaLabel?: string
}>(), { placeholder: 'Select', size: 'md' })
const model = defineModel<string>()
</script>

<template>
  <SelectRoot v-model="model" :disabled="disabled">
    <SelectTrigger
      :aria-label="ariaLabel || placeholder"
      class="flex w-full items-center justify-between gap-2 rounded-md border bg-surface px-3 text-left text-[13px] text-ink outline-none transition-shadow focus:ring-3 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-70 data-[placeholder]:text-ink-3"
      :class="[size === 'sm' ? 'h-[var(--button-height-md)]' : 'h-[var(--input-height-md)]', invalid ? 'border-danger-500 focus:ring-danger-100' : 'border-line focus:border-brand-500 focus:ring-brand-100']"
    >
      <SelectValue :placeholder="placeholder" />
      <SelectIcon><Icon name="chevron-down" class="text-ink-3" /></SelectIcon>
    </SelectTrigger>
    <SelectPortal>
      <SelectContent position="popper" :side-offset="6" class="z-50 max-h-72 w-[var(--reka-select-trigger-width)] overflow-hidden rounded-md border border-line bg-surface shadow-pop">
        <SelectViewport class="p-1">
          <SelectItem
            v-for="option in options"
            :key="option.value"
            :value="option.value"
            :disabled="option.disabled"
            class="flex cursor-pointer items-center justify-between rounded-sm px-2.5 py-2 text-sm text-gray-700 outline-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-40 data-[highlighted]:bg-brand-50 data-[state=checked]:font-medium data-[state=checked]:text-brand-600"
          >
            <SelectItemText>{{ option.label }}</SelectItemText>
            <SelectItemIndicator><Icon name="check" :size="14" /></SelectItemIndicator>
          </SelectItem>
        </SelectViewport>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
