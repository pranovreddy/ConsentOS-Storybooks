import C from '@/components/feedback/NotificationItem.vue'
import { t } from '../util'
export default { title: 'Feedback/NotificationItem', component: C, tags: ['autodocs'] }
export const List = t(`<div class="max-w-md"><Card flush><div class="divide-y divide-line"><NotificationItem v-for="n in fx.notifications" :key="n.title" v-bind="n" /></div></Card></div>`)

