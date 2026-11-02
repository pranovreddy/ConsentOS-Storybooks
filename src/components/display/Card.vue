<script setup lang="ts">
import IconTile from './IconTile.vue'
import type { IconName } from '@/icons'

/** Base surface. Header + divider + body, as on every analytics panel. Set `flush` to let tables reach the edges. */
defineProps<{ title?: string; description?: string; icon?: IconName; flush?: boolean; muted?: boolean }>()
</script>

<template>
  <section class="overflow-hidden rounded-lg border border-line shadow-card" :class="muted ? 'bg-gray-50' : 'bg-surface'">
    <header v-if="title || $slots.header" class="flex flex-wrap items-start justify-between gap-3 border-b border-line px-5 py-4">
      <slot name="header">
        <div class="min-w-0">
          <h3 class="portal-type-panel-title flex items-center gap-2.5">
            <IconTile v-if="icon" :icon="icon" size="xs" />{{ title }}
          </h3>
          <p v-if="description" class="mt-1 text-[13px] text-ink-2">{{ description }}</p>
        </div>
      </slot>
      <div v-if="$slots.actions" class="flex items-center gap-2"><slot name="actions" /></div>
    </header>
    <div :class="!flush && 'p-5'"><slot /></div>
    <footer v-if="$slots.footer" class="border-t border-line px-5 py-3"><slot name="footer" /></footer>
  </section>
</template>
