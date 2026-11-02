<script setup lang="ts">
import { SwitchRoot, SwitchThumb } from 'reka-ui'

/** On = green in DigiConsent, because "on" means consent is granted. Use tone="brand" for ordinary admin settings. */
withDefaults(defineProps<{ tone?: 'consent' | 'success' | 'brand'; size?: 'sm' | 'md'; disabled?: boolean; label: string; hideLabel?: boolean }>(), { tone: 'consent', size: 'md' })
const model = defineModel<boolean>({ default: false })
</script>

<template>
  <label class="inline-flex items-center gap-2.5" :class="disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'">
    <span :class="hideLabel ? 'sr-only' : 'text-sm text-ink'">{{ label }}</span>
    <SwitchRoot
      v-model="model"
      :disabled="disabled"
      class="relative inline-flex shrink-0 items-center rounded-full bg-[#eaedf0] transition-colors duration-200"
      :class="[size === 'sm' ? 'h-5 w-9' : 'h-6 w-11', tone === 'consent' ? 'data-[state=checked]:bg-success-500' : tone === 'success' ? 'data-[state=checked]:bg-success-600' : 'data-[state=checked]:bg-brand-600']"
    >
      <SwitchThumb
        class="block rounded-full bg-white shadow-[0_1px_3px_rgb(11_26_51/0.25)] transition-transform duration-200"
        :class="size === 'sm' ? 'size-4 translate-x-0.5 data-[state=checked]:translate-x-[18px]' : 'size-5 translate-x-0.5 data-[state=checked]:translate-x-[22px]'"
      />
    </SwitchRoot>
  </label>
</template>
