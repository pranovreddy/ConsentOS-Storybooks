<script setup lang="ts">
import TextInput from './TextInput.vue'
import Icon from '../display/Icon.vue'
import Kbd from '../display/Kbd.vue'

withDefaults(defineProps<{ placeholder?: string; shortcut?: string }>(), { placeholder: 'Search' })
const model = defineModel<string>({ default: '' })
</script>

<template>
  <TextInput v-model="model" type="search" icon="search" :placeholder="placeholder" :aria-label="placeholder">
    <template #end>
      <button v-if="model" type="button" aria-label="Clear search" class="text-ink-3 hover:text-ink" @click="model = ''"><Icon name="x" :size="14" /></button>
      <Kbd v-else-if="shortcut">{{ shortcut }}</Kbd>
    </template>
  </TextInput>
</template>
