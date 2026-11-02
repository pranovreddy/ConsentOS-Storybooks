import C from '@/components/feedback/Skeleton.vue'
import { t } from '../util'
export default { title: 'Feedback/Skeleton', component: C, tags: ['autodocs'] }
export const Composition = t(`<div class="max-w-sm"><Card><div class="flex items-center gap-3"><Skeleton circle width="40px" height="40px" /><div class="flex-1"><Skeleton width="60%" /><Skeleton class="mt-2" width="90%" height="10px" /></div></div><Skeleton class="mt-4" height="80px" /></Card></div>`)

