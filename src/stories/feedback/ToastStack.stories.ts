import C, { useToast } from '@/components/feedback/ToastStack.vue'
import { t } from '../util'
export default { title: 'Feedback/ToastStack', component: C, tags: ['autodocs'] }
export const Tones = t(`<div class="flex flex-wrap gap-2"><Button variant="secondary" @click="toast.show({ tone: 'success', title: 'Changes saved' })">Success</Button><Button variant="secondary" @click="toast.show({ tone: 'danger', title: 'Couldn\\'t save changes', action: 'Retry' })">Error</Button><Button variant="secondary" @click="toast.show({ tone: 'warning', title: 'Session ends soon' })">Warning</Button><Button variant="secondary" @click="toast.show({ tone: 'info', title: 'Draft saved at 12:21' })">Info</Button><ToastStack /></div>`, () => ({ toast: useToast() }))

