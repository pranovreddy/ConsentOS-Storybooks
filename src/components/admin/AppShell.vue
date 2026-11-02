<script setup lang="ts">
import SidebarNav, { type NavGroup } from '../navigation/SidebarNav.vue'
import Topbar from '../navigation/Topbar.vue'

/** Sidebar, top bar and page area. `tone="regulator"` uses the cooler page colour from the TRAI views. */
withDefaults(defineProps<{
  groups: NavGroup[]
  active?: string
  expanded?: string[]
  org?: string
  orgType?: string
  orgColor?: string
  tone?: 'enterprise' | 'regulator'
  user?: { name: string; role: string }
}>(), { org: 'HDFC Bank L', orgType: 'Enterprise', tone: 'enterprise', user: () => ({ name: 'Ravi Menon', role: 'Super Admin' }) })
</script>

<template>
  <div class="flex h-screen min-h-[640px] overflow-hidden" :class="tone === 'regulator' ? 'bg-page-regulator' : 'bg-page'">
    <SidebarNav :groups="groups" :active="active" :expanded="expanded" :user="user" />
    <div class="flex min-w-0 flex-1 flex-col">
      <Topbar :org="org" :org-type="orgType" :org-color="orgColor" />
      <main class="flex-1 overflow-y-auto px-8 py-7"><slot /></main>
    </div>
  </div>
</template>
