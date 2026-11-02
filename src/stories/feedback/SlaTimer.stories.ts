import C from '@/components/feedback/SlaTimer.vue'
import { t } from '../util'
export default { title: 'Feedback/SlaTimer', component: C, tags: ['autodocs'] }
export const Thresholds = t(`<div class="flex flex-wrap gap-3"><SlaTimer :seconds="86000" :ticking="false" /><SlaTimer :seconds="14400" :ticking="false" /><SlaTimer :seconds="1800" :ticking="false" /><SlaTimer :seconds="0" :ticking="false" /></div>`)
export const Ticking = t(`<SlaTimer :seconds="3660" />`)

