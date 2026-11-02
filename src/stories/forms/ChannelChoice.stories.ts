import C from '@/components/forms/ChannelChoice.vue'
import { t } from '../util'
import { ref } from 'vue'
export default { title: 'Forms/ChannelChoice', component: C, tags: ['autodocs'] }
export const Default = t(`<ChannelChoice v-model="v" />`, () => ({ v: ref(['SMS']) }))
export const Disabled = t(`<ChannelChoice disabled :model-value="['SMS']" />`)

