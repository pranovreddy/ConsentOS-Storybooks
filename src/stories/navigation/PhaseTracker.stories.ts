import C from '@/components/navigation/PhaseTracker.vue'
import { t } from '../util'
export default { title: 'Navigation/PhaseTracker', component: C, tags: ['autodocs'] }
export const Default = t(`<PhaseTracker :progress="70" :phases="[{ title: 'Upload Window', detail: 'Tap to view', state: 'done', linked: true }, { title: 'User Notification', detail: 'Tap to view', state: 'done', linked: true }, { title: 'Writing to DLT', detail: 'Closes in 10 days', state: 'active' }, { title: 'Migration Complete', detail: 'Opens on 08 July 2026', state: 'upcoming' }]" />`)

