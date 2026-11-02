import C from '@/components/display/Kbd.vue'
import { t } from '../util'
export default { title: 'Data Display/Kbd', component: C, tags: ['autodocs'] }
export const Shortcuts = t(`
<table class="text-[13px]"><tbody><tr v-for="[k, what] in rows" :key="what"><td class="py-1 pr-6"><Kbd v-for="x in k" :key="x" class="mr-1">{{ x }}</Kbd></td><td class="text-ink-2">{{ what }}</td></tr></tbody></table>`, () => ({ rows: [[['⌘', 'K'], 'Universal search'], [['G', 'D'], 'Go to Dashboard'], [['G', 'S'], 'Go to Senders'], [['A'], 'Approve'], [['R'], 'Reject'], [['E'], 'Escalate'], [['B'], 'Blacklist'], [['N'], 'Next case'], [['P'], 'Previous case'], [['?'], 'Show all shortcuts'], [['Esc'], 'Close modal or drawer']] }))

