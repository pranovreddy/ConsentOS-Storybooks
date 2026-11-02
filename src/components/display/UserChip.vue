<script setup lang="ts">
import Avatar from './Avatar.vue'
import Badge from './Badge.vue'

defineProps<{ name: string; role: string; compact?: boolean }>()
</script>

<template>
  <span class="flex items-center gap-2.5">
    <Avatar :name="name" />
    <span v-if="!compact" class="flex min-w-0 flex-col items-start gap-0.5">
      <span class="truncate text-sm leading-tight text-ink">{{ name }}</span>
      <Badge variant="role" size="sm" caps>{{ role }}</Badge>
    </span>
  </span>
</template>
