<script setup lang="ts">
withDefaults(defineProps<{ orientation?: 'horizontal' | 'vertical'; dashed?: boolean }>(), { orientation: 'horizontal' })
</script>

<template>
  <div v-if="$slots.default" class="flex items-center gap-3" role="separator">
    <span class="h-px flex-1 bg-line" /><span class="eyebrow"><slot /></span><span class="h-px flex-1 bg-line" />
  </div>
  <hr v-else-if="orientation === 'horizontal'" class="border-0 border-t border-line" :class="dashed && 'border-dashed'" />
  <span v-else class="inline-block h-full min-h-4 w-px bg-line align-middle" role="separator" aria-orientation="vertical" />
</template>
