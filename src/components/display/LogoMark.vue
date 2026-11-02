<script setup lang="ts">
import logoOnLight from '@/assets/branding/DigiConsentLogo.png'
import logoOnDark from '@/assets/branding/DigiConsentLogoOnDark.png'

/** The DigiConsent logo. `wordmark` shows the full logo; otherwise just the aperture mark. `tile` is the round AI and app avatar. */
withDefaults(defineProps<{ size?: number; wordmark?: boolean; tile?: boolean; onDark?: boolean }>(), { size: 24 })
const petals = [
  { d: 'M21 5L29 11L21 17V5Z', o: 0.95 },
  { d: 'M35 13V23L27 20L35 13Z', o: 0.85 },
  { d: 'M35 29L27 34V25L35 29Z', o: 0.75 },
  { d: 'M21 37L13 31L21 25V37Z', o: 0.95 },
  { d: 'M7 29V19L15 22L7 29Z', o: 0.85 },
  { d: 'M7 13L15 8V17L7 13Z', o: 0.75 },
]
</script>

<template>
  <img v-if="wordmark" :src="onDark ? logoOnDark : logoOnLight" alt="DigiConsent" class="block w-auto max-w-full shrink-0" :style="{ height: `${size * 1.7}px` }" />
  <span
    v-else
    class="inline-flex shrink-0 items-center justify-center"
    :class="tile ? 'rounded-full bg-brand-600 shadow-primary' : ''"
    :style="tile ? { width: `${size * 1.6}px`, height: `${size * 1.6}px` } : {}"
  >
    <svg :width="size" :height="size" viewBox="0 0 42 42" role="img" aria-label="DigiConsent">
      <path v-for="p in petals" :key="p.d" :d="p.d" :opacity="p.o" :fill="tile || onDark ? '#ffffff' : '#3b5bff'" />
    </svg>
  </span>
</template>
