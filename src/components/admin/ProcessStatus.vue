<script setup lang="ts">
import ProgressBar from '../display/ProgressBar.vue'

/** Status for a long-running job: steps, percent, time estimate and a way out. Tone green for verification, blue otherwise. */
withDefaults(defineProps<{ title: string; description?: string; steps: { label: string; state: 'done' | 'active' | 'pending' }[]; percent: number; estimate?: string; tone?: 'brand' | 'success'; cancelLabel?: string }>(), { tone: 'brand', cancelLabel: 'Cancel Migration' })
const emit = defineEmits<{ cancel: [] }>()
</script>

<template>
  <section>
    <h2 class="portal-type-section-title">{{ title }}</h2>
    <p v-if="description" class="portal-type-body mt-0.5 !text-ink-2">{{ description }}</p>
    <ol class="mt-5 flex flex-col gap-3.5">
      <li v-for="step in steps" :key="step.label" class="flex items-center gap-3 text-sm" :aria-current="step.state === 'active' ? 'step' : undefined" :class="step.state === 'active' ? 'font-medium text-ink' : 'text-ink-2'">
        <span class="size-2 shrink-0 rounded-full" :class="step.state === 'done' ? 'bg-success-600' : step.state === 'active' ? 'bg-brand-600' : 'bg-gray-300'" aria-hidden="true" />
        {{ step.label }}<span v-if="step.state === 'done'" class="sr-only"> (done)</span>
      </li>
    </ol>
    <div class="mt-5 flex items-center gap-3">
      <ProgressBar :value="percent" :tone="tone === 'success' ? 'success' : 'gradient'" size="sm" :label="title" />
      <span class="text-[13px] font-semibold tnum" :class="tone === 'success' ? 'text-success-600' : 'text-brand-600'">{{ percent }}%</span>
    </div>
    <p v-if="estimate" class="mt-4 inline-block rounded-full px-3.5 py-1.5 text-[13px]" :class="tone === 'success' ? 'border border-success-500/30 bg-success-100 text-success-700' : 'bg-brand-50 text-brand-700'">Estimated time: {{ estimate }}</p>
    <p v-if="cancelLabel" class="mt-3 text-[13px] text-ink-2">Something wrong? <button type="button" class="text-brand-600 underline underline-offset-2" @click="emit('cancel')">{{ cancelLabel }}</button></p>
  </section>
</template>
