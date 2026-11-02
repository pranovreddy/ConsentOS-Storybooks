<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{ name: string; src?: string; size?: 'sm' | 'md' | 'lg'; color?: string }>(), { size: 'md', color: '#2563eb' })
const initials = computed(() => props.name.split(/\s+/).map((w) => w[0]).slice(0, 2).join('').toUpperCase())
const sizes = { sm: 'size-7 text-[11px]', md: 'size-9 text-[13px]', lg: 'size-12 text-base' }
</script>

<template>
  <span class="inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full font-semibold text-white" :class="sizes[size]" :style="{ background: color }">
    <img v-if="src" :src="src" :alt="name" class="size-full object-cover" />
    <span v-else :aria-label="name">{{ initials }}</span>
  </span>
</template>
