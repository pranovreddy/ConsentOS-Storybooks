import { t } from '../util'
export default { title: 'Foundations/Radius' }
export const Radius = t(`
<div class="grid max-w-4xl grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4">
  <div v-for="[name, cls, use] in items" :key="name" class="flex flex-col gap-2"><div class="h-20 border border-line bg-brand-50" :class="cls" /><p class="font-mono text-xs">{{ name }}</p><p class="text-xs text-ink-2">{{ use }}</p></div>
</div>`, () => ({ items: [['xs 4px', 'rounded-xs', 'Tiny tags'], ['sm 6px', 'rounded-sm', 'Controls, chips'], ['md 8px', 'rounded-md', 'Buttons, inputs, menus'], ['lg 12px', 'rounded-lg', 'Panels'], ['xl 14px', 'rounded-xl', 'Cards'], ['2xl 16px', 'rounded-2xl', 'Dialogs'], ['full', 'rounded-full', 'Pills, avatars']] }))

