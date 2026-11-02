import C from '@/components/display/ChannelLabel.vue'
import { t } from '../util'
export default { title: 'Data Display/ChannelLabel', component: C, tags: ['autodocs'] }
export const All = t(`<div class="flex gap-6"><ChannelLabel channel="SMS" /><ChannelLabel channel="Voice" /><ChannelLabel channel="RCS" /><ChannelLabel channel="Email" /></div>`)

