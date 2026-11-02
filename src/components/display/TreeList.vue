<script setup lang="ts">
import { TreeItem, TreeRoot } from 'reka-ui'
import Icon from './Icon.vue'
import type { IconName } from '@/icons'

export interface TreeNode { id: string; label: string; icon?: IconName; count?: number; children?: TreeNode[] }
/** Expandable hierarchy, such as an enterprise's brands and lines of business. */
withDefaults(defineProps<{ items: TreeNode[]; defaultExpanded?: string[]; ariaLabel?: string }>(), { defaultExpanded: () => [], ariaLabel: 'Tree' })
const emit = defineEmits<{ select: [id: string] }>()
</script>

<template>
  <TreeRoot v-slot="{ flattenItems }" :items="items" :get-key="(n: TreeNode) => n.id" :default-expanded="defaultExpanded" :aria-label="ariaLabel" class="flex flex-col gap-0.5 text-[13px]">
    <TreeItem
      v-for="item in flattenItems"
      :key="item._id"
      v-slot="{ isExpanded }"
      v-bind="item.bind"
      class="flex h-9 cursor-pointer items-center gap-2 rounded-sm pr-2 outline-none hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-brand-600 data-[selected]:bg-brand-50 data-[selected]:text-brand-600"
      :style="{ paddingLeft: `${item.level * 16 - 8}px` }"
      @select="emit('select', (item.value as TreeNode).id)"
    >
      <Icon v-if="item.hasChildren" name="chevron-right" :size="14" class="text-ink-3 transition-transform" :class="isExpanded && 'rotate-90'" />
      <span v-else class="w-3.5" />
      <Icon v-if="(item.value as TreeNode).icon" :name="(item.value as TreeNode).icon!" :size="15" class="text-ink-2" />
      <span class="flex-1 truncate">{{ (item.value as TreeNode).label }}</span>
      <span v-if="(item.value as TreeNode).count !== undefined" class="font-mono text-[11px] text-ink-3">{{ (item.value as TreeNode).count }}</span>
    </TreeItem>
  </TreeRoot>
</template>
