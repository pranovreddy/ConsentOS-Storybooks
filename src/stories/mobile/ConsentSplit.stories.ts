import C from '@/components/mobile/ConsentSplit.vue'
import { t } from '../util'
export default { title: 'Mobile/ConsentSplit', component: C, tags: ['autodocs'] }
export const Default = t(`<PhoneFrame><div class="p-5"><ConsentSplit :opted-in="2" :opted-out="5" /></div></PhoneFrame>`)

