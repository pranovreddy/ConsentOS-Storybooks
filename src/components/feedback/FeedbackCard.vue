<script setup lang="ts">
import Icon from '../display/Icon.vue'
import type { IconName } from '@/icons'

/** Centred outcome block: large icon, message and up to two actions. Used for success, error and warning results. */
const props = withDefaults(defineProps<{ variant?: 'success' | 'error' | 'warning'; title: string; description?: string; primaryLabel?: string; secondaryLabel?: string }>(), { variant: 'success' })
const emit = defineEmits<{ primary: []; secondary: [] }>()
const tokens: Record<string, { wrap: string; icon: IconName; button: string }> = {
  success: { wrap: 'bg-success-100 text-success-600', icon: 'check', button: 'bg-success-600' },
  error: { wrap: 'bg-danger-100 text-danger-700', icon: 'x', button: 'bg-danger-700' },
  warning: { wrap: 'bg-warning-100 text-warning-700', icon: 'warning', button: 'bg-warning-700' },
}
const token = tokens[props.variant]
</script>

<template>
  <section class="flex flex-col items-center rounded-2xl border border-[var(--color-border-dialog)] bg-surface p-6 text-center" :role="variant === 'error' ? 'alert' : 'status'">
    <span class="flex size-[68px] items-center justify-center rounded-full" :class="token.wrap"><Icon :name="token.icon" :size="30" /></span>
    <h3 class="portal-type-form-section mt-4">{{ title }}</h3>
    <p v-if="description" class="portal-type-page-subtitle mt-1.5 max-w-md"><slot>{{ description }}</slot></p>
    <div v-if="primaryLabel || secondaryLabel" class="mt-5 flex flex-wrap justify-center gap-2">
      <button v-if="secondaryLabel" type="button" class="h-[var(--button-height-confirm)] min-w-32 rounded-md border border-line bg-surface px-[18px] text-[13px] font-medium text-ink hover:bg-gray-100" @click="emit('secondary')">{{ secondaryLabel }}</button>
      <button v-if="primaryLabel" type="button" class="h-[var(--button-height-confirm)] min-w-32 rounded-md px-[18px] text-[13px] font-medium text-white hover:opacity-90" :class="token.button" @click="emit('primary')">{{ primaryLabel }}</button>
    </div>
  </section>
</template>
