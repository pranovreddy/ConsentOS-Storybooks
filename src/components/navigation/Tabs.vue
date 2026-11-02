<script setup lang="ts">
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from 'reka-ui'
import Icon from '../display/Icon.vue'
import type { IconName } from '@/icons'

export interface TabItem { id: string; label: string; icon?: IconName; locked?: boolean; count?: number }
withDefaults(defineProps<{ items: TabItem[]; variant?: 'underline' | 'pill'; ariaLabel?: string }>(), { variant: 'underline', ariaLabel: 'Tabs' })
const model = defineModel<string>()
</script>

<template>
  <TabsRoot v-model="model">
    <TabsList :aria-label="ariaLabel" class="flex flex-wrap" :class="variant === 'underline' ? 'gap-1 border-b border-line' : 'gap-2'">
      <TabsTrigger
        v-for="item in items"
        :key="item.id"
        :value="item.id"
        :disabled="item.locked"
        class="inline-flex items-center gap-2 text-sm whitespace-nowrap transition-colors disabled:cursor-not-allowed disabled:text-ink-4"
        :class="variant === 'underline'
          ? '-mb-px border-b-2 border-transparent px-3.5 py-3 text-ink-2 hover:text-ink data-[state=active]:border-navy-900 data-[state=active]:font-semibold data-[state=active]:text-ink'
          : 'h-8 rounded-full border border-line bg-surface px-3 text-[13px] font-medium text-gray-600 hover:bg-gray-50 data-[state=active]:border-brand-600 data-[state=active]:bg-brand-600 data-[state=active]:text-white'"
      >
        <Icon v-if="item.icon" :name="item.icon" />
        {{ item.label }}
        <span v-if="item.count !== undefined" class="tnum">({{ item.count }})</span>
        <Icon v-if="item.locked" name="lock" :size="13" />
      </TabsTrigger>
    </TabsList>
    <TabsContent v-for="item in items" :key="item.id" :value="item.id" class="pt-5 outline-none">
      <slot :name="item.id" />
    </TabsContent>
  </TabsRoot>
</template>
