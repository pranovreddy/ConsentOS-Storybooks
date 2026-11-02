import C from '@/components/feedback/Spinner.vue'
import { t } from '../util'
export default { title: 'Feedback/Spinner', component: C, tags: ['autodocs'] }
export const Sizes = t(`<div class="flex items-center gap-4"><Spinner :size="16" /><Spinner /><Spinner :size="40" /></div>`)

