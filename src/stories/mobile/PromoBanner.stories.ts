import C from '@/components/mobile/PromoBanner.vue'
import { t } from '../util'
export default { title: 'Mobile/PromoBanner', component: C, tags: ['autodocs'] }
export const Default = t(`<PhoneFrame><div class="p-5"><PromoBanner :slides="[{ title: 'Your consent wallet', body: 'See every brand that can reach you. Change it whenever you want.' }, { title: 'Stop spam', body: 'Report a consent you never gave.' }]" /></div></PhoneFrame>`)

