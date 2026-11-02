import C from '@/components/navigation/FilterPills.vue'
import { t } from '../util'
import { ref } from 'vue'
export default { title: 'Navigation/FilterPills', component: C, tags: ['autodocs'] }
export const Default = t(`<FilterPills v-model="v" :options="[{ label: 'DND', value: 'd' }, { label: 'Non-DND', value: 'n' }, { label: 'All', value: 'a' }]" />`, () => ({ v: ref('d') }))
export const WithCounts = t(`<FilterPills v-model="v" size="md" tone="app" :options="[{ label: 'All', value: 'a', count: 12 }, { label: 'Opted-in', value: 'i', count: 4 }, { label: 'Opted-out', value: 'o', count: 8 }]" />`, () => ({ v: ref('a') }))

