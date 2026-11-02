<script setup lang="ts">
import { computed, ref } from 'vue'
import Checkbox from '../forms/Checkbox.vue'
import Icon from '../display/Icon.vue'
import Skeleton from '../feedback/Skeleton.vue'
import PanelState from '../feedback/PanelState.vue'

export interface Column { key: string; label: string; sortable?: boolean; align?: 'left' | 'right'; mono?: boolean; width?: string }
type Row = Record<string, any>

/** Row selection, sorting and expansion are built in. Each cell can be overridden with a `#cell-<key>` slot; `#expanded` is the detail row. */
const props = withDefaults(defineProps<{
  columns: Column[]
  rows: Row[]
  rowKey?: string
  selectable?: boolean
  expandable?: boolean
  loading?: boolean
  emptyTitle?: string
  emptyDescription?: string
  caption?: string
}>(), { rowKey: 'id', emptyTitle: 'Nothing here yet', caption: 'Table' })
const emit = defineEmits<{ rowClick: [row: Row] }>()
const selected = defineModel<(string | number)[]>('selected', { default: () => [] })
const sort = ref<{ key: string; dir: 1 | -1 } | null>(null)
const expanded = ref<string | number | null>(null)

const sorted = computed(() => {
  if (!sort.value) return props.rows
  const { key, dir } = sort.value
  return [...props.rows].sort((a, b) => (a[key] > b[key] ? dir : a[key] < b[key] ? -dir : 0))
})
const allState = computed(() => (!selected.value.length ? false : selected.value.length === props.rows.length ? true : 'indeterminate'))
function toggleSort(key: string) {
  sort.value = sort.value?.key !== key ? { key, dir: 1 } : sort.value.dir === 1 ? { key, dir: -1 } : null
}
function toggleAll() {
  selected.value = allState.value === true ? [] : props.rows.map((r) => r[props.rowKey])
}
function toggleRow(id: string | number) {
  selected.value = selected.value.includes(id) ? selected.value.filter((s) => s !== id) : [...selected.value, id]
}
const span = computed(() => props.columns.length + (props.selectable ? 1 : 0) + (props.expandable ? 1 : 0))
</script>

<template>
  <div class="overflow-x-auto">
    <table class="w-full border-collapse text-sm">
      <caption class="sr-only">{{ caption }}</caption>
      <thead>
        <tr class="border-b border-line bg-[#f5f8fd]">
          <th v-if="expandable" class="w-10" scope="col"><span class="sr-only">Expand</span></th>
          <th v-if="selectable" class="w-10 pl-4" scope="col"><Checkbox :model-value="allState" aria-label="Select all rows" @update:model-value="toggleAll" /></th>
          <th
            v-for="col in columns"
            :key="col.key"
            scope="col"
            class="eyebrow !font-semibold px-4 py-3 whitespace-nowrap"
            :class="col.align === 'right' ? 'text-right' : 'text-left'"
            :style="{ width: col.width }"
            :aria-sort="sort?.key === col.key ? (sort.dir === 1 ? 'ascending' : 'descending') : undefined"
          >
            <button v-if="col.sortable" type="button" class="inline-flex items-center gap-1 uppercase hover:text-ink" @click="toggleSort(col.key)">
              {{ col.label }}
              <Icon :name="sort?.key === col.key && sort.dir === -1 ? 'chevron-down' : sort?.key === col.key ? 'chevron-up' : 'chevron-down'" :size="12" :class="sort?.key === col.key ? 'text-brand-600' : 'opacity-40'" />
            </button>
            <template v-else>{{ col.label }}</template>
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-if="loading">
          <tr v-for="i in 5" :key="i" class="border-b border-line last:border-0">
            <td v-for="n in span" :key="n" class="px-4 py-4"><Skeleton :width="n === 1 ? '70%' : '55%'" /></td>
          </tr>
        </template>
        <tr v-else-if="!rows.length">
          <td :colspan="span"><PanelState :title="emptyTitle" :description="emptyDescription"><slot name="empty" /></PanelState></td>
        </tr>
        <template v-for="row in sorted" v-else :key="row[rowKey]">
          <tr
            class="border-b border-line transition-colors last:border-0 hover:bg-gray-50"
            :class="[selected.includes(row[rowKey]) && 'bg-brand-50/60', expanded === row[rowKey] && 'bg-brand-50/40']"
            @click="emit('rowClick', row)"
          >
            <td v-if="expandable" class="pl-4">
              <button type="button" :aria-expanded="expanded === row[rowKey]" aria-label="Toggle row detail" class="text-ink-3 hover:text-ink" @click.stop="expanded = expanded === row[rowKey] ? null : row[rowKey]">
                <Icon name="chevron-right" class="transition-transform" :class="expanded === row[rowKey] && 'rotate-90 text-brand-600'" />
              </button>
            </td>
            <td v-if="selectable" class="pl-4" @click.stop><Checkbox :model-value="selected.includes(row[rowKey])" :aria-label="`Select row ${row[rowKey]}`" @update:model-value="toggleRow(row[rowKey])" /></td>
            <td v-for="col in columns" :key="col.key" class="px-4 py-3.5 text-gray-700" :class="[col.align === 'right' && 'text-right', col.mono && 'font-mono text-[13px]']">
              <slot :name="`cell-${col.key}`" :row="row" :value="row[col.key]">{{ row[col.key] }}</slot>
            </td>
          </tr>
          <tr v-if="expandable && expanded === row[rowKey]" class="border-b border-line bg-brand-50/30">
            <td :colspan="span" class="px-6 py-5"><slot name="expanded" :row="row" /></td>
          </tr>
        </template>
      </tbody>
      <tfoot v-if="$slots.foot" class="border-t border-line bg-brand-50 font-semibold text-ink"><slot name="foot" /></tfoot>
    </table>
  </div>
</template>
