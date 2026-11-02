import C from '@/components/forms/Toggle.vue'
import { t } from '../util'
import { ref } from 'vue'
export default { title: 'Forms/Toggle', component: C, tags: ['autodocs'] }
export const Tones = t(`<div class="flex flex-col items-start gap-3"><Toggle v-model="a" label="Consent (mobile)" /><Toggle tone="success" :model-value="true" label="Success (admin)" /><Toggle tone="brand" :model-value="true" label="Brand (settings)" /><Toggle :model-value="false" label="Off" /><Toggle :model-value="true" disabled label="Disabled" /><Toggle size="sm" :model-value="true" label="Small" /></div>`, () => ({ a: ref(true) }))

