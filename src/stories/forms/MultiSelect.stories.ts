import C from '@/components/forms/MultiSelect.vue'
import { t } from '../util'
import { ref } from 'vue'
export default { title: 'Forms/MultiSelect', component: C, tags: ['autodocs'] }
export const Default = t(`<div class="max-w-sm"><MultiSelect v-model="v" :options="opts" placeholder="All telcos" /></div>`, () => ({ v: ref(['jio', 'bsnl']), opts: [{ label: 'Airtel', value: 'airtel' }, { label: 'BSNL', value: 'bsnl' }, { label: 'Reliance Jio', value: 'jio' }, { label: 'Vodafone Idea', value: 'vi' }] }))

