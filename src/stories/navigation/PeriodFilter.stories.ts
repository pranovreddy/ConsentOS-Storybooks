import C from '@/components/navigation/PeriodFilter.vue'
import { t } from '../util'
import { ref } from 'vue'
export default { title: 'Navigation/PeriodFilter', component: C, tags: ['autodocs'] }
export const Default = t(`<PeriodFilter v-model="v" />`, () => ({ v: ref('30d') }))
export const Custom = t(`<PeriodFilter v-model="v" from="2026-06-15" to="2026-07-15" />`, () => ({ v: ref('custom') }))

