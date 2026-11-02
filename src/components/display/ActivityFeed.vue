<script setup lang="ts">
import IconTile from './IconTile.vue'
import type { IconName } from '@/icons'

defineProps<{ items: { icon: IconName; tone?: 'brand' | 'success' | 'warning' | 'danger' | 'neutral'; title: string; actor: string; time: string }[] }>()
</script>

<template>
  <ol class="flex flex-col">
    <li v-for="(item, i) in items" :key="i" class="relative flex gap-3 pb-5 last:pb-0">
      <span v-if="i < items.length - 1" class="absolute top-8 bottom-1 left-[15px] border-l border-dashed border-brand-300" aria-hidden="true" />
      <IconTile :icon="item.icon" :tone="item.tone || 'neutral'" size="sm" round />
      <div class="min-w-0 pt-0.5">
        <p class="text-sm text-ink">{{ item.title }}</p>
        <p class="mt-0.5 text-xs text-ink-3">{{ item.time }} · {{ item.actor }}</p>
      </div>
    </li>
  </ol>
</template>
