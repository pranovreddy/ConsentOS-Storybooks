<script setup lang="ts">
import { RadioGroupIndicator, RadioGroupItem, RadioGroupRoot } from 'reka-ui'

export interface RadioOption { label: string; value: string; description?: string; disabled?: boolean }
withDefaults(defineProps<{ options: RadioOption[]; orientation?: 'vertical' | 'horizontal'; card?: boolean; ariaLabel?: string }>(), { orientation: 'vertical' })
const model = defineModel<string>()
</script>

<template>
  <RadioGroupRoot v-model="model" :aria-label="ariaLabel" class="flex gap-3" :class="orientation === 'vertical' ? 'flex-col' : 'flex-row flex-wrap'">
    <label
      v-for="option in options"
      :key="option.value"
      class="flex items-start gap-2.5"
      :class="[option.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer', card && 'flex-1 rounded-md border bg-surface p-3.5', card && (model === option.value ? 'border-brand-500 bg-brand-50' : 'border-line')]"
    >
      <RadioGroupItem :value="option.value" :disabled="option.disabled" class="mt-0.5 flex size-[18px] shrink-0 items-center justify-center rounded-full border border-line-strong bg-surface data-[state=checked]:border-brand-600">
        <RadioGroupIndicator class="block size-2.5 rounded-full bg-brand-600" />
      </RadioGroupItem>
      <span class="text-sm leading-[22px] text-ink">
        {{ option.label }}
        <span v-if="option.description" class="block text-[13px] leading-5 text-ink-3">{{ option.description }}</span>
      </span>
    </label>
  </RadioGroupRoot>
</template>
