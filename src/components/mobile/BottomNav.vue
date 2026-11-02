<script setup lang="ts">
import Icon from '../display/Icon.vue'
import type { IconName } from '@/icons'

withDefaults(defineProps<{ items?: { id: string; label: string; icon: IconName }[] }>(), {
  items: () => [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'wallet', label: 'My Wallet', icon: 'wallet' },
    { id: 'profile', label: 'Profile', icon: 'user' },
  ],
})
const model = defineModel<string>({ default: 'home' })
</script>

<template>
  <nav class="flex shrink-0 justify-around border-t border-line bg-surface px-3 py-2" aria-label="Main">
    <button
      v-for="item in items"
      :key="item.id"
      type="button"
      :aria-current="model === item.id ? 'page' : undefined"
      class="flex min-h-11 min-w-[76px] flex-col items-center gap-0.5 rounded-[14px] px-3 py-1.5 text-xs transition-colors"
      :class="model === item.id ? 'bg-[#e9eefa] font-medium text-app-600' : 'text-ink-2'"
      @click="model = item.id"
    >
      <Icon :name="item.icon" :size="20" />{{ item.label }}
    </button>
  </nav>
</template>
