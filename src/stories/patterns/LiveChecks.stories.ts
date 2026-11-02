import C from '@/components/admin/LiveChecks.vue'
import { t } from '../util'
export default { title: 'Consent Patterns/LiveChecks', component: C, tags: ['autodocs'] }
export const Default = t(`<div class="max-w-md"><LiveChecks :checks="[{ label: 'DLT registration valid', state: 'pass' }, { label: 'Not blacklisted', state: 'pass' }, { label: 'KYC complete', state: 'running' }, { label: 'Agreement on file', state: 'pending' }, { label: 'Sender ID verified', state: 'fail', detail: 'Mismatch on PEID' }]" /></div>`)

