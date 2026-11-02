import C from '@/components/admin/ResultCard.vue'
import { t } from '../util'
export default { title: 'Consent Patterns/ResultCard', component: C, tags: ['autodocs'] }
export const Tones = t(`
<div class="flex flex-col gap-4">
  <ResultCard tone="brand" icon="sparkles" title="AI can fix 449/800 errors" tag="1-click" description="Date and language formats corrected automatically."><template #actions><Button variant="secondary" icon="download">Download</Button><Button>Apply</Button></template></ResultCard>
  <ResultCard tone="warning" icon="file-plus" title="351 errors need offline fixes" tag="Manual" description="AI can't fix these safely."><template #actions><Button variant="secondary" icon="download">Download</Button></template></ResultCard>
  <ResultCard icon="copy" title="200 duplicates removed" tag="Auto" description="The first record is kept." />
  <ResultCard tone="success" icon="circle-check" title="48,407 passed" description="Eligible after the enforcement date." />
  <ResultCard tone="attention" icon="bell" title="20,593 need opt-in" description="Opted out until the customer opts in, or you appeal." />
  <ResultCard tone="danger" icon="circle-x" title="12 rejected" description="The registrar rejected these appeals." />
</div>`)

