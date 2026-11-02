<script setup lang="ts">
import { PinInputInput, PinInputRoot } from 'reka-ui'

withDefaults(defineProps<{ length?: number; invalid?: boolean; disabled?: boolean }>(), { length: 6 })
const model = defineModel<string[]>({ default: () => [] })
const emit = defineEmits<{ complete: [code: string[]] }>()
</script>

<template>
  <PinInputRoot v-model="model" otp :disabled="disabled" class="flex gap-2" aria-label="One-time passcode" @complete="emit('complete', $event)">
    <PinInputInput
      v-for="(_, i) in length"
      :key="i"
      :index="i"
      inputmode="numeric"
      :aria-label="`Digit ${i + 1}`"
      class="size-12 rounded-md border bg-surface text-center font-mono text-lg font-semibold text-ink outline-none focus:ring-3 disabled:cursor-not-allowed disabled:bg-gray-100"
      :class="invalid ? 'border-danger-500 focus:ring-danger-100' : 'border-line-strong/70 focus:border-brand-500 focus:ring-brand-100'"
    />
  </PinInputRoot>
</template>
