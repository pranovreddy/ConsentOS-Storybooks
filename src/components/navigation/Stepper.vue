<script setup lang="ts">
import Icon from '../display/Icon.vue'

/** Linear wizard progress, used for multi-step flows and onboarding. */
defineProps<{ steps: string[]; current: number; errorStep?: number }>()
</script>

<template>
  <ol class="flex w-full items-center gap-3" aria-label="Progress">
    <li v-for="(step, i) in steps" :key="step" class="flex items-center gap-3" :class="i < steps.length - 1 && 'min-w-0 flex-1'" :aria-current="i === current ? 'step' : undefined">
      <span
        class="flex size-8 shrink-0 items-center justify-center rounded-full text-[13px] font-medium"
        :class="i === errorStep ? 'bg-danger-600 text-white' : i < current ? 'bg-success-600 text-white' : i === current ? 'bg-brand-600 text-white' : 'border border-line-strong bg-surface text-ink-2'"
      >
        <Icon v-if="i === errorStep" name="x" :size="14" :stroke-width="2.5" />
        <Icon v-else-if="i < current" name="check" :size="14" :stroke-width="2.5" />
        <template v-else>{{ i + 1 }}</template>
      </span>
      <span class="text-[13px] whitespace-nowrap" :class="i === current ? 'font-medium text-ink' : 'text-ink-2'">
        {{ step }}<span v-if="i < current" class="sr-only"> (complete)</span>
      </span>
      <span v-if="i < steps.length - 1" class="h-px min-w-4 flex-1 bg-line-strong" aria-hidden="true" />
    </li>
  </ol>
</template>
