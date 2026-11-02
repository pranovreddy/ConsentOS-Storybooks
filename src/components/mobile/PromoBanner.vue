<script setup lang="ts">
import { ref } from 'vue'
import CarouselDots from './CarouselDots.vue'
import Toggle from '../forms/Toggle.vue'

/** Home carousel. The right side is a slot for photography; by default it shows a small on/off illustration. */
defineProps<{ slides: { title: string; body: string }[] }>()
const current = ref(0)
</script>

<template>
  <section aria-roledescription="carousel" aria-label="Highlights">
    <div class="relative flex min-h-[170px] items-center overflow-hidden rounded-[20px] bg-[#1c69d8] p-5 text-white">
      <div class="relative z-10 max-w-[58%]">
        <h2 class="text-[21px] leading-[25px] font-semibold tracking-tight">{{ slides[current].title }}</h2>
        <p class="mt-2 text-xs leading-[18px] text-white/95">{{ slides[current].body }}</p>
      </div>
      <slot name="art">
        <div class="absolute right-4 flex flex-col gap-2 rounded-[18px] border border-white/25 bg-white/15 p-3" aria-hidden="true" inert>
          <Toggle :model-value="true" label="On" hide-label size="sm" tone="brand" />
          <Toggle :model-value="true" label="On" hide-label size="sm" tone="brand" />
          <Toggle :model-value="false" label="Off" hide-label size="sm" tone="brand" />
        </div>
      </slot>
    </div>
    <CarouselDots v-model="current" :count="slides.length" class="mt-3" />
  </section>
</template>
