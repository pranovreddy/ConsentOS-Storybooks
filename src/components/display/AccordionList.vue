<script setup lang="ts">
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'reka-ui'
import Icon from './Icon.vue'

defineProps<{ items: { id: string; title: string; body: string }[]; defaultOpen?: string }>()
</script>

<template>
  <AccordionRoot type="single" collapsible :default-value="defaultOpen" class="divide-y divide-line rounded-md border border-line bg-surface">
    <AccordionItem v-for="item in items" :key="item.id" :value="item.id">
      <AccordionHeader>
        <AccordionTrigger class="group flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left text-sm font-medium text-ink">
          {{ item.title }}
          <Icon name="chevron-down" class="text-ink-3 transition-transform group-data-[state=open]:rotate-180" />
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent class="overflow-hidden">
        <p class="px-4 pb-4 text-[13px] leading-5 text-ink-2">{{ item.body }}</p>
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>
