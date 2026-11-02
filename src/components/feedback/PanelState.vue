<script setup lang="ts">
import { computed } from 'vue'
import IconTile from '../display/IconTile.vue'
import Spinner from './Spinner.vue'
import Button from '../actions/Button.vue'
import type { IconName } from '@/icons'

/** Loading, empty and error content for any panel. "No dead ends": empty and error states always offer a next step. */
const props = withDefaults(defineProps<{
  kind?: 'loading' | 'empty' | 'error'
  title?: string
  description?: string
  icon?: IconName
  actionLabel?: string
  minHeight?: string
}>(), { kind: 'empty', minHeight: '220px' })
const emit = defineEmits<{ action: [] }>()
const glyph = computed<IconName>(() => props.icon ?? (props.kind === 'error' ? 'warning' : 'database'))
</script>

<template>
  <div class="flex flex-col items-center justify-center px-6 py-8 text-center" :style="{ minHeight }" :role="kind === 'error' ? 'alert' : 'status'">
    <template v-if="kind === 'loading'">
      <Spinner />
      <p class="mt-3 text-sm font-semibold text-ink">{{ title || 'Loading data' }}</p>
    </template>
    <template v-else>
      <IconTile :icon="glyph" :tone="kind === 'error' ? 'danger' : 'brand'" size="sm" />
      <p class="mt-3 text-sm font-semibold text-ink">{{ title }}</p>
      <p v-if="description" class="mt-1.5 max-w-sm text-[13px] leading-5 text-ink-2">{{ description }}</p>
      <Button v-if="actionLabel" class="mt-4" size="sm" :variant="kind === 'error' ? 'secondary' : 'primary'" :icon="kind === 'error' ? 'refresh' : undefined" @click="emit('action')">{{ actionLabel }}</Button>
    </template>
  </div>
</template>
