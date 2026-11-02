<script setup lang="ts">
import { computed } from 'vue'
import Icon from '../display/Icon.vue'
import ProgressBar from '../display/ProgressBar.vue'

/** Pre-go-live checklist from the spec. Stays on the dashboard until all items are complete, then collapses to a success line. */
const props = defineProps<{ items: { label: string; done?: boolean }[] }>()
const done = computed(() => props.items.filter((i) => i.done).length)
</script>

<template>
  <section v-if="done < items.length" class="rounded-xl border border-warning-200 bg-warning-50 p-4">
    <div class="flex flex-wrap items-center gap-3">
      <Icon name="flag" :size="18" class="text-warning-700" />
      <p class="flex-1 text-sm font-semibold text-ink">Go-live checklist: {{ done }} of {{ items.length }} complete</p>
      <ProgressBar class="!w-40" :value="done" :max="items.length" tone="warning" label="Go-live checklist" />
    </div>
    <ul class="mt-3 flex flex-wrap gap-x-5 gap-y-2">
      <li v-for="item in items" :key="item.label" class="flex items-center gap-1.5 text-[13px]" :class="item.done ? 'text-success-700' : 'text-gray-700'">
        <Icon :name="item.done ? 'circle-check' : 'circle'" :size="14" />{{ item.label }}
      </li>
    </ul>
  </section>
  <p v-else class="flex items-center gap-2 rounded-xl border border-success-500/30 bg-success-50 px-4 py-3 text-sm font-medium text-success-700" role="status"><Icon name="circle-check" /> All systems operational</p>
</template>
