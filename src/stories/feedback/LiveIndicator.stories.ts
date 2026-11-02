import C from '@/components/feedback/LiveIndicator.vue'
import { t } from '../util'
export default { title: 'Feedback/LiveIndicator', component: C, tags: ['autodocs'] }
export const States = t(`<div class="flex gap-6"><LiveIndicator /><LiveIndicator state="paused" /><LiveIndicator state="closed" /><LiveIndicator>Writing to DLT</LiveIndicator></div>`)

