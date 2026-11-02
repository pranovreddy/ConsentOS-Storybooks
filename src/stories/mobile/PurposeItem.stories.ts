import C from '@/components/mobile/PurposeItem.vue'
import { t } from '../util'
import { ref } from 'vue'
export default { title: 'Mobile/PurposeItem', component: C, tags: ['autodocs'] }
export const Default = t(`<PhoneFrame><div class="m-5 divide-y divide-line rounded-[20px] border border-line bg-surface p-4"><PurposeItem v-model:enabled="a" title="Personal Loans" :benefits="['Pre-approved Offers', 'Lower Rate Offers']" /><PurposeItem v-model:enabled="b" title="Credit Cards" :benefits="['New Card Offers', 'Upgrade Offers']" /></div></PhoneFrame>`, () => ({ a: ref(true), b: ref(false) }))

