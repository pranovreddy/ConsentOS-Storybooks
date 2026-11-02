<script setup lang="ts">
import Icon from '../display/Icon.vue'
import type { IconName } from '@/icons'

/** "What happens next" timeline. Shows what's ahead while a job runs. */
withDefaults(defineProps<{ title?: string; steps: { title: string; description: string; icon: IconName; state: 'done' | 'active' | 'upcoming' }[] }>(), { title: 'What happens next' })
</script>

<template>
  <section class="rounded-xl border border-line bg-surface p-6 shadow-card">
    <p class="eyebrow text-center">{{ title }}</p>
    <ol class="mt-6 grid gap-6 md:auto-cols-fr md:grid-flow-col">
      <li v-for="(step, i) in steps" :key="step.title" class="relative flex flex-col items-center text-center" :aria-current="step.state === 'active' ? 'step' : undefined">
        <span v-if="i < steps.length - 1" class="absolute top-5 left-1/2 hidden h-0.5 w-full md:block" :class="step.state === 'done' ? 'bg-success-600' : 'bg-line'" aria-hidden="true" />
        <span class="relative flex size-10 items-center justify-center rounded-full" :class="step.state === 'done' ? 'bg-success-600 text-white' : step.state === 'active' ? 'border-2 border-brand-600 bg-surface text-brand-600' : 'border border-brand-200 bg-brand-50 text-brand-600'">
          <Icon :name="step.state === 'done' ? 'check' : step.icon" :size="step.state === 'done' ? 16 : 18" />
        </span>
        <p class="portal-type-body-emphasis mt-3">{{ step.title }}</p>
        <p class="portal-type-page-subtitle mt-1 max-w-56">{{ step.description }}</p>
      </li>
    </ol>
  </section>
</template>
