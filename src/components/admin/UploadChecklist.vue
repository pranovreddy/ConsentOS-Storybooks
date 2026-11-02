<script setup lang="ts">
import { computed } from 'vue'
import Eyebrow from '../display/Eyebrow.vue'
import Icon from '../display/Icon.vue'
import ProgressBar from '../display/ProgressBar.vue'

/** Live readiness rail beside the upload form. Each step explains itself, so the disabled CTA is never a mystery. */
const props = withDefaults(defineProps<{ title?: string; items: { label: string; detail: string; done?: boolean }[] }>(), { title: 'Upload checklist' })
const pct = computed(() => Math.round((props.items.filter((i) => i.done).length / props.items.length) * 100))
</script>

<template>
  <section class="rounded-xl border border-line bg-surface p-5 shadow-card">
    <Eyebrow mono>{{ title }}</Eyebrow>
    <p class="mt-2 text-xl font-semibold tnum" :class="pct ? 'text-brand-600' : 'text-ink-3'">{{ pct }}%</p>
    <ProgressBar class="mt-2" :value="pct" :label="title" />
    <p class="mt-4 text-sm font-semibold text-ink-2">{{ pct === 100 ? 'All set' : "What's pending?" }}</p>
    <ul class="mt-3 flex flex-col gap-3">
      <li v-for="item in items" :key="item.label" class="flex items-start gap-2.5">
        <span class="mt-px flex size-[18px] shrink-0 items-center justify-center rounded-full" :class="item.done ? 'bg-success-600 text-white' : 'border border-line-strong'">
          <Icon v-if="item.done" name="check" :size="11" :stroke-width="3" />
        </span>
        <div>
          <p class="text-sm" :class="item.done ? 'text-ink' : 'text-ink-2'">{{ item.label }}<span class="sr-only">{{ item.done ? ' (done)' : ' (pending)' }}</span></p>
          <p class="text-[13px] text-ink-3">{{ item.detail }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>
