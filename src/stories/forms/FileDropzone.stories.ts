import C from '@/components/forms/FileDropzone.vue'
import { t } from '../util'
export default { title: 'Forms/FileDropzone', component: C, tags: ['autodocs'] }
export const Idle = t(`<div class="max-w-2xl"><FileDropzone /></div>`)
export const Disabled = t(`<div class="max-w-2xl"><FileDropzone disabled /></div>`)
export const Uploading = t(`<div class="max-w-2xl"><FileDropzone state="uploading" file-name="demo_consents.csv" :progress="62" /></div>`)
export const Done = t(`<div class="max-w-2xl"><FileDropzone state="done" file-name="demo_consents.csv" file-meta="70,000 records · 4.2 MB · encrypted" /></div>`)
export const Failed = t(`<div class="max-w-2xl"><FileDropzone state="error" file-name="consents.xlsx" error-text="This is an Excel file. Save it as CSV and upload again." /></div>`)

