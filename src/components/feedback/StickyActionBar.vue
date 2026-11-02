<script setup lang="ts">
import Icon from '../display/Icon.vue'

/** Navy commit bar at the end of each migration step. It states what will happen before the user commits. */
defineProps<{ title: string; detail?: string }>()
</script>

<template>
  <div class="flex flex-wrap items-center gap-4 rounded-xl bg-navy-900 px-5 py-4 shadow-bar">
    <span class="flex size-11 shrink-0 items-center justify-center rounded-md bg-navy-700 text-brand-300"><Icon name="shield" :size="20" /></span>
    <div class="min-w-48 flex-1">
      <p class="text-[15px] font-semibold text-white">{{ title }}</p>
      <p v-if="detail" class="mt-0.5 text-[13px] text-white/60">{{ detail }}</p>
    </div>
    <div class="flex flex-wrap items-center gap-2"><slot /></div>
  </div>
</template>
