import type { NavGroup } from '@/components/navigation/SidebarNav.vue'

// Sample data lifted from the design files. Names and numbers are illustrative.

export const enterpriseNav: NavGroup[] = [
  { title: 'Workspace', items: [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'assets', label: 'Manage Assets', icon: 'building' },
    { id: 'brands', label: 'Brands & LOBs', icon: 'building' },
    { id: 'templates', label: 'Promo Template Mapping', icon: 'list-checks' },
  ] },
  { title: 'Operate', items: [
    { id: 'migration', label: 'Migration', icon: 'arrow-left-right' },
    { id: 'approvals', label: 'Approvals', icon: 'circle-check', count: 3 },
    { id: 'integrations', label: 'Integrations', icon: 'plug', children: [
      { id: 'api', label: 'API keys', icon: 'key' },
      { id: 'webhooks', label: 'Webhooks', icon: 'zap' },
    ] },
    { id: 'acquisition', label: 'Consent Acquisition', icon: 'building' },
    { id: 'gtm', label: 'GTM Partners', icon: 'users' },
  ] },
  { title: 'Analyse', items: [
    { id: 'reports', label: 'Reports', icon: 'file' },
    { id: 'insights', label: 'Insights', icon: 'chart-column' },
  ] },
  { title: 'Admin', items: [
    { id: 'users', label: 'User and Roles', icon: 'user-plus' },
    { id: 'finance', label: 'Finance', icon: 'dollar' },
    { id: 'audit', label: 'Audit Trail', icon: 'clock' },
  ] },
]

export const channelOwnerNav: NavGroup[] = [
  { title: 'Workspace', items: [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'analytics', label: 'Analytics', icon: 'chart-line' },
  ] },
  { title: 'Operate', items: [
    { id: 'rate-card', label: 'Rate Card', icon: 'credit-card' },
    { id: 'enterprises', label: 'Enterprises', icon: 'building' },
    { id: 'gtm', label: 'GTM Partners', icon: 'users' },
    { id: 'channel-owners', label: 'Channel Owners', icon: 'tower' },
    { id: 'inbox', label: 'Priority Inbox', icon: 'bell-ring', count: 5 },
  ] },
  { title: 'Admin', items: [
    { id: 'users', label: 'User and Roles', icon: 'user-plus' },
    { id: 'finance', label: 'Finance', icon: 'dollar' },
    { id: 'audit', label: 'Audit Trail', icon: 'clock' },
  ] },
]

export const regulatorNav: NavGroup[] = [
  { title: 'Workspace', items: [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'albert', label: 'Ask Wise Albert', icon: 'sparkles' },
  ] },
  { title: 'Analytics 360', items: [
    { id: 'complaints', label: 'Complaints', icon: 'warning' },
    { id: 'consents', label: 'Consents', icon: 'shield-check', children: [
      { id: 'overview', label: 'Overview', icon: 'menu', locked: true },
      { id: 'migration', label: 'Migration', icon: 'arrow-left-right' },
      { id: 'acquisition', label: 'Acquisition', icon: 'globe', locked: true },
      { id: 'refresh', label: 'Refresh', icon: 'refresh', locked: true },
      { id: 'revocation', label: 'Revocation', icon: 'ban' },
    ] },
    { id: 'scrubbing', label: 'Scrubbing', icon: 'filter', locked: true },
    { id: 'assets', label: 'Assets', icon: 'list-checks' },
    { id: 'stakeholders', label: 'Stakeholders', icon: 'users', children: [
      { id: 'telcos', label: 'Telcos', icon: 'tower' },
      { id: 'enterprises', label: 'Enterprises', icon: 'building' },
    ] },
  ] },
  { title: 'Admin', items: [
    { id: 'users', label: 'Manage Users', icon: 'user-plus' },
    { id: 'audit', label: 'Audit Trail', icon: 'clock' },
  ] },
]

export const migrationSteps = ['Upload file', 'Data Validation', 'Consent Verification', 'Summary']

export const lobOptions = [
  { label: 'Credit Card', value: 'cc' },
  { label: 'Personal Loans', value: 'pl' },
  { label: 'Home Loans', value: 'hl' },
  { label: 'Deposits & Savings', value: 'ds' },
]

export const csv = {
  mandatory: [
    { name: 'Customer Mobile Number', format: '10 digit', help: 'Ten digits, with no country code or spaces.' },
    { name: 'Consent Collection Date', format: 'YYYY-MM-DD', help: 'The date the customer gave consent.' },
  ],
  optional: [
    { name: 'Consent Validity Date', format: 'YYYY-MM-DD', help: 'Leave blank if consent has no expiry.' },
    { name: 'Preferable Language', format: 'ISO code', help: 'ISO 639-1, such as hi or ta.' },
    { name: 'Channel Preference', format: 'SMS/Voice', help: 'SMS, Voice or Both.' },
  ],
}

export const checklistEmpty = [
  { label: 'Select LOB', detail: 'None selected yet.' },
  { label: 'Upload encrypted file', detail: 'Select LOB first.' },
  { label: 'Sign undertaking', detail: 'Confirm the declaration to enable upload.' },
]

export const onboardingStages = [
  {
    title: 'Set up your organisation',
    tasks: [
      { label: 'Invite team mates to the platform', icon: 'user-plus', done: true, meta: '28 Sept 2026 · 12:21 PM · Parth' },
      { label: 'Accept platform agreements', icon: 'file', done: true, meta: '28 Sept 2026 · 12:21 PM · Parth' },
      { label: 'Complete your KYC', icon: 'building', cta: 'Complete your KYC' },
    ],
  },
  { title: 'Prepare your consent estate', lockedText: 'Unlocks once your organisation is set up' },
  { title: 'Kick off migration', learnMore: true, countdown: { label: 'Migration live in', parts: ['12', '12', '13'], unit: 'days' } },
]

export const accountContext = [
  { label: 'DLT PEID', value: '**********3231', mono: true },
  { label: 'Enterprise name', value: 'HDFC Banking Limited' },
  { label: 'DLT mobile', value: '+91 98*****247', mono: true },
  { label: 'DLT email', value: 'Vi***.***ar@hdfc.example' },
  { label: 'Super admin email', value: 'Vi***.***ar@hdfc.example' },
]

export const rateOwners = [
  { id: 'bsnl', name: 'BSNL', color: '#e03939', status: 'pending', cta: 'View changes', ctaVariant: 'warning' },
  { id: 'jio', name: 'Reliance Jio', color: '#0b1a33', status: 'accepted', cta: 'View card', ctaVariant: 'secondary' },
  { id: 'vi', name: 'Vodafone Idea', color: '#7836e8', status: 'pending', cta: 'View and accept', ctaVariant: 'primary' },
] as const

export const rateActivities = [
  { label: 'Migration', sub: 'per consent / one-time', rates: { bsnl: 0.8, jio: 0.95, vi: null } },
  { label: 'Acquisition', sub: 'per consent', rates: { bsnl: 1.2, jio: 1.4, vi: null } },
  { label: 'Refresh', sub: 'yearly per consent', rates: { bsnl: 0.65, jio: 0.75, vi: null } },
]

export const rateScrubbing = [
  { label: 'SMS', channel: 'SMS', rates: { bsnl: 0.4, jio: 0.5, vi: null } },
  { label: 'Voice', channel: 'Voice', rates: { bsnl: 0.35, jio: 0.45, vi: null } },
  { label: 'RCS', channel: 'RCS', rates: { bsnl: 0.48, jio: 0.6, vi: null } },
] as const

// Upload Summary flow, positioned by hand to match the design's readable proportions.
export const flow = {
  nodes: [
    { id: 'up', label: 'Uploaded', value: '70,000', x: 0, y: 10, h: 230, color: '#dbeafe' },
    { id: 'valid', label: 'Valid Data', value: '69,000', x: 170, y: 10, h: 226, color: '#dbeafe' },
    { id: 'err', label: 'Errors', value: '800', x: 170, y: 288, h: 2, color: '#bfdbfe' },
    { id: 'dup', label: 'Duplicates', value: '200', x: 170, y: 335, h: 2, color: '#bfdbfe' },
    { id: 'cv', label: 'Consent Verification', value: '69,000', x: 340, y: 10, h: 226, color: '#bfdbfe' },
    { id: 'failed', label: 'Failed', value: '20,593', x: 495, y: 190, h: 66, color: '#93c5fd', align: 'left' },
    { id: 'appeal', label: 'Appealed', value: '20,593', x: 645, y: 190, h: 66, color: '#7ea6f0', align: 'left' },
    { id: 'okApp', label: 'Approved', sub: '(Opted-in)', value: '15,200', x: 800, y: 178, h: 46, color: '#7ea6f0', align: 'left' },
    { id: 'no', label: 'Rejected', sub: '(Opted-out)', value: '5,393', x: 800, y: 246, h: 16, color: '#7ea6f0', align: 'left' },
    { id: 'pass', label: 'Passed', sub: '(Opted-in)', value: '48,407', x: 860, y: 6, h: 150, color: '#6f96ea', align: 'left' },
    { id: 'final', label: 'Approved', value: '69,000', x: 986, y: 6, h: 230, color: '#6f96ea', align: 'left' },
    { id: 'drop', label: 'Dropped', value: '1,000', x: 986, y: 360, h: 3, color: '#6f96ea', align: 'left' },
  ],
  links: [
    { from: 'up', to: 'valid', h: 226 },
    { from: 'up', to: 'err', fromY: 226, h: 2, h2: 2 },
    { from: 'up', to: 'dup', fromY: 228, h: 2, h2: 2 },
    { from: 'valid', to: 'cv' },
    { from: 'cv', to: 'pass', h: 150, h2: 150 },
    { from: 'cv', to: 'failed', fromY: 150, h: 66, h2: 66 },
    { from: 'failed', to: 'appeal' },
    { from: 'appeal', to: 'okApp', h: 46, h2: 46 },
    { from: 'appeal', to: 'no', fromY: 46, h: 20, h2: 16 },
    { from: 'pass', to: 'final', h: 150, h2: 150 },
    { from: 'okApp', to: 'final', toY: 150, h: 46, h2: 62 },
    { from: 'no', to: 'final', toY: 212, h: 16, h2: 18 },
    { from: 'err', to: 'drop', h: 2, h2: 1 },
    { from: 'dup', to: 'drop', toY: 1, h: 2, h2: 1 },
  ],
} as const

export const stateValues: Record<string, number> = { UP: 15.24, MH: 8.17, BR: 7.95, WB: 6.97, MP: 5.65, RJ: 5.1, TN: 5.0, KA: 4.6, GJ: 4.4, AP: 3.9, OD: 3.1, TG: 2.9, KL: 2.5, AS: 2.1, JH: 2.2, PB: 2.0, HR: 1.9, CG: 1.8, UK: 0.8, HP: 0.5, JK: 0.7, DL: 1.6, GA: 0.1, TR: 0.2, ML: 0.2, MN: 0.2, NL: 0.1, AR: 0.1, MZ: 0.08, SK: 0.05, LA: 0.02 }

export const topStates = [
  { label: 'Uttar Pradesh', value: 15.24, display: '15.24 Cr' },
  { label: 'Maharashtra', value: 8.17, display: '8.17 Cr' },
  { label: 'Bihar', value: 7.95, display: '7.95 Cr' },
  { label: 'West Bengal', value: 6.97, display: '6.97 Cr' },
  { label: 'Madhya Pradesh', value: 5.65, display: '5.65 Cr' },
]

export const revocationReasons = [
  { label: 'Preference changed', value: 29, display: '29%' },
  { label: 'Too many campaigns', value: 24, display: '24%' },
  { label: 'Wrong brand', value: 18, display: '18%' },
  { label: 'Purpose unclear', value: 16, display: '16%' },
  { label: 'Other', value: 13, display: '13%' },
]

export const engagementTrend = [62, 62.5, 62.3, 63, 63.5, 64, 64.4, 65, 65.4, 66, 66.3, 66.8, 67.2, 67.8, 68.3, 68.9, 69.5, 70.2, 71, 71.8, 72.8, 74, 75.2, 77, 79, 80]

export const wallet = [
  { title: 'HDFC Bank', meta: 'HDFC Bank Limited', description: 'Personal Loans, Home Loans & Balance Transfer', brand: { name: 'HDFC Bank', color: '#d9232e' } },
  { title: 'PayZapp', meta: 'HDFC Bank Limited', description: 'Payments & Recharge Offers', brand: { name: 'PayZapp', color: '#c8202f' } },
  { title: 'SmartBuy', meta: 'HDFC Bank Limited', description: 'Shopping & Travel Offers', brand: { name: 'SmartBuy', color: '#2356a8' } },
  { title: 'Swiggy', meta: 'Swiggy Limited', description: 'Food Delivery Offers, Membership & Loyalty Offers', brand: { name: 'Swiggy', color: '#fc5a12' } },
  { title: 'Instamart', meta: 'Swiggy Limited', description: 'Groceries & Essentials, Home, Electronics & Lifestyle', brand: { name: 'Instamart', color: '#1d4ed8' }, unread: true },
  { title: 'Dineout', meta: 'Swiggy Limited', description: 'Dining Offers & Rewards', brand: { name: 'Dineout', color: '#15814c' }, unread: true },
]

export const senders = [
  { id: 'c-1042', sender: 'Apex Fintech Pvt Ltd', peid: '1201****7841', risk: 'High', gtm: 'Karix', status: 'PENDING_APPROVAL', sla: 2400 },
  { id: 'c-1039', sender: 'Bluepeak Retail', peid: '1107****2210', risk: 'Medium', gtm: 'Tanla', status: 'PENDING_APPROVAL', sla: 14400 },
  { id: 'c-1033', sender: 'Nova Insurance Brokers', peid: '1305****9921', risk: 'Medium', gtm: 'Karix', status: 'ESCALATED', sla: 40000 },
  { id: 'c-1028', sender: 'QuickCash Loans', peid: '1209****1187', risk: 'High', gtm: 'Infobip', status: 'SLA_BREACHED', sla: 0 },
  { id: 'c-1017', sender: 'Sunrise Telemart', peid: '1102****6654', risk: 'Low', gtm: 'Tanla', status: 'APPROVED', sla: 86000 },
]

export const auditRows = [
  { id: 'a-9', when: '02 Nov 2026, 11:42', actor: 'Ravi Menon', action: 'Published rate card v3', entity: 'Rate Card', hash: '9f2c7ab10e44c1d27b8e5f6a01dd3a71', before: { version: 2, migration: 0.8, state: 'ACTIVE' }, after: { version: 3, migration: 0.95, state: 'PUBLISHED' }, reason: 'Annual revision' },
  { id: 'a-8', when: '02 Nov 2026, 10:18', actor: 'Priya Nair', action: 'Approved flagged sender', entity: 'Apex Fintech', hash: '41ab0c99de2384f7ac11e5d90b7f6c02', before: { status: 'PENDING_APPROVAL' }, after: { status: 'APPROVED' }, reason: 'DLT history clean' },
  { id: 'a-7', when: '01 Nov 2026, 17:05', actor: 'Anil Rao', action: 'Exported regulator report', entity: 'Reports', hash: 'c7e35d11f09a4b2288ef1c7d6a903e58', before: {}, after: { format: 'PDF', period: 'Oct 2026' }, reason: 'Monthly filing' },
]

export const notifications = [
  { icon: 'warning', tone: 'danger', title: 'QuickCash Loans breached its approval SLA', time: '2 min ago', cta: 'Review case', unread: true },
  { icon: 'credit-card', tone: 'warning', title: 'Airtel changed its rate card. Accept within 30 days', time: '1 hour ago', cta: 'View changes', unread: true },
  { icon: 'circle-check', tone: 'success', title: 'demo_consents.csv was approved for migration', time: 'Yesterday' },
] as const

export const funnel = [
  { label: 'Uploaded', value: '184M' },
  { label: 'Data Validation', value: '178M' },
  { label: 'Consent Verification', value: '167M' },
  { label: 'Ready For Notification', value: '152M' },
]

export const channelOwners = [
  { name: 'Jio', color: '#0b1a33', covered: '25.99 Cr (38%)', ready: '5.78 Cr' },
  { name: 'Airtel', color: '#d9232e', covered: '21.89 Cr (32%)', ready: '4.86 Cr' },
  { name: 'VIL', color: '#7836e8', covered: '15.05 Cr (22%)', ready: '3.34 Cr' },
  { name: 'BSNL', color: '#e03939', covered: '5.47 Cr (8%)', ready: '1.22 Cr' },
]

export const topEnterprises = [
  { name: 'PhonePe', color: '#5b21b6', covered: '91.85 L', ready: '1.87 Cr' },
  { name: 'ICICI Bank', color: '#c2410c', covered: '73.05 L', ready: '1.72 Cr' },
  { name: 'Amazon India', color: '#b45309', covered: '74.64 L', ready: '1.67 Cr' },
  { name: 'Tata Neu', color: '#1d4ed8', covered: '54.03 L', ready: '1.34 Cr' },
]

export const uploads = [
  { id: 1, file: 'consent_batch_q2.csv', lob: 'Credit Card · HDFC', uploaded: '18,450', valid: '18,450', updated: '13 May 2026', status: 'Data Validation - In Progress', tone: 'brand' },
  { id: 2, file: 'q2_consent_home.csv', lob: 'Home Loan · HDFC', uploaded: '70,000', valid: '70,000', updated: '10 May 2026', status: 'Data Validation - Action Needed', tone: 'warning' },
  { id: 3, file: 'pl_renewals_may.csv', lob: 'Personal Loan · HDFC', uploaded: '5,400', valid: '4,849', updated: '07 May 2026', status: 'Appeal Filed - Under Registrar Review', tone: 'brand' },
  { id: 4, file: 'encrypted_migration.bin', lob: 'Savings Account · HDFC', uploaded: '44,998', valid: '44,996', updated: '07 May 2026', status: 'Approved for Migration', tone: 'success' },
  { id: 5, file: 'cancelled_upload.csv', lob: 'Personal Loan · HDFC', uploaded: '44,998', valid: 'None', updated: '08 May 2026', status: 'Cancelled', tone: 'neutral' },
  { id: 6, file: 'finance_rejected.csv', lob: 'Home Loan · HDFC', uploaded: '5,000', valid: '4,750', updated: '04 May 2026', status: 'Rejected for Migration', tone: 'warning' },
  { id: 7, file: 'multi_lob_may.csv', lob: 'Home Loan · HDFC', uploaded: '1,900', valid: '1,700', updated: '05 May 2026', status: 'Migration Approval - Awaiting Approval', tone: 'brand' },
]

export const acquisitions = [
  { id: 1, file: 'acq_credit_aug05.csv', ref: 'ACQ-F-48219', lob: 'Credit Card · HDFC', status: 'Completed', tone: 'success', date: '05 Aug 2026', time: '15:46:12', uploaded: '18,400', fixed: '1,100', failed: '2,280' },
  { id: 2, file: 'acq_home_jul28.csv', ref: 'ACQ-F-47102', lob: 'Home Loan · HDFC', status: 'Failed', tone: 'danger', date: '28 Jul 2026', time: '10:19:04', uploaded: '9,200', fixed: '420', failed: '500' },
  { id: 3, file: 'acq_debit_aug12.csv', ref: 'ACQ-F-49388', lob: 'Debit Card · HDFC', status: 'In progress', tone: 'brand', date: '12 Aug 2026', time: '13:05:33', uploaded: '6,400', fixed: 'None', failed: 'None' },
  { id: 4, file: 'acq_pl_aug09.csv', ref: 'ACQ-F-46550', lob: 'Personal Loan · HDFC', status: 'Failed', tone: 'danger', date: '09 Aug 2026', time: '08:22:50', uploaded: '5,100', fixed: '0', failed: '5,100' },
  { id: 5, file: 'acq_cc_aug03.csv', ref: 'ACQ-F-45831', lob: 'Credit Card · HDFC', status: 'Appeal in progress', tone: 'brand', date: '03 Aug 2026', time: '17:58:01', uploaded: '2,800', fixed: 'None', failed: 'None' },
]

export const lobGroups = [
  { title: 'Credit Cards · HDFC Bank', fileCount: 2, summary: '₹6,408.99 · 1,20,550 consents', defaultOpen: true,
    amounts: [{ label: 'Pending', amount: '₹2,044.12', consents: '38,450 consents', highlight: true }, { label: 'Approved', amount: '₹4,364.87', consents: '82,100 consents' }, { label: 'Rejected', amount: '₹0.00', consents: '0 consents' }],
    files: [
      { name: 'cc_wave2.csv', meta: 'Credit Cards · HDFC Bank', status: 'Approved', statusVariant: 'success', statusIcon: 'circle-check', amount: '₹4,364.87', consents: '82,100 consents', action: 'View' },
      { name: 'cc_rewards_may.csv', meta: 'Credit Cards · HDFC Bank', status: 'Pending', statusVariant: 'warning', statusIcon: 'warning', amount: '₹2,044.12', consents: '38,450 consents', action: 'Review' },
    ] },
  { title: 'Debit Cards · HDFC Bank', fileCount: 2, summary: '₹3,831.39 · 76,100 consents', amounts: [{ label: 'Pending', amount: '₹2,577.43', consents: '51,200 consents', highlight: true }, { label: 'Approved', amount: '₹1,253.96', consents: '24,900 consents' }, { label: 'Rejected', amount: '₹0.00', consents: '0 consents' }] },
  { title: 'Personal Loans · HDFC Bank', fileCount: 1, summary: '₹3,758.44 · 70,000 consents', amounts: [{ label: 'Pending', amount: '₹3,758.44', consents: '70,000 consents', highlight: true }, { label: 'Approved', amount: '₹0.00', consents: '0 consents' }, { label: 'Rejected', amount: '₹0.00', consents: '0 consents' }] },
  { title: 'Home Loans · HDFC Bank', fileCount: 1, summary: '₹3,699.02 · 66,000 consents', amounts: [{ label: 'Pending', amount: '₹0.00', consents: '0 consents' }, { label: 'Approved', amount: '₹0.00', consents: '0 consents' }, { label: 'Rejected', amount: '₹3,699.02', consents: '66,000 consents' }] },
] as const

export const invoiceRows = [
  { gtm: 'Karrix', share: '60%', consents: '23,070', price: '₹0.053', amount: '₹1,226.47' },
  { gtm: 'Value First', share: '30%', consents: '11,535', price: '₹0.053', amount: '₹613.24' },
  { gtm: 'MobileNetwork', share: '10%', consents: '3,845', price: '₹0.053', amount: '₹204.41' },
]

export const enterprises = [
  { id: 'ENT-1042', name: 'HDFC Bank Limited', color: '#1d4ed8', current: 'GTM Default', currentNote: 'eff. 01 Apr 2026', upcoming: 'GTM Q3 FY26', upcomingNote: 'eff. 01 Jul 2026', upTag: 'Scheduled', upTone: 'brand' },
  { id: 'ENT-1198', name: 'ICICI Bank Limited', color: '#c2410c', current: 'GTM Default', currentNote: 'ended 01 Mar 2026', currentTag: 'Lapsed', upcoming: 'Enterprise standard', upcomingNote: 'eff. on acceptance', upTag: 'Pending', upTone: 'warning' },
  { id: 'ENT-3310', name: 'Tata Capital Ltd', color: '#0f766e', current: 'GTM Default', currentNote: 'eff. 01 Apr 2026', upcoming: 'GTM Q2 promo', upcomingNote: 'rejected 12 Feb 2026', upTag: 'Rejected', upTone: 'danger' },
  { id: 'ENT-5521', name: 'Reliance Retail Limited', color: '#dc2626', current: 'GTM Default', currentNote: 'eff. 15 Apr 2026', upcoming: 'GTM Q3 FY26', upcomingNote: 'eff. 01 Jul 2026', upTag: 'Pending', upTone: 'warning' },
  { id: 'ENT-6605', name: 'Paytm Payments Bank Ltd', color: '#1d4ed8', current: 'Enterprise standard', currentNote: 'eff. 08 Apr 2026' },
]
