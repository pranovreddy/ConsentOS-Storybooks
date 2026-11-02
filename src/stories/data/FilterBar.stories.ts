import C from '@/components/data/FilterBar.vue'
import { t } from '../util'
import { ref } from 'vue'
export default { title: 'Data/FilterBar', component: C, tags: ['autodocs'] }
export const Default = t(`<FilterBar v-model:chips="chips"><div class="w-64"><SearchInput placeholder="Search senders" /></div><div class="w-40"><SelectField :options="[{ label: 'High', value: 'h' }, { label: 'Low', value: 'l' }]" placeholder="Risk" /></div><Button variant="secondary" icon="download">Export</Button></FilterBar>`, () => ({ chips: ref([{ key: 'r', label: 'Risk: High' }, { key: 's', label: 'Status: Pending' }]) }))

