<script setup lang="ts">
import Icon from '../display/Icon.vue'
import IconTile from '../display/IconTile.vue'
import BrandMark from '../display/BrandMark.vue'
import type { IconName } from '@/icons'

/** Tappable row card. With `icon` it's a Quick Action; with `brand` it's a Wallet entry. `unread` is the new-consent dot. */
defineProps<{ title: string; description?: string; meta?: string; icon?: IconName; brand?: { name: string; color: string }; unread?: boolean }>()
</script>

<template>
  <button type="button" class="flex min-h-[72px] w-full items-center gap-3 rounded-[20px] border border-line bg-surface p-4 text-left shadow-card transition-colors hover:bg-gray-50">
    <IconTile v-if="icon" :icon="icon" tone="neutral" size="md" class="!rounded-lg !bg-gray-100" />
    <span v-if="brand" class="relative">
      <BrandMark :name="brand.name" :color="brand.color" shape="circle" />
      <span v-if="unread" class="absolute -top-0.5 -right-0.5 size-2.5 rounded-full bg-app-500 ring-2 ring-white"><span class="sr-only">New</span></span>
    </span>
    <span class="min-w-0 flex-1">
      <span class="block text-[15px] leading-5 font-semibold text-ink">{{ title }}</span>
      <span v-if="meta" class="block text-xs leading-5 text-ink-3">{{ meta }}</span>
      <span v-if="description" class="block text-[13px] leading-[18px] text-ink-2">{{ description }}</span>
    </span>
    <Icon name="chevron-right" class="text-ink-3" />
  </button>
</template>
