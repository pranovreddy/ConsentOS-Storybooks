import { t } from '../util'
export default { title: 'Foundations/Typography' }
const roles = [
  ['portal-type-page-title', 'Page title', 'h1, 24-30px semibold'],
  ['portal-type-section-title', 'Section title', 'h2, 18-20px semibold'],
  ['portal-type-form-section', 'Form section', 'h3, 16px semibold'],
  ['portal-type-panel-title', 'Panel title', 'Card headers, 15px semibold'],
  ['portal-type-body', 'Body copy for everyday reading.', '14px regular'],
  ['portal-type-body-emphasis', 'Body emphasis', '14px semibold'],
  ['portal-type-page-subtitle', 'Supporting copy under a page title.', '13px muted'],
  ['portal-type-body-muted', 'Secondary and helper copy.', '12px muted'],
  ['portal-type-label', 'Field label', '12px semibold'],
  ['portal-type-overline', 'Overline', '11px bold uppercase'],
]
export const Roles = t(`
<table class="w-full max-w-5xl border-collapse">
  <tbody>
    <tr v-for="[cls, sample, spec] in roles" :key="cls" class="border-b border-line">
      <td class="py-4 pr-4 align-baseline"><component :is="'div'" :class="cls">{{ sample }}</component></td>
      <td class="py-4 pr-4 align-baseline font-mono text-[11px] text-ink-2">.{{ cls }}</td>
      <td class="py-4 text-right align-baseline text-xs whitespace-nowrap text-ink-2">{{ spec }}</td>
    </tr>
  </tbody>
</table>`, () => ({ roles }))
export const Families = t(`
<div class="flex max-w-3xl flex-col gap-6">
  <div><p class="text-3xl font-semibold tracking-tight">Geist</p><p class="mt-1 text-sm text-ink-2">Everything people read. Weights 400, 500, 600, 700.</p></div>
  <div><p class="font-mono text-3xl font-medium">Geist Mono 0.95 ₹</p><p class="mt-1 text-sm text-ink-2">Prices, identifiers, file names, metric labels and countdowns.</p></div>
  <div class="flex flex-wrap gap-6 text-lg"><span class="font-normal">Regular 400</span><span class="font-medium">Medium 500</span><span class="font-semibold">Semibold 600</span><span class="font-bold">Bold 700</span></div>
</div>`)
export const SizeScale = t(`
<div class="flex max-w-3xl flex-col gap-2">
  <div v-for="[token, px] in sizes" :key="token" class="flex items-baseline gap-4 border-b border-line pb-2"><span class="w-44 font-mono text-[11px] text-ink-2">{{ token }}</span><span class="w-12 font-mono text-[11px] text-ink-2">{{ px }}</span><span :style="{ fontSize: 'var(' + token + ')' }">Consent you can trust</span></div>
</div>`, () => ({ sizes: [['--font-size-2xs', '11'], ['--font-size-xs', '12'], ['--font-size-ui-compact', '13'], ['--font-size-sm', '14'], ['--font-size-panel-title', '15'], ['--font-size-base', '16'], ['--font-size-lg', '18'], ['--font-size-xl', '20'], ['--font-size-2xl', '24'], ['--font-size-3xl', '30'], ['--font-size-4xl', '36']] }))
export const IndianNumbers = t(`
<div class="flex max-w-xl flex-col gap-4">
  <p class="portal-type-page-subtitle">Large counts use the Indian system, with the unit set smaller and in regular weight. Exact counts use lakh-crore grouping: 12,34,567.</p>
  <div class="flex flex-wrap gap-8"><BigStat value="14.3" unit="Cr" tone="brand" /><BigStat value="82" unit="Lac" tone="danger" /><BigStat value="57" unit="%" /><BigStat value="69,000" /></div>
</div>`)

