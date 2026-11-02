import C from '@/components/overlays/ConfirmDialog.vue'
import { t } from '../util'
export default { title: 'Overlays/ConfirmDialog', component: C, tags: ['autodocs'] }
export const Binding = t(`<ConfirmDialog title="Publish this rate card?" description="It locks for 6 months and applies to every assigned enterprise." confirm-label="Publish" icon="credit-card"><template #trigger><Button>Publish</Button></template></ConfirmDialog>`)
export const Destructive = t(`<ConfirmDialog tone="danger" title="Cancel this migration?" description="The uploaded file is discarded. You can upload a new one any time." confirm-label="Cancel migration" cancel-label="Keep going" icon="trash"><template #trigger><Button variant="danger">Cancel migration</Button></template></ConfirmDialog>`)

