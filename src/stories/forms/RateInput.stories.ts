import C from '@/components/forms/RateInput.vue'
import { t } from '../util'
import { ref } from 'vue'
export default { title: 'Forms/RateInput', component: C, tags: ['autodocs'] }
export const WithFloor = t(`<div class="flex max-w-xs flex-col gap-5"><RateInput v-model="a" :floor="0.8" unit="per consent" /><RateInput v-model="b" :floor="0.8" unit="per consent" /></div>`, () => ({ a: ref('0.95'), b: ref('0.60') }))

