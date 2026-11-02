<script setup lang="ts">
import { TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from 'reka-ui'
import Icon from './Icon.vue'

/** Tooltip. With no slot it renders the small filled info dot used next to CSV format rows. */
withDefaults(defineProps<{ text: string; side?: 'top' | 'right' | 'bottom' | 'left' }>(), { side: 'top' })
</script>

<template>
  <TooltipProvider :delay-duration="150">
    <TooltipRoot>
      <TooltipTrigger as-child>
        <slot>
          <button type="button" :aria-label="text" class="inline-flex text-ink-3 hover:text-ink"><Icon name="info" :size="14" /></button>
        </slot>
      </TooltipTrigger>
      <TooltipPortal>
        <TooltipContent :side="side" :side-offset="6" class="z-50 max-w-64 rounded-sm bg-navy-900 px-2.5 py-1.5 text-xs leading-[18px] text-white shadow-pop">
          {{ text }}
          <TooltipArrow class="fill-navy-900" />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>
