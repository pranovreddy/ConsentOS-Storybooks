import C from '@/components/navigation/Topbar.vue'
import { t } from '../util'
export default { title: 'Navigation/Topbar', component: C, tags: ['autodocs'], parameters: { layout: 'fullscreen' } }
export const Default = t(`<Topbar org="HDFC Bank L" org-type="Enterprise" unread />`)
export const WithSearch = t(`<Topbar org="Telecom Regulator" org-type="Regulator" org-color="#1e40af"><div class="max-w-md"><SearchInput placeholder="Search" shortcut="⌘K" /></div></Topbar>`)

