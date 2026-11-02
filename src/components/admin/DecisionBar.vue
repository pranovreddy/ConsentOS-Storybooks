<script setup lang="ts">
import Button from '../actions/Button.vue'
import Kbd from '../display/Kbd.vue'
import SelectField from '../forms/SelectField.vue'

/** Priority Inbox sticky decision bar, with the keyboard shortcuts from the spec (A / R / E / B). */
withDefaults(defineProps<{ reasons?: { label: string; value: string }[] }>(), {
  reasons: () => [
    { label: 'DLT history clean', value: 'dlt-clean' },
    { label: 'KYC mismatch', value: 'kyc-mismatch' },
    { label: 'Complaint threshold exceeded', value: 'complaints' },
    { label: 'Needs compliance review', value: 'review' },
  ],
})
const reason = defineModel<string>('reason')
const emit = defineEmits<{ decide: [decision: 'approve' | 'reject' | 'escalate' | 'blacklist'] }>()
</script>

<template>
  <div class="flex flex-wrap items-center gap-3 rounded-xl border border-line bg-surface p-3 shadow-pop">
    <div class="min-w-56 flex-1"><SelectField v-model="reason" :options="reasons" placeholder="Reason code" size="sm" /></div>
    <Button variant="ghost" size="sm" @click="emit('decide', 'blacklist')"><Kbd>B</Kbd> Blacklist</Button>
    <Button variant="secondary" size="sm" @click="emit('decide', 'escalate')"><Kbd>E</Kbd> Escalate</Button>
    <Button variant="danger" size="sm" @click="emit('decide', 'reject')"><span class="font-mono text-[11px] opacity-80">R</span> Reject</Button>
    <Button size="sm" @click="emit('decide', 'approve')"><span class="font-mono text-[11px] opacity-80">A</span> Approve</Button>
  </div>
</template>
