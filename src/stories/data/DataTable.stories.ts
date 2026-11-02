import C from '@/components/data/DataTable.vue'
import { t } from '../util'
import { ref } from 'vue'
export default { title: 'Data/DataTable', component: C, tags: ['autodocs'] }
const columns = [{ key: 'sender', label: 'Sender', sortable: true }, { key: 'peid', label: 'PEID', mono: true }, { key: 'risk', label: 'Risk', sortable: true }, { key: 'status', label: 'Status' }, { key: 'sla', label: 'SLA', sortable: true }, { key: 'actions', label: '', align: 'right' }]
const body = `<template #cell-status="{ value }"><StatusChip :status="value" size="sm" /></template><template #cell-sla="{ value }"><SlaTimer :seconds="value" :ticking="false" /></template><template #cell-actions><RowActions :items="[{ label: 'View', icon: 'eye' }, { label: 'Escalate', icon: 'flag' }]" /></template>`
export const Default = t(`<Card flush><DataTable caption="Senders" :columns="columns" :rows="fx.senders">${body}</DataTable></Card>`, () => ({ columns }))
export const Selectable = t(`<Card flush><DataTable v-model:selected="sel" selectable caption="Senders" :columns="columns" :rows="fx.senders">${body}</DataTable></Card>`, () => ({ columns, sel: ref(['c-1042']) }))
export const Expandable = t(`<Card flush><DataTable expandable caption="Senders" :columns="columns" :rows="fx.senders">${body}<template #expanded="{ row }"><p class="portal-type-body-muted">Case {{ row.id }}, routed through {{ row.gtm }}.</p></template></DataTable></Card>`, () => ({ columns }))
export const Loading = t(`<Card flush><DataTable loading caption="Senders" :columns="columns" :rows="[]" /></Card>`, () => ({ columns }))
export const Empty = t(`<Card flush><DataTable caption="Senders" :columns="columns" :rows="[]" empty-title="No flagged senders" empty-description="New cases appear here as soon as they're raised." /></Card>`, () => ({ columns }))

