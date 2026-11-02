<script setup lang="ts">
import Icon from '../display/Icon.vue'

/** "Migration live in 12:12:13 days". Each unit sits in its own tile, flip-counter style. */
withDefaults(defineProps<{ label: string; parts: string[]; unit?: string }>(), {})
</script>

<template>
  <span class="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-surface py-1.5 pr-4 pl-3 text-[13px] text-ink-2 shadow-xs" role="timer">
    <Icon name="clock" /> {{ label }}
    <template v-for="(part, i) in parts" :key="i">
      <span v-if="i" class="text-ink-3">:</span>
      <span class="rounded-[5px] bg-brand-50 px-2 py-1 font-mono text-xs font-medium text-brand-600 tnum">{{ part }}</span>
    </template>
    <span v-if="unit">{{ unit }}</span>
  </span>
</template>
