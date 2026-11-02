import C from '@/components/display/DeltaPill.vue'
import { t } from '../util'
export default { title: 'Data Display/DeltaPill', component: C, tags: ['autodocs'] }
export const Tones = t(`<div class="flex gap-2"><DeltaPill>8% vs yesterday</DeltaPill><DeltaPill tone="bad">18 Lac this week</DeltaPill><DeltaPill tone="good" direction="down">Complaints 4%</DeltaPill><DeltaPill tone="neutral" direction="down">0.2%</DeltaPill></div>`)

