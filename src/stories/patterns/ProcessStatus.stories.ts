import C from '@/components/admin/ProcessStatus.vue'
import { t } from '../util'
export default { title: 'Consent Patterns/ProcessStatus', component: C, tags: ['autodocs'] }
const steps = [{ label: 'Validating data integrity', state: 'done' }, { label: 'Checking for duplicates', state: 'done' }, { label: 'Generating AI suggestions', state: 'active' }, { label: 'Preparing results', state: 'pending' }]
export const Brand = t(`<div class="max-w-md"><ProcessStatus title="Processing your data" description="Analysing and standardising your consent records" :steps="steps" :percent="63" estimate="~15 minutes" /></div>`, () => ({ steps }))
export const Success = t(`<div class="max-w-md"><ProcessStatus tone="success" title="Running Consent Verification" description="We're verifying each consent record" :steps="steps" :percent="63" estimate="~15 minutes" /></div>`, () => ({ steps }))

