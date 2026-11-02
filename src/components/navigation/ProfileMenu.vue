<script setup lang="ts">
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuRoot, DropdownMenuSeparator, DropdownMenuTrigger } from 'reka-ui'
import UserChip from '../display/UserChip.vue'
import Icon from '../display/Icon.vue'
import type { IconName } from '@/icons'

/** Sidebar footer that opens account actions. */
withDefaults(defineProps<{ name: string; role: string; email?: string; items?: { label: string; icon: IconName }[] }>(), {
  items: () => [
    { label: 'My profile', icon: 'user' },
    { label: 'Settings', icon: 'settings' },
    { label: 'Help and docs', icon: 'circle-help' },
  ],
})
const emit = defineEmits<{ select: [label: string]; signOut: [] }>()
</script>

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger class="w-full rounded-md p-1.5 text-left hover:bg-gray-100" :aria-label="`Account menu for ${name}`"><UserChip :name="name" :role="role" /></DropdownMenuTrigger>
    <DropdownMenuPortal>
      <DropdownMenuContent side="top" align="start" :side-offset="6" class="z-50 w-60 rounded-md border border-line bg-surface p-1 shadow-pop">
        <div v-if="email" class="truncate px-2.5 py-2 text-xs text-ink-2">{{ email }}</div>
        <DropdownMenuItem v-for="item in items" :key="item.label" class="flex cursor-pointer items-center gap-2 rounded-sm px-2.5 py-2 text-[13px] text-gray-700 outline-none data-[highlighted]:bg-brand-50" @select="emit('select', item.label)">
          <Icon :name="item.icon" />{{ item.label }}
        </DropdownMenuItem>
        <DropdownMenuSeparator class="my-1 h-px bg-line" />
        <DropdownMenuItem class="flex cursor-pointer items-center gap-2 rounded-sm px-2.5 py-2 text-[13px] text-danger-600 outline-none data-[highlighted]:bg-danger-50" @select="emit('signOut')">
          <Icon name="logout" />Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
