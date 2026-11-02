import C from '@/components/forms/PasswordInput.vue'
import { t } from '../util'
import { ref } from 'vue'
export default { title: 'Forms/PasswordInput', component: C, tags: ['autodocs'] }
export const Plain = t(`<div class="max-w-sm"><PasswordInput /></div>`)
export const WithStrengthRules = t(`<div class="max-w-md"><PasswordInput v-model="p" show-rules placeholder="Create a password" /></div>`, () => ({ p: ref('Consent') }))

