<script setup lang="ts">
import Badge from '../display/Badge.vue'
import IconTile from '../display/IconTile.vue'
import type { IconName } from '@/icons'

/** One of the five evidence cards in the Priority Inbox decision view. */
defineProps<{ title: string; icon: IconName; verdict: string; verdictTone: 'success' | 'warning' | 'danger' | 'neutral'; items: { label: string; value: string }[] }>()
</script>

<template>
  <article class="rounded-lg border border-line bg-surface p-4 shadow-card">
    <header class="flex items-center gap-2.5">
      <IconTile :icon="icon" size="xs" />
      <h3 class="flex-1 text-sm font-semibold text-ink">{{ title }}</h3>
      <Badge :variant="verdictTone" size="sm" dot>{{ verdict }}</Badge>
    </header>
    <dl class="mt-3 flex flex-col gap-1.5">
      <div v-for="item in items" :key="item.label" class="flex justify-between gap-3 text-[13px]">
        <dt class="text-ink-3">{{ item.label }}</dt>
        <dd class="text-right font-medium text-ink">{{ item.value }}</dd>
      </div>
    </dl>
  </article>
</template>
