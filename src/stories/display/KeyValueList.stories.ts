import C from '@/components/display/KeyValueList.vue'
import { t } from '../util'
export default { title: 'Data Display/KeyValueList', component: C, tags: ['autodocs'] }
export const Default = t(`<div class="max-w-xs"><Card><KeyValueList :items="fx.accountContext" /></Card></div>`)

