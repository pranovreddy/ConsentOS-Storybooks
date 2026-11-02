<script setup lang="ts">
import Icon from '../display/Icon.vue'
import Spinner from '../feedback/Spinner.vue'

/** Automated GTM nomination checks. Each row shows its own real-time state. */
defineProps<{ checks: { label: string; state: 'pending' | 'running' | 'pass' | 'fail'; detail?: string }[] }>()
</script>

<template>
  <ul class="flex flex-col gap-2.5">
    <li v-for="check in checks" :key="check.label" class="flex items-center gap-2.5 text-sm">
      <Spinner v-if="check.state === 'running'" :size="18" :label="`${check.label} running`" />
      <Icon v-else-if="check.state === 'pass'" name="circle-check" :size="18" class="text-success-600" />
      <Icon v-else-if="check.state === 'fail'" name="circle-x" :size="18" class="text-danger-600" />
      <Icon v-else name="circle" :size="18" class="text-gray-300" />
      <span class="flex-1" :class="check.state === 'pending' ? 'text-ink-3' : 'text-ink'">{{ check.label }}</span>
      <span v-if="check.detail" class="text-[13px]" :class="check.state === 'fail' ? 'text-danger-700' : 'text-ink-3'">{{ check.detail }}</span>
    </li>
  </ul>
</template>
