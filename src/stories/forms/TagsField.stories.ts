import C from '@/components/forms/TagsField.vue'
import { t } from '../util'
import { ref } from 'vue'
export default { title: 'Forms/TagsField', component: C, tags: ['autodocs'] }
export const Default = t(`<div class="max-w-md"><TagsField v-model="v" placeholder="Add a sender ID and press Enter" /></div>`, () => ({ v: ref(['HDFCBK', 'PAYZAP']) }))

