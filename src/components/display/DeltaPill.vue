<script setup lang="ts">
/** Change indicator. `tone` carries meaning, not direction: a rise in revocations goes up but reads as bad. */
withDefaults(defineProps<{ direction?: 'up' | 'down'; tone?: 'good' | 'bad' | 'neutral' }>(), { direction: 'up', tone: 'good' })
const tones = { good: 'bg-success-100 text-success-700', bad: 'bg-danger-100 text-danger-700', neutral: 'bg-gray-100 text-gray-600' }
</script>

<template>
  <span class="inline-flex items-center gap-1 rounded-xs px-2 py-0.5 text-xs font-medium" :class="tones[tone]">
    <svg width="9" height="8" viewBox="0 0 9 8" aria-hidden="true" :class="direction === 'down' && 'rotate-180'"><path d="M4.5 0 9 8H0z" fill="currentColor" /></svg>
    <span class="sr-only">{{ direction === 'up' ? 'Up' : 'Down' }}</span>
    <slot />
  </span>
</template>
