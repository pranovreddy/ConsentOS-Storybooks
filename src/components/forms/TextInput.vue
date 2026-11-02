<script setup lang="ts">
import Icon from '../display/Icon.vue'
import type { IconName } from '@/icons'

withDefaults(defineProps<{
  placeholder?: string
  type?: string
  icon?: IconName
  prefix?: string
  suffix?: string
  mono?: boolean
  invalid?: boolean
  disabled?: boolean
  readonly?: boolean
  id?: string
  ariaLabel?: string
}>(), { type: 'text' })
const model = defineModel<string>()
</script>

<template>
  <div
    class="flex h-[var(--input-height-md)] items-center gap-2 rounded-md border bg-surface px-3 transition-shadow focus-within:ring-3"
    :class="[
      invalid ? 'border-danger-500 focus-within:ring-danger-100' : 'border-line focus-within:border-brand-500 focus-within:ring-brand-100',
      disabled && 'cursor-not-allowed bg-gray-100 opacity-70',
      readonly && 'bg-gray-50',
    ]"
  >
    <Icon v-if="icon" :name="icon" class="text-ink-3" />
    <span v-if="prefix" class="text-sm text-ink-3" :class="mono && 'font-mono'">{{ prefix }}</span>
    <input
      :id="id"
      v-model="model"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :aria-invalid="invalid || undefined"
      :aria-label="ariaLabel"
      class="h-full w-full min-w-0 bg-transparent text-[13px] text-ink outline-none placeholder:text-ink-4 disabled:cursor-not-allowed"
      :class="mono && 'font-mono'"
    />
    <span v-if="suffix" class="text-[13px] text-ink-3">{{ suffix }}</span>
    <slot name="end" />
  </div>
</template>
