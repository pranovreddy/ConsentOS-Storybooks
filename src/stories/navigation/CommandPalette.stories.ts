import C from '@/components/navigation/CommandPalette.vue'
import { t } from '../util'
import { ref } from 'vue'
export default { title: 'Navigation/CommandPalette', component: C, tags: ['autodocs'] }
const items = [{ label: 'Apex Fintech Pvt Ltd', group: 'Senders', icon: 'building' }, { label: 'Bluepeak Retail', group: 'Senders', icon: 'building' }, { label: 'Karix', group: 'GTM partners', icon: 'users' }, { label: 'Go to Dashboard', group: 'Actions', icon: 'home', shortcut: 'G D' }]
export const Default = t(`<div><Button variant="secondary" icon="search" @click="open = true">Open search</Button><CommandPalette v-model:open="open" :items="items" /></div>`, () => ({ open: ref(false), items }))

