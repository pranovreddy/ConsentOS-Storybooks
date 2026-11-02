import C from '@/components/forms/TextArea.vue'
import { t } from '../util'
import { ref } from 'vue'
export default { title: 'Forms/TextArea', component: C, tags: ['autodocs'] }
export const Default = t(`<div class="max-w-lg"><TextArea v-model="v" placeholder="Explain your appeal and attach valid proof" :max-length="280" aria-label="Appeal reason" /></div>`, () => ({ v: ref('') }))
export const Invalid = t(`<div class="max-w-lg"><TextArea invalid aria-label="Reason" /></div>`)
export const Disabled = t(`<div class="max-w-lg"><TextArea disabled model-value="Locked after submission" aria-label="Locked" /></div>`)

