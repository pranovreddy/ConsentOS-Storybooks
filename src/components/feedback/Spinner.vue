<script setup lang="ts">
withDefaults(defineProps<{ size?: number; label?: string }>(), { size: 24, label: 'Loading' })
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" class="animate-spin" role="status" :aria-label="label">
    <circle cx="12" cy="12" r="9.5" stroke="#dbeafe" stroke-width="2.5" />
    <path d="M21.5 12A9.5 9.5 0 0 0 12 2.5" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" />
  </svg>
</template>
