<script setup lang="ts">
import { computed } from 'vue'
import IconButton from '../actions/IconButton.vue'
import SelectField from '../forms/SelectField.vue'

/** `compact` is the "1-5 of 24" pager used inside charts; the default suits full tables. */
const props = withDefaults(defineProps<{ total: number; compact?: boolean; pageSizes?: number[] }>(), {})
const page = defineModel<number>({ default: 1 })
const pageSize = defineModel<number>('pageSize', { default: 10 })
const pages = computed(() => Math.max(Math.ceil(props.total / pageSize.value), 1))
const from = computed(() => (props.total ? (page.value - 1) * pageSize.value + 1 : 0))
const to = computed(() => Math.min(page.value * pageSize.value, props.total))
const windowed = computed<(number | '…')[]>(() => {
  const n = pages.value
  if (n <= 7) return Array.from({ length: n }, (_, i) => i + 1)
  const p = page.value
  if (p <= 3) return [1, 2, 3, 4, '…', n]
  if (p >= n - 2) return [1, '…', n - 3, n - 2, n - 1, n]
  return [1, '…', p - 1, p, p + 1, '…', n]
})
</script>

<template>
  <nav class="flex items-center justify-between gap-4" aria-label="Pagination">
    <div class="flex items-center gap-3">
      <template v-if="pageSizes">
        <span class="text-xs text-ink-2">Rows per page</span>
        <div class="w-20"><SelectField :model-value="String(pageSize)" size="sm" aria-label="Rows per page" :options="pageSizes.map((n) => ({ label: String(n), value: String(n) }))" @update:model-value="pageSize = Number($event); page = 1" /></div>
      </template>
      <span class="font-mono text-xs text-ink-2 tnum" aria-live="polite">{{ from }}-{{ to }} of {{ total.toLocaleString('en-IN') }}</span>
    </div>
    <div class="flex items-center gap-1">
      <IconButton icon="chevron-left" label="Previous page" variant="outline" size="sm" :disabled="page <= 1" @click="page--" />
      <template v-if="!compact">
        <template v-for="(p, i) in windowed" :key="i">
          <span v-if="p === '…'" class="px-1.5 text-[13px] text-ink-3">…</span>
          <button v-else type="button" :aria-current="p === page ? 'page' : undefined" class="size-7 rounded-sm text-[13px] tnum" :class="p === page ? 'bg-navy-900 font-medium text-white' : 'text-gray-700 hover:bg-gray-100'" @click="page = p">{{ p }}</button>
        </template>
      </template>
      <IconButton icon="chevron-right" label="Next page" variant="outline" size="sm" :disabled="page >= pages" @click="page++" />
    </div>
  </nav>
</template>
