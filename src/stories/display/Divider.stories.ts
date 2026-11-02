import C from '@/components/display/Divider.vue'
import { t } from '../util'
export default { title: 'Data Display/Divider', component: C, tags: ['autodocs'] }
export const Variants = t(`<div class="flex max-w-md flex-col gap-5"><Divider /><Divider dashed /><Divider>Optional</Divider><div class="flex h-6 items-center gap-3 text-[13px]">Left<Divider orientation="vertical" />Right</div></div>`)

