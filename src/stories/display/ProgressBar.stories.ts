import C from '@/components/display/ProgressBar.vue'
import { t, play } from '../util'
export default { title: 'Data Display/ProgressBar', component: C, tags: ['autodocs'] }
export const Playground = play('ProgressBar', { value: 41, size: 'md', tone: 'brand' })
export const Tones = t(`<div class="flex max-w-md flex-col gap-3"><ProgressBar :value="41" size="md" /><ProgressBar :value="24" tone="gradient" size="md" /><ProgressBar :value="100" tone="success" /><ProgressBar :value="57" tone="warning" /><ProgressBar :value="12" tone="danger" /><ProgressBar :value="29" size="xs" /></div>`)

