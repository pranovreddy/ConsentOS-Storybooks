<script setup lang="ts">
import { computed, onErrorCaptured, ref } from 'vue'

const props = defineProps<{ story: { id: string; name: string; render: (args: Record<string, unknown>) => object; args: Record<string, unknown>; code?: string; fullscreen: boolean }; single?: boolean }>()
const view = computed(() => props.story.render(props.story.args))
const failed = ref('')
const copied = ref(false)
const showCode = ref(false)

onErrorCaptured((e) => {
  failed.value = String(e)
  return false
})
async function copy() {
  try {
    await navigator.clipboard.writeText(props.story.code ?? '')
    copied.value = true
    setTimeout(() => (copied.value = false), 1500)
  } catch {
    showCode.value = true
  }
}
</script>

<template>
  <section :data-story="story.id">
    <div class="mb-2 flex flex-wrap items-center justify-between gap-2">
      <h2 v-if="!single" class="portal-type-panel-title">{{ story.name }}</h2>
      <div v-if="story.code" class="ml-auto flex gap-1.5">
        <Button variant="ghost" size="sm" :aria-expanded="showCode" @click="showCode = !showCode">{{ showCode ? 'Hide code' : 'Show code' }}</Button>
        <Button variant="secondary" size="sm" icon="copy" @click="copy">{{ copied ? 'Copied' : 'Copy code' }}</Button>
      </div>
    </div>
    <div class="overflow-hidden rounded-lg border border-line bg-surface">
      <p v-if="failed" role="alert" class="p-4 text-[13px] text-danger-700">This example couldn't render: {{ failed }}</p>
      <div v-else-if="story.fullscreen" class="h-[780px] overflow-auto"><component :is="view" /></div>
      <div v-else class="overflow-x-auto p-6"><component :is="view" /></div>
    </div>
    <pre v-if="showCode" class="mt-2 max-h-80 overflow-auto rounded-md bg-navy-900 p-4 font-mono text-xs leading-5 whitespace-pre-wrap text-white"><code>{{ story.code }}</code></pre>
  </section>
</template>
