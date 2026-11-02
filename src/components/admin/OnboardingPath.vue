<script setup lang="ts">
import { ref } from 'vue'
import Button from '../actions/Button.vue'
import LinkArrow from '../actions/LinkArrow.vue'
import Icon from '../display/Icon.vue'
import IconTile from '../display/IconTile.vue'
import ProgressBar from '../display/ProgressBar.vue'
import LockedPill from '../feedback/LockedPill.vue'
import CountdownPill from '../feedback/CountdownPill.vue'
import type { IconName } from '@/icons'

export interface PathTask { label: string; icon: IconName; done?: boolean; meta?: string; cta?: string }
export interface PathStage { title: string; tasks?: PathTask[]; lockedText?: string; learnMore?: boolean; countdown?: { label: string; parts: string[]; unit?: string } }

/** The "Your path to kick off migration" checklist on Home. Stages unlock in sequence. */
const props = defineProps<{ title: string; percent: number; stages: PathStage[] }>()
const emit = defineEmits<{ task: [task: PathTask] }>()
const open = ref(new Set(props.stages.map((s, i) => (s.tasks ? i : -1))))
function toggle(i: number) {
  open.value.has(i) ? open.value.delete(i) : open.value.add(i)
}
const count = (s: PathStage) => s.tasks?.filter((t) => t.done).length ?? 0
</script>

<template>
  <section class="overflow-hidden rounded-xl border border-line bg-surface shadow-card">
    <header class="flex items-center justify-between gap-4 px-6 py-4">
      <h2 class="text-lg text-ink">{{ title }}</h2>
      <div class="text-center">
        <p class="text-2xl leading-7 font-semibold text-ink tnum">{{ percent }}%</p>
        <p class="eyebrow-mono !text-[10px]">Complete</p>
      </div>
    </header>
    <ProgressBar :value="percent" size="xs" :label="title" />
    <ol class="p-5">
      <li v-for="(stage, i) in stages" :key="stage.title" class="relative pb-6 pl-9 last:pb-0">
        <span v-if="i < stages.length - 1" class="absolute top-7 bottom-0 left-[12px] border-l border-dashed border-brand-300" aria-hidden="true" />
        <span class="absolute top-0 left-0 flex size-6 items-center justify-center rounded-full text-xs font-medium" :class="stage.tasks ? 'bg-brand-600 text-white' : 'border border-line-strong bg-gray-50 text-gray-600'">{{ i + 1 }}</span>
        <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
          <div class="min-w-48 flex-1">
            <h3 class="text-base font-medium text-ink">{{ stage.title }}</h3>
            <LinkArrow v-if="stage.learnMore" size="sm" class="mt-0.5">Learn more</LinkArrow>
          </div>
          <template v-if="stage.tasks">
            <span class="font-mono text-xs text-ink-2 tnum">{{ count(stage) }}/{{ stage.tasks.length }}</span>
            <ProgressBar class="!w-24" :value="count(stage)" :max="stage.tasks.length" size="xs" :label="`${stage.title} progress`" />
          </template>
          <LockedPill v-if="stage.lockedText">{{ stage.lockedText }}</LockedPill>
          <CountdownPill v-if="stage.countdown" v-bind="stage.countdown" />
          <button v-if="stage.tasks" type="button" class="text-ink-3 hover:text-ink" :aria-expanded="open.has(i)" :aria-label="`Toggle ${stage.title}`" @click="toggle(i)">
            <Icon :name="open.has(i) ? 'chevron-up' : 'chevron-down'" />
          </button>
        </div>
        <ul v-if="stage.tasks && open.has(i)" class="mt-3 divide-y divide-line rounded-md border border-line">
          <li v-for="task in stage.tasks" :key="task.label" class="flex flex-wrap items-center gap-3 px-4 py-3">
            <span class="flex size-5 shrink-0 items-center justify-center rounded-full" :class="task.done ? 'bg-success-600 text-white' : 'border-2 border-brand-600'">
              <Icon v-if="task.done" name="check" :size="12" :stroke-width="3" />
              <span v-else class="size-2 rounded-full bg-brand-600" />
            </span>
            <IconTile :icon="task.icon" :tone="task.done ? 'neutral' : 'brand'" size="xs" />
            <span class="min-w-40 flex-1 text-sm text-ink">{{ task.label }}<span class="sr-only">{{ task.done ? ' (done)' : ' (to do)' }}</span></span>
            <span v-if="task.meta" class="text-xs text-ink-3">{{ task.meta }}</span>
            <Button v-if="task.cta" size="sm" icon-right="arrow-right" @click="emit('task', task)">{{ task.cta }}</Button>
          </li>
        </ul>
      </li>
    </ol>
  </section>
</template>
