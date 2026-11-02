<script setup lang="ts">
import BrandMark from '../display/BrandMark.vue'
import ChannelLabel from '../display/ChannelLabel.vue'
import CornerTag from '../display/CornerTag.vue'
import Button from '../actions/Button.vue'

export interface RateOwner { id: string; name: string; color: string; status: 'pending' | 'accepted'; cta: string; ctaVariant: 'warning' | 'secondary' | 'primary' }
export interface RateRow { label: string; sub?: string; channel?: 'SMS' | 'Voice' | 'RCS'; rates: Record<string, number | null> }

/** Compare rates across channel owners. Pending columns are tinted so they stand out at a glance. */
defineProps<{ owners: RateOwner[]; activities: RateRow[]; scrubbing: RateRow[] }>()
const emit = defineEmits<{ action: [owner: RateOwner] }>()
const rate = (v: number | null) => (v === null ? 'N/A' : `₹${v.toFixed(2)}`)
</script>

<template>
  <div class="overflow-x-auto rounded-lg border border-line bg-surface shadow-card">
    <table class="w-full min-w-[720px] border-collapse">
      <caption class="sr-only">Rates by channel owner</caption>
      <thead>
        <tr>
          <th class="w-1/4 bg-page" scope="col"><span class="sr-only">Activity</span></th>
          <th v-for="owner in owners" :key="owner.id" scope="col" class="relative border-l border-line px-4 pt-7 pb-5 font-normal" :class="owner.status === 'pending' ? 'bg-[#fffcf5]' : 'bg-page'">
            <CornerTag :tone="owner.status">{{ owner.status }}</CornerTag>
            <BrandMark :name="owner.name" :color="owner.color" size="lg" class="mx-auto" />
            <p class="mt-2.5 text-sm font-semibold text-ink">{{ owner.name }}</p>
            <Button class="mt-3" size="sm" :variant="owner.ctaVariant" icon-right="arrow-right" @click="emit('action', owner)">{{ owner.cta }}</Button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in activities" :key="row.label" class="border-t border-line">
          <th scope="row" class="px-5 py-3 text-left font-normal">
            <span class="block text-sm text-ink">{{ row.label }}</span>
            <span class="block text-xs text-ink-3">{{ row.sub }}</span>
          </th>
          <td v-for="owner in owners" :key="owner.id" class="border-l border-line text-center font-mono text-sm font-medium" :class="[owner.status === 'pending' && 'bg-[#fffcf5]', row.rates[owner.id] === null ? 'text-ink-3' : 'text-ink']">{{ rate(row.rates[owner.id]) }}</td>
        </tr>
        <tr class="border-t border-line bg-gray-50">
          <th :colspan="owners.length + 1" scope="colgroup" class="px-5 py-2.5 text-left font-normal">
            <span class="eyebrow-mono !font-semibold">Scrubbing</span>
            <span class="ml-2 text-xs text-ink-3">per consent scrub, priced per channel</span>
          </th>
        </tr>
        <tr v-for="row in scrubbing" :key="row.label" class="border-t border-line">
          <th scope="row" class="py-3 pr-5 pl-9 text-left font-normal"><ChannelLabel v-if="row.channel" :channel="row.channel" /></th>
          <td v-for="owner in owners" :key="owner.id" class="border-l border-line text-center font-mono text-sm font-medium" :class="[owner.status === 'pending' && 'bg-[#fffcf5]', row.rates[owner.id] === null ? 'text-ink-3' : 'text-ink']">{{ rate(row.rates[owner.id]) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
