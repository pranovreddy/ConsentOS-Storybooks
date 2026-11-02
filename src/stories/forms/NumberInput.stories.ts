import C from '@/components/forms/NumberInput.vue'
import { t } from '../util'
import { ref } from 'vue'
export default { title: 'Forms/NumberInput', component: C, tags: ['autodocs'] }
export const Default = t(`<NumberInput v-model="v" :min="1" :max="12" aria-label="Lock period in months" />`, () => ({ v: ref(6) }))

