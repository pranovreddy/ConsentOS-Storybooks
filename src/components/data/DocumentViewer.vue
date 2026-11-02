<script setup lang="ts">
import Button from '../actions/Button.vue'
import SearchInput from '../forms/SearchInput.vue'
import { ref } from 'vue'

/** Agreement reader: toolbar, find, download and a scrolling page. Default slot is the document; `src` embeds a PDF instead. */
withDefaults(defineProps<{ title: string; meta?: string; src?: string; height?: string }>(), { height: '480px' })
const emit = defineEmits<{ download: [] }>()
const query = ref('')
</script>

<template>
  <section class="overflow-hidden rounded-xl border border-line bg-surface shadow-card">
    <header class="flex flex-wrap items-center gap-3 border-b border-line px-4 py-3">
      <div class="min-w-48 flex-1"><p class="portal-type-panel-title">{{ title }}</p><p v-if="meta" class="portal-type-body-muted">{{ meta }}</p></div>
      <div class="w-56"><SearchInput v-model="query" placeholder="Find in document" /></div>
      <Button variant="secondary" icon="download" @click="emit('download')">Download</Button>
    </header>
    <iframe v-if="src" :src="src" :title="title" class="block w-full" :style="{ height }" />
    <div v-else class="overflow-auto bg-gray-100 p-6" :style="{ height }" tabindex="0" :aria-label="title"><article class="portal-stack-dense mx-auto max-w-2xl rounded-sm bg-surface p-8 text-[13px] leading-6 text-gray-700 shadow-card"><slot /></article></div>
  </section>
</template>
