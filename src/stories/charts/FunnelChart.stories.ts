import C from '@/components/charts/FunnelChart.vue'
import { t } from '../util'
export default { title: 'Charts/FunnelChart', component: C, tags: ['autodocs'] }
export const Default = t(`<FunnelChart :stages="fx.funnel" />`)

