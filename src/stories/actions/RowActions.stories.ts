import C from '@/components/actions/RowActions.vue'
import { t } from '../util'
export default { title: 'Actions/RowActions', component: C, tags: ['autodocs'] }
export const Default = t(`<RowActions :items="[{ label: 'View details', icon: 'eye' }, { label: 'Resend invite', icon: 'send' }, { label: 'Deactivate', icon: 'ban', danger: true }]" />`)

