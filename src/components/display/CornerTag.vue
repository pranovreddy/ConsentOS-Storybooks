<script setup lang="ts">
/** Square mono tag pinned to the corner of a column or card. Set `static` to place it inline. */
withDefaults(defineProps<{ tone?: 'pending' | 'accepted' | 'neutral'; static?: boolean }>(), { tone: 'pending' })
const tones = {
  pending: 'border-warning-200 bg-warning-100 text-warning-700',
  accepted: 'border-brand-200 bg-brand-50 text-brand-700',
  neutral: 'border-line bg-gray-100 text-gray-600',
}
</script>

<template>
  <span class="inline-block rounded-bl-xs border px-2 py-0.5 font-mono text-[10px] font-medium tracking-widest uppercase" :class="[tones[tone], !static && 'absolute top-0 right-0 rounded-tr-[inherit]']">
    <slot />
  </span>
</template>
