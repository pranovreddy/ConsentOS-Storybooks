import C from '@/components/actions/MenuButton.vue'
import { t } from '../util'
export default { title: 'Actions/MenuButton', component: C, tags: ['autodocs'] }
export const Download = t(`<MenuButton label="Download" icon="download" :items="[{ label: 'CSV', icon: 'file' }, { label: 'Regulator-ready PDF', icon: 'file-check' }, { label: 'Signed JSON bundle', icon: 'shield-check' }]" />`)
export const WithDanger = t(`<MenuButton label="Actions" :items="[{ label: 'Duplicate', icon: 'copy' }, { label: 'Export', icon: 'download', disabled: true }, { label: 'Suspend partner', icon: 'ban', danger: true }]" />`)

