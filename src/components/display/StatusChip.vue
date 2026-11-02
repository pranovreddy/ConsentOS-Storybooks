<script lang="ts">
type Tone = 'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'brand'
/** Every lifecycle state from the Channel Owner spec, plus consent states, mapped to one tone and label. */
export const statusMap: Record<string, { tone: Tone; label: string }> = {
  // Consent
  OPTED_IN: { tone: 'success', label: 'Opted in' },
  OPTED_OUT: { tone: 'warning', label: 'Opted out' },
  NO_ACTION: { tone: 'neutral', label: 'No action' },
  REVOKED: { tone: 'danger', label: 'Revoked' },
  // Migration
  VALIDATING: { tone: 'brand', label: 'Validating' },
  PENDING_APPROVAL: { tone: 'warning', label: 'Pending approval' },
  APPROVED: { tone: 'success', label: 'Approved' },
  REJECTED: { tone: 'danger', label: 'Rejected' },
  ESCALATED: { tone: 'info', label: 'Escalated' },
  BLACKLISTED: { tone: 'danger', label: 'Blacklisted' },
  SLA_BREACHED: { tone: 'danger', label: 'SLA breached' },
  // Channel owner
  PRE_CONFIGURED: { tone: 'neutral', label: 'Pre-configured' },
  INVITED: { tone: 'info', label: 'Invited' },
  ACTIVATED: { tone: 'brand', label: 'Activated' },
  PROFILE_VERIFIED: { tone: 'brand', label: 'Profile verified' },
  OPERATIONAL: { tone: 'success', label: 'Operational' },
  SUSPENDED: { tone: 'warning', label: 'Suspended' },
  TERMINATED: { tone: 'danger', label: 'Terminated' },
  // User
  ACTIVE: { tone: 'success', label: 'Active' },
  INACTIVE: { tone: 'neutral', label: 'Inactive' },
  LOCKED: { tone: 'danger', label: 'Locked' },
  // GTM partner
  CHECK_IN_PROGRESS: { tone: 'brand', label: 'Checks running' },
  SUSPENDED_GLOBAL: { tone: 'warning', label: 'Suspended globally' },
  REMOVED_GLOBAL: { tone: 'danger', label: 'Removed globally' },
  // Rate card
  DRAFT: { tone: 'neutral', label: 'Draft' },
  PUBLISHED: { tone: 'info', label: 'Published' },
  SUPERSEDED: { tone: 'neutral', label: 'Superseded' },
  ACTIVE_UNLOCKED: { tone: 'warning', label: 'Active, unlocked' },
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import Badge from './Badge.vue'

const props = withDefaults(defineProps<{ status: string; size?: 'sm' | 'md' }>(), { size: 'md' })
const entry = computed(() => statusMap[props.status] ?? { tone: 'neutral' as Tone, label: props.status })
</script>

<template>
  <Badge :variant="entry.tone" :size="size" dot>{{ entry.label }}</Badge>
</template>
