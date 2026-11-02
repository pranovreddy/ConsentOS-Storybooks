import C from '@/components/display/Card.vue'
import { t } from '../util'
import { ref } from 'vue'
export default { title: 'Data Display/Card', component: C, tags: ['autodocs'] }
export const Basic = t(`<div class="max-w-md"><Card><p class="portal-type-body">A plain surface.</p></Card></div>`)
export const WithHeader = t(`<div class="max-w-xl"><Card title="Panel title" description="Supporting description for the panel" icon="database"><template #actions><FilterPills v-model="v" :options="[{ label: 'DND', value: 'd' }, { label: 'All', value: 'a' }]" /></template><p class="portal-type-body">Body content</p><template #footer><LinkArrow size="sm">Open report</LinkArrow></template></Card></div>`, () => ({ v: ref('d') }))

