<script setup lang="ts">
/** Pulsing dot and label for a process that's running now. The pulse stops for people who prefer reduced motion. */
withDefaults(defineProps<{ state?: 'live' | 'paused' | 'closed' }>(), { state: 'live' })
</script>

<template>
  <span class="inline-flex items-center gap-1.5 text-xs font-medium" :class="state === 'live' ? 'text-success-600' : state === 'paused' ? 'text-warning-700' : 'text-ink-2'">
    <span class="relative flex size-2">
      <span v-if="state === 'live'" class="absolute inset-0 animate-ping rounded-full bg-success-500 opacity-60 motion-reduce:animate-none" />
      <span class="relative size-2 rounded-full" :class="state === 'live' ? 'bg-success-600' : state === 'paused' ? 'bg-warning-500' : 'bg-gray-400'" />
    </span>
    <slot>{{ state === 'live' ? 'Live' : state === 'paused' ? 'Paused' : 'Closed' }}</slot>
  </span>
</template>
