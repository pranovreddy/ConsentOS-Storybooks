import C from '@/components/admin/OutcomeSummary.vue'
import { t } from '../util'
export default { title: 'Consent Patterns/OutcomeSummary', component: C, tags: ['autodocs'] }
export const Default = t(`<OutcomeSummary title="Approved for Migration" description="All 69,000 records approved and migrating automatically." status="All Approved" time="today, 12:26 PM" :stats="[{ label: 'Uploaded', value: '70,000', caption: 'Total records in file', icon: 'upload', tone: 'neutral' }, { label: 'Approved', value: '69,000', caption: '100% of submission', icon: 'circle-check', tone: 'success' }, { label: 'Validation errors', value: '1,000', caption: '1.4% of uploaded', icon: 'warning', tone: 'warning' }]" />`)

