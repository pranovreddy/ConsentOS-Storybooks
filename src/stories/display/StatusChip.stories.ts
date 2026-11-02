import C, { statusMap } from '@/components/display/StatusChip.vue'
import { t, play } from '../util'
export default { title: 'Data Display/StatusChip', component: C, tags: ['autodocs'], argTypes: { status: { control: 'select', options: Object.keys(statusMap) } } }
export const Playground = play('StatusChip', { status: 'PENDING_APPROVAL' })
const groups = { Consent: ['OPTED_IN', 'OPTED_OUT', 'NO_ACTION', 'REVOKED'], 'Migration and approval': ['VALIDATING', 'PENDING_APPROVAL', 'APPROVED', 'REJECTED', 'ESCALATED', 'BLACKLISTED', 'SLA_BREACHED'], 'Channel owner lifecycle': ['PRE_CONFIGURED', 'INVITED', 'ACTIVATED', 'PROFILE_VERIFIED', 'OPERATIONAL', 'SUSPENDED', 'TERMINATED'], User: ['INVITED', 'ACTIVE', 'INACTIVE', 'LOCKED'], 'GTM partner': ['CHECK_IN_PROGRESS', 'INVITED', 'ACTIVE', 'SUSPENDED_GLOBAL', 'REMOVED_GLOBAL'], 'Rate card': ['DRAFT', 'PUBLISHED', 'ACTIVE', 'SUPERSEDED', 'ACTIVE_UNLOCKED'] }
export const AllStates = t(`<div class="flex max-w-3xl flex-col gap-5"><div v-for="(states, name) in groups" :key="name"><Eyebrow class="mb-2">{{ name }}</Eyebrow><div class="flex flex-wrap gap-2"><StatusChip v-for="s in states" :key="s" :status="s" /></div></div></div>`, () => ({ groups }))

