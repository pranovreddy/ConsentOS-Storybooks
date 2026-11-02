<script setup lang="ts">
import Icon from '../display/Icon.vue'

/** Subscriber's preferred outreach channels (DigiConsent). A multi-select shown as radio-style pills. */
withDefaults(defineProps<{ options?: string[]; disabled?: boolean }>(), { options: () => ['SMS', 'Calls'] })
const model = defineModel<string[]>({ default: () => [] })
function toggle(option: string) {
  model.value = model.value.includes(option) ? model.value.filter((o) => o !== option) : [...model.value, option]
}
</script>

<template>
  <div class="flex flex-wrap gap-2" role="group" aria-label="Preferred channels">
    <button
      v-for="option in options"
      :key="option"
      type="button"
      :aria-pressed="model.includes(option)"
      :disabled="disabled"
      class="inline-flex h-8 items-center gap-2 rounded-full pr-3.5 pl-2 text-[13px] transition-colors disabled:cursor-not-allowed disabled:opacity-50"
      :class="model.includes(option) ? 'bg-app-tint font-medium text-app-600' : 'bg-gray-100 text-ink-2'"
      @click="toggle(option)"
    >
      <span class="flex size-[18px] items-center justify-center rounded-full" :class="model.includes(option) ? 'bg-app-500 text-white' : 'border-2 border-line-strong'">
        <Icon v-if="model.includes(option)" name="check" :size="11" :stroke-width="3" />
      </span>
      {{ option }}
    </button>
  </div>
</template>
