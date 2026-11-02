<script setup lang="ts">
import { computed, ref } from 'vue'
import TextInput from './TextInput.vue'
import Icon from '../display/Icon.vue'

/** Password field with the real-time rule checker from the activation flow. */
withDefaults(defineProps<{ showRules?: boolean; placeholder?: string; invalid?: boolean }>(), { placeholder: 'Enter password' })
const model = defineModel<string>({ default: '' })
const visible = ref(false)

const rules = computed(() => [
  { label: 'At least 12 characters', ok: model.value.length >= 12 },
  { label: 'One uppercase letter', ok: /[A-Z]/.test(model.value) },
  { label: 'One number', ok: /\d/.test(model.value) },
  { label: 'One special character', ok: /[^A-Za-z0-9]/.test(model.value) },
])
const score = computed(() => rules.value.filter((r) => r.ok).length)
const bar = computed(() => ['bg-gray-200', 'bg-danger-500', 'bg-warning-500', 'bg-warning-500', 'bg-success-500'][score.value])
</script>

<template>
  <div class="flex flex-col gap-3">
    <TextInput v-model="model" :type="visible ? 'text' : 'password'" icon="key" :placeholder="placeholder" :invalid="invalid" aria-label="Password">
      <template #end>
        <button type="button" :aria-label="visible ? 'Hide password' : 'Show password'" class="text-ink-3 hover:text-ink" @click="visible = !visible">
          <Icon :name="visible ? 'eye-off' : 'eye'" />
        </button>
      </template>
    </TextInput>
    <template v-if="showRules">
      <div class="flex gap-1" role="progressbar" :aria-valuenow="score" aria-valuemin="0" aria-valuemax="4" aria-label="Password strength">
        <span v-for="i in 4" :key="i" class="h-1 flex-1 rounded-full" :class="i <= score ? bar : 'bg-gray-200'" />
      </div>
      <ul class="grid grid-cols-2 gap-x-4 gap-y-1.5">
        <li v-for="rule in rules" :key="rule.label" class="flex items-center gap-1.5 text-[13px]" :class="rule.ok ? 'text-success-600' : 'text-ink-3'">
          <Icon :name="rule.ok ? 'circle-check' : 'circle'" :size="14" />{{ rule.label }}
        </li>
      </ul>
    </template>
  </div>
</template>
