import C from '@/components/forms/TextInput.vue'
import { t, play } from '../util'
export default { title: 'Forms/TextInput', component: C, tags: ['autodocs'] }
export const Playground = play('TextInput', { placeholder: 'Enterprise name', invalid: false, disabled: false, ariaLabel: 'Enterprise name' })
export const States = t(`
<div class="grid max-w-2xl gap-5 md:grid-cols-2">
  <FormField label="Default"><TextInput placeholder="Enterprise name" aria-label="Default" /></FormField>
  <FormField label="With icon"><TextInput icon="mail" placeholder="name@company.com" aria-label="Email" /></FormField>
  <FormField label="Required" required hint="As on your DLT registration"><TextInput model-value="HDFC Bank Limited" aria-label="Required" /></FormField>
  <FormField label="Error" error="Enter a 10-digit mobile number, with no country code."><TextInput invalid model-value="98765" aria-label="Error" /></FormField>
  <FormField label="Disabled" disabled><TextInput disabled model-value="Auto-filled from DLT" aria-label="Disabled" /></FormField>
  <FormField label="Read only"><TextInput readonly mono model-value="1201158765433231" aria-label="Read only" /></FormField>
  <FormField label="Prefix and suffix"><TextInput prefix="+91" suffix="10 digit" mono aria-label="Mobile" /></FormField>
</div>`)

