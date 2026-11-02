<script setup lang="ts">
import { computed } from 'vue'
import Hint from './Hint.vue'

/** Shortens a count to the Indian system (Cr, L, k), and shows the exact number in a tooltip. */
const props = defineProps<{ value: number; suffix?: string }>()
const compact = computed(() => {
  const n = props.value
  const trim = (x: number) => x.toFixed(2).replace(/\.?0+$/, '')
  if (n >= 1e7) return `${trim(n / 1e7)} Cr`
  if (n >= 1e5) return `${trim(n / 1e5)} L`
  if (n >= 1e3) return `${trim(n / 1e3)}k`
  return String(n)
})
const exact = computed(() => props.value.toLocaleString('en-IN') + (props.suffix ? ` ${props.suffix}` : ''))
</script>

<template>
  <Hint :text="exact"><span class="font-medium text-ink tnum" tabindex="0">{{ compact }}</span></Hint>
</template>
