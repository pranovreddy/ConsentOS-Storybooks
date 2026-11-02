import C from '@/components/admin/KpiCard.vue'
import { t, play } from '../util'
export default { title: 'Consent Patterns/KpiCard', component: C, tags: ['autodocs'] }
export const Playground = play('KpiCard', { label: 'Notified subscribers', value: '14.3', unit: 'Cr', caption: '94% of covered base reached', icon: 'send', tone: 'brand', delta: '8% vs yesterday', trend: [3, 4, 5, 5, 6, 7, 7, 8], trendTone: 'success' })
export const Tones = t(`<div class="grid gap-4 md:grid-cols-3"><KpiCard label="Lead metric" value="14.3" unit="Cr" caption="94% reached" icon="send" tone="brand" delta="8% vs yesterday" :trend="[3,4,5,5,6,7,7,8]" trend-tone="success" /><KpiCard label="With progress" value="5.9" unit="Cr" caption="41% of notified" icon="send" :progress="41" /><KpiCard label="Danger metric" value="82" unit="Lac" caption="5.7% of notified" icon="ban" tone="danger" delta="18 Lac this week" delta-tone="bad" :trend="[3,3,4,5,6,6,7,7]" trend-tone="danger" /></div>`)
export const Loading = t(`<div class="max-w-xs"><KpiCard label="Covered subscribers" icon="activity" tone="brand" loading /></div>`)

