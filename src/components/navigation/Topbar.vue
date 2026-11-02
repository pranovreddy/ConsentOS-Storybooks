<script setup lang="ts">
import IconButton from '../actions/IconButton.vue'
import OrgSwitcher from '../display/OrgSwitcher.vue'

withDefaults(defineProps<{ org: string; orgType: string; orgColor?: string; unread?: boolean }>(), { orgColor: '#0b1a33' })
const emit = defineEmits<{ notifications: [] }>()
</script>

<template>
  <header class="flex h-[var(--app-header-height)] shrink-0 items-center justify-between gap-4 border-b border-line bg-surface px-6">
    <div class="min-w-0 flex-1"><slot /></div>
    <div class="flex items-center gap-3">
      <IconButton icon="bell" label="Notifications" size="lg" :dot="unread" @click="emit('notifications')" />
      <OrgSwitcher :name="org" :type="orgType" :color="orgColor" />
    </div>
  </header>
</template>
