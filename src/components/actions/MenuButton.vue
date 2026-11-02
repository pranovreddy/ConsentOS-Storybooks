<script setup lang="ts">
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuRoot, DropdownMenuTrigger } from 'reka-ui'
import Button from './Button.vue'
import Icon from '../display/Icon.vue'
import type { IconName } from '@/icons'

export interface MenuItem { label: string; icon?: IconName; danger?: boolean; disabled?: boolean }
withDefaults(defineProps<{
  label: string
  icon?: IconName
  items: MenuItem[]
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}>(), { variant: 'secondary', size: 'md' })
const emit = defineEmits<{ select: [item: MenuItem] }>()
</script>

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger as-child>
      <Button :variant="variant" :size="size" :icon="icon" icon-right="chevron-down">{{ label }}</Button>
    </DropdownMenuTrigger>
    <DropdownMenuPortal>
      <DropdownMenuContent :side-offset="6" align="end" class="z-50 min-w-48 rounded-md border border-line bg-surface p-1 shadow-pop">
        <DropdownMenuItem
          v-for="item in items"
          :key="item.label"
          :disabled="item.disabled"
          class="flex cursor-pointer items-center gap-2 rounded-sm px-2.5 py-2 text-sm outline-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-40 data-[highlighted]:bg-brand-50"
          :class="item.danger ? 'text-danger-600' : 'text-gray-700'"
          @select="emit('select', item)"
        >
          <Icon v-if="item.icon" :name="item.icon" />
          {{ item.label }}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
