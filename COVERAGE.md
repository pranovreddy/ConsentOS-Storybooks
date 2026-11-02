# Coverage check

Checked against three sources: the screen exports, the Channel Owner spec, and the production portals code as of 16 Oct 2026.

## Result

| Measure | Result |
|---|---|
| Components | 135, all exported from the package |
| Stories | 234, including 27 screen stories |
| Render errors, broken components, Vue warnings, page overflow at 1440px | 0 |
| Automated WCAG A/AA findings | Only disabled controls, which WCAG exempts |
| Typecheck | Passes |
| Installed in a blank Vue project, no Tailwind | Works |
| Tokens used from plain HTML | Works |

Automated checks don't replace testing with a keyboard or screen reader. That hasn't been done.

## Screen exports

| Export | Story or component |
|---|---|
| ACTIVE | Screens / Channel Owner / Enterprises |
| All Approved | Screens / Enterprise / Upload Summary |
| Approval LOB Dropdown | Screens / Enterprise / Approvals |
| Channel Owners | Screens / Channel Owner / Channel Owners |
| ConsentOS Channel Owner Dashboard | Screens / Channel Owner / Analytics |
| Dashboard Populated | Screens / Enterprise / Consent Migration Hub |
| Data validation Processing | Screens / Enterprise / Data Validation Processing |
| Data validation Review with errors (both) | Screens / Enterprise / Data Validation |
| Default state | Screens / Regulator / Dashboard |
| DigiConsent, DigiConsent-1 | Screens / Subscriber App / Wallet, Brand Detail |
| Empty state | Screens / Regulator / Empty |
| Error states, Loading state | Screens / Regulator / Loading And Error States |
| Home English | Screens / Subscriber App / Home |
| Home File uploads | Screens / Enterprise / Consent Acquisition |
| Home Checklist 03 Complete KYC | Screens / Enterprise / Home |
| Invoice View GTM Card Expanded | Screens / Enterprise / Proforma Invoice Review |
| Selected LOB, Upload file | Screens / Enterprise / Upload Consents (selecting an LOB enables the file step) |
| Submitted for approval | Screens / Enterprise / Submitted For Approval |
| User notification | Screens / Regulator / Migration |
| Verification Processing | Screens / Enterprise / Consent Verification Processing |
| Verification Result Partial | Screens / Enterprise / Consent Verification |

`Loading state.png` wasn't opened individually. It's treated as matching `Error states.png`, which shows the same layout.

## Spec components

All 19 are covered: Button, Input, Select, Checkbox, Toggle, Badge, DataTable, Modal, Drawer, Toast, Card, Tabs, Stepper, SLA Timer, OTP Input, PasswordStrength, Filter bar, EmptyState, SkeletonLoader. DocumentViewer has its layout and find box, but the find box doesn't search the document yet.

## Added because of this check

From the screens: HeroStat, GaugeChart, StackedBars, FunnelChart, ProcessStatus, ProcessingPanel, NextSteps, ScanPreview, LobFileGroup, a soft-danger button, rows-per-page pagination.

From production: SegmentedControl, PeriodFilter, DateField, NumberInput, TruncatedText, CompactCount, TreeList, LiveIndicator, FeedbackCard, PageLoader, RowActions, ProfileMenu, SignatureBlock, SetupCard, AuthCard, Divider.

## Production areas with no screen story

Production has about 995 Vue files. These modules can be built from the library but have no composed screen, because no design export was supplied. Their page-level layouts weren't reviewed in detail.

- Enterprise: Brands & LOBs, Promo Template Mapping, Integrations
- Channel Owner: GTM Partners, GTM Approvals, DLT Publishing
- GTM Partner portal: Enterprises, Rate Cards
- Registry portal: KYC
- Regulator: Complaints, Scrubbing, Assets, Enterprise 360, Telco 360
- Sign-in variants: forgot password, MFA enrolment, invite onboarding (Sign In and the AuthCard stories cover the base layout)

## Where this differs from production on purpose

| Item | Production | Library | Why |
|---|---|---|---|
| Mono font | `Geist Mono` maps to `Geist-Regular.ttf` in `main.css`, so it isn't monospaced | Real Geist Mono | Looks like a production bug; the screens show true mono |
| `ink-3` text | `#8590A8` (`--color-text-label`) | `#667089` | The production value fails AA on white. The production token is kept unchanged |
| Warning text | `#B26B00` | `#8F5600` | The production value fails AA on the soft warning background |
| UI library | PrimeVue with pass-through styling | reka-ui | Matches the ConsentOS repo, and PrimeVue's chrome isn't needed |
| Charts | ECharts and D3 | Dependency-free SVG | Keeps the package small. Production charts can stay on ECharts using the listed palette |
| State map | Real India choropleth | Tile map | Needs official boundary data |
| Table | `WorkspaceDataTable` | `DataTable` | Same pattern, different API |

## Open questions

- **Primary button:** the screens show a subtle gradient, and production code uses flat `bg-accent`. The library follows production.
- **Product name:** the code's logo says DigiConsent and the screens say WiselyConsent. The ACTIVE export says "Wisely Consent", with a space.
- **Stepper label:** step 4 is "Confirmation" on Upload Consents and "Summary" elsewhere. The library uses "Summary".
- **Numbers in the designs:** Upload Summary shows 800 + 200 errors on one screen and 1,000 errors on another. Consent Outcomes adds up to more than 14.30 Cr. The DND export shows 80% twice. Screen stories keep sample values, so check them against real data.
