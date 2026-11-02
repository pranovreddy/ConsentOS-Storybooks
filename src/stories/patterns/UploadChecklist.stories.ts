import C from '@/components/admin/UploadChecklist.vue'
import { t } from '../util'
export default { title: 'Consent Patterns/UploadChecklist', component: C, tags: ['autodocs'] }
export const Empty = t(`<div class="max-w-sm"><UploadChecklist :items="fx.checklistEmpty" /></div>`)
export const Partial = t(`<div class="max-w-sm"><UploadChecklist :items="[{ label: 'Select LOB', detail: 'Credit Card', done: true }, { label: 'Upload encrypted file', detail: 'demo_consents.csv', done: true }, { label: 'Sign undertaking', detail: 'Confirm the declaration.' }]" /></div>`)

