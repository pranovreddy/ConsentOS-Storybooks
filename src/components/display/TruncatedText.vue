<script setup lang="ts">
import Hint from './Hint.vue'

/** Single-line text that keeps its full value in a tooltip, for narrow table cells. */
defineProps<{ text: string }>()
</script>

<template>
  <Hint :text="text"><span class="block max-w-full truncate" tabindex="0">{{ text }}</span></Hint>
</template>
