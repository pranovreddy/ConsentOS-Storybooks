<script setup lang="ts">
import Icon from '../display/Icon.vue'
import Checkbox from '../forms/Checkbox.vue'
import TextInput from '../forms/TextInput.vue'
import FormField from '../forms/FormField.vue'

/** Digital acceptance for agreements: typed name plus explicit consent. `signed` shows who signed and when. */
defineProps<{ signed?: { name: string; time: string; ip?: string }; agreement?: string }>()
const name = defineModel<string>('name', { default: '' })
const accepted = defineModel<boolean>('accepted', { default: false })
</script>

<template>
  <section v-if="signed" class="flex items-start gap-3 rounded-lg border border-success-500/30 bg-success-50 p-4">
    <Icon name="shield-check" :size="20" class="text-success-600" />
    <div class="text-[13px] text-ink-2">
      <p class="portal-type-body-emphasis">Signed by {{ signed.name }}</p>
      <p class="mt-0.5">{{ signed.time }}<span v-if="signed.ip" class="font-mono"> · {{ signed.ip }}</span></p>
    </div>
  </section>
  <section v-else class="flex flex-col gap-4 rounded-lg border border-line bg-surface p-4">
    <FormField label="Type your full name" required><TextInput v-model="name" placeholder="Full name" aria-label="Full name" /></FormField>
    <Checkbox v-model="accepted"><span class="text-[13px]">I have read and accept {{ agreement || 'this agreement' }} on behalf of my organisation.</span></Checkbox>
  </section>
</template>
