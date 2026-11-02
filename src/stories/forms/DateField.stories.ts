import C from '@/components/forms/DateField.vue'
import { t } from '../util'
export default { title: 'Forms/DateField', component: C, tags: ['autodocs'] }
export const Default = t(`<div class="flex gap-3"><DateField aria-label="Effective date" /><DateField model-value="2026-07-08" aria-label="Filled" /><DateField invalid aria-label="Invalid" /><DateField disabled aria-label="Disabled" /></div>`)

