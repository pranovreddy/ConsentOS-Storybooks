import C from '@/components/admin/AppShell.vue'
import { t } from '../util'
export default { title: 'Navigation/AppShell', component: C, tags: ['autodocs'], parameters: { layout: 'fullscreen' } }
export const Layout = t(`<AppShell :groups="fx.enterpriseNav" active="home"><div class="flex h-64 items-center justify-center rounded-lg border border-dashed border-line-strong text-[13px] text-ink-2">Page content slot</div></AppShell>`)

