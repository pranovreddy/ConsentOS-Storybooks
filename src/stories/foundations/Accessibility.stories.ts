import { t } from '../util'
export default { title: 'Foundations/Accessibility' }
export const Accessibility = t(`
<div class="max-w-3xl">
  <p class="portal-type-page-subtitle mb-3">Target: WCAG 2.1 AA. The Accessibility tab on every story runs axe against it.</p>
  <ul class="flex flex-col gap-2 text-[13px] text-gray-700"><li v-for="item in items" :key="item" class="flex gap-2"><Icon name="circle-check" class="mt-0.5 text-success-600" />{{ item }}</li></ul>
</div>`, () => ({ items: ['Every interactive element is reachable by keyboard, with a visible 2px focus ring.', 'Status is never colour alone: chips have labels, deltas have direction text, diffs have +/- marks.', 'Mobile targets are at least 44 x 44 px.', 'Charts carry a text summary through aria-label.', 'Icon-only buttons require a label prop.', 'Dialogs, menus, tabs and switches use reka-ui for focus and ARIA behaviour.'] }))

