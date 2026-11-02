<script setup lang="ts">
import BrandMark from './BrandMark.vue'

/** Top-bar context chip showing which organisation the user acts for. */
withDefaults(defineProps<{ name: string; type: string; color?: string }>(), { color: '#0b1a33' })
</script>

<template>
  <button type="button" class="flex h-11 max-w-52 items-center gap-2.5 rounded-md border border-line bg-gray-50 pr-3 pl-2 text-left hover:bg-gray-100" :aria-label="`Organisation: ${name}, ${type}`">
    <BrandMark :name="name" :color="color" size="sm" />
    <span class="min-w-0">
      <span class="block truncate text-[13px] leading-tight font-medium text-ink">{{ name }}</span>
      <span class="eyebrow block !text-[10px] !leading-3.5">{{ type }}</span>
    </span>
  </button>
</template>
