<script setup lang="ts">
import Icon from '../display/Icon.vue'

export interface Phase { title: string; detail: string; state: 'done' | 'active' | 'upcoming'; linked?: boolean }
/** National migration programme tracker on the regulator view. */
defineProps<{ phases: Phase[]; progress?: number }>()
</script>

<template>
  <div class="relative overflow-hidden rounded-lg border border-line bg-surface shadow-card">
    <div class="absolute top-0 left-0 h-[3px] rounded-r-full bg-gradient-to-r from-brand-600 to-brand-400" :style="{ width: `${progress ?? 0}%` }" aria-hidden="true" />
    <ol class="grid gap-4 p-5 sm:grid-cols-2 xl:grid-cols-4">
      <li v-for="(phase, i) in phases" :key="phase.title" class="flex items-center gap-3" :aria-current="phase.state === 'active' ? 'step' : undefined">
        <span
          class="flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-medium"
          :class="phase.state === 'done' ? 'bg-success-600 text-white' : phase.state === 'active' ? 'bg-brand-600 text-white' : 'bg-gray-100 text-ink-2'"
        >
          <Icon v-if="phase.state === 'done'" name="check" :size="18" :stroke-width="2.5" />
          <template v-else>{{ i + 1 }}</template>
        </span>
        <div class="min-w-0 flex-1">
          <p class="text-[15px] font-medium" :class="phase.state === 'done' ? 'text-ink' : 'text-gray-700'">{{ phase.title }}</p>
          <a v-if="phase.linked" href="#" class="text-[13px] font-medium text-brand-600 hover:underline">{{ phase.detail }}</a>
          <p v-else class="font-mono text-xs" :class="phase.state === 'active' ? 'font-medium text-brand-600' : 'text-ink-3'">{{ phase.detail }}</p>
        </div>
        <Icon v-if="i < phases.length - 1" name="arrow-right" class="hidden text-ink-4 xl:block" />
      </li>
    </ol>
  </div>
</template>
