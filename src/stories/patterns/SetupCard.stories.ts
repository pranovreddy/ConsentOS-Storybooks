import C from '@/components/admin/SetupCard.vue'
import { t } from '../util'
export default { title: 'Consent Patterns/SetupCard', component: C, tags: ['autodocs'] }
export const Default = t(`<div class="w-56"><SetupCard :done="2" :total="3" /></div>`)

