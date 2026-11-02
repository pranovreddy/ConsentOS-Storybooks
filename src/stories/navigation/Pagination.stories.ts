import C from '@/components/navigation/Pagination.vue'
import { t } from '../util'
import { ref } from 'vue'
export default { title: 'Navigation/Pagination', component: C, tags: ['autodocs'] }
export const Full = t(`<Pagination v-model="p" :total="1240" :page-size="10" />`, () => ({ p: ref(4) }))
export const Compact = t(`<div class="max-w-xs"><Pagination v-model="p" compact :total="24" :page-size="5" /></div>`, () => ({ p: ref(1) }))

