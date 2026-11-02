import C from '@/components/charts/StackedBars.vue'
import { t } from '../util'
export default { title: 'Charts/StackedBars', component: C, tags: ['autodocs'] }
export const Default = t(`<div class="max-w-2xl"><StackedBars :categories="['Credit Card','Personal Loan','Home Loan','Debit Card']" :series="[{ label: 'Acquired', color: '#1e3a8a', values: [35000, 13000, 9000, 2000] }, { label: 'In progress', color: '#60a5fa', values: [3000, 0, 0, 6500] }, { label: 'Failed', color: '#93c5fd', values: [0, 6000, 3400, 0] }]" /></div>`)

