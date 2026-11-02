import C from '@/components/display/BigStat.vue'
import { t } from '../util'
export default { title: 'Data Display/BigStat', component: C, tags: ['autodocs'] }
export const Tones = t(`<div class="flex flex-wrap items-baseline gap-8"><BigStat value="14.3" unit="Cr" tone="brand" /><BigStat value="5.9" unit="Cr" /><BigStat value="82" unit="Lac" tone="danger" /><BigStat value="69,000" tone="success" /><BigStat value="1,000" tone="warning" /></div>`)

