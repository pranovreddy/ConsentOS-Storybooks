<script setup lang="ts">
import IconButton from '../actions/IconButton.vue'
import LogoMark from '../display/LogoMark.vue'

withDefaults(defineProps<{ name: string; tagline?: string; unread?: boolean }>(), { tagline: 'Stop spam. Stay in control.' })
const emit = defineEmits<{ language: []; notifications: [] }>()
</script>

<template>
  <header class="flex items-center gap-3 border-b border-line/70 px-5 py-3.5">
    <LogoMark tile :size="24" />
    <div class="min-w-0 flex-1">
      <p class="truncate text-base leading-5 font-semibold text-ink">Hi, {{ name }}</p>
      <p class="truncate text-[13px] text-ink-2">{{ tagline }}</p>
    </div>
    <IconButton icon="languages" label="Change language" variant="round" size="lg" @click="emit('language')" />
    <IconButton icon="bell" label="Notifications" variant="round" size="lg" :dot="unread" @click="emit('notifications')" />
  </header>
</template>
