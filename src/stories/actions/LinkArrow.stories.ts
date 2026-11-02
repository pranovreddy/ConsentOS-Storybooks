import C from '@/components/actions/LinkArrow.vue'
import { t } from '../util'
export default { title: 'Actions/LinkArrow', component: C, tags: ['autodocs'] }
export const Default = t(`<div class="flex flex-wrap items-center gap-6"><LinkArrow>Read the playbook</LinkArrow><LinkArrow size="sm">Learn more</LinkArrow><LinkArrow icon="download" :arrow="false">Export</LinkArrow></div>`)

