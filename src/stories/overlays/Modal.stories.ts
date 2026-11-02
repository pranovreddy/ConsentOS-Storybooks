import C from '@/components/overlays/Modal.vue'
import { t } from '../util'
export default { title: 'Overlays/Modal', component: C, tags: ['autodocs'] }
export const Default = t(`<Modal title="Add escalation contact" description="They're alerted when a case breaches its SLA."><template #trigger><Button variant="secondary">Open modal</Button></template><FormField label="Email"><TextInput icon="mail" aria-label="Email" /></FormField><template #footer><Button variant="secondary">Cancel</Button><Button>Save</Button></template></Modal>`)

