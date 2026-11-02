import C from '@/components/admin/SignatureBlock.vue'
import { t } from '../util'
export default { title: 'Consent Patterns/SignatureBlock', component: C, tags: ['autodocs'] }
export const Unsigned = t(`<div class="max-w-md"><SignatureBlock agreement="the Master Terms of Participation" /></div>`)
export const Signed = t(`<div class="max-w-md"><SignatureBlock :signed="{ name: 'Parth Shah', time: '28 Sept 2026, 12:21 PM', ip: '203.0.113.24' }" /></div>`)

