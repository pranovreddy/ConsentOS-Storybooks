<script setup lang="ts">
import Icon from '../display/Icon.vue'

/** Search and filter row, with active filter chips and clear-all below it. Dropdowns go in the slot. */
const chips = defineModel<{ key: string; label: string }[]>('chips', { default: () => [] })
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="flex flex-wrap items-center gap-2"><slot /></div>
    <div v-if="chips.length" class="flex flex-wrap items-center gap-2">
      <span v-for="chip in chips" :key="chip.key" class="inline-flex items-center gap-1 rounded-full bg-brand-50 py-1 pr-1.5 pl-2.5 text-xs font-medium text-brand-700">
        {{ chip.label }}
        <button type="button" :aria-label="`Remove filter ${chip.label}`" class="rounded-full hover:bg-brand-100" @click="chips = chips.filter((c) => c.key !== chip.key)"><Icon name="x" :size="12" /></button>
      </span>
      <button type="button" class="text-xs font-medium text-ink-2 hover:text-ink hover:underline" @click="chips = []">Clear all</button>
    </div>
  </div>
</template>
