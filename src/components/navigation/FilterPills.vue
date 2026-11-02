<script setup lang="ts">
/** Single-select segmented filter, with no panel (for example DND / Non-DND / All, or All / Opted-in / Opted-out). */
withDefaults(defineProps<{ options: { label: string; value: string; count?: number }[]; size?: 'sm' | 'md'; tone?: 'admin' | 'app' | 'dark'; ariaLabel?: string }>(), { size: 'sm', tone: 'admin', ariaLabel: 'Filter' })
const model = defineModel<string>()
</script>

<template>
  <div class="flex flex-wrap gap-2" role="group" :aria-label="ariaLabel">
    <button
      v-for="option in options"
      :key="option.value"
      type="button"
      :aria-pressed="model === option.value"
      class="rounded-full border font-medium whitespace-nowrap transition-colors"
      :class="[
        size === 'sm' ? 'h-8 px-3 text-[13px]' : 'h-10 px-4 text-sm',
        model === option.value ? (tone === 'app' ? 'border-app-600 bg-app-600 text-white' : tone === 'dark' ? 'border-navy-900 bg-navy-900 text-white' : 'border-brand-600 bg-brand-600 text-white') : 'border-line bg-surface text-gray-600 hover:bg-gray-50',
      ]"
      @click="model = option.value"
    >
      {{ option.label }}<span v-if="option.count !== undefined" class="tnum">{{ tone === 'dark' ? ` · ${option.count.toLocaleString('en-IN')}` : ` (${option.count})` }}</span>
    </button>
  </div>
</template>
