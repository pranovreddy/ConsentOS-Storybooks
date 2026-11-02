import C from '@/components/display/AccordionList.vue'
import { t } from '../util'
export default { title: 'Data Display/AccordionList', component: C, tags: ['autodocs'] }
export const Default = t(`<div class="max-w-xl"><AccordionList default-open="m" :items="[{ id: 'm', title: 'Migration', body: 'One-time charge per consent moved to DLT.' }, { id: 'a', title: 'Acquisition', body: 'Charged per new consent captured.' }, { id: 's', title: 'Scrubbing', body: 'Per consent scrub, priced per channel.' }]" /></div>`)

