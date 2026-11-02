<script setup lang="ts">
/** Preview container at 390 pt, used only in Storybook to show DigiConsent components at real size. */
withDefaults(defineProps<{ height?: string }>(), { height: 'auto' })
</script>

<template>
  <div class="relative mx-auto flex w-[390px] max-w-full flex-col overflow-hidden rounded-[28px] border border-line bg-page-app shadow-pop" :style="{ height }">
    <slot />
  </div>
</template>
