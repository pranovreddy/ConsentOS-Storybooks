import C from '@/components/actions/IconButton.vue'
import { t, play } from '../util'
export default { title: 'Actions/IconButton', component: C, tags: ['autodocs'] }
export const Playground = play('IconButton', { icon: 'bell', label: 'Notifications', variant: 'soft', size: 'md', dot: true })
export const Variants = t(`
<div class="flex flex-wrap items-center gap-3"><IconButton icon="chevrons-left" label="Collapse" /><IconButton icon="download" label="Download" variant="outline" /><IconButton icon="ellipsis" label="More" variant="ghost" /><IconButton icon="languages" label="Language" variant="round" size="lg" /><IconButton icon="bell" label="Notifications" size="lg" dot /><span class="rounded-md bg-app-600 p-3"><IconButton icon="arrow-left" label="Back" variant="on-brand" /></span></div>`)

