import C from '@/components/forms/FormField.vue'
import { t } from '../util'
export default { title: 'Forms/FormField', component: C, tags: ['autodocs'] }
export const Default = t(`
<div class="portal-stack-form max-w-sm">
  <FormField label="Line of business (LOB)" required hint="Each upload belongs to one LOB."><SelectField :options="fx.lobOptions" placeholder="Select LOB" /></FormField>
  <FormField label="Reason" error="Add a reason. It's captured in the audit trail."><TextArea invalid aria-label="Reason" /></FormField>
</div>`)

