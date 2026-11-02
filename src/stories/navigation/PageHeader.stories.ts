import C from '@/components/navigation/PageHeader.vue'
import { t } from '../util'
export default { title: 'Navigation/PageHeader', component: C, tags: ['autodocs'] }
export const Default = t(`<PageHeader title="Page title" description="Supporting copy that explains what this page is for." />`)
export const WithActions = t(`<PageHeader title="Page title"><template #actions><Button variant="secondary" icon="download">Export</Button><Button icon="plus">Add new</Button></template></PageHeader>`)

