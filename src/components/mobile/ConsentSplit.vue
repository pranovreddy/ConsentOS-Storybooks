<script setup lang="ts">
import IconTile from '../display/IconTile.vue'
import Eyebrow from '../display/Eyebrow.vue'

defineProps<{ optedIn: number; optedOut: number }>()
</script>

<template>
  <ul class="grid grid-cols-2 divide-x divide-line rounded-[20px] border border-line bg-surface shadow-card">
    <li class="flex items-center justify-between gap-2 p-4">
      <div><Eyebrow as="span">Opted in</Eyebrow><p class="mt-0.5 text-2xl leading-8 font-semibold text-ink tnum">{{ optedIn }}</p></div>
      <IconTile icon="shield-check" tone="success" size="md" class="!rounded-lg !bg-[#e7f8f2]" />
    </li>
    <li class="flex items-center justify-between gap-2 p-4">
      <div><Eyebrow as="span">Opted out</Eyebrow><p class="mt-0.5 text-2xl leading-8 font-semibold text-ink tnum">{{ optedOut }}</p></div>
      <IconTile icon="shield-off" tone="warning" size="md" class="!rounded-lg" />
    </li>
  </ul>
</template>
