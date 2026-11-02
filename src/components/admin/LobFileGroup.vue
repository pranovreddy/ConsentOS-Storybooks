<script setup lang="ts">
import { ref } from 'vue'
import Badge from '../display/Badge.vue'
import Button from '../actions/Button.vue'
import Checkbox from '../forms/Checkbox.vue'
import IconButton from '../actions/IconButton.vue'

export interface LobAmount { label: string; amount: string; consents: string; highlight?: boolean }
export interface LobFile { name: string; meta: string; status: string; statusVariant: 'success' | 'warning' | 'danger'; statusIcon?: 'circle-check' | 'warning' | 'circle-x'; amount: string; consents: string; action: string }

/** Approval row for one line of business, which expands into its files. */
const props = defineProps<{ title: string; fileCount: number; summary: string; amounts: LobAmount[]; files?: LobFile[]; defaultOpen?: boolean }>()
const emit = defineEmits<{ review: [] }>()
const open = ref(props.defaultOpen)
const selected = defineModel<boolean>('selected', { default: false })
</script>

<template>
  <section class="border-b border-line last:border-0">
    <div class="flex flex-wrap items-center gap-x-6 gap-y-3 px-5 py-4">
      <Checkbox v-model="selected" :aria-label="`Select ${title}`" />
      <div class="min-w-56 flex-1">
        <h3 class="flex flex-wrap items-center gap-2 text-[15px] font-semibold text-ink">{{ title }}<Badge size="sm">{{ fileCount }} {{ fileCount === 1 ? 'file' : 'files' }}</Badge></h3>
        <p class="mt-1 text-[13px] text-ink-2">{{ summary }}</p>
      </div>
      <dl class="flex flex-wrap gap-8">
        <div v-for="item in amounts" :key="item.label" class="min-w-24 text-right">
          <dt class="eyebrow">{{ item.label }}</dt>
          <dd class="mt-1 text-sm font-semibold tnum" :class="item.highlight ? 'text-warning-700' : 'text-ink'">{{ item.amount }}</dd>
          <dd class="text-xs text-ink-2">{{ item.consents }}</dd>
        </div>
      </dl>
      <div class="flex items-center gap-2">
        <Button size="sm" @click="emit('review')">Review</Button>
        <IconButton :icon="open ? 'chevron-down' : 'chevron-right'" :label="open ? 'Hide files' : 'Show files'" variant="outline" size="md" :aria-expanded="!!open" @click="open = !open" />
      </div>
    </div>
    <div v-if="open && files?.length" class="border-t border-line bg-gray-50 px-5 py-3 pl-14">
      <p class="mb-2 text-xs text-ink-2">Files in {{ title }}</p>
      <ul class="flex flex-col gap-2">
        <li v-for="file in files" :key="file.name" class="flex flex-wrap items-center gap-4 rounded-lg border border-line bg-surface px-4 py-3">
          <div class="min-w-40 flex-1"><p class="font-mono text-[13px] font-medium text-ink">{{ file.name }}</p><p class="text-xs text-ink-2">{{ file.meta }}</p></div>
          <Badge :variant="file.statusVariant" :icon="file.statusIcon">{{ file.status }}</Badge>
          <div class="min-w-28 text-right"><p class="text-sm font-semibold text-ink tnum">{{ file.amount }}</p><p class="text-xs text-ink-2">{{ file.consents }}</p></div>
          <Button variant="secondary" size="sm">{{ file.action }}</Button>
        </li>
      </ul>
    </div>
  </section>
</template>
