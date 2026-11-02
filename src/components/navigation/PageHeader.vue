<script setup lang="ts">
defineProps<{ title: string; description?: string }>()
</script>

<template>
  <div class="flex flex-wrap items-start justify-between gap-4">
    <div class="min-w-0">
      <h1 class="portal-type-page-title">{{ title }}</h1>
      <p v-if="description" class="portal-type-page-subtitle mt-1.5 max-w-3xl">{{ description }}</p>
    </div>
    <div v-if="$slots.actions" class="flex items-center gap-2"><slot name="actions" /></div>
  </div>
</template>
