<script setup lang="ts">
import { ref } from 'vue'
import Icon from '../display/Icon.vue'

withDefaults(defineProps<{ placeholder?: string }>(), { placeholder: 'Type and press Enter' })
const model = defineModel<string[]>({ default: () => [] })
const draft = ref('')
function add() {
  const value = draft.value.trim()
  if (value && !model.value.includes(value)) model.value = [...model.value, value]
  draft.value = ''
}
function backspace() {
  if (!draft.value && model.value.length) model.value = model.value.slice(0, -1)
}
</script>

<template>
  <div class="flex min-h-11 flex-wrap items-center gap-1.5 rounded-md border border-line-strong/70 bg-surface px-2 py-1.5 focus-within:border-brand-500 focus-within:ring-3 focus-within:ring-brand-100">
    <span v-for="tag in model" :key="tag" class="inline-flex items-center gap-1 rounded-full bg-brand-50 py-1 pr-1.5 pl-2.5 text-[13px] font-medium text-brand-600">
      {{ tag }}
      <button type="button" :aria-label="`Remove ${tag}`" class="rounded-full hover:bg-brand-100" @click="model = model.filter((t) => t !== tag)"><Icon name="x" :size="13" /></button>
    </span>
    <input v-model="draft" :placeholder="placeholder" :aria-label="placeholder" class="h-7 min-w-32 flex-1 bg-transparent px-1 text-sm outline-none placeholder:text-ink-4" @keydown.enter.prevent="add" @keydown.backspace="backspace" />
  </div>
</template>
