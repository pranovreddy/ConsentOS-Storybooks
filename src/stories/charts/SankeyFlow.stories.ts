import C from '@/components/charts/SankeyFlow.vue'
import { t } from '../util'
export default { title: 'Charts/SankeyFlow', component: C, tags: ['autodocs'] }
export const Default = t(`<div class="max-w-4xl"><SankeyFlow :nodes="fx.flow.nodes" :links="fx.flow.links" footnote="Visual proportions adjusted for readability. Counts shown are exact." /></div>`)

