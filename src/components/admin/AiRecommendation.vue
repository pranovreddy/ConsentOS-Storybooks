<script setup lang="ts">
import Icon from '../display/Icon.vue'
import ProgressBar from '../display/ProgressBar.vue'

/** A suggestion, never a decision. Always shows confidence and reasons, and a person always commits the action. */
defineProps<{ action: string; confidence: number; reasons: string[] }>()
</script>

<template>
  <aside class="rounded-lg border border-brand-200/80 bg-gradient-to-b from-brand-50 to-surface p-4" aria-label="AI recommendation">
    <p class="eyebrow-mono flex items-center gap-1.5 !text-brand-700"><Icon name="sparkles" :size="14" /> AI recommendation</p>
    <p class="mt-2 text-lg font-semibold text-ink">{{ action }}</p>
    <div class="mt-2 flex items-center gap-2">
      <ProgressBar :value="confidence" label="Confidence" />
      <span class="font-mono text-xs font-medium whitespace-nowrap text-ink-2">{{ confidence }}% confidence</span>
    </div>
    <ul class="mt-3 flex flex-col gap-1.5">
      <li v-for="reason in reasons" :key="reason" class="flex gap-2 text-[13px] leading-5 text-gray-700"><Icon name="check" :size="14" class="mt-0.5 text-brand-600" />{{ reason }}</li>
    </ul>
  </aside>
</template>
