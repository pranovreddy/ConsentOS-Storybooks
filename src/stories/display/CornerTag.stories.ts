import C from '@/components/display/CornerTag.vue'
import { t } from '../util'
export default { title: 'Data Display/CornerTag', component: C, tags: ['autodocs'] }
export const Default = t(`<div class="flex gap-4"><div class="relative h-24 w-40 rounded-md border border-line bg-[#fffcf5]"><CornerTag>Pending</CornerTag></div><div class="relative h-24 w-40 rounded-md border border-line bg-surface"><CornerTag tone="accepted">Accepted</CornerTag></div><div class="relative h-24 w-40 rounded-md border border-line bg-surface"><CornerTag tone="neutral">Draft</CornerTag></div></div>`)

