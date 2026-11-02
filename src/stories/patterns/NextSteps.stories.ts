import C from '@/components/admin/NextSteps.vue'
import { t } from '../util'
export default { title: 'Consent Patterns/NextSteps', component: C, tags: ['autodocs'] }
export const Default = t(`<NextSteps :steps="[{ title: 'File uploaded', description: 'Encrypted file received and queued.', icon: 'upload', state: 'done' }, { title: 'Review results', description: 'Breakdown of valid and error records.', icon: 'search', state: 'active' }, { title: 'Apply AI Fixes', description: 'Resolve fixable errors in one click.', icon: 'sparkles', state: 'upcoming' }]" />`)

