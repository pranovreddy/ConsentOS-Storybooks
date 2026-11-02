import C from '@/components/display/Hint.vue'
import { t } from '../util'
export default { title: 'Data Display/Hint', component: C, tags: ['autodocs'] }
export const InfoDot = t(`<div class="flex items-center gap-2 p-8 text-[13px]">Consent Validity Date <Hint text="Leave blank if consent has no expiry." /></div>`)
export const OnAButton = t(`<div class="p-8"><Hint text="Your file is encrypted on your device before upload."><Button variant="secondary" icon="shield-check" size="sm">Encrypted end-to-end</Button></Hint></div>`)

