import C from '@/components/admin/MetricStrip.vue'
import { t } from '../util'
export default { title: 'Consent Patterns/MetricStrip', component: C, tags: ['autodocs'] }
export const Default = t(`<MetricStrip center="60%" caption="Passed" :segments="[{ label: 'Passed', value: 60, color: '#2563eb' }, { label: 'Failed', value: 40, color: '#93c5fd' }]" :metrics="[{ label: 'Total', value: '69,000', downloadable: true }, { label: 'Passed', value: '48,407', share: '60%', dot: '#2563eb' }, { label: 'Failed', value: '20,593', share: '40%', dot: '#93c5fd' }]" />`)

