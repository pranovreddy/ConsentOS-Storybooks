import C from '@/components/feedback/FeedbackCard.vue'
import { t } from '../util'
export default { title: 'Feedback/FeedbackCard', component: C, tags: ['autodocs'] }
export const Variants = t(`<div class="grid max-w-4xl gap-4 md:grid-cols-3"><FeedbackCard title="Invite sent" description="They'll get an email within a few minutes." primary-label="Done" /><FeedbackCard variant="error" title="Upload failed" description="We couldn't read this file. Try again as CSV." primary-label="Try again" secondary-label="Cancel" /><FeedbackCard variant="warning" title="Terminate this agreement?" description="Rates stop applying at the end of this cycle." primary-label="Terminate" secondary-label="Keep" /></div>`)

