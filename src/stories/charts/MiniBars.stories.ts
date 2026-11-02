import C from '@/components/charts/MiniBars.vue'
import { t } from '../util'
export default { title: 'Charts/MiniBars', component: C, tags: ['autodocs'] }
export const Default = t(`<div class="max-w-lg"><MiniBars :items="[{ label: 'BFSI', value: 62 }, { label: 'Telecom', value: 41 }, { label: 'Retail', value: 28 }, { label: 'Travel', value: 17 }, { label: 'Health', value: 9 }]" /></div>`)

