<script setup lang="ts">
import Icon from '../display/Icon.vue'

defineProps<{ items: { label: string; href?: string }[] }>()
</script>

<template>
  <nav aria-label="Breadcrumb">
    <ol class="flex flex-wrap items-center gap-1.5 text-[13px]">
      <li v-for="(item, i) in items" :key="item.label" class="flex items-center gap-1.5">
        <Icon v-if="i" name="chevron-right" :size="13" class="text-ink-4" />
        <a v-if="i < items.length - 1" :href="item.href || '#'" class="text-ink-2 hover:text-brand-600 hover:underline">{{ item.label }}</a>
        <span v-else aria-current="page" class="font-medium text-ink">{{ item.label }}</span>
      </li>
    </ol>
  </nav>
</template>
