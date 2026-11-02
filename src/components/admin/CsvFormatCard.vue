<script setup lang="ts">
import Badge from '../display/Badge.vue'
import Eyebrow from '../display/Eyebrow.vue'
import Hint from '../display/Hint.vue'
import Button from '../actions/Button.vue'

export interface CsvColumn { name: string; format: string; help: string }
defineProps<{ mandatory: CsvColumn[]; optional: CsvColumn[] }>()
const emit = defineEmits<{ download: [] }>()
</script>

<template>
  <section class="rounded-xl border border-line bg-surface p-5 shadow-card">
    <Eyebrow mono>CSV format</Eyebrow>
    <template v-for="group in [{ title: 'Mandatory', rows: mandatory, variant: 'danger', dot: 'bg-brand-600' }, { title: 'Optional', rows: optional, variant: 'neutral', dot: 'bg-gray-300' }]" :key="group.title">
      <div class="mt-4 flex items-center gap-2">
        <Badge :variant="(group.variant as 'danger' | 'neutral')" size="sm" caps>{{ group.title }}</Badge>
        <span class="h-px flex-1 bg-line" />
        <span class="font-mono text-xs text-ink-3">{{ group.rows.length }}</span>
      </div>
      <ul class="mt-1 divide-y divide-line">
        <li v-for="row in group.rows" :key="row.name" class="flex items-center gap-2 py-2.5">
          <span class="size-1.5 shrink-0 rounded-full" :class="group.dot" aria-hidden="true" />
          <span class="min-w-0 flex-1 text-[13px] font-medium text-ink">{{ row.name }}<span v-if="group.title === 'Mandatory'" class="text-danger-500"> *</span></span>
          <span class="font-mono text-[11px] whitespace-nowrap text-ink-3">{{ row.format }}</span>
          <Hint :text="row.help" />
        </li>
      </ul>
    </template>
    <Button class="mt-4" variant="secondary" icon="download" block @click="emit('download')">Download Template</Button>
  </section>
</template>
