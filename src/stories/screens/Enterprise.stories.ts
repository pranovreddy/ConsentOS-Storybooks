import { ref } from 'vue'
import { screen } from '../util'
export default { title: 'Screens/Enterprise' }

export const Home = screen(`
<AppShell :groups="fx.enterpriseNav" active="home">
  <div class="mx-auto flex max-w-[1200px] flex-col gap-5">
    <WelcomeHero eyebrow="Welcome to WiselyConsent" lead="You're in," name="Ravi Menon" description="Your organisation's consent infrastructure is a few steps away. Everything below guides you through. Pick up anytime; your progress is always saved." />
    <div class="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_300px]">
      <OnboardingPath title="Your path to kick off migration" :percent="29" :stages="fx.onboardingStages" />
      <div class="flex flex-col gap-4">
        <Card>
          <Eyebrow>Need help?</Eyebrow>
          <p class="portal-type-section-title mt-2">We've got you.</p>
          <p class="portal-type-page-subtitle mt-3"><b class="font-medium text-ink">Onboarding playbook.</b> An 8-minute read on RBAC, rate cards, and enterprise selection.</p>
          <p class="portal-type-page-subtitle mt-3"><b class="font-medium text-ink">Live support.</b> 24/7 WiselyConsent</p>
          <LinkArrow class="mt-3">Read the playbook</LinkArrow>
        </Card>
        <Card><Eyebrow class="mb-4">Account context</Eyebrow><KeyValueList :items="fx.accountContext" /></Card>
      </div>
    </div>
  </div>
</AppShell>`)

export const UploadConsents = screen(`
<AppShell :groups="fx.enterpriseNav" active="migration">
  <div class="mx-auto flex max-w-[1200px] flex-col gap-5">
    <PageHeader title="Upload Consents" description="Select the line of business, upload your consent CSV, and confirm the declaration to start secure validation. Your file is encrypted on your device before upload." />
    <Stepper :steps="fx.migrationSteps" :current="0" />
    <div class="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_340px]">
      <Card>
        <div class="flex flex-wrap items-start justify-between gap-3">
          <div><h2 class="portal-type-section-title">Upload your consent file</h2><p class="portal-type-page-subtitle mt-1 max-w-lg">Your consent records are encrypted the moment they reach us and validated inside a secure, isolated environment with no outside access.</p></div>
          <PopoverCard><template #trigger><Button variant="secondary" size="sm" icon="shield-check">Encrypted end-to-end</Button></template><p class="portal-type-body-muted">Files are encrypted on your device before upload.</p></PopoverCard>
        </div>
        <div class="portal-stack-form mt-5">
          <FormField label="Line of business (LOB)" required><SelectField v-model="lob" :options="fx.lobOptions" placeholder="Select LOB" /></FormField>
          <FormField label="Consent file" required :disabled="!lob"><FileDropzone :disabled="!lob" /></FormField>
          <DeclarationCheck v-model="agreed" :disabled="!lob">We, HDFC Bank, confirm that the customer consents uploaded comply with applicable laws, TRAI regulations and directions. We affirm the verification and accuracy of the uploaded consents and acknowledge that false declarations may lead to legal action.</DeclarationCheck>
          <Button size="lg" icon="shield-check" block :disabled="!lob || !agreed">Start Secure Validation</Button>
          <p class="portal-type-body-muted text-center">{{ !lob ? 'Select an LOB to get started.' : !agreed ? 'Upload your file and confirm the declaration.' : 'Ready to validate.' }}</p>
        </div>
      </Card>
      <div class="flex flex-col gap-4"><UploadChecklist :items="fx.checklistEmpty" /><CsvFormatCard v-bind="fx.csv" /></div>
    </div>
  </div>
</AppShell>`, () => ({ lob: ref<string>(), agreed: ref(false) }))

export const DataValidation = screen(`
<AppShell :groups="fx.enterpriseNav" active="migration">
  <div class="mx-auto flex max-w-[1200px] flex-col gap-5">
    <PageHeader title="Data Validation" description="We validate your encrypted CSV in a secure environment to detect data issues, find duplicates, and generate AI-suggested fixes.">
      <template #actions><MetaChip icon="building">Credit Card·HDFC BANK</MetaChip><MetaChip icon="file">demo_consents.csv</MetaChip></template>
    </PageHeader>
    <Stepper :steps="fx.migrationSteps" :current="1" />
    <AiSummary>70,000 records scanned: 69,000 are valid and ready as-is. Of the 800 errors, 449 are auto-fixable, mostly date and language-code formats, and 351 need offline correction. 200 duplicates were removed automatically.</AiSummary>
    <MetricStrip center="98.6%" caption="Valid" :segments="[{ label: 'Valid', value: 69000, color: '#93c5fd' }, { label: 'Errors', value: 800, color: '#2563eb' }, { label: 'Duplicates', value: 200, color: '#1e40af' }]" :metrics="[{ label: 'Total records', value: '70,000', caption: 'demo_consents.csv' }, { label: 'Valid', value: '69,000', caption: 'ready as-is', dot: '#93c5fd' }, { label: 'Errors', value: '800', caption: '449 auto-fixable, 351 manual', dot: '#2563eb', downloadable: true }, { label: 'Duplicates', value: '200', caption: 'removed automatically', dot: '#1e40af' }]" />
    <ResultCard tone="brand" icon="sparkles" title="AI can fix 449/800 errors" tag="1-click" description="Date formats, language codes and number formats corrected automatically. Review the fix report any time."><template #actions><Button variant="secondary" icon="download">Download Suggestions</Button><Button>Apply AI Fixes</Button></template></ResultCard>
    <ResultCard tone="warning" icon="file-plus" title="351 errors need offline fixes" tag="Manual" description="AI can't fix these safely. Download, correct offline, and re-upload as a new migration. They're excluded from this one."><template #actions><Button variant="secondary" icon="download">Download Errors</Button></template></ResultCard>
    <ResultCard icon="copy" title="200 duplicates removed" tag="Auto" description="Duplicates of the same mobile number within an LOB are removed. The first record we process is kept; the rest are dropped."><template #actions><Button variant="secondary" icon="download">Download Duplicates</Button></template></ResultCard>
    <StickyActionBar title="69,000 records will proceed to Consent Verification" detail="Excluded if you proceed now: 449 fixable, 351 manual, 200 duplicates"><Button variant="on-dark" icon="trash">Cancel Migration</Button><Button icon-right="arrow-right">Continue to Consent Verification</Button></StickyActionBar>
  </div>
</AppShell>`)

export const ConsentVerification = screen(`
<AppShell :groups="fx.enterpriseNav" active="migration">
  <div class="mx-auto flex max-w-[1200px] flex-col gap-5">
    <PageHeader title="Consent Verification" description="Consent verification is complete. Review the Passed and Failed results before sending the file for approval.">
      <template #actions><MetaChip icon="building">Credit Card·HDFC BANK</MetaChip><MetaChip icon="file">demo_consents.csv</MetaChip></template>
    </PageHeader>
    <Stepper :steps="fx.migrationSteps" :current="2" />
    <AiSummary>69,000 records checked: 48,407 passed verification and will be active after consent enforcement. 20,593 need explicit customer opt-in before you can send them promotional communications, unless you appeal and the registrar approves your appeal.</AiSummary>
    <MetricStrip center="60%" caption="Passed" :segments="[{ label: 'Passed', value: 48407, color: '#2563eb' }, { label: 'Failed', value: 20593, color: '#93c5fd' }]" :metrics="[{ label: 'Total valid records', value: '69,000', caption: 'Uploaded minus validation errors' }, { label: 'Passed', value: '48,407', share: '60%', caption: 'Opted in', dot: '#2563eb' }, { label: 'Failed', value: '20,593', share: '40%', caption: 'Opted out', dot: '#93c5fd' }]" />
    <ResultCard tone="success" icon="circle-check" title="48,407 Passed Verification" description="These records passed consent verification. You are eligible to send promotional communication to these customers after the enforcement date."><template #actions><Button variant="secondary" icon="download">Download</Button></template></ResultCard>
    <ResultCard tone="attention" icon="bell" title="20,593 Need Customer Opt-in" description="These records did not pass consent verification. They will be opted out until the customer opts in, or you submit an appeal with valid proof."><template #actions><Button variant="secondary" icon="download">Download</Button><Button icon="file">Submit An Appeal</Button></template></ResultCard>
    <StickyActionBar title="69,000 verified records will proceed to approval" detail="20,593 records will stay opted out if you continue without an appeal"><Button variant="on-dark">Cancel Migration</Button><Button icon-right="arrow-right">Send for Approval</Button></StickyActionBar>
  </div>
</AppShell>`)

export const UploadSummary = screen(`
<AppShell :groups="fx.enterpriseNav" active="migration">
  <div class="mx-auto flex max-w-[1200px] flex-col gap-5">
    <PageHeader title="Upload Summary" description="Here's a full breakdown of your uploaded consent records." />
    <Stepper :steps="fx.migrationSteps" :current="4" />
    <OutcomeSummary title="Approved for Migration" description="All 69,000 records approved and will be migrating automatically." status="All Approved" time="today, 12:26 PM" :stats="[{ label: 'Uploaded', value: '70,000', caption: 'Total records in file', icon: 'upload', tone: 'neutral' }, { label: 'Approved', value: '69,000', caption: '100% of submission', icon: 'circle-check', tone: 'success' }, { label: 'Validation errors', value: '1,000', caption: '1.4% of uploaded', icon: 'warning', tone: 'warning' }]" />
    <Card title="Upload Summary"><template #actions><MenuButton label="Download" icon="download" :items="[{ label: 'CSV', icon: 'file' }, { label: 'PDF', icon: 'file-check' }]" /></template><SankeyFlow :nodes="fx.flow.nodes" :links="fx.flow.links" footnote="Visual proportions adjusted for readability. Counts shown are exact." /></Card>
    <div class="flex justify-end gap-2"><Button variant="secondary" size="lg" icon="upload">Upload New File</Button><Button size="lg">Done</Button></div>
  </div>
</AppShell>`)

const validationSteps = [{ label: 'Validating data integrity', state: 'done' }, { label: 'Checking for duplicates', state: 'done' }, { label: 'Categorizing detected errors', state: 'done' }, { label: 'Generating AI suggestions', state: 'active' }]
const verifySteps = [{ label: 'Preparing validated records', state: 'done' }, { label: 'Checking consent signals', state: 'done' }, { label: 'Verifying each consent record', state: 'done' }, { label: 'Preparing your results', state: 'active' }]

export const ConsentMigrationHub = screen(`
<AppShell :groups="fx.enterpriseNav" active="migration">
  <div class="mx-auto flex max-w-[1200px] flex-col gap-5">
    <PageHeader title="Consent Migration" description="Migrate your legacy consent records: validated, verified and notified to users in dedicated phases."><template #actions><Button size="lg" icon="upload">New Upload</Button></template></PageHeader>
    <PhaseTracker :progress="33" :phases="[{ title: 'Upload & Submit', detail: 'closes in 15 days', state: 'active' }, { title: 'Consent Notification', detail: 'opens on 28 June 2026', state: 'upcoming' }, { title: 'Consent Based Scrubbing', detail: 'opens on 08 July 2026', state: 'upcoming' }]" />
    <div class="grid gap-4 lg:grid-cols-2">
      <Card>
        <Eyebrow>Migration status</Eyebrow>
        <div class="mt-2 flex justify-between text-sm font-medium"><span class="text-ink-2">Total uploaded</span><span class="tnum">1,48,948</span></div>
        <GaugeChart class="mt-3" center="44,996" caption="Approved" :segments="[{ label: 'Action needed', value: 50.8, color: '#93c5fd' }, { label: 'Approved', value: 30.5, color: '#1e3a8a' }, { label: 'In progress', value: 14.8, color: '#60a5fa' }, { label: 'Rejected', value: 3.2, color: '#3b82f6' }, { label: 'Excluded', value: 0.7, color: '#bfdbfe' }]" />
        <div class="mt-5"><ChartLegend :items="[{ label: 'Approved for Migration', color: '#1e3a8a', value: '44,996', share: '30.5%' }, { label: 'Action Needed', color: '#93c5fd', value: '74,849', share: '50.8%', expandable: true }, { label: 'In Progress', color: '#60a5fa', value: '21,850', share: '14.8%', expandable: true }, { label: 'Rejected for Migration', color: '#3b82f6', value: '4,750', share: '3.2%' }, { label: 'Excluded at Validation', color: '#bfdbfe', value: '1,003', share: '0.7%', expandable: true }]" /></div>
      </Card>
      <Card><Eyebrow class="mb-2">LOB wise comparison</Eyebrow><StackedBars :height="360" :categories="['CC','DC','HL','PL']" :series="[{ label: 'Approved', color: '#1e3a8a', values: [45000, 0, 0, 0] }, { label: 'In progress', color: '#3b82f6', values: [2000, 0, 5000, 0] }, { label: 'Action needed', color: '#60a5fa', values: [0, 18500, 0, 700] }]" /></Card>
    </div>
    <Card flush title="Upload history">
      <template #actions><div class="w-56"><SearchInput placeholder="Search files" /></div><Button variant="secondary" icon="filter">Filters</Button></template>
      <DataTable caption="Upload history" :rows="fx.uploads" :columns="[{ key: 'file', label: 'Filename', mono: true }, { key: 'lob', label: 'LOB' }, { key: 'uploaded', label: 'Uploaded', align: 'right' }, { key: 'valid', label: 'Valid', align: 'right' }, { key: 'updated', label: 'Updated' }, { key: 'status', label: 'Status' }, { key: 'actions', label: 'Action', align: 'right' }]">
        <template #cell-file="{ value }"><div class="w-36"><TruncatedText :text="value" /></div></template>
        <template #cell-status="{ row }"><Badge :variant="row.tone" dot>{{ row.status }}</Badge></template>
        <template #cell-actions><RowActions :items="[{ label: 'View details', icon: 'eye' }, { label: 'Download', icon: 'download' }]" /></template>
      </DataTable>
      <template #footer><Pagination v-model="page" :total="7" :page-sizes="[5, 10, 20]" /></template>
    </Card>
  </div>
</AppShell>`, () => ({ page: ref(1) }))

export const DataValidationProcessing = screen(`
<AppShell :groups="fx.enterpriseNav" active="migration">
  <div class="mx-auto flex max-w-[1200px] flex-col gap-5">
    <PageHeader title="Data Validation" description="We validate your encrypted CSV in a secure environment to detect data issues, find duplicates, and generate AI-suggested fixes."><template #actions><MetaChip icon="building">Credit Card·HDFC BANK</MetaChip><MetaChip icon="file">demo_consents.csv</MetaChip></template></PageHeader>
    <Stepper :steps="fx.migrationSteps" :current="1" />
    <ProcessingPanel>
      <template #art><ScanPreview file-name="consent_upload_template.csv" /></template>
      <ProcessStatus title="Processing your data" description="Analysing and standardising your consent records" :steps="validationSteps" :percent="63" estimate="~15 minutes" />
      <template #footer>You can safely leave this screen while the file is processing. You can access it later from the migration page, or <a href="#" class="text-brand-700 underline">upload a new file</a>.</template>
    </ProcessingPanel>
    <NextSteps :steps="[{ title: 'File uploaded', description: 'Encrypted file received and queued for validation.', icon: 'upload', state: 'done' }, { title: 'Review results', description: 'Breakdown of valid, AI-fixable, and manual-error records.', icon: 'search', state: 'active' }, { title: 'Apply AI Fixes', description: 'Resolve fixable errors in one click, then download the rest.', icon: 'sparkles', state: 'upcoming' }, { title: 'Consent Verification', description: 'Verify each record is genuine and traceable to the subscriber.', icon: 'shield-check', state: 'upcoming' }]" />
  </div>
</AppShell>`, () => ({ validationSteps }))

export const ConsentVerificationProcessing = screen(`
<AppShell :groups="fx.enterpriseNav" active="migration">
  <div class="mx-auto flex max-w-[1200px] flex-col gap-5">
    <PageHeader title="Consent Verification" description="We're verifying each record across multiple consent signals and classifying the verification results."><template #actions><MetaChip icon="building">Credit Card·HDFC BANK</MetaChip><MetaChip icon="file">demo_consents.csv</MetaChip></template></PageHeader>
    <Stepper :steps="fx.migrationSteps" :current="2" />
    <ProcessingPanel>
      <template #art>
        <div class="flex min-h-72 flex-col items-center justify-center gap-5 rounded-xl border border-line bg-gray-50 p-6">
          <div class="flex w-full items-center justify-between gap-3">
            <div class="rounded-md border border-success-500/40 bg-surface px-3 py-2 text-xs shadow-card"><Badge variant="success" dot>Passed</Badge><p class="mt-1 text-ink-2">Authentic consent</p></div>
            <Spinner :size="40" />
            <div class="rounded-md border border-danger-200 bg-surface px-3 py-2 text-xs shadow-card"><Badge variant="danger" dot>Failed</Badge><p class="mt-1 text-ink-2">Did not pass check</p></div>
          </div>
          <div class="rounded-md border border-line bg-surface px-4 py-2 text-center shadow-card"><p class="portal-type-label">Record #18,402</p><MaskedValue value="+919876543247" :visible-end="0" /></div>
          <p class="text-sm text-ink-2">Cross-checking traffic patterns</p>
        </div>
      </template>
      <ProcessStatus tone="success" title="Running Consent Verification" description="We're verifying each consent record" :steps="verifySteps" :percent="63" estimate="~15 minutes" />
      <template #footer>You can leave this screen while verification runs. We'll continue processing in the background, or you can <a href="#" class="text-brand-700 underline">upload a new file</a>.</template>
    </ProcessingPanel>
    <NextSteps :steps="[{ title: 'Data Validation', description: 'Formats, duplicates, and critical errors were checked.', icon: 'check', state: 'done' }, { title: 'Consent Verification', description: 'Checking records against the verification network.', icon: 'shield-check', state: 'active' }, { title: 'Approval', description: 'A proforma invoice will be generated and sent for finance review.', icon: 'dollar', state: 'upcoming' }]" />
  </div>
</AppShell>`, () => ({ verifySteps }))

export const SubmittedForApproval = screen(`
<AppShell :groups="fx.enterpriseNav" active="migration">
  <div class="mx-auto flex max-w-[1200px] flex-col gap-5">
    <PageHeader title="Upload Summary" description="Here's a full breakdown of your uploaded consent records." />
    <Stepper :steps="fx.migrationSteps" :current="3" />
    <OutcomeSummary tone="pending" title="Submitted for Approval" description="69,000 records sent for approval, review in progress." status="Approval in Review" time="today, 12:33 PM" :stats="[{ label: 'Uploaded', value: '70,000', caption: 'Total records in file', icon: 'upload', tone: 'neutral' }, { label: 'Sent for approval', value: '69,000', caption: '98.6% of uploaded', icon: 'send', tone: 'success' }, { label: 'Validation errors', value: '1,000', caption: '1.4% of uploaded', icon: 'warning', tone: 'warning' }]" />
    <Card title="Upload Summary"><template #actions><MenuButton label="Download" icon="download" :items="[{ label: 'CSV', icon: 'file' }, { label: 'PDF', icon: 'file-check' }]" /></template><SankeyFlow :nodes="fx.flow.nodes" :links="fx.flow.links" footnote="Visual proportions adjusted for readability. Counts shown are exact." /></Card>
    <div class="flex justify-end gap-2"><Button variant="secondary" size="lg" icon="upload">Upload New File</Button><Button size="lg">Done</Button></div>
  </div>
</AppShell>`)

export const Approvals = screen(`
<AppShell :groups="fx.enterpriseNav" active="approvals">
  <div class="mx-auto flex max-w-[1200px] flex-col gap-5">
    <PageHeader title="Approvals" description="Review and approve or reject proforma invoices across each LOB to finalize consents for migration."><template #actions><MenuButton label="Download" icon="download" :items="[{ label: 'CSV', icon: 'file' }, { label: 'PDF', icon: 'file-check' }]" /></template></PageHeader>
    <div class="grid gap-4 lg:grid-cols-2">
      <Card>
        <HeroStat label="Pending approval" value="₹8,379.99" pill="1,59,650 consents" :progress="40" />
        <div class="mt-3 grid grid-cols-2 gap-3"><SummaryStat value="₹17,697.84" label="Total" detail="3,32,650 consents" /><SummaryStat value="₹5,618.83" label="Approved" detail="1,07,000 consents" tone="brand" /></div>
        <div class="mt-3 flex items-center justify-between border-t border-line pt-3 text-[13px]"><span class="text-ink-2">Rejected</span><span class="text-right font-semibold tnum">₹3,699.02<span class="block font-normal text-ink-2">66,000 consents</span></span></div>
      </Card>
      <Card><Eyebrow class="mb-2">LOB wise split</Eyebrow><StackedBars :height="300" :format="(v) => '₹' + (v / 1000) + 'k'" :categories="['CC','DC','HL','PL']" :series="[{ label: 'Pending', color: '#2563eb', values: [2044, 2577, 3758, 0] }, { label: 'Approved', color: '#93c5fd', values: [4365, 1254, 0, 0] }, { label: 'Rejected', color: '#bfdbfe', values: [0, 0, 0, 3699] }]" /></Card>
    </div>
    <Card flush>
      <template #header><FilterPills v-model="filter" aria-label="Status" :options="[{ label: 'All', value: 'a' }, { label: 'Pending', value: 'p' }, { label: 'Approved', value: 'ok' }, { label: 'Rejected', value: 'r' }]" /></template>
      <template #actions><div class="w-56"><SearchInput placeholder="Search files" /></div><Button>Review all pending</Button></template>
      <LobFileGroup v-for="g in fx.lobGroups" :key="g.title" v-bind="g" />
    </Card>
  </div>
</AppShell>`, () => ({ filter: ref('a') }))

export const ProformaInvoiceReview = screen(`
<AppShell :groups="fx.enterpriseNav" active="approvals">
  <div class="mx-auto flex max-w-[1100px] flex-col gap-4">
    <div><Button variant="secondary" size="sm" icon="chevron-left">Back to Approvals</Button></div>
    <Card>
      <template #header><div><h1 class="portal-type-section-title">Proforma Invoice Review</h1><div class="mt-2 flex flex-wrap gap-2"><MetaChip icon="shield-check">Credit Cards</MetaChip><MetaChip icon="file">cc_rewards_may.csv</MetaChip></div></div></template>
      <template #actions><Badge variant="warning" icon="warning">Pending</Badge><MenuButton variant="primary" label="Download" icon="download" :items="[{ label: 'Invoice PDF', icon: 'file' }, { label: 'Records CSV', icon: 'file-check' }]" /></template>
      <div class="portal-stack-form">
        <div class="grid gap-4 md:grid-cols-2">
          <article class="rounded-lg border border-line p-5"><div class="flex items-start justify-between"><Eyebrow>Consents in this invoice</Eyebrow><IconTile icon="shield-check" tone="neutral" size="sm" /></div><BigStat class="mt-2" value="38,450" size="xl" /><p class="portal-type-page-subtitle mt-1">Distributed across 3 GTM partners</p></article>
          <article class="rounded-lg border border-line p-5"><div class="flex items-start justify-between"><Eyebrow>Total payable</Eyebrow><IconTile icon="dollar" tone="neutral" size="sm" /></div><BigStat class="mt-2" value="₹2,044.12" size="xl" tone="brand" /><p class="portal-type-page-subtitle mt-1">Tax as applicable</p></article>
        </div>
        <Card flush title="GTM wise split" description="Partner allocation for this invoice.">
          <DataTable caption="GTM wise split" :rows="fx.invoiceRows" row-key="gtm" :columns="[{ key: 'gtm', label: 'GTM' }, { key: 'share', label: 'Allocation', align: 'right' }, { key: 'consents', label: 'Consents', align: 'right' }, { key: 'price', label: 'Unit price', align: 'right', mono: true }, { key: 'amount', label: 'Amount', align: 'right', mono: true }]">
            <template #foot><tr><th scope="row" class="px-4 py-3.5 text-left">Total</th><td class="px-4 text-right">100%</td><td class="px-4 text-right">38,450</td><td /><td class="px-4 text-right font-mono text-[13px]">₹2,044.12</td></tr></template>
          </DataTable>
        </Card>
        <Alert title="What happens after confirmation">
          <ul class="mt-1 list-disc pl-4"><li>Approved consents will be finalized for migration.</li><li>Excluded records won't be migrated. You can re-upload rejected consents before the migration end date.</li><li>Payment terms follow the signed GTM partner agreement.</li></ul>
        </Alert>
        <Divider />
        <div class="flex flex-wrap items-center justify-between gap-3"><p class="portal-type-page-subtitle">Approve to finalise these consents for migration. Reject to stop migrating them.</p><div class="flex gap-2"><Button variant="danger-soft" size="lg" icon="circle-x">Reject</Button><Button size="lg" icon="circle-check">Approve</Button></div></div>
      </div>
    </Card>
  </div>
</AppShell>`)

export const ConsentAcquisition = screen(`
<AppShell :groups="fx.enterpriseNav" active="acquisition">
  <div class="mx-auto flex max-w-[1200px] flex-col gap-5">
    <PageHeader title="Consent Acquisition" description="Track new consents by status and LOB."><template #actions><Button size="lg" icon="upload">Upload Consents</Button></template></PageHeader>
    <div class="grid gap-4 lg:grid-cols-2">
      <Card>
        <Eyebrow>Acquisition status</Eyebrow>
        <div class="mt-2 flex justify-between text-sm font-medium"><span class="text-ink-2">Total records</span><span class="tnum">77,072</span></div>
        <GaugeChart class="mt-3" center="58,590" caption="Acquired" :segments="[{ label: 'Acquired', value: 76, color: '#1e3a8a' }, { label: 'In progress', value: 11.9, color: '#60a5fa' }, { label: 'Failed', value: 12, color: '#93c5fd' }]" />
        <div class="mt-5"><ChartLegend :items="[{ label: 'Acquired', color: '#1e3a8a', value: '58,590', share: '76%' }, { label: 'In progress', color: '#60a5fa', value: '9,200', share: '11.9%', expandable: true }, { label: 'Failed', color: '#93c5fd', value: '9,282', share: '12%', expandable: true }]" /></div>
      </Card>
      <Card><Eyebrow class="mb-2">LOB wise comparison</Eyebrow><StackedBars :height="300" :ticks="4" :categories="['Credit Card','Personal Loan','Home Loan','Debit Card']" :series="[{ label: 'Acquired', color: '#1e3a8a', values: [35000, 13000, 9000, 2000] }, { label: 'In progress', color: '#60a5fa', values: [3000, 0, 0, 6500] }, { label: 'Failed', color: '#93c5fd', values: [0, 6000, 3400, 0] }]" /></Card>
    </div>
    <ResultCard tone="attention" icon="warning" title="561 records failed the veracity check" description="They're opted out for now. You can challenge them with an appeal."><template #actions><Button variant="secondary">Review and appeal</Button><IconButton icon="x" label="Dismiss" variant="ghost" /></template></ResultCard>
    <Card flush>
      <template #header><SegmentedControl v-model="channel" aria-label="Source" :options="[{ label: 'File uploads', value: 'f', icon: 'file' }, { label: 'SFTP', value: 's', icon: 'database' }, { label: 'API', value: 'a', icon: 'plug' }]" /></template>
      <template #actions><div class="w-56"><SearchInput placeholder="Search files" /></div><Button variant="secondary" icon="filter">Filters</Button><MenuButton label="Appeal" icon="file" :items="[{ label: 'Submit an appeal', icon: 'send' }, { label: 'Appeal history', icon: 'clock' }]" /></template>
      <DataTable caption="Acquisition files" :rows="fx.acquisitions" :columns="[{ key: 'file', label: 'Filename' }, { key: 'lob', label: 'LOB' }, { key: 'status', label: 'Processing status' }, { key: 'date', label: 'Date and time' }, { key: 'uploaded', label: 'Uploaded', align: 'right' }, { key: 'fixed', label: 'AI fixed', align: 'right' }, { key: 'failed', label: 'Failed validation', align: 'right' }, { key: 'actions', label: 'Action', align: 'right' }]">
        <template #cell-file="{ row }"><span class="block font-medium text-ink">{{ row.file }}</span><span class="font-mono text-xs text-ink-2">{{ row.ref }}</span></template>
        <template #cell-status="{ row }"><Badge :variant="row.tone" dot>{{ row.status }}</Badge></template>
        <template #cell-date="{ row }"><span class="block text-ink">{{ row.date }}</span><span class="text-xs text-ink-2">{{ row.time }}</span></template>
        <template #cell-fixed="{ value }"><span class="font-medium text-success-600 tnum">{{ value }}</span></template>
        <template #cell-failed="{ value }"><span class="font-medium text-danger-600 tnum">{{ value }}</span></template>
        <template #cell-actions><RowActions :items="[{ label: 'View details', icon: 'eye' }, { label: 'Download failures', icon: 'download' }]" /></template>
      </DataTable>
      <template #footer><Pagination v-model="page" v-model:page-size="size" :total="5" :page-sizes="[5, 10, 20]" /></template>
    </Card>
  </div>
</AppShell>`, () => ({ channel: ref('f'), page: ref(1), size: ref(5) }))
