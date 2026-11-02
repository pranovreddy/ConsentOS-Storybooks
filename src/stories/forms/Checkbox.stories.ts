import C from '@/components/forms/Checkbox.vue'
import { t } from '../util'
import { ref } from 'vue'
export default { title: 'Forms/Checkbox', component: C, tags: ['autodocs'] }
export const States = t(`
<div class="flex flex-col gap-3"><Checkbox v-model="a">Unchecked, try me</Checkbox><Checkbox :model-value="true">Checked</Checkbox><Checkbox model-value="indeterminate">Indeterminate</Checkbox><Checkbox disabled>Disabled</Checkbox><Checkbox invalid>Invalid</Checkbox><Checkbox :model-value="true" description="We'll email you when validation finishes.">With a description</Checkbox></div>`, () => ({ a: ref(false) }))

