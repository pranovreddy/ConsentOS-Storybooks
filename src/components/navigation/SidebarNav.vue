<script setup lang="ts">
import { ref } from 'vue'
import Icon from '../display/Icon.vue'
import LogoMark from '../display/LogoMark.vue'
import UserChip from '../display/UserChip.vue'
import IconButton from '../actions/IconButton.vue'
import type { IconName } from '@/icons'

export interface NavItem { id: string; label: string; icon: IconName; count?: number; locked?: boolean; children?: NavItem[] }
export interface NavGroup { title: string; items: NavItem[] }

const props = withDefaults(defineProps<{ groups: NavGroup[]; active?: string; user: { name: string; role: string }; expanded?: string[]; startCollapsed?: boolean }>(), { expanded: () => [] })
const emit = defineEmits<{ navigate: [id: string] }>()
const collapsed = ref(props.startCollapsed)
const open = ref(new Set(props.expanded))
function toggle(id: string) {
  open.value.has(id) ? open.value.delete(id) : open.value.add(id)
}
</script>

<template>
  <aside class="flex h-full shrink-0 flex-col border-r border-line bg-surface transition-[width] duration-200" :class="collapsed ? 'w-[var(--app-sidebar-collapsed-width)]' : 'w-[var(--app-sidebar-width)]'">
    <div class="flex h-[var(--app-header-height)] items-center justify-between border-b border-line px-4">
      <LogoMark :wordmark="!collapsed" :size="22" />
      <IconButton v-if="!collapsed" icon="chevrons-left" label="Collapse sidebar" size="sm" @click="collapsed = true" />
    </div>
    <IconButton v-if="collapsed" icon="chevron-right" label="Expand sidebar" size="sm" class="mx-auto mt-3" @click="collapsed = false" />
    <nav class="flex-1 overflow-y-auto py-3" aria-label="Primary">
      <div v-for="group in groups" :key="group.title" class="mb-3">
        <p v-if="!collapsed" class="eyebrow px-4 pt-1 pb-1.5 !font-semibold">{{ group.title }}</p>
        <ul>
          <li v-for="item in group.items" :key="item.id">
            <button
              type="button"
              :aria-current="active === item.id ? 'page' : undefined"
              :aria-expanded="item.children ? open.has(item.id) : undefined"
              :disabled="item.locked"
              :title="collapsed ? item.label : undefined"
              class="flex h-10 w-full items-center gap-3 border-l-[3px] px-4 text-left text-sm transition-colors disabled:cursor-not-allowed"
              :class="[
                active === item.id || item.children?.some((c) => c.id === active) ? 'border-brand-600 bg-brand-50 text-brand-600' : 'border-transparent text-gray-700 hover:bg-gray-50',
                item.locked && 'text-ink-4 hover:bg-transparent',
                collapsed && 'justify-center px-0',
              ]"
              @click="item.children ? toggle(item.id) : emit('navigate', item.id)"
            >
              <Icon :name="item.icon" :size="18" />
              <template v-if="!collapsed">
                <span class="flex-1 truncate">{{ item.label }}</span>
                <span v-if="item.count" class="rounded-full bg-danger-100 px-1.5 text-[11px] font-semibold text-danger-700">{{ item.count }}</span>
                <Icon v-if="item.locked" name="lock" :size="13" />
                <Icon v-if="item.children" :name="open.has(item.id) ? 'chevron-up' : 'chevron-down'" :size="14" />
              </template>
            </button>
            <ul v-if="item.children && open.has(item.id) && !collapsed" class="mt-1 mb-1 flex flex-col gap-1 px-3">
              <li v-for="child in item.children" :key="child.id">
                <button
                  type="button"
                  :aria-current="active === child.id ? 'page' : undefined"
                  :disabled="child.locked"
                  class="flex h-9 w-full items-center gap-3 rounded-sm border px-3 text-left text-sm transition-colors disabled:cursor-not-allowed"
                  :class="[active === child.id ? 'border-brand-200 bg-surface text-brand-600 shadow-xs' : 'border-transparent text-gray-700 hover:bg-gray-50', child.locked && 'text-ink-4 hover:bg-transparent']"
                  @click="emit('navigate', child.id)"
                >
                  <Icon :name="child.icon" :size="16" />
                  <span class="flex-1 truncate">{{ child.label }}</span>
                  <span v-if="child.locked" class="rounded-full bg-gray-100 px-1.5 py-0.5"><Icon name="lock" :size="11" /></span>
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    <div class="border-t border-line p-3" :class="collapsed && 'flex justify-center'">
      <UserChip :name="user.name" :role="user.role" :compact="collapsed" />
    </div>
  </aside>
</template>
