import C from '@/components/charts/Sparkline.vue'
import { t } from '../util'
export default { title: 'Charts/Sparkline', component: C, tags: ['autodocs'] }
export const Tones = t(`<div class="flex max-w-2xl gap-6"><Sparkline class="flex-1" :data="[3,4,5,5,6,7,7,8]" /><Sparkline class="flex-1" tone="success" :data="[3,4,5,5,6,7,7,8]" /><Sparkline class="flex-1" tone="danger" :data="[3,3,4,5,6,6,7,7]" /></div>`)

