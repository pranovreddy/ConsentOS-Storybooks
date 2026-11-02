import C from '@/components/mobile/AppHeader.vue'
import { t } from '../util'
export default { title: 'Mobile/AppHeader', component: C, tags: ['autodocs'] }
export const Search = t(`<PhoneFrame><AppHeader title="My Wallet" subtitle="Manage your purposes" search /></PhoneFrame>`)
export const Brand = t(`<PhoneFrame><AppHeader title="HDFC Bank" subtitle="HDFC Bank Limited" back :brand="{ name: 'HDFC Bank', color: '#d9232e' }" /></PhoneFrame>`)

