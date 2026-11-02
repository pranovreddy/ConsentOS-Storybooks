<script setup lang="ts">
import Eyebrow from '../display/Eyebrow.vue'

defineProps<{ eyebrow: string; lead: string; name: string; description: string }>()
</script>

<template>
  <section class="relative overflow-hidden rounded-xl bg-gradient-to-r from-brand-50/70 to-brand-50 px-8 py-9">
    <svg class="absolute top-0 right-0 h-full" viewBox="0 0 340 230" fill="none" aria-hidden="true">
      <path d="M0 0H200L0 110Z" fill="#dbe7fe" /><path d="M340 40V230L150 145Z" fill="#d3e1fd" />
    </svg>
    <div class="relative max-w-3xl">
      <Eyebrow mono class="!text-brand-700">{{ eyebrow }}</Eyebrow>
      <h1 class="mt-2 text-[36px] leading-[44px] font-semibold tracking-tight text-ink">{{ lead }} <span class="text-brand-600">{{ name }}.</span></h1>
      <p class="mt-4 text-[15px] leading-[26px] text-gray-700">{{ description }}</p>
    </div>
  </section>
</template>
