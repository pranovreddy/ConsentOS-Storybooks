import C from '@/components/admin/EvidenceCard.vue'
import { t } from '../util'
export default { title: 'Consent Patterns/EvidenceCard', component: C, tags: ['autodocs'] }
export const Default = t(`<div class="grid max-w-3xl gap-4 md:grid-cols-2"><EvidenceCard title="DLT History" icon="database" verdict="Clean" verdict-tone="success" :items="[{ label: 'Registered', value: '3 years' }, { label: 'Violations', value: '0' }]" /><EvidenceCard title="Risk Signals" icon="warning" verdict="Elevated" verdict-tone="warning" :items="[{ label: 'Complaints, 30d', value: '41' }, { label: 'Trend', value: 'Rising' }]" /></div>`)

