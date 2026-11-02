<script setup lang="ts">
import TextInput from './TextInput.vue'

/** Per-consent price, in monospaced rupees. `floor` shows the GTM floor rate rule from the rate card editor. */
const props = defineProps<{ floor?: number; disabled?: boolean; unit?: string; ariaLabel?: string }>()
const model = defineModel<string>({ default: '' })
const belowFloor = () => props.floor !== undefined && model.value !== '' && Number(model.value) < props.floor
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <TextInput v-model="model" mono prefix="₹" :suffix="unit" :disabled="disabled" :invalid="belowFloor()" :aria-label="ariaLabel || 'Rate in rupees'" />
    <p v-if="belowFloor()" role="alert" class="text-[13px] text-danger-700">Direct sender rate can't be below the GTM floor of ₹{{ floor!.toFixed(2) }}. Raise it to publish.</p>
    <p v-else-if="floor !== undefined" class="text-[13px] text-ink-3">GTM floor ₹{{ floor.toFixed(2) }}</p>
  </div>
</template>
