import C from '@/components/mobile/ListCard.vue'
import { t } from '../util'
export default { title: 'Mobile/ListCard', component: C, tags: ['autodocs'] }
export const Action = t(`<PhoneFrame><div class="flex flex-col gap-3 p-5"><ListCard icon="sliders" title="Manage Preferences" description="Choose days, times, and how often brands can reach you." /><ListCard icon="warning" title="Raise a Complaint" description="Report unauthorised spam" /></div></PhoneFrame>`)
export const BrandEntry = t(`<PhoneFrame><div class="flex flex-col gap-3 p-5"><ListCard v-bind="fx.wallet[0]" /><ListCard v-bind="fx.wallet[4]" /></div></PhoneFrame>`)

