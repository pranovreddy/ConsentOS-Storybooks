import { ref } from 'vue'
import { screen } from '../util'
export default { title: 'Screens/Channel Owner' }
const tabs = [{ id: 'migration', label: 'Migration', icon: 'arrow-right' }, { id: 'ep', label: 'Enterprises & Partners', icon: 'building' }, { id: 'subs', label: 'Subscribers', icon: 'users' }, { id: 'complaints', label: 'Complaints', icon: 'warning' }, { id: 'acq', label: 'Acquisition', icon: 'globe', locked: true }, { id: 'scrub', label: 'Scrubbing', icon: 'filter', locked: true }]

export const Analytics = screen(`
<AppShell :groups="fx.channelOwnerNav" active="analytics" org="Bharti Airtel" org-type="Channel Owner" org-color="#d9232e">
  <div class="mx-auto flex max-w-[1280px] flex-col gap-5">
    <PageHeader title="Analytics" />
    <Tabs v-model="tab" :items="tabs" aria-label="Analytics sections">
      <template #subs>
        <div class="flex flex-col gap-4">
          <div class="grid gap-4 md:grid-cols-3">
            <KpiCard label="Notified subscribers" value="14.3" unit="Cr" caption="94% of covered base reached" icon="send" tone="brand" delta="8% vs yesterday" :trend="[3,4,5,5,6,7,7,8]" trend-tone="success" />
            <KpiCard label="Notification engagement" value="5.9" unit="Cr" caption="41% of notified" icon="send" :progress="41" />
            <KpiCard label="Revocations" value="82" unit="Lac" caption="5.7% of notified" icon="ban" tone="danger" delta="18 Lac this week" delta-tone="bad" :trend="[3,3,4,5,6,6,7,7]" trend-tone="danger" />
          </div>
          <Card title="State-Wise Distribution" icon="map">
            <template #actions><div class="w-32"><SelectField v-model="dnd" size="sm" aria-label="DND" :options="[{ label: 'Both', value: 'both' }, { label: 'DND', value: 'dnd' }, { label: 'Non-DND', value: 'non' }]" /></div><FilterPills v-model="metric" aria-label="Metric" :options="[{ label: 'Subscribers', value: 's' }, { label: 'Notified', value: 'n' }, { label: 'Engaged', value: 'e' }]" /></template>
            <div class="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
              <div class="flex justify-center rounded-lg border border-line bg-gray-50 p-5"><StateTileMap :values="fx.stateValues" unit="Cr" /></div>
              <div class="rounded-lg border border-line p-5">
                <div class="flex items-start justify-between gap-3"><div><Eyebrow mono class="!text-brand-700">State metrics</Eyebrow><h3 class="portal-type-section-title mt-1">Subscriber Concentration</h3><p class="portal-type-body-muted mt-1">Top states by unique users.</p></div><span class="rounded-full bg-brand-50 px-3 py-1.5 font-mono text-xs font-semibold">92.10 Cr</span></div>
                <Pagination v-model="page" class="my-4" compact :total="24" :page-size="5" />
                <RankedBars rank :items="fx.topStates" />
                <p class="portal-type-body-muted mt-4 border-t border-dashed border-line pt-3">High user density with low consent depth may signal acquisition quality issues; high depth with rising revokes signals fatigue risk.</p>
              </div>
            </div>
          </Card>
          <div class="grid gap-4 lg:grid-cols-2">
            <Card title="Consent Outcomes" description="Opted in, opted out and pending action among notified subscribers" icon="database">
              <template #actions><FilterPills v-model="seg" aria-label="DND filter" :options="[{ label: 'DND', value: 'd' }, { label: 'Non-DND', value: 'n' }, { label: 'All', value: 'a' }]" /></template>
              <div class="flex flex-wrap items-center gap-6"><DonutChart :size="170" center="14.30 Cr" caption="Notified" :segments="[{ label: 'Opted in', value: 76, color: '#2563eb' }, { label: 'Opted out', value: 6, color: '#60a5fa' }, { label: 'No action', value: 19, color: '#dbeafe' }]" /><div class="min-w-48 flex-1"><ChartLegend :items="[{ label: 'Opted in', color: '#2563eb', value: '10.80 Cr', share: '76%' }, { label: 'Opted out', color: '#60a5fa', value: '80 L', share: '6%' }, { label: 'No action', color: '#dbeafe', value: '2.70 Cr', share: '19%' }]" /></div></div>
            </Card>
            <Card title="Revocation Reasons" description="Opt-out drivers among subscribers who took action" icon="chart-pie"><RankedBars :items="fx.revocationReasons" :max="100" /></Card>
            <Card title="Daily Subscriber Engagement" description="Day-on-day engagement rate over the last 30 days" icon="activity"><AreaChart :data="fx.engagementTrend" :x-labels="['15 Jun','20 Jun','25 Jun','30 Jun','5 Jul','10 Jul']" label="Engagement rose from 62% to 80% over 30 days" /></Card>
            <Card title="Channel Preference" description="Preferred outreach channel among subscribers with a stated preference" icon="activity"><div class="flex flex-wrap items-center gap-6"><DonutChart :size="170" center="57%" caption="SMS" :segments="[{ label: 'SMS', value: 57, color: '#2563eb' }, { label: 'Voice', value: 19, color: '#60a5fa' }, { label: 'Both', value: 24, color: '#93c5fd' }]" /><div class="min-w-48 flex-1"><ChartLegend :items="[{ label: 'SMS', color: '#2563eb', value: '3.80 Cr', share: '57%' }, { label: 'Voice', color: '#60a5fa', value: '1.30 Cr', share: '19%' }, { label: 'Both', color: '#93c5fd', value: '1.60 Cr', share: '24%' }]" /></div></div></Card>
          </div>
        </div>
      </template>
      <template #migration><PanelState title="Migration analytics" description="Open the Regulator Migration screen for this layout." /></template>
      <template #ep><PanelState title="Enterprises and partners" description="Select a partner to see its figures." /></template>
      <template #complaints><PanelState title="No complaints this period" description="Change the period to see earlier complaints." /></template>
    </Tabs>
  </div>
</AppShell>`, () => ({ tab: ref('subs'), tabs, dnd: ref('both'), metric: ref('s'), seg: ref('d'), page: ref(1) }))

export const ChannelOwners = screen(`
<AppShell :groups="fx.channelOwnerNav" active="channel-owners" org="Bharti Airtel" org-type="Channel Owner" org-color="#d9232e">
  <div class="mx-auto flex max-w-[1200px] flex-col gap-5">
    <PageHeader title="Channel Owners" />
    <Tabs v-model="tab" :items="[{ id: 'received', label: 'Received Rates' }, { id: 'assigned', label: 'Assigned Rates' }]" aria-label="Rates">
      <template #received>
        <div class="flex flex-col gap-4">
          <div class="grid gap-4 md:grid-cols-3"><SummaryStat value="3" label="Active Channel Owners" detail="Airtel, Jio, BSNL" /><SummaryStat value="1" label="Awaiting Acceptance" detail="Airtel, pending acceptance" tone="danger" /><SummaryStat value="2" label="Upcoming Changes" detail="Jio, VI, in 30 days" tone="warning" /></div>
          <RateMatrix :owners="fx.rateOwners" :activities="fx.rateActivities" :scrubbing="fx.rateScrubbing" />
        </div>
      </template>
      <template #assigned><PanelState title="No rates assigned yet" description="Assign a rate card to an enterprise to see it here." action-label="Assign rate card" icon="credit-card" /></template>
    </Tabs>
  </div>
</AppShell>`, () => ({ tab: ref('received') }))

export const PriorityInbox = screen(`
<AppShell :groups="fx.channelOwnerNav" active="inbox" org="Bharti Airtel" org-type="Channel Owner" org-color="#d9232e">
  <div class="mx-auto flex max-w-[1280px] flex-col gap-5">
    <div><Breadcrumbs :items="[{ label: 'Senders' }, { label: 'Priority Inbox' }, { label: 'Apex Fintech Pvt Ltd' }]" /><div class="mt-3"><PageHeader title="Apex Fintech Pvt Ltd"><template #actions><StatusChip status="PENDING_APPROVAL" /><SlaTimer :seconds="2400" :ticking="false" /></template></PageHeader></div></div>
    <div class="grid items-start gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
      <div class="grid gap-4 md:grid-cols-2">
        <EvidenceCard title="DLT History" icon="database" verdict="Clean" verdict-tone="success" :items="[{ label: 'Registered', value: '3 years' }, { label: 'Violations', value: '0' }]" />
        <EvidenceCard title="KYC" icon="file-check" verdict="Verified" verdict-tone="success" :items="[{ label: 'Entity match', value: 'Exact' }, { label: 'Last checked', value: '12 Oct 2026' }]" />
        <EvidenceCard title="Risk Signals" icon="warning" verdict="Elevated" verdict-tone="warning" :items="[{ label: 'Complaints, 30d', value: '41' }, { label: 'Trend', value: 'Rising' }]" />
        <EvidenceCard title="External Intel" icon="globe" verdict="None found" verdict-tone="neutral" :items="[{ label: 'Blacklists', value: '0 of 4' }, { label: 'News flags', value: '0' }]" />
        <EvidenceCard title="Precedents" icon="gavel" verdict="3 similar" verdict-tone="neutral" :items="[{ label: 'Approved', value: '3' }, { label: 'Rejected', value: '0' }]" />
      </div>
      <AiRecommendation action="Approve" :confidence="86" :reasons="['Clean DLT history for 3 years', 'KYC matches the registered entity', '3 similar cases were approved']" />
    </div>
    <DecisionBar />
  </div>
</AppShell>`)

export const AuditTrail = screen(`
<AppShell :groups="fx.channelOwnerNav" active="audit" org="Bharti Airtel" org-type="Channel Owner" org-color="#d9232e">
  <div class="mx-auto flex max-w-[1200px] flex-col gap-5">
    <PageHeader title="Audit Trail" description="Append-only and tamper-evident. Every change records who, when, what and why."><template #actions><MenuButton label="Export" icon="download" :items="[{ label: 'CSV', icon: 'file' }, { label: 'Regulator-ready PDF', icon: 'file-check' }, { label: 'Signed JSON bundle', icon: 'shield-check' }]" /></template></PageHeader>
    <FilterBar v-model:chips="chips"><div class="w-64"><SearchInput placeholder="Search actions or people" /></div><PeriodFilter v-model="period" /></FilterBar>
    <Card flush>
      <DataTable expandable caption="Audit log" :rows="fx.auditRows" :columns="[{ key: 'when', label: 'When', mono: true }, { key: 'actor', label: 'Actor' }, { key: 'action', label: 'Action' }, { key: 'entity', label: 'Entity' }, { key: 'hash', label: 'Hash' }]">
        <template #cell-hash="{ value }"><HashBadge :hash="value" /></template>
        <template #expanded="{ row }"><div class="grid gap-4 md:grid-cols-[1fr_260px]"><JsonDiff :before="row.before" :after="row.after" /><KeyValueList :items="[{ label: 'Reason', value: row.reason }, { label: 'Actor', value: row.actor }]" /></div></template>
      </DataTable>
      <template #footer><Pagination v-model="page" :total="1240" /></template>
    </Card>
  </div>
</AppShell>`, () => ({ chips: ref([{ key: 'e', label: 'Entity: Rate Card' }]), period: ref('30d'), page: ref(1) }))

export const UsersAndRoles = screen(`
<AppShell :groups="fx.channelOwnerNav" active="users" org="Bharti Airtel" org-type="Channel Owner" org-color="#d9232e">
  <div class="mx-auto flex max-w-[1200px] flex-col gap-5">
    <PageHeader title="User and Roles" description="Invite teammates and control what they can do."><template #actions><Button icon="user-plus">Add user</Button></template></PageHeader>
    <Tabs v-model="tab" :items="[{ id: 'users', label: 'Users', count: 3 }, { id: 'roles', label: 'Roles', count: 6 }]" aria-label="Users and roles">
      <template #users>
        <Card flush>
          <DataTable caption="Users" :rows="users" :columns="[{ key: 'name', label: 'Name', sortable: true }, { key: 'email', label: 'Email', mono: true }, { key: 'role', label: 'Role' }, { key: 'status', label: 'Status' }, { key: 'actions', label: '', align: 'right' }]">
            <template #cell-name="{ value, row }"><UserChip :name="value" :role="row.role" /></template>
            <template #cell-status="{ value }"><StatusChip :status="value" size="sm" /></template>
            <template #cell-actions><RowActions :items="[{ label: 'Edit', icon: 'settings' }, { label: 'Resend invite', icon: 'send' }, { label: 'Deactivate', icon: 'ban', danger: true }]" /></template>
          </DataTable>
        </Card>
      </template>
      <template #roles><PanelState title="Six default roles" description="Create a custom role when the defaults don't fit." action-label="Add role" icon="key" /></template>
    </Tabs>
  </div>
</AppShell>`, () => ({ tab: ref('users'), users: [{ id: 1, name: 'Ravi Menon', email: 'ravi@example.com', role: 'Super Admin', status: 'ACTIVE' }, { id: 2, name: 'Priya Nair', email: 'priya@example.com', role: 'Ops Manager', status: 'INVITED' }, { id: 3, name: 'Anil Rao', email: 'anil@example.com', role: 'Compliance', status: 'LOCKED' }] }))

export const RateCardEditor = screen(`
<AppShell :groups="fx.channelOwnerNav" active="rate-card" org="Bharti Airtel" org-type="Channel Owner" org-color="#d9232e">
  <div class="mx-auto flex max-w-[1200px] flex-col gap-5">
    <PageHeader title="Rate Card Editor" description="Changes save as a draft. Publishing locks this card for 6 months."><template #actions><StatusChip status="DRAFT" /><ConfirmDialog title="Publish this rate card?" description="It locks for 6 months and applies to every assigned enterprise." confirm-label="Publish" icon="credit-card"><template #trigger><Button>Publish</Button></template></ConfirmDialog></template></PageHeader>
    <div class="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
      <Card title="Rates" icon="credit-card"><div class="grid gap-5 md:grid-cols-2"><FormField label="Migration"><RateInput v-model="m" :floor="0.8" unit="per consent" /></FormField><FormField label="Acquisition"><RateInput v-model="a" :floor="1" unit="per consent" /></FormField><FormField label="Refresh"><RateInput v-model="r" :floor="0.5" unit="per year" /></FormField><FormField label="Lock period (months)"><NumberInput v-model="lock" :min="6" :max="24" aria-label="Lock period in months" /></FormField><div class="md:col-span-2"><SliderField v-model="red" label="Red risk multiplier" :min="1" :max="3" :step="0.1" :format="(x) => x.toFixed(1) + 'x'" /></div></div></Card>
      <Card title="Live preview" icon="eye"><KeyValueList :items="[{ label: 'Migration', value: '₹' + m, mono: true }, { label: 'Acquisition', value: '₹' + a, mono: true }, { label: 'Refresh', value: '₹' + r, mono: true }, { label: 'Red multiplier', value: red.toFixed(1) + 'x', mono: true }]" /></Card>
    </div>
  </div>
</AppShell>`, () => ({ m: ref('0.95'), a: ref('1.40'), r: ref('0.75'), lock: ref(6), red: ref(1.5) }))

export const Enterprises = screen(`
<AppShell :groups="fx.channelOwnerNav" active="enterprises" org="Bharti Airtel" org-type="Channel Owner" org-color="#d9232e">
  <div class="mx-auto flex max-w-[1200px] flex-col gap-5">
    <PageHeader title="Enterprises"><template #actions><MenuButton variant="primary" size="lg" label="Assign Rate Card" icon="send" :items="[{ label: 'Assign to selected', icon: 'users' }, { label: 'Bulk upload', icon: 'upload' }, { label: 'Assignment history', icon: 'clock' }]" /></template></PageHeader>
    <div class="grid gap-4 lg:grid-cols-2">
      <Card>
        <Eyebrow class="mb-3">Enterprises summary</Eyebrow>
        <HeroStat label="Active" value="691" caption="enterprises" />
        <div class="mt-3 grid grid-cols-2 gap-3"><SummaryStat value="1,247" label="Total" detail="enterprises" /><SummaryStat value="556" label="Inactive" detail="enterprises" tone="brand" /></div>
      </Card>
      <Card>
        <div class="mb-4 flex items-center justify-between gap-3"><Eyebrow>Current rate card</Eyebrow><FilterPills v-model="card" tone="dark" aria-label="Rate card period" :options="[{ label: 'Current', value: 'c' }, { label: 'Upcoming', value: 'u' }]" /></div>
        <div class="flex flex-wrap items-center gap-6"><DonutChart :size="170" center="715" caption="Current" :segments="[{ label: 'Active', value: 691, color: '#1e3a8a' }, { label: 'Lapsed', value: 24, color: '#2563eb' }]" /><div class="min-w-48 flex-1"><ChartLegend :items="[{ label: 'Active', color: '#1e3a8a', value: '691', share: '55%' }, { label: 'Lapsed', color: '#2563eb', value: '24', share: '2%' }, { label: 'Terminated', color: '#3b82f6', value: '0', share: '0%' }]" /></div></div>
      </Card>
    </div>
    <div class="flex flex-wrap items-center justify-between gap-3">
      <FilterPills v-model="status" tone="dark" size="md" aria-label="Status" :options="[{ label: 'All', value: 'a', count: 1247 }, { label: 'Inactive', value: 'i', count: 556 }, { label: 'Active', value: 'ok', count: 691 }]" />
      <div class="flex items-center gap-2"><div class="w-72"><SearchInput placeholder="Search by enterprise" /></div><Button variant="secondary" icon="filter">Filters</Button></div>
    </div>
    <Card flush>
      <DataTable selectable v-model:selected="sel" caption="Enterprises" :rows="fx.enterprises" :columns="[{ key: 'name', label: 'Enterprise', sortable: true }, { key: 'current', label: 'Current rate card' }, { key: 'upcoming', label: 'Upcoming rate card' }, { key: 'actions', label: '', align: 'right' }]">
        <template #cell-name="{ row }"><span class="flex items-center gap-3"><Avatar :name="row.name" :color="row.color" /><span><span class="block font-medium text-ink">{{ row.name }}</span><span class="text-xs text-ink-2">{{ row.id }}</span></span></span></template>
        <template #cell-current="{ row }"><span class="flex flex-wrap items-center gap-2"><span><span class="block text-ink">{{ row.current }}</span><span class="font-mono text-xs text-ink-2">{{ row.currentNote }}</span></span><Badge v-if="row.currentTag" variant="warning" dot>{{ row.currentTag }}</Badge></span></template>
        <template #cell-upcoming="{ row }"><span v-if="row.upcoming" class="flex flex-wrap items-center gap-2"><span><span class="block text-ink">{{ row.upcoming }}</span><span class="font-mono text-xs text-ink-2">{{ row.upcomingNote }}</span></span><Badge :variant="row.upTone" dot>{{ row.upTag }}</Badge></span><span v-else class="text-ink-2">None</span></template>
        <template #cell-actions><RowActions :items="[{ label: 'View details', icon: 'eye' }, { label: 'Update rate card', icon: 'credit-card' }, { label: 'Terminate agreement', icon: 'ban', danger: true }]" /></template>
      </DataTable>
      <template #footer><Pagination v-model="page" v-model:page-size="size" :total="1247" :page-sizes="[5, 10, 20]" /></template>
    </Card>
  </div>
</AppShell>`, () => ({ card: ref('c'), status: ref('a'), sel: ref([]), page: ref(1), size: ref(5) }))
