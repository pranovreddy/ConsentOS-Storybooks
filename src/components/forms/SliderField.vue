<script setup lang="ts">
import { computed } from 'vue'
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from 'reka-ui'

const props = withDefaults(defineProps<{ min?: number; max?: number; step?: number; label: string; format?: (v: number) => string }>(), { min: 0, max: 100, step: 1 })
const model = defineModel<number>({ default: 50 })
const range = computed({ get: () => [model.value], set: (v: number[]) => { model.value = v[0] } })
const shown = computed(() => (props.format ? props.format(model.value) : String(model.value)))
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex justify-between text-sm"><span class="text-ink-2">{{ label }}</span><span class="font-mono font-medium text-ink">{{ shown }}</span></div>
    <SliderRoot v-model="range" :min="min" :max="max" :step="step" class="relative flex h-5 w-full touch-none items-center select-none">
      <SliderTrack class="relative h-1.5 grow rounded-full bg-gray-200"><SliderRange class="absolute h-full rounded-full bg-brand-600" /></SliderTrack>
      <SliderThumb :aria-label="label" class="block size-5 rounded-full border-2 border-brand-600 bg-white shadow-xs" />
    </SliderRoot>
  </div>
</template>
