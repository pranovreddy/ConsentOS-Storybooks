import { t } from '../util'
export default { title: 'Foundations/Motion' }
export const Motion = t(`
<div class="flex max-w-xl flex-col gap-3 text-[13px]">
  <p class="portal-type-page-subtitle">Motion explains a change and is never decoration. Everything uses <code class="font-mono text-xs">--ease-standard</code>.</p>
  <table class="w-full border-collapse"><tbody><tr v-for="[a,b,c] in items" :key="a" class="border-b border-line"><td class="py-2 font-medium">{{ a }}</td><td class="py-2 font-mono text-[11px] text-ink-2">{{ b }}</td><td class="py-2 text-ink-2">{{ c }}</td></tr></tbody></table>
  <div class="flex items-center gap-4 pt-2"><SlaTimer :seconds="1800" :ticking="false" /><Spinner /><Skeleton width="140px" /><LiveIndicator /></div>
</div>`, () => ({ items: [['Hover, toggle', '150-200 ms', 'Colour and thumb position'], ['Dialog', '200 ms', 'Fade and slight scale'], ['Drawer, sheet', '240 ms', 'Slide from the edge'], ['Critical SLA', '1.4 s loop', 'Pulse only under one hour left']] }))

