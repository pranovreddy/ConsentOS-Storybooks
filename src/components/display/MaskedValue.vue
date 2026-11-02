<script setup lang="ts">
import { computed, ref } from 'vue'
import Icon from './Icon.vue'

/** PII display. Masked by default; a reveal should be captured in the audit trail. */
const props = withDefaults(defineProps<{ value: string; visibleEnd?: number; revealable?: boolean }>(), { visibleEnd: 4 })
const emit = defineEmits<{ reveal: [] }>()
const shown = ref(false)
const masked = computed(() => '•'.repeat(Math.max(props.value.length - props.visibleEnd, 0)) + props.value.slice(-props.visibleEnd))
function toggle() {
  shown.value = !shown.value
  if (shown.value) emit('reveal')
}
</script>

<template>
  <span class="inline-flex items-center gap-1.5 font-mono text-[13px] text-ink">
    {{ shown ? value : masked }}
    <button v-if="revealable" type="button" class="text-ink-3 hover:text-ink" :aria-label="shown ? 'Hide value' : 'Reveal value'" @click="toggle"><Icon :name="shown ? 'eye-off' : 'eye'" :size="14" /></button>
  </span>
</template>
