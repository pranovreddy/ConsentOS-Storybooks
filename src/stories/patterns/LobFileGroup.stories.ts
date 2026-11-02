import C from '@/components/admin/LobFileGroup.vue'
import { t } from '../util'
export default { title: 'Consent Patterns/LobFileGroup', component: C, tags: ['autodocs'] }
export const Default = t(`<Card flush><LobFileGroup v-for="g in fx.lobGroups.slice(0, 2)" :key="g.title" v-bind="g" /></Card>`)

