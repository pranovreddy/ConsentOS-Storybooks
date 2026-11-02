<script setup lang="ts">
import { computed } from 'vue'
import { icons, type IconName } from '@/icons'

const props = withDefaults(defineProps<{ name: IconName; size?: number; strokeWidth?: number }>(), { size: 16, strokeWidth: 1.75 })
const glyph = computed(() => icons[props.name])
</script>

<template>
  <component :is="glyph" :size="size" :stroke-width="strokeWidth" aria-hidden="true" class="shrink-0" />
</template>
