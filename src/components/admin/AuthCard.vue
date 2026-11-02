<script setup lang="ts">
import LogoMark from '../display/LogoMark.vue'

/** Centred card for sign-in, activation and MFA forms. */
withDefaults(defineProps<{ title: string; description?: string; product?: string }>(), { product: 'ConsentOS' })
</script>

<template>
  <section class="w-full max-w-md rounded-2xl border border-line bg-surface p-8 shadow-card">
    <LogoMark :wordmark="product" :size="26" />
    <h1 class="portal-type-section-title mt-6">{{ title }}</h1>
    <p v-if="description" class="portal-type-page-subtitle mt-1">{{ description }}</p>
    <div class="portal-stack-form mt-6"><slot /></div>
    <div v-if="$slots.footer" class="mt-6 border-t border-line pt-4 text-center text-[13px] text-ink-2"><slot name="footer" /></div>
  </section>
</template>
