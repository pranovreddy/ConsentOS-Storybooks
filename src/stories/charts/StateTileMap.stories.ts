import C from '@/components/charts/StateTileMap.vue'
import { t } from '../util'
export default { title: 'Charts/StateTileMap', component: C, tags: ['autodocs'] }
export const Default = t(`<StateTileMap :values="fx.stateValues" unit="Cr" />`)
