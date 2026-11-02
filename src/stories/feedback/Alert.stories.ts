import C from '@/components/feedback/Alert.vue'
import { t } from '../util'
export default { title: 'Feedback/Alert', component: C, tags: ['autodocs'] }
export const Tones = t(`<div class="flex max-w-2xl flex-col gap-3"><Alert title="Heads up">The upload window closes in 10 days.</Alert><Alert tone="success" title="Saved">Your changes are live.</Alert><Alert tone="warning" title="Session ending" dismissible>Your session ends in 2 minutes.</Alert><Alert tone="danger" title="Couldn't save">The server didn't respond. Check your connection and try again.<template #actions><Button size="sm" variant="secondary" icon="refresh">Retry</Button></template></Alert></div>`)

