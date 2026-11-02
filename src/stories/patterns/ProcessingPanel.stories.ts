import C from '@/components/admin/ProcessingPanel.vue'
import { t } from '../util'
export default { title: 'Consent Patterns/ProcessingPanel', component: C, tags: ['autodocs'] }
export const Default = t(`<ProcessingPanel><template #art><ScanPreview file-name="consent_upload_template.csv" /></template><ProcessStatus title="Processing your data" :steps="[{ label: 'Checking for duplicates', state: 'active' }]" :percent="40" /><template #footer>You can safely leave this screen while the file is processing.</template></ProcessingPanel>`)

