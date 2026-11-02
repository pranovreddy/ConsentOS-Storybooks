<script setup lang="ts">
import Icon from '../display/Icon.vue'

/** Tamper-evident hash for an audit log entry, showing whether the chain verified. */
const props = withDefaults(defineProps<{ hash: string; verified?: boolean }>(), { verified: true })
const short = `${props.hash.slice(0, 6)}…${props.hash.slice(-4)}`
</script>

<template>
  <span class="inline-flex items-center gap-1.5 font-mono text-xs" :class="verified ? 'text-success-700' : 'text-danger-700'" :title="hash">
    <Icon :name="verified ? 'shield-check' : 'shield-alert'" :size="14" />{{ short }}
    <span class="sr-only">{{ verified ? 'Hash verified' : 'Hash mismatch' }}</span>
  </span>
</template>
