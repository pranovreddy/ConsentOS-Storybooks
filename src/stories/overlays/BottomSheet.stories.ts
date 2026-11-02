import C from '@/components/overlays/BottomSheet.vue'
import { t } from '../util'
import { ref } from 'vue'
export default { title: 'Overlays/BottomSheet', component: C, tags: ['autodocs'] }
export const Default = t(`<BottomSheet title="Choose your language" description="You can change this any time."><template #trigger><Button variant="secondary" icon="languages">Open sheet</Button></template><RadioGroup v-model="v" aria-label="Language" :options="[{ label: 'English', value: 'en' }, { label: 'हिन्दी', value: 'hi' }, { label: 'தமிழ்', value: 'ta' }, { label: 'తెలుగు', value: 'te' }]" /></BottomSheet>`, () => ({ v: ref('en') }))

