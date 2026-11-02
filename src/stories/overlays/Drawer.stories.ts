import C from '@/components/overlays/Drawer.vue'
import { t } from '../util'
export default { title: 'Overlays/Drawer', component: C, tags: ['autodocs'] }
export const Default = t(`<Drawer title="Apex Fintech Pvt Ltd" description="PEID 1201****7841"><template #trigger><Button variant="secondary">Open drawer</Button></template><div class="p-5"><KeyValueList :items="fx.accountContext" /></div><template #footer><Button variant="secondary">Open full page</Button><Button>Approve</Button></template></Drawer>`)
export const Notifications = t(`<Drawer title="Notifications"><template #trigger><IconButton icon="bell" label="Notifications" dot size="lg" /></template><div class="divide-y divide-line"><NotificationItem v-for="n in fx.notifications" :key="n.title" v-bind="n" /></div></Drawer>`)

