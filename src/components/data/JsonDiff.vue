<script setup lang="ts">
import { computed } from 'vue'

/** Before and after view for an audit entry. Changes are marked with +/- as well as colour. */
const props = defineProps<{ before: Record<string, unknown>; after: Record<string, unknown> }>()
const rows = computed(() => {
  const keys = [...new Set([...Object.keys(props.before), ...Object.keys(props.after)])]
  return keys.flatMap((key) => {
    const a = JSON.stringify(props.before[key])
    const b = JSON.stringify(props.after[key])
    if (a === b) return [{ sign: ' ', text: `${key}: ${a}`, tone: 'text-ink-3' }]
    return [
      ...(a !== undefined ? [{ sign: '-', text: `${key}: ${a}`, tone: 'bg-danger-50 text-danger-700' }] : []),
      ...(b !== undefined ? [{ sign: '+', text: `${key}: ${b}`, tone: 'bg-success-50 text-success-700' }] : []),
    ]
  })
})
</script>

<template>
  <pre class="overflow-x-auto rounded-sm border border-line bg-surface py-2 font-mono text-xs leading-5"><code><span v-for="(row, i) in rows" :key="i" class="block px-3" :class="row.tone">{{ row.sign }} {{ row.text }}</span></code></pre>
</template>
