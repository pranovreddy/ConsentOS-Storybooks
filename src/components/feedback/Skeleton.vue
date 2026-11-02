<script setup lang="ts">
withDefaults(defineProps<{ width?: string; height?: string; circle?: boolean }>(), { width: '100%', height: '14px' })
</script>

<template>
  <span
    class="block animate-shimmer bg-[linear-gradient(90deg,#f3f4f7_25%,#e6eaf2_50%,#f3f4f7_75%)] bg-[length:200%_100%]"
    :class="circle ? 'rounded-full' : 'rounded-xs'"
    :style="{ width, height }"
    aria-hidden="true"
  />
</template>
