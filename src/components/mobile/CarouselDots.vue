<script setup lang="ts">
defineProps<{ count: number; ariaLabel?: string }>()
const model = defineModel<number>({ default: 0 })
</script>

<template>
  <div class="flex items-center justify-center gap-1.5" role="tablist" :aria-label="ariaLabel || 'Slides'">
    <button
      v-for="i in count"
      :key="i"
      type="button"
      role="tab"
      :aria-selected="model === i - 1"
      :aria-label="`Slide ${i}`"
      class="h-1.5 rounded-full transition-all"
      :class="model === i - 1 ? 'w-5 bg-app-500' : 'w-1.5 bg-gray-300'"
      @click="model = i - 1"
    />
  </div>
</template>
