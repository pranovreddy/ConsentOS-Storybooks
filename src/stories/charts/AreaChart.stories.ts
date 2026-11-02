import C from '@/components/charts/AreaChart.vue'
import { t } from '../util'
export default { title: 'Charts/AreaChart', component: C, tags: ['autodocs'] }
export const Default = t(`<div class="max-w-2xl"><AreaChart :data="fx.engagementTrend" :x-labels="['15 Jun','25 Jun','5 Jul','15 Jul']" /></div>`)

