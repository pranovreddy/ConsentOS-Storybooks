<script setup lang="ts">
/** Label and value rows, such as Account Context. Values are truncated; the title attribute keeps the full text. */
defineProps<{ items: { label: string; value: string; mono?: boolean }[] }>()
</script>

<template>
  <dl class="divide-y divide-line">
    <div v-for="item in items" :key="item.label" class="grid grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] items-center gap-3 py-3 first:pt-0 last:pb-0">
      <dt class="eyebrow !text-[10.5px]">{{ item.label }}</dt>
      <dd class="truncate text-[13px] text-ink" :class="item.mono && 'font-mono'" :title="item.value">{{ item.value }}</dd>
    </div>
  </dl>
</template>
