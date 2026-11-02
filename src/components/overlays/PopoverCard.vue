<script setup lang="ts">
import { PopoverArrow, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'reka-ui'

withDefaults(defineProps<{ side?: 'top' | 'right' | 'bottom' | 'left'; width?: number }>(), { side: 'bottom', width: 300 })
</script>

<template>
  <PopoverRoot>
    <PopoverTrigger as-child><slot name="trigger" /></PopoverTrigger>
    <PopoverPortal>
      <PopoverContent :side="side" :side-offset="8" class="z-50 rounded-md border border-line bg-surface p-4 text-sm text-gray-700 shadow-pop" :style="{ width: `${width}px` }">
        <slot />
        <PopoverArrow class="fill-surface" />
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
