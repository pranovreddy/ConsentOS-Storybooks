import { t } from '../util'
export default { title: 'Foundations/Spacing' }
export const Scale = t(`
<div class="flex max-w-xl flex-col gap-2">
  <p class="portal-type-page-subtitle mb-2">A 4px grid. Use <code class="font-mono text-xs">--space-*</code> or Tailwind steps: <code class="font-mono text-xs">p-4</code> is 16px.</p>
  <div v-for="[n, px] in steps" :key="n" class="flex items-center gap-3"><span class="w-20 font-mono text-[11px] text-ink-2">--space-{{ n }}</span><span class="w-8 font-mono text-[11px] text-ink-2">{{ px }}</span><span class="h-3 rounded-xs bg-brand-500" :style="{ width: px + 'px' }" /></div>
</div>`, () => ({ steps: [[1, 4], [2, 8], [3, 12], [4, 16], [5, 20], [6, 24], [8, 32], [10, 40], [12, 48], [16, 64], [20, 80]] }))
export const Stacks = t(`
<div class="flex max-w-3xl flex-col gap-4 text-[13px]">
  <div v-for="[cls, what] in rows" :key="cls" class="flex items-baseline gap-4 border-b border-line pb-2"><code class="w-48 font-mono text-[11px]">.{{ cls }}</code><span class="text-ink-2">{{ what }}</span></div>
</div>`, () => ({ rows: [['portal-stack-section', 'Between page sections, 32px'], ['portal-stack-form', 'Between form fields, 16px'], ['portal-stack-dense', 'Tight vertical lists, 12px'], ['portal-gap-controls', 'Rows of controls, 8px']] }))
export const ComponentSizes = t(`
<table class="max-w-2xl border-collapse text-[13px]"><tbody>
  <tr v-for="[token, val, use] in rows" :key="token" class="border-b border-line"><td class="py-2 pr-6 font-mono text-[11px]">{{ token }}</td><td class="py-2 pr-6 font-mono text-[11px] text-ink-2">{{ val }}</td><td class="py-2 text-ink-2">{{ use }}</td></tr>
</tbody></table>`, () => ({ rows: [['--button-height-sm', '30px', 'Small button'], ['--button-height-md', '36px', 'Default button'], ['--button-height-lg', '40px', 'Large button'], ['--button-height-confirm', '38px', 'Confirm dialog actions'], ['--input-height-md', '39px', 'Inputs and selects'], ['--table-row-height', '48px', 'Table rows'], ['--app-header-height', '61px', 'Top bar'], ['--app-sidebar-width', '255px', 'Sidebar, expanded'], ['--app-sidebar-collapsed-width', '64px', 'Sidebar, collapsed'], ['--app-content-max-width', '1600px', 'Page content'], ['--dialog-width-sm/md/lg', '720 / 800 / 880px', 'Form dialogs']] }))

