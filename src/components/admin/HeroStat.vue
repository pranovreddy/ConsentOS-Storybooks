<script setup lang="ts">
/** Lead metric on a brand gradient, with an optional pill and split bar. Use once per page. */
defineProps<{ label: string; value: string; caption?: string; pill?: string; progress?: number }>()
</script>

<template>
  <article class="relative overflow-hidden rounded-xl bg-gradient-to-br from-brand-600 to-brand-900 p-5 text-white">
    <svg class="absolute top-0 right-0 h-full opacity-20" viewBox="0 0 160 170" fill="none" aria-hidden="true">
      <path d="M40 0H110L40 80Z" fill="#fff" fill-opacity=".45" /><path d="M160 60V170L90 115Z" fill="#fff" fill-opacity=".45" />
    </svg>
    <div class="relative">
      <div class="flex items-start justify-between gap-3">
        <p class="text-[11px] font-semibold tracking-[0.09em] uppercase text-white/85">{{ label }}</p>
        <span v-if="pill" class="rounded-full bg-white/20 px-3 py-1 text-xs font-medium">{{ pill }}</span>
      </div>
      <p class="mt-2 text-4xl leading-tight font-semibold tracking-tight tnum">{{ value }}</p>
      <p v-if="caption" class="mt-0.5 text-[13px] text-white/90">{{ caption }}</p>
      <div v-if="progress !== undefined" class="mt-3 h-1.5 overflow-hidden rounded-full bg-brand-500" role="progressbar" :aria-label="label" :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100">
        <div class="h-full rounded-full bg-brand-300" :style="{ width: `${progress}%` }" />
      </div>
    </div>
  </article>
</template>
