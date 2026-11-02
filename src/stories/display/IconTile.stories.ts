import C from '@/components/display/IconTile.vue'
import { t } from '../util'
export default { title: 'Data Display/IconTile', component: C, tags: ['autodocs'] }
export const Tones = t(`<div class="flex items-center gap-3"><IconTile icon="sparkles" /><IconTile icon="circle-check" tone="success" /><IconTile icon="bell" tone="warning" /><IconTile icon="warning" tone="danger" /><IconTile icon="copy" tone="neutral" /><IconTile icon="check" tone="solid-success" /></div>`)
export const Sizes = t(`<div class="flex items-center gap-3"><IconTile icon="map" size="xs" /><IconTile icon="map" size="sm" /><IconTile icon="map" /><IconTile icon="map" size="lg" /><IconTile icon="map" round /></div>`)

