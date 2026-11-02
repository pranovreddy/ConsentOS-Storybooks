import C from '@/components/charts/DonutChart.vue'
import { t } from '../util'
export default { title: 'Charts/DonutChart', component: C, tags: ['autodocs'] }
const seg = [{ label: 'Opted in', value: 76, color: '#2563eb' }, { label: 'Opted out', value: 6, color: '#60a5fa' }, { label: 'No action', value: 19, color: '#dbeafe' }]
export const Default = t(`<DonutChart :segments="seg" center="14.30 Cr" caption="Notified" />`, () => ({ seg }))
export const WithLegend = t(`<div class="flex max-w-xl items-center gap-8"><DonutChart :segments="seg" center="14.30 Cr" caption="Notified" :size="170" /><ChartLegend :items="[{ label: 'Opted in', color: '#2563eb', value: '10.80 Cr', share: '76%' }, { label: 'Opted out', color: '#60a5fa', value: '80 L', share: '6%' }, { label: 'No action', color: '#dbeafe', value: '2.70 Cr', share: '19%' }]" /></div>`, () => ({ seg }))

