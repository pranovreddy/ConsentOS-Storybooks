import C from '@/components/admin/CsvFormatCard.vue'
import { t } from '../util'
export default { title: 'Consent Patterns/CsvFormatCard', component: C, tags: ['autodocs'] }
export const Default = t(`<div class="max-w-sm"><CsvFormatCard v-bind="fx.csv" /></div>`)

