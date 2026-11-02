import { t } from '../util'
export default { title: 'Foundations/Colors' }
const scale = (name: string, steps: (number | string)[]) => steps.map((s) => `--color-${name}-${s}`)
const groups = [
  { title: 'Semantic', note: 'Start here. These names describe a role, so they survive a rebrand.', tokens: ['--color-canvas', '--color-page', '--color-page-regulator', '--color-page-app', '--color-surface', '--color-line', '--color-line-strong', '--color-ink', '--color-ink-2', '--color-ink-3', '--color-ink-4'] },
  { title: 'Brand', note: 'brand-600 is the primary action colour. brand-700 is its hover.', tokens: scale('brand', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]) },
  { title: 'Subscriber app', note: 'A slightly softer blue, used only in mobile components.', tokens: ['--color-app-400', '--color-app-500', '--color-app-600', '--color-app-tint'] },
  { title: 'Navy and neutrals', note: 'navy-900 is headings, body text and commit bars.', tokens: ['--color-navy-900', '--color-navy-700', ...scale('gray', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900])] },
  { title: 'Success', note: 'success-500 means consent is on. success-600 means a step is done.', tokens: scale('success', [50, 100, 500, 600, 700]) },
  { title: 'Warning', note: 'Needs attention, pending, opted out.', tokens: scale('warning', [50, 100, 200, 500, 600, 700]) },
  { title: 'Danger', note: 'Errors, revocations, breached SLAs. danger-700 is the strong variant.', tokens: scale('danger', [50, 100, 200, 500, 600, 700]) },
  { title: 'Info and channel', note: 'violet-600 identifies the Voice channel.', tokens: [...scale('info', [50, 100, 600, 700]), '--color-violet-600'] },
]
const value = (token: string) => getComputedStyle(document.documentElement).getPropertyValue(token).trim()
export const Palette = t(`
<div class="flex max-w-5xl flex-col gap-8">
  <section v-for="g in groups" :key="g.title">
    <h2 class="portal-type-section-title">{{ g.title }}</h2>
    <p class="portal-type-page-subtitle mb-3">{{ g.note }}</p>
    <div class="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-3">
      <div v-for="token in g.tokens" :key="token" class="overflow-hidden rounded-md border border-line">
        <div class="h-14" :style="{ background: 'var(' + token + ')' }" />
        <div class="p-2">
          <p class="truncate font-mono text-[11px] text-ink" :title="token">{{ token.replace('--color-', '') }}</p>
          <p class="font-mono text-[11px] text-ink-2">{{ value(token) }}</p>
        </div>
      </div>
    </div>
  </section>
</div>`, () => ({ groups, value }))
const series = ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe', '#15814c', '#dc2626', '#8a6d2a', '#7c3aed', '#e0eaff', '#e4e8f0']
export const ChartSeries = t(`
<div class="max-w-3xl">
  <p class="portal-type-page-subtitle mb-3">Use the blues first, darkest for the most important series. Add a status colour only when a series means success, danger or warning.</p>
  <div class="flex overflow-hidden rounded-md"><div v-for="c in series" :key="c" class="flex h-20 flex-1 items-end p-1 font-mono text-[9px]" :style="{ background: c, color: ['#2563eb','#15814c','#dc2626','#8a6d2a','#7c3aed'].includes(c) ? '#fff' : '#0b1a33' }">{{ c }}</div></div>
</div>`, () => ({ series }))

