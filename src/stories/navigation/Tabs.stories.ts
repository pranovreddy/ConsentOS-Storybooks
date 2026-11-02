import C from '@/components/navigation/Tabs.vue'
import { t } from '../util'
import { ref } from 'vue'
export default { title: 'Navigation/Tabs', component: C, tags: ['autodocs'] }
const items = [{ id: 'a', label: 'Migration', icon: 'arrow-left-right' }, { id: 'b', label: 'Subscribers', icon: 'users' }, { id: 'c', label: 'Complaints', icon: 'warning' }, { id: 'd', label: 'Acquisition', icon: 'globe', locked: true }]
export const Underline = t(`<Tabs v-model="v" :items="items"><template #a><p class="portal-type-body">Migration panel</p></template><template #b><p class="portal-type-body">Subscribers panel</p></template><template #c><p class="portal-type-body">Complaints panel</p></template></Tabs>`, () => ({ v: ref('a'), items }))
export const Pill = t(`<Tabs v-model="v" variant="pill" :items="[{ id: 'a', label: 'All', count: 12 }, { id: 'b', label: 'Alerts', count: 3 }, { id: 'c', label: 'Mentions' }]"><template #a><p class="portal-type-body">All</p></template><template #b><p class="portal-type-body">Alerts</p></template><template #c><p class="portal-type-body">Mentions</p></template></Tabs>`, () => ({ v: ref('a') }))

