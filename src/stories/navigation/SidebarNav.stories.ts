import C from '@/components/navigation/SidebarNav.vue'
import { t } from '../util'
export default { title: 'Navigation/SidebarNav', component: C, tags: ['autodocs'], parameters: { layout: 'fullscreen' } }
export const Default = t(`<div class="h-[720px]"><SidebarNav :groups="fx.enterpriseNav" active="migration" :user="{ name: 'Ravi Menon', role: 'Super Admin' }" /></div>`)
export const NestedAndLocked = t(`<div class="h-[720px]"><SidebarNav :groups="fx.regulatorNav" active="migration" :expanded="['consents']" :user="{ name: 'Ravi Menon', role: 'Super Admin' }" /></div>`)
export const Collapsed = t(`<div class="h-[720px]"><SidebarNav :groups="fx.enterpriseNav" active="migration" start-collapsed :user="{ name: 'Ravi Menon', role: 'Super Admin' }" /></div>`)

