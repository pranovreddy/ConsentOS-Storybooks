<script setup lang="ts">
import Icon from '../display/Icon.vue'
</script>

<template>
  <span class="inline-flex items-center gap-1.5 rounded-full border border-line bg-gray-100/70 px-3 py-1 text-[13px] text-gray-600"><Icon name="lock" :size="13" /><slot /></span>
</template>
