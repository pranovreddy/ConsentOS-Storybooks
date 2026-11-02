import C from '@/components/charts/RankedBars.vue'
import { t } from '../util'
export default { title: 'Charts/RankedBars', component: C, tags: ['autodocs'] }
export const Reasons = t(`<div class="max-w-md"><RankedBars :items="fx.revocationReasons" :max="100" /></div>`)
export const Leaderboard = t(`<div class="max-w-md"><RankedBars rank :items="fx.topStates" /></div>`)

