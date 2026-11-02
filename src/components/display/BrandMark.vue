<script setup lang="ts">
import { computed } from 'vue'

/**
 * Letter tile for an enterprise, telco or brand. `shape="circle"` is the DigiConsent wallet treatment.
 * Pass `src` for real logo art; the letter tile is the fallback when none is licensed yet.
 */
const props = withDefaults(defineProps<{
  name: string
  color?: string
  src?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  shape?: 'tile' | 'circle'
}>(), { color: '#0b1a33', size: 'md', shape: 'tile' })
const sizes = { sm: 'size-7 text-xs', md: 'size-9 text-sm', lg: 'size-11 text-base', xl: 'size-14 text-lg' }
const letter = computed(() => props.name.trim()[0]?.toUpperCase())
</script>

<template>
  <span v-if="shape === 'tile'" class="inline-flex shrink-0 items-center justify-center overflow-hidden rounded-sm font-semibold text-white" :class="sizes[size]" :style="{ background: src ? '#fff' : color }">
    <img v-if="src" :src="src" :alt="name" class="size-full object-contain" />
    <span v-else :aria-label="name">{{ letter }}</span>
  </span>
  <span v-else class="inline-flex shrink-0 items-center justify-center rounded-full border border-line bg-gray-100 p-2.5" :class="size === 'xl' ? 'size-14' : 'size-12'">
    <span class="flex size-full items-center justify-center overflow-hidden rounded-sm text-sm font-semibold text-white" :style="{ background: src ? '#fff' : color }">
      <img v-if="src" :src="src" :alt="name" class="size-full object-contain" />
      <span v-else :aria-label="name">{{ letter }}</span>
    </span>
  </span>
</template>
