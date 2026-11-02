import { t } from '../util'
export default { title: 'Foundations/Elevation' }
export const Elevation = t(`
<div class="grid max-w-3xl grid-cols-[repeat(auto-fill,minmax(170px,1fr))] gap-6 rounded-lg bg-page p-6">
  <div v-for="[cls, use] in items" :key="cls" class="rounded-md bg-surface p-4" :class="cls"><p class="font-mono text-xs">{{ cls }}</p><p class="mt-1 text-xs text-ink-2">{{ use }}</p></div>
</div>`, () => ({ items: [['shadow-xs', 'Secondary buttons'], ['shadow-card', 'Resting cards'], ['shadow-pop', 'Menus, dialogs'], ['shadow-bar', 'Commit bar, toasts']] }))
export const Layers = t(`
<table class="max-w-md border-collapse text-[13px]"><tbody><tr v-for="[a,b] in rows" :key="a" class="border-b border-line"><td class="py-2 pr-6 font-mono text-[11px]">{{ a }}</td><td class="py-2 font-mono text-[11px] text-ink-2">{{ b }}</td></tr></tbody></table>`, () => ({ rows: [['--z-dropdown', 1000], ['--z-tooltip', 1100], ['--z-sticky', 1100], ['--z-overlay', 1200], ['--z-modal', 1300], ['--z-popover', 1400], ['--z-toast', 1500]] }))

