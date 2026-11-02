import C from '@/components/forms/SliderField.vue'
import { t } from '../util'
import { ref } from 'vue'
export default { title: 'Forms/SliderField', component: C, tags: ['autodocs'] }
export const Default = t(`<div class="max-w-sm"><SliderField v-model="v" label="Red risk multiplier" :min="1" :max="3" :step="0.1" :format="(x) => x.toFixed(1) + 'x'" /></div>`, () => ({ v: ref(1.5) }))

