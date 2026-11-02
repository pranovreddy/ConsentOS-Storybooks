import C from '@/components/admin/GoLiveBanner.vue'
import { t } from '../util'
export default { title: 'Consent Patterns/GoLiveBanner', component: C, tags: ['autodocs'] }
export const Incomplete = t(`<GoLiveBanner :items="[{ label: 'Profile Verified', done: true }, { label: 'Minimum 3 Users Added', done: true }, { label: 'Terms Accepted', done: true }, { label: 'Registrar Acknowledged' }, { label: 'GTM Strategy Defined' }, { label: 'Rate Card Published' }, { label: 'MSA Signed' }]" />`)
export const Complete = t(`<GoLiveBanner :items="[{ label: 'Profile Verified', done: true }, { label: 'Terms Accepted', done: true }]" />`)

