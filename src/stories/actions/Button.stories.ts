import C from '@/components/actions/Button.vue'
import { t, play } from '../util'
export default { title: 'Actions/Button', component: C, tags: ['autodocs'], argTypes: { variant: { control: 'select', options: ['primary', 'secondary', 'ghost', 'danger', 'warning', 'on-dark'] }, size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] } } }
export const Playground = play('Button', { variant: 'primary', size: 'md', loading: false, disabled: false }, 'Apply AI Fixes')
export const Variants = t(`
<div class="flex flex-wrap items-center gap-3">
  <Button>Primary</Button><Button variant="secondary" icon="download">Secondary</Button><Button variant="ghost">Ghost</Button><Button variant="danger" icon="trash">Danger</Button><Button variant="warning" icon-right="arrow-right">Warning</Button>
  <span class="rounded-md bg-navy-900 p-2"><Button variant="on-dark" icon="trash">On dark</Button></span>
</div>`)
export const Sizes = t(`<div class="flex items-center gap-3"><Button size="sm">Small 30</Button><Button>Medium 36</Button><Button size="lg">Large 40</Button></div>`)
export const States = t(`<div class="flex flex-wrap items-center gap-3"><Button icon="shield-check" disabled>Disabled</Button><Button loading>Loading</Button><Button variant="secondary" disabled>Disabled</Button><Button variant="secondary" loading>Exporting</Button></div>`)
export const WithIcons = t(`<div class="flex flex-wrap gap-3"><Button icon="file">Leading icon</Button><Button icon-right="arrow-right">Trailing icon</Button></div>`)
export const Block = t(`<div class="max-w-sm"><Button variant="secondary" icon="download" block>Full width</Button></div>`)

