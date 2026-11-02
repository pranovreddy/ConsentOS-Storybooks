import C from '@/components/data/JsonDiff.vue'
import { t } from '../util'
export default { title: 'Data/JsonDiff', component: C, tags: ['autodocs'] }
export const Default = t(`<div class="max-w-lg"><JsonDiff :before="fx.auditRows[0].before" :after="fx.auditRows[0].after" /></div>`)

