import { ref } from 'vue'
import { screen } from '../util'
export default { title: 'Screens/Regulator' }

export const Migration = screen(`
<AppShell :groups="fx.regulatorNav" active="migration" :expanded="['consents']" org="Telecom Regulator" org-type="Regulator" org-color="#1e40af" tone="regulator">
  <div class="mx-auto flex max-w-[1280px] flex-col gap-5">
    <PageHeader title="Migration"><template #actions><Button variant="secondary" icon="download">Export</Button></template></PageHeader>
    <PhaseTracker :progress="72" :phases="[{ title: 'Upload Window', detail: 'Tap to view', state: 'done', linked: true }, { title: 'User Notification', detail: 'Tap to view', state: 'done', linked: true }, { title: 'Writing to DLT', detail: 'Closes in 10 days', state: 'active' }, { title: 'Migration Complete', detail: 'Opens on 08 July 2026', state: 'upcoming' }]" />
    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <KpiCard label="Written on DLT" value="57" unit="%" caption="98.4 Cr out of 184 Cr consents" icon="radio" tone="brand" delta="4 Cr today" :trend="[2,3,4,4,5,6,6,7]" trend-tone="success" />
      <KpiCard label="Opt-in consents on DLT" value="50" unit="Cr" caption="out of 98.4 Cr written on DLT" icon="send" delta="10 L today" :progress="51" />
      <KpiCard label="Subscribers covered in DLT" value="62.1" unit="Cr" caption="of 68.4 Cr in migration scope" icon="radio" :trend="[2,3,4,4,5,5,6,7]" />
      <KpiCard label="Migration failures" value="2.1" unit="L" caption="1.1% failure rate" icon="activity" delta="12 L today" delta-tone="bad" :trend="[2,3,3,4,5,5,6,7]" trend-tone="danger" />
    </div>
    <Card flush title="DLT Write Status by Telecom" description="Compare completion across terminating networks. Expand a row for detail." icon="clock">
      <DataTable expandable caption="DLT write status by telecom" :rows="[{ id: 'jio', telco: 'Jio', rate: 24, written: '4.06 Cr', pending: '2.88 Cr', failed: '5 L' }, { id: 'airtel', telco: 'Airtel', rate: 41, written: '6.12 Cr', pending: '1.94 Cr', failed: '2 L' }, { id: 'vi', telco: 'Vodafone Idea', rate: 33, written: '3.20 Cr', pending: '2.10 Cr', failed: '3 L' }]" :columns="[{ key: 'telco', label: 'Telco' }, { key: 'rate', label: 'Completion rate', width: '34%' }, { key: 'written', label: 'Written', align: 'right' }, { key: 'pending', label: 'Pending', align: 'right' }, { key: 'failed', label: 'Failed', align: 'right' }]">
        <template #cell-telco="{ value }"><span class="flex items-center gap-2.5 font-medium text-ink"><BrandMark :name="value" size="sm" />{{ value }}</span></template>
        <template #cell-rate="{ value }"><span class="flex items-center gap-3"><ProgressBar :value="value" tone="gradient" size="md" label="Completion rate" /><span class="font-medium tnum">{{ value }}%</span></span></template>
        <template #expanded>
          <div class="grid gap-4 lg:grid-cols-2">
            <Card><Eyebrow class="mb-3">Write trend, 21 days</Eyebrow><AreaChart :data="[1,1.2,1.4,1.6,1.9,2.1,2.4,2.8,3.1,3.4,3.7,4]" y-suffix=" Cr" :y-ticks="3" :height="180" label="Writes grew to 4 Cr over 21 days" /></Card>
            <Card><Eyebrow class="mb-3">Failure reasons</Eyebrow><div class="flex flex-wrap items-center gap-5"><DonutChart :size="130" :thickness="22" center="5 L" :segments="[{ label: 'Subscriber not identifiable', value: 300, color: '#2563eb' }, { label: 'Number not provisioned', value: 180, color: '#60a5fa' }, { label: 'Number or enterprise block', value: 20, color: '#93c5fd' }]" /><div class="min-w-48 flex-1"><ChartLegend :items="[{ label: 'Subscriber not identifiable', color: '#2563eb', value: '3 L' }, { label: 'Number not provisioned', color: '#60a5fa', value: '1.8 L' }, { label: 'Number or enterprise block', color: '#93c5fd', value: '20k' }]" /></div></div></Card>
          </div>
        </template>
      </DataTable>
    </Card>
  </div>
</AppShell>`)

export const LoadingAndErrorStates = screen(`
<AppShell :groups="fx.regulatorNav" active="migration" :expanded="['consents']" org="Telecom Regulator" org-type="Regulator" org-color="#1e40af" tone="regulator">
  <div class="mx-auto flex max-w-[1280px] flex-col gap-4">
    <PageHeader title="Migration" />
    <div class="grid gap-4 md:grid-cols-3"><KpiCard label="Covered subscribers" icon="activity" tone="brand" loading /><KpiCard label="Consents ready for notification" icon="send" loading /><KpiCard label="Participating enterprises" icon="building" loading /></div>
    <div class="grid gap-4 lg:grid-cols-2">
      <Card title="Consent Funnel" icon="funnel"><PanelState kind="error" title="Funnel unavailable" description="We could not load the upload funnel. Please retry after refreshing the page." action-label="Retry" /></Card>
      <Card title="Channel Owner Metrics" icon="activity"><PanelState kind="error" title="Channel owner data unavailable" description="We could not load telecom upload metrics right now." action-label="Retry" /></Card>
      <Card title="By Industry" icon="activity"><PanelState kind="error" title="Industry data unavailable" description="We could not load industry metrics right now." action-label="Retry" /></Card>
      <Card title="Top 10 Enterprises" icon="building"><PanelState kind="loading" /></Card>
    </div>
  </div>
</AppShell>`)

export const Dashboard = screen(`
<AppShell :groups="fx.regulatorNav" active="migration" :expanded="['consents']" org="Telecom Regulator" org-type="Regulator" org-color="#1e40af" tone="regulator">
  <div class="mx-auto flex max-w-[1280px] flex-col gap-4">
    <PageHeader title="Migration" />
    <PhaseTracker :progress="25" :phases="[{ title: 'Upload Window', detail: 'closes in 10 days', state: 'active' }, { title: 'User Notification', detail: 'Opens on 28 Jun 2026', state: 'upcoming' }, { title: 'Writing to DLT', detail: 'Opens on 08 July 2026', state: 'upcoming' }, { title: 'Migration Complete', detail: 'Opens on 08 July 2026', state: 'upcoming' }]" />
    <div class="grid gap-4 md:grid-cols-3">
      <KpiCard label="Covered subscribers" value="68.4" unit="Cr" caption="out of 100 Cr total subscribers" icon="activity" tone="brand" delta="2.1% new subscribers day on day" :trend="[3,4,5,5,6,6,7,7]" trend-tone="success" />
      <KpiCard label="Consents ready for notification" value="15.2" unit="Cr" caption="out of 20 Cr target" icon="send" delta="64 Lakh this week" :trend="[2,3,4,5,5,6,6,6]" />
      <KpiCard label="Participating enterprises" value="11,240" caption="81% of 13,842 eligible enterprises" icon="building" :progress="81" />
    </div>
    <div class="grid gap-4 lg:grid-cols-2">
      <Card title="Consent Funnel" icon="funnel"><FunnelChart :stages="fx.funnel" /></Card>
      <Card flush title="Channel Owner Metrics" icon="activity"><DataTable caption="Channel owner metrics" row-key="name" :rows="fx.channelOwners" :columns="[{ key: 'name', label: 'Channel owner' }, { key: 'covered', label: 'Subscribers covered', align: 'right' }, { key: 'ready', label: 'Ready for notifications', align: 'right' }]"><template #cell-name="{ row }"><span class="flex items-center gap-2.5 font-medium text-ink"><BrandMark :name="row.name" :color="row.color" size="sm" />{{ row.name }}</span></template></DataTable></Card>
      <Card title="DND vs Non-DND" icon="clock"><template #actions><SegmentedControl v-model="view" :options="[{ label: 'Consents', value: 'c' }, { label: 'Subscribers', value: 's' }]" /></template><div class="flex flex-wrap items-center gap-6"><DonutChart :size="150" center="18.4 Cr" caption="total" :segments="[{ label: 'DND', value: 80, color: '#2563eb' }, { label: 'Other', value: 20, color: '#93c5fd' }]" /><div class="min-w-48 flex-1"><ChartLegend :items="[{ label: 'DND', color: '#2563eb', value: '14.7 Cr', share: '80%' }, { label: 'Other', color: '#93c5fd', value: '3.7 Cr', share: '20%' }]" /></div></div></Card>
      <Card title="Consent Channel Preference" icon="clock"><div class="flex flex-wrap items-center gap-6"><DonutChart :size="150" center="258 Cr" caption="total" :segments="[{ label: 'SMS only', value: 35, color: '#2563eb' }, { label: 'Voice only', value: 18, color: '#3b82f6' }, { label: 'Both', value: 47, color: '#93c5fd' }]" /><div class="min-w-48 flex-1"><ChartLegend :items="[{ label: 'SMS only', color: '#2563eb', value: '90 Cr', share: '35%' }, { label: 'Voice only', color: '#3b82f6', value: '47 Cr', share: '18%' }, { label: 'Both', color: '#93c5fd', value: '121 Cr', share: '47%' }]" /></div></div></Card>
      <Card title="By Industry" icon="activity"><MiniBars :items="[{ label: 'BFSI', value: 23.5, display: '23.5 Cr' }, { label: 'Real Estate', value: 21.4, display: '21.4 Cr' }, { label: 'Health', value: 16.7, display: '16.7 Cr' }, { label: 'Goods', value: 10.2, display: '10.2 Cr' }, { label: 'Education', value: 6.5, display: '6.5 Cr' }]" /></Card>
      <Card flush title="Top Enterprises" icon="building"><DataTable caption="Top enterprises" row-key="name" :rows="fx.topEnterprises" :columns="[{ key: 'name', label: 'Enterprise' }, { key: 'covered', label: 'Subscribers covered', align: 'right' }, { key: 'ready', label: 'Ready', align: 'right' }]"><template #cell-name="{ row }"><span class="flex items-center gap-2.5 font-medium text-ink"><BrandMark :name="row.name" :color="row.color" size="sm" />{{ row.name }}</span></template></DataTable></Card>
    </div>
  </div>
</AppShell>`, () => ({ view: ref('c') }))
export const Empty = screen(`
<AppShell :groups="fx.regulatorNav" active="migration" :expanded="['consents']" org="Telecom Regulator" org-type="Regulator" org-color="#1e40af" tone="regulator">
  <div class="mx-auto flex max-w-[1280px] flex-col gap-4">
    <PageHeader title="Migration" />
    <div class="grid gap-4 lg:grid-cols-2">
      <Card title="Consent Funnel" icon="funnel"><PanelState title="No funnel data" description="The consent funnel will appear once consents are ingested." icon="menu" /></Card>
      <Card title="Channel Owner Metrics" icon="activity"><PanelState title="No channel owner data" description="Metrics will appear once telecom upload data is available." icon="menu" /></Card>
      <Card title="DND vs Non-DND" icon="clock"><PanelState title="No DND data" description="DND distribution will appear once consents are in scope." icon="menu" /></Card>
      <Card title="Consent Channel Preference" icon="clock"><PanelState title="No channel preference data" description="Channel preference will appear once consents are uploaded." icon="menu" /></Card>
    </div>
  </div>
</AppShell>`)
