<script setup lang="ts">
import { computed, ref } from 'vue'
import { DialogContent, DialogOverlay, DialogPortal, DialogRoot, DialogTitle } from 'reka-ui'
import Icon from '../display/Icon.vue'
import Kbd from '../display/Kbd.vue'
import type { IconName } from '@/icons'

export interface CommandItem { label: string; group: string; icon: IconName; shortcut?: string }
const props = defineProps<{ items: CommandItem[] }>()
const open = defineModel<boolean>('open', { default: false })
const emit = defineEmits<{ select: [item: CommandItem] }>()
const query = ref('')
const groups = computed(() => {
  const matches = props.items.filter((i) => i.label.toLowerCase().includes(query.value.toLowerCase()))
  return [...new Set(matches.map((i) => i.group))].map((group) => ({ group, items: matches.filter((i) => i.group === group) }))
})
</script>

<template>
  <DialogRoot v-model:open="open">
    <DialogPortal>
      <DialogOverlay class="fixed inset-0 z-50 bg-navy-900/40 animate-overlay" />
      <DialogContent class="fixed top-[15%] left-1/2 z-50 w-[92vw] max-w-xl -translate-x-1/2 overflow-hidden rounded-lg bg-surface shadow-pop" aria-describedby="">
        <DialogTitle class="sr-only">Universal search</DialogTitle>
        <div class="flex items-center gap-2.5 border-b border-line px-4">
          <Icon name="search" class="text-ink-3" />
          <input v-model="query" placeholder="Search senders, GTMs, users, agreements" aria-label="Search" class="h-12 w-full bg-transparent text-sm outline-none placeholder:text-ink-4" />
          <Kbd>Esc</Kbd>
        </div>
        <div class="max-h-80 overflow-auto p-2">
          <div v-for="g in groups" :key="g.group" class="mb-1">
            <p class="eyebrow px-2 py-1.5">{{ g.group }}</p>
            <button v-for="item in g.items" :key="item.label" type="button" class="flex w-full items-center gap-2.5 rounded-sm px-2 py-2 text-left text-sm text-gray-700 hover:bg-brand-50" @click="emit('select', item); open = false">
              <Icon :name="item.icon" class="text-ink-3" />
              <span class="flex-1">{{ item.label }}</span>
              <Kbd v-if="item.shortcut">{{ item.shortcut }}</Kbd>
            </button>
          </div>
          <p v-if="!groups.length" class="px-2 py-8 text-center text-sm text-ink-3">Nothing matches "{{ query }}". Try a sender name, PEID or user email.</p>
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
