<script setup lang="ts">
import LogoMark from '../display/LogoMark.vue'

/** Branded full-area loader for route changes and app start. Use Skeleton when the layout is known. */
withDefaults(defineProps<{ label?: string; fullscreen?: boolean }>(), { label: 'Loading' })
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-3 bg-surface/80" :class="fullscreen ? 'fixed inset-0 z-[var(--z-overlay)]' : 'min-h-64'" role="status" :aria-label="label">
    <LogoMark :size="36" class="animate-pulse motion-reduce:animate-none" />
    <p class="text-[13px] text-ink-2">{{ label }}</p>
  </div>
</template>
