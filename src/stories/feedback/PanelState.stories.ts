import C from '@/components/feedback/PanelState.vue'
import { t } from '../util'
export default { title: 'Feedback/PanelState', component: C, tags: ['autodocs'] }
export const States = t(`<div class="grid max-w-4xl gap-4 md:grid-cols-3"><Card><PanelState kind="loading" /></Card><Card><PanelState title="No partners yet" description="Nominate a partner to start sending through them." action-label="Nominate partner" icon="users" /></Card><Card><PanelState kind="error" title="Data unavailable" description="We couldn't load this data. Try again in a moment." action-label="Retry" /></Card></div>`)

