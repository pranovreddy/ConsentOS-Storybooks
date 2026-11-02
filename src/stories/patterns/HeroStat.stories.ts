import C from '@/components/admin/HeroStat.vue'
import { t } from '../util'
export default { title: 'Consent Patterns/HeroStat', component: C, tags: ['autodocs'] }
export const Default = t(`<div class="grid max-w-3xl gap-4 md:grid-cols-2"><HeroStat label="Active" value="691" caption="enterprises" /><HeroStat label="Pending approval" value="₹8,379.99" pill="1,59,650 consents" :progress="40" /></div>`)

