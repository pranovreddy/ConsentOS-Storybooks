<script setup lang="ts">
import LogoMark from '../display/LogoMark.vue'
</script>

<template>
  <div class="flex items-start gap-4 rounded-xl border border-brand-200/80 bg-gradient-to-r from-surface to-brand-50 p-5">
    <LogoMark tile :size="22" class="drop-shadow-[0_6px_10px_rgb(37_99_235/0.3)]" />
    <p class="min-w-0 text-[15px] leading-6 text-gray-700"><slot /></p>
  </div>
</template>
