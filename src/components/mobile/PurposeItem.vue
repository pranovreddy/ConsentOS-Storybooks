<script setup lang="ts">
import Icon from '../display/Icon.vue'
import Eyebrow from '../display/Eyebrow.vue'
import Tag from '../display/Tag.vue'
import Toggle from '../forms/Toggle.vue'
import ChannelChoice from '../forms/ChannelChoice.vue'

/** One purpose of communication inside a brand: consent toggle, channels (once on) and benefits. */
withDefaults(defineProps<{ title: string; benefits?: string[]; channelOptions?: string[] }>(), { benefits: () => [], channelOptions: () => ['SMS', 'Calls'] })
const enabled = defineModel<boolean>('enabled', { default: false })
const channels = defineModel<string[]>('channels', { default: () => ['SMS'] })
</script>

<template>
  <section class="py-4 first:pt-0 last:pb-0">
    <div class="flex items-center gap-3">
      <h3 class="min-w-0 flex-1 text-[17px] leading-[22px] font-semibold text-ink">{{ title }}</h3>
      <Icon name="shield-check" :size="18" class="text-app-500" />
      <Toggle v-model="enabled" :label="`Consent for ${title}`" hide-label />
    </div>
    <template v-if="enabled">
      <Eyebrow class="mt-3 mb-2">Preferred channels</Eyebrow>
      <ChannelChoice v-model="channels" :options="channelOptions" />
    </template>
    <template v-if="benefits.length">
      <Eyebrow class="mt-3 mb-2">Consent benefits</Eyebrow>
      <div class="flex flex-wrap gap-2"><Tag v-for="b in benefits" :key="b">{{ b }}</Tag></div>
    </template>
  </section>
</template>
