<script setup lang="ts">
withDefaults(defineProps<{ mono?: boolean; as?: string }>(), { as: 'p' })
</script>

<template>
  <component :is="as" :class="mono ? 'eyebrow-mono' : 'eyebrow'"><slot /></component>
</template>
