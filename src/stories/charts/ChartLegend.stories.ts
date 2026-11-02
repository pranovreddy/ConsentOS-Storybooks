import C from '@/components/charts/ChartLegend.vue'
import { t } from '../util'
export default { title: 'Charts/ChartLegend', component: C, tags: ['autodocs'] }
export const Default = t(`<div class="max-w-xs"><ChartLegend :items="[{ label: 'SMS', color: '#2563eb', value: '3.80 Cr', share: '57%' }, { label: 'Voice', color: '#60a5fa', value: '1.30 Cr', share: '19%' }, { label: 'Both', color: '#93c5fd', value: '1.60 Cr', share: '24%' }]" /></div>`)

