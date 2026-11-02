import C from '@/components/mobile/BottomNav.vue'
import { t } from '../util'
import { ref } from 'vue'
export default { title: 'Mobile/BottomNav', component: C, tags: ['autodocs'] }
export const Default = t(`<PhoneFrame><BottomNav v-model="v" /></PhoneFrame>`, () => ({ v: ref('wallet') }))

