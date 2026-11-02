import C from '@/components/display/TreeList.vue'
import { t } from '../util'
export default { title: 'Data Display/TreeList', component: C, tags: ['autodocs'] }
export const BrandsAndLobs = t(`<div class="max-w-xs"><Card><TreeList aria-label="Brands" :default-expanded="['hdfc']" :items="[{ id: 'hdfc', label: 'HDFC Bank', icon: 'building', count: 4, children: [{ id: 'pl', label: 'Personal Loans' }, { id: 'cc', label: 'Credit Cards' }, { id: 'ds', label: 'Deposits & Savings' }] }, { id: 'pz', label: 'PayZapp', icon: 'wallet', count: 1, children: [{ id: 'rc', label: 'Recharge Offers' }] }]" /></Card></div>`)

