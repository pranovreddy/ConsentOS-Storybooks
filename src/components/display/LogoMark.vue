<script setup lang="ts">
/** The ConsentOS aperture mark, with optional wordmark text. `tile` is the round AI and app avatar treatment. */
withDefaults(defineProps<{ size?: number; wordmark?: string; tile?: boolean; onDark?: boolean }>(), { size: 24 })
const petals = [
  { d: 'M21 5L29 11L21 17V5Z', o: 0.95 },
  { d: 'M35 13V23L27 20L35 13Z', o: 0.85 },
  { d: 'M35 29L27 34V25L35 29Z', o: 0.75 },
  { d: 'M21 37L13 31L21 25V37Z', o: 0.95 },
  { d: 'M7 29V19L15 22L7 29Z', o: 0.85 },
  { d: 'M7 13L15 8V17L7 13Z', o: 0.75 },
]
</script>

<template>
  <span class="inline-flex items-center gap-2">
    <span
      class="inline-flex shrink-0 items-center justify-center"
      :class="tile ? 'rounded-full bg-brand-600 shadow-primary' : ''"
      :style="tile ? { width: `${size * 1.6}px`, height: `${size * 1.6}px` } : {}"
    >
      <svg :width="size" :height="size" viewBox="0 0 42 42" role="img" aria-label="ConsentOS aperture mark">
        <path v-for="p in petals" :key="p.d" :d="p.d" :opacity="p.o" :fill="tile || onDark ? '#ffffff' : '#3b5bff'" />
      </svg>
    </span>
    <span v-if="wordmark" class="text-[17px] font-semibold tracking-tight" :class="onDark ? 'text-white' : 'text-ink'">{{ wordmark }}</span>
  </span>
</template>
