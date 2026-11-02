<script setup lang="ts">
import IconTile from '../display/IconTile.vue'
import Icon from '../display/Icon.vue'
import LinkArrow from '../actions/LinkArrow.vue'
import type { IconName } from '@/icons'

withDefaults(defineProps<{ icon?: IconName; tone?: 'brand' | 'warning' | 'danger' | 'success'; title: string; time: string; cta?: string; unread?: boolean }>(), { icon: 'bell', tone: 'brand' })
const emit = defineEmits<{ dismiss: [] }>()
</script>

<template>
  <article class="flex gap-3 px-4 py-3.5" :class="unread && 'bg-brand-50/60'">
    <IconTile :icon="icon" :tone="tone" size="sm" />
    <div class="min-w-0 flex-1">
      <p class="text-sm text-ink" :class="unread && 'font-medium'">{{ title }}</p>
      <p class="mt-0.5 text-xs text-ink-3">{{ time }}</p>
      <LinkArrow v-if="cta" size="sm" class="mt-1.5">{{ cta }}</LinkArrow>
    </div>
    <button type="button" aria-label="Dismiss notification" class="self-start text-ink-3 hover:text-ink" @click="emit('dismiss')"><Icon name="x" :size="14" /></button>
  </article>
</template>
