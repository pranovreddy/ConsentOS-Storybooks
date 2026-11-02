<script setup lang="ts">
import Icon from '../display/Icon.vue'

const props = withDefaults(defineProps<{ min?: number; max?: number; step?: number; disabled?: boolean; ariaLabel?: string }>(), { step: 1, ariaLabel: 'Quantity' })
const model = defineModel<number>({ default: 0 })
function clamp(value: number) {
  return Math.min(props.max ?? Infinity, Math.max(props.min ?? -Infinity, value))
}
function onInput(e: Event) {
  const value = Number((e.target as HTMLInputElement).value)
  if (!Number.isNaN(value)) model.value = clamp(value)
}
</script>

<template>
  <div class="inline-flex h-[var(--input-height-md)] items-center overflow-hidden rounded-md border border-line bg-surface focus-within:border-brand-500 focus-within:ring-3 focus-within:ring-brand-100" :class="disabled && 'opacity-60'">
    <button type="button" class="flex h-full w-9 items-center justify-center text-ink-2 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40" aria-label="Decrease" :disabled="disabled || (min !== undefined && model <= min)" @click="model = clamp(model - step)"><span class="block h-0.5 w-2.5 rounded bg-current" /></button>
    <input :value="model" inputmode="numeric" :disabled="disabled" :aria-label="ariaLabel" class="h-full w-14 border-x border-line bg-transparent text-center font-mono text-[13px] text-ink outline-none" @change="onInput" />
    <button type="button" class="flex h-full w-9 items-center justify-center text-ink-2 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40" aria-label="Increase" :disabled="disabled || (max !== undefined && model >= max)" @click="model = clamp(model + step)"><Icon name="plus" :size="14" /></button>
  </div>
</template>
