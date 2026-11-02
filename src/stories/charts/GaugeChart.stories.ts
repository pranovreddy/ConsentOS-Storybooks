import C from '@/components/charts/GaugeChart.vue'
import { t } from '../util'
export default { title: 'Charts/GaugeChart', component: C, tags: ['autodocs'] }
export const Default = t(`<div class="max-w-sm"><GaugeChart center="58,590" caption="Acquired" :segments="[{ label: 'Acquired', value: 76, color: '#1e3a8a' }, { label: 'In progress', value: 12, color: '#60a5fa' }, { label: 'Failed', value: 12, color: '#93c5fd' }]" /></div>`)

