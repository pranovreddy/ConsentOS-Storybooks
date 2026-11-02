import C from '@/components/admin/SummaryStat.vue'
import { t } from '../util'
export default { title: 'Consent Patterns/SummaryStat', component: C, tags: ['autodocs'] }
export const Tones = t(`<div class="grid gap-4 md:grid-cols-3"><SummaryStat value="3" label="Active Channel Owners" detail="Airtel, Jio, BSNL" /><SummaryStat value="1" label="Awaiting Acceptance" detail="Airtel" tone="danger" /><SummaryStat value="2" label="Upcoming Changes" detail="In 30 days" tone="warning" /></div>`)

