import C from '@/components/navigation/Breadcrumbs.vue'
import { t } from '../util'
export default { title: 'Navigation/Breadcrumbs', component: C, tags: ['autodocs'] }
export const Default = t(`<Breadcrumbs :items="[{ label: 'Stakeholders' }, { label: 'Enterprises' }, { label: 'HDFC Bank' }]" />`)

