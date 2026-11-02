import C from '@/components/forms/SelectField.vue'
import { t } from '../util'
import { ref } from 'vue'
export default { title: 'Forms/SelectField', component: C, tags: ['autodocs'] }
export const Default = t(`<div class="max-w-sm"><SelectField v-model="v" :options="fx.lobOptions" placeholder="Select LOB" /></div>`, () => ({ v: ref<string>() }))
export const Selected = t(`<div class="max-w-sm"><SelectField model-value="cc" :options="fx.lobOptions" /></div>`)
export const Small = t(`<div class="w-36"><SelectField model-value="both" size="sm" aria-label="DND" :options="[{ label: 'Both', value: 'both' }, { label: 'DND', value: 'dnd' }, { label: 'Non-DND', value: 'non' }]" /></div>`)
export const Invalid = t(`<div class="max-w-sm"><SelectField invalid :options="fx.lobOptions" placeholder="Select LOB" /></div>`)
export const Disabled = t(`<div class="max-w-sm"><SelectField disabled :options="fx.lobOptions" placeholder="Select LOB" /></div>`)

