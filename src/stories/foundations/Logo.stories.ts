import { t } from '../util'
export default { title: 'Foundations/Logo' }
export const Logo = t(`
<div class="flex flex-wrap items-center gap-10">
  <LogoMark :size="42" /><LogoMark wordmark /><LogoMark tile :size="24" />
  <span class="rounded-md bg-navy-900 p-4"><LogoMark wordmark on-dark /></span>
</div>`)

