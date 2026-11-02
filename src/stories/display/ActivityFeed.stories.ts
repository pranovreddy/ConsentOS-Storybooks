import C from '@/components/display/ActivityFeed.vue'
import { t } from '../util'
export default { title: 'Data Display/ActivityFeed', component: C, tags: ['autodocs'] }
export const Default = t(`<div class="max-w-md"><Card title="Recent activity"><ActivityFeed :items="[{ icon: 'circle-check', tone: 'success', title: 'Approved Apex Fintech', actor: 'Priya Nair', time: '10:18' }, { icon: 'credit-card', tone: 'brand', title: 'Published rate card v3', actor: 'Ravi Menon', time: 'Yesterday' }, { icon: 'warning', tone: 'danger', title: 'QuickCash Loans breached SLA', actor: 'System', time: 'Yesterday' }]" /></Card></div>`)

