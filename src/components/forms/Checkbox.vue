<script setup lang="ts">
import { useId } from 'vue'
import { CheckboxIndicator, CheckboxRoot } from 'reka-ui'
import Icon from '../display/Icon.vue'

defineProps<{ disabled?: boolean; invalid?: boolean; description?: string; ariaLabel?: string }>()
const model = defineModel<boolean | 'indeterminate'>({ default: false })
const id = useId()
</script>

<template>
  <div class="flex items-start gap-2.5" :class="disabled && 'opacity-50'">
    <CheckboxRoot
      :id="id"
      v-model="model"
      :aria-label="ariaLabel"
      :disabled="disabled"
      class="mt-0.5 flex size-[18px] shrink-0 items-center justify-center rounded-[5px] border bg-surface transition-colors data-[state=checked]:border-brand-600 data-[state=checked]:bg-brand-600 data-[state=indeterminate]:border-brand-600 data-[state=indeterminate]:bg-brand-600 disabled:cursor-not-allowed"
      :class="invalid ? 'border-danger-500' : 'border-line-strong'"
    >
      <CheckboxIndicator class="text-white">
        <span v-if="model === 'indeterminate'" class="block h-0.5 w-2.5 rounded bg-white" />
        <Icon v-else name="check" :size="13" :stroke-width="3" />
      </CheckboxIndicator>
    </CheckboxRoot>
    <label v-if="$slots.default" :for="id" class="text-sm leading-[22px] text-ink select-none">
      <slot />
      <span v-if="description" class="block text-[13px] leading-5 text-ink-3">{{ description }}</span>
    </label>
  </div>
</template>
