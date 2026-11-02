<script setup lang="ts">
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuRoot, DropdownMenuTrigger } from 'reka-ui'
import IconButton from './IconButton.vue'
import Icon from '../display/Icon.vue'
import type { MenuItem } from './MenuButton.vue'

/** Overflow menu at the end of a table row. */
withDefaults(defineProps<{ items: MenuItem[]; label?: string }>(), { label: 'Row actions' })
const emit = defineEmits<{ select: [item: MenuItem] }>()
</script>

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger as-child><IconButton icon="ellipsis" :label="label" variant="outline" size="sm" /></DropdownMenuTrigger>
    <DropdownMenuPortal>
      <DropdownMenuContent :side-offset="4" align="end" class="z-50 min-w-44 rounded-md border border-line bg-surface p-1 shadow-pop">
        <DropdownMenuItem
          v-for="item in items"
          :key="item.label"
          :disabled="item.disabled"
          class="flex cursor-pointer items-center gap-2 rounded-sm px-2.5 py-2 text-[13px] outline-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-40 data-[highlighted]:bg-brand-50"
          :class="item.danger ? 'text-danger-600' : 'text-gray-700'"
          @select="emit('select', item)"
        >
          <Icon v-if="item.icon" :name="item.icon" />{{ item.label }}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
