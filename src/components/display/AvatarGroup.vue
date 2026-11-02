<script setup lang="ts">
import Avatar from './Avatar.vue'

withDefaults(defineProps<{ names: string[]; max?: number }>(), { max: 3 })
</script>

<template>
  <span class="inline-flex items-center -space-x-2">
    <Avatar v-for="name in names.slice(0, max)" :key="name" :name="name" size="sm" class="ring-2 ring-white" />
    <span v-if="names.length > max" class="z-10 inline-flex size-7 items-center justify-center rounded-full bg-gray-100 text-[11px] font-medium text-gray-600 ring-2 ring-white">+{{ names.length - max }}</span>
  </span>
</template>
