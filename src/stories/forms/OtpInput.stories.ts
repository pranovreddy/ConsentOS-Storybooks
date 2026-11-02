import C from '@/components/forms/OtpInput.vue'
import { t } from '../util'
import { ref } from 'vue'
export default { title: 'Forms/OtpInput', component: C, tags: ['autodocs'] }
export const Default = t(`<OtpInput v-model="v" />`, () => ({ v: ref<string[]>([]) }))
export const Filled = t(`<OtpInput :model-value="['4','8','1','9','2','6']" />`)
export const Invalid = t(`<FormField error="That code is wrong or expired. Request a new one."><OtpInput invalid :model-value="['4','8','1','9','2','0']" /></FormField>`)

