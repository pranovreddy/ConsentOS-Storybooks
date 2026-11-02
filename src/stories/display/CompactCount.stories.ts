import C from '@/components/display/CompactCount.vue'
import { t } from '../util'
export default { title: 'Data Display/CompactCount', component: C, tags: ['autodocs'] }
export const Default = t(`<div class="flex gap-6 p-8 text-[13px]"><CompactCount :value="143000000" suffix="subscribers" /><CompactCount :value="8200000" /><CompactCount :value="48407" /><CompactCount :value="351" /></div>`)

