import C from '@/components/display/Badge.vue'
import { t, play } from '../util'
export default { title: 'Data Display/Badge', component: C, tags: ['autodocs'], argTypes: { variant: { control: 'select', options: ['success', 'warning', 'danger', 'info', 'neutral', 'brand', 'role'] } } }
export const Playground = play('Badge', { variant: 'brand', size: 'md', dot: false, caps: false }, '1-click')
export const Variants = t(`<div class="flex flex-wrap items-center gap-2"><Badge variant="brand">1-click</Badge><Badge variant="warning">Manual</Badge><Badge>Auto</Badge><Badge variant="success" dot>All Approved</Badge><Badge variant="danger" size="sm" caps>Mandatory</Badge><Badge size="sm" caps>Optional</Badge><Badge variant="role" size="sm" caps>Super Admin</Badge><Badge variant="info" icon="info">Info</Badge></div>`)

