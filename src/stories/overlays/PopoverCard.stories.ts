import C from '@/components/overlays/PopoverCard.vue'
import { t } from '../util'
export default { title: 'Overlays/PopoverCard', component: C, tags: ['autodocs'] }
export const Default = t(`<PopoverCard><template #trigger><Button variant="secondary" icon="shield-check" size="sm">Encrypted end-to-end</Button></template><p class="portal-type-body-emphasis">How encryption works</p><p class="portal-type-body-muted mt-1">Your file is encrypted on your device before upload and validated inside an isolated environment.</p></PopoverCard>`)

