<script setup lang="ts">
/** Date input using the native picker, which needs no calendar dependency and works on mobile. */
defineProps<{ min?: string; max?: string; invalid?: boolean; disabled?: boolean; ariaLabel?: string }>()
const model = defineModel<string>({ default: '' })
</script>

<template>
  <input
    v-model="model"
    type="date"
    :min="min"
    :max="max"
    :disabled="disabled"
    :aria-invalid="invalid || undefined"
    :aria-label="ariaLabel"
    class="h-[var(--input-height-md)] rounded-md border bg-surface px-3 font-mono text-xs text-ink outline-none transition-shadow focus:ring-3 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-70"
    :class="invalid ? 'border-danger-500 focus:ring-danger-100' : 'border-line focus:border-brand-500 focus:ring-brand-100'"
  />
</template>
