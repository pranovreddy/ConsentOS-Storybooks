import C from '@/components/forms/SearchInput.vue'
import { t } from '../util'
import { ref } from 'vue'
export default { title: 'Forms/SearchInput', component: C, tags: ['autodocs'] }
export const Default = t(`<div class="flex max-w-sm flex-col gap-3"><SearchInput v-model="q" placeholder="Search senders" shortcut="⌘K" /><SearchInput model-value="Apex Fintech" placeholder="Search with a value" /></div>`, () => ({ q: ref('') }))

