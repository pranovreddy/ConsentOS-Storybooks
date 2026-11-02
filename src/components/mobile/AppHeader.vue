<script setup lang="ts">
import IconButton from '../actions/IconButton.vue'
import BrandMark from '../display/BrandMark.vue'

/** Gradient header. Pass `brand` for a brand-detail header with back and overflow actions. */
defineProps<{ title: string; subtitle?: string; back?: boolean; search?: boolean; brand?: { name: string; color: string } }>()
const emit = defineEmits<{ back: []; search: []; more: [] }>()
</script>

<template>
  <header class="flex items-center gap-3 rounded-b-[20px] bg-gradient-to-b from-app-400 to-app-600 px-5 py-6 text-white">
    <IconButton v-if="back" icon="arrow-left" label="Back" variant="on-brand" @click="emit('back')" />
    <span v-if="brand" class="rounded-full bg-white/20 p-1"><BrandMark :name="brand.name" :color="brand.color" size="md" class="!rounded-full" /></span>
    <div class="min-w-0 flex-1">
      <h1 class="truncate font-semibold tracking-tight" :class="back ? 'text-lg leading-6' : 'text-2xl leading-8'">{{ title }}</h1>
      <p v-if="subtitle" class="truncate text-sm text-white/70">{{ subtitle }}</p>
    </div>
    <IconButton v-if="search" icon="search" label="Search" variant="on-brand" size="lg" class="!rounded-lg" @click="emit('search')" />
    <IconButton v-if="back" icon="ellipsis" label="More options" variant="on-brand" @click="emit('more')" />
  </header>
</template>
