import C from '@/components/forms/DeclarationCheck.vue'
import { t } from '../util'
import { ref } from 'vue'
export default { title: 'Forms/DeclarationCheck', component: C, tags: ['autodocs'] }
export const Default = t(`<div class="max-w-2xl"><DeclarationCheck v-model="v">We confirm that the customer consents uploaded comply with applicable laws, TRAI regulations and directions. We affirm their accuracy and acknowledge that false declarations may lead to legal action.</DeclarationCheck></div>`, () => ({ v: ref(false) }))

