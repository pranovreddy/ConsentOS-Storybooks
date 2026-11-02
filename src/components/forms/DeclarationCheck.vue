<script setup lang="ts">
import Checkbox from './Checkbox.vue'

/** Legal undertaking box. Always a deliberate opt-in, never pre-checked. */
defineProps<{ invalid?: boolean; disabled?: boolean }>()
const model = defineModel<boolean>({ default: false })
</script>

<template>
  <div class="rounded-md border p-4 transition-colors" :class="[invalid ? 'border-danger-500' : model ? 'border-brand-300 bg-brand-50' : 'border-brand-200/70 bg-surface']">
    <Checkbox v-model="model" :disabled="disabled" :invalid="invalid"><span class="text-gray-600"><slot /></span></Checkbox>
  </div>
</template>
