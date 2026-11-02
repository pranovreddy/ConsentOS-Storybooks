<script setup lang="ts">
import Icon from '../display/Icon.vue'

defineProps<{ label?: string; required?: boolean; hint?: string; error?: string; disabled?: boolean; forId?: string }>()
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <label v-if="label" :for="forId" class="portal-type-label" :class="disabled ? 'text-ink-3' : 'text-ink'">
      {{ label }}<span v-if="required" class="text-danger-500"> *</span>
    </label>
    <slot />
    <p v-if="error" role="alert" class="flex items-center gap-1 text-[13px] text-danger-700"><Icon name="circle-alert" :size="14" />{{ error }}</p>
    <p v-else-if="hint" class="text-[13px] text-ink-3">{{ hint }}</p>
  </div>
</template>
