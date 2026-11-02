import C from '@/components/forms/RadioGroup.vue'
import { t } from '../util'
import { ref } from 'vue'
export default { title: 'Forms/RadioGroup', component: C, tags: ['autodocs'] }
const options = [{ label: 'Direct sender', value: 'direct', description: 'You send through your own DLT entity.' }, { label: 'Through a GTM partner', value: 'gtm', description: 'A partner manages sending for you.' }, { label: 'Not available yet', value: 'x', disabled: true }]
export const Vertical = t(`<RadioGroup v-model="v" :options="options" aria-label="Sending model" />`, () => ({ v: ref('direct'), options }))
export const Cards = t(`<div class="max-w-2xl"><RadioGroup v-model="v" card orientation="horizontal" :options="options.slice(0, 2)" aria-label="Sending model" /></div>`, () => ({ v: ref('gtm'), options }))

