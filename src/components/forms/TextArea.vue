<script setup lang="ts">
withDefaults(defineProps<{ placeholder?: string; rows?: number; maxLength?: number; invalid?: boolean; disabled?: boolean; ariaLabel?: string }>(), { rows: 4 })
const model = defineModel<string>({ default: '' })
</script>

<template>
  <div class="relative">
    <textarea
      v-model="model"
      :rows="rows"
      :placeholder="placeholder"
      :maxlength="maxLength"
      :disabled="disabled"
      :aria-invalid="invalid || undefined"
      :aria-label="ariaLabel"
      class="w-full resize-y rounded-md border bg-surface px-3 py-2.5 text-[13px] text-ink outline-none transition-shadow placeholder:text-ink-4 focus:ring-3 disabled:cursor-not-allowed disabled:bg-gray-100"
      :class="invalid ? 'border-danger-500 focus:ring-danger-100' : 'border-line focus:border-brand-500 focus:ring-brand-100'"
    />
    <span v-if="maxLength" class="absolute right-3 bottom-3 font-mono text-[11px] text-ink-2">{{ model.length }}/{{ maxLength }}</span>
  </div>
</template>
