<script setup lang="ts">
import { computed } from 'vue'
import Icon from './Icon.vue'
import type { IconName } from '@/icons'

const props = defineProps<{ channel: 'SMS' | 'Voice' | 'RCS' | 'Email' }>()
const map: Record<string, { icon: IconName; color: string }> = {
  SMS: { icon: 'message', color: 'text-brand-600' },
  Voice: { icon: 'phone', color: 'text-violet-600' },
  RCS: { icon: 'message-dot', color: 'text-success-600' },
  Email: { icon: 'mail', color: 'text-warning-600' },
}
const entry = computed(() => map[props.channel])
</script>

<template>
  <span class="inline-flex items-center gap-2 text-sm text-ink"><Icon :name="entry.icon" :size="18" :class="entry.color" />{{ channel }}</span>
</template>
