<script setup lang="ts">
/** Direct-value legend beside donuts: swatch, label, value and share on one ruled row. */
defineProps<{ items: { label: string; color: string; value: string; share?: string; expandable?: boolean }[] }>()
const emit = defineEmits<{ expand: [label: string] }>()
</script>

<template>
  <ul class="w-full divide-y divide-line">
    <li v-for="item in items" :key="item.label" class="flex items-center gap-2.5 py-3.5 text-sm first:pt-0 last:pb-0">
      <span class="size-2.5 shrink-0 rounded-[3px]" :style="{ background: item.color }" aria-hidden="true" />
      <span class="flex min-w-0 flex-1 items-center gap-1.5 text-gray-700"><span class="truncate">{{ item.label }}</span><button v-if="item.expandable" type="button" class="flex size-4 shrink-0 items-center justify-center rounded-xs border border-line text-xs leading-none text-brand-600 hover:bg-brand-50" :aria-label="`Show ${item.label} breakdown`" @click="emit('expand', item.label)">+</button></span>
      <span class="font-semibold text-ink tnum">{{ item.value }}</span>
      <span v-if="item.share" class="w-8 text-right text-xs text-ink-3 tnum">{{ item.share }}</span>
    </li>
  </ul>
</template>
