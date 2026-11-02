import C from '@/components/admin/OnboardingPath.vue'
import { t } from '../util'
export default { title: 'Consent Patterns/OnboardingPath', component: C, tags: ['autodocs'] }
export const Default = t(`<div class="max-w-4xl"><OnboardingPath title="Your path to kick off migration" :percent="29" :stages="fx.onboardingStages" /></div>`)

