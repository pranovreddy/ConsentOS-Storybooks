import C from '@/components/navigation/SegmentedControl.vue'
import { t } from '../util'
import { ref } from 'vue'
export default { title: 'Navigation/SegmentedControl', component: C, tags: ['autodocs'] }
export const Default = t(`<SegmentedControl v-model="v" :options="[{ label: 'Consents', value: 'c' }, { label: 'Subscribers', value: 's' }]" />`, () => ({ v: ref('c') }))

