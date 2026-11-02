import C from '@/components/data/RateMatrix.vue'
import { t } from '../util'
export default { title: 'Data/RateMatrix', component: C, tags: ['autodocs'] }
export const Default = t(`<RateMatrix :owners="fx.rateOwners" :activities="fx.rateActivities" :scrubbing="fx.rateScrubbing" />`)

