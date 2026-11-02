import { t } from '../util'
import { iconNames } from '@/icons'
export default { title: 'Foundations/Icons' }
export const Library = t(`
<div class="max-w-5xl">
  <p class="portal-type-page-subtitle mb-4">Lucide at 1.75 stroke. Sizes: 14 inline, 16 buttons, 18 navigation, 20 tiles. <code class="font-mono text-xs">&lt;Icon name="shield-check" /&gt;</code></p>
  <div class="grid grid-cols-[repeat(auto-fill,minmax(112px,1fr))] gap-2"><div v-for="name in iconNames" :key="name" class="flex flex-col items-center gap-2 rounded-sm border border-line p-3"><Icon :name="name" :size="20" /><span class="truncate font-mono text-[10px] text-ink-2">{{ name }}</span></div></div>
</div>`, () => ({ iconNames }))

