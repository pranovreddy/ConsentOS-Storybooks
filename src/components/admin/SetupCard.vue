<script setup lang="ts">
import ProgressBar from '../display/ProgressBar.vue'
import LinkArrow from '../actions/LinkArrow.vue'

/** Compact setup or profile-completion progress, for the sidebar or a dashboard rail. */
withDefaults(defineProps<{ title?: string; done: number; total: number; cta?: string }>(), { title: 'Finish your setup', cta: 'Continue setup' })
</script>

<template>
  <section class="rounded-lg border border-brand-200/70 bg-brand-50 p-3">
    <p class="portal-type-label">{{ title }}</p>
    <p class="mt-0.5 font-mono text-[11px] text-ink-2">{{ done }} of {{ total }} complete</p>
    <ProgressBar class="mt-2" :value="done" :max="total" size="xs" :label="title" />
    <LinkArrow size="sm" class="mt-2">{{ cta }}</LinkArrow>
  </section>
</template>
