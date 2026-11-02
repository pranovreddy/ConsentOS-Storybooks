<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import Icon from '../display/Icon.vue'

/**
 * Priority Inbox SLA countdown. Thresholds from the spec: gray by default, amber under 6h,
 * red and pulsing under 1h, then "SLA breached". In production `seconds` comes from the WebSocket.
 */
const props = withDefaults(defineProps<{ seconds: number; ticking?: boolean }>(), { ticking: true })
const left = ref(props.seconds)
watch(() => props.seconds, (v) => (left.value = v))
let timer: ReturnType<typeof setInterval> | undefined
onMounted(() => {
  if (props.ticking) timer = setInterval(() => { left.value = Math.max(left.value - 1, 0) }, 1000)
})
onBeforeUnmount(() => clearInterval(timer))
const pad = (n: number) => String(n).padStart(2, '0')
const text = computed(() => `${pad(Math.floor(left.value / 3600))}:${pad(Math.floor((left.value % 3600) / 60))}:${pad(left.value % 60)}`)
const state = computed(() => (left.value <= 0 ? 'breached' : left.value < 3600 ? 'critical' : left.value < 21600 ? 'warning' : 'normal'))
const tones = { normal: 'bg-gray-100 text-gray-700', warning: 'bg-warning-100 text-warning-700', critical: 'bg-danger-100 text-danger-700 animate-pulse-danger', breached: 'bg-danger-600 text-white' }
</script>

<template>
  <span class="inline-flex h-7 items-center gap-1.5 rounded-sm px-2 font-mono text-xs font-medium tnum" :class="tones[state]" role="timer">
    <Icon :name="state === 'breached' ? 'warning' : 'clock'" :size="13" />
    {{ state === 'breached' ? 'SLA breached' : text }}
  </span>
</template>
