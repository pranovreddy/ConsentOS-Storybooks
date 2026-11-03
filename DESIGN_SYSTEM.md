# DigiConsent Design System: working context

A rough guide for anyone, person or AI, building DigiConsent UI. It covers what exists, where to look, and the rules to follow.

**Storybook is the reference for how components look and behave.** If this file and Storybook disagree, trust Storybook and the code, then fix this file.

**Repo:** [github.com/pranovreddy/ConsentOS-Storybooks](https://github.com/pranovreddy/ConsentOS-Storybooks)

```bash
npm install
npm run storybook   # http://localhost:6006
```

- No install needed: open `share/DigiConsent-Design-System.html`.
- One story on its own: `http://localhost:6006/iframe.html?id=forms-filedropzone--idle&viewMode=story`

## Before you build

1. Look for an existing screen in **Screens**, then a block in **Consent Patterns**.
2. Look for the component in its Storybook group below.
3. If nothing fits, compose from existing components and tokens.
4. Add a new component only as a last resort, and give it a story.

## What's in Storybook

| Group | Contents |
|---|---|
| **Foundations** | Colors, Typography, Spacing, Radius, Elevation, Motion, Icons, Logo, Content, Accessibility |
| **Actions** | Button, IconButton, LinkArrow, MenuButton, RowActions |
| **Forms** | ChannelChoice, Checkbox, DateField, DeclarationCheck, FileDropzone, FormField, MultiSelect, NumberInput, OtpInput, PasswordInput, RadioGroup, RateInput, SearchInput, SelectField, SliderField, TagsField, TextArea, TextInput, Toggle |
| **Data Display** | AccordionList, ActivityFeed, Avatar, AvatarGroup, Badge, BigStat, BrandMark, Card, ChannelLabel, CompactCount, CornerTag, DeltaPill, Divider, Eyebrow, Hint, IconTile, Kbd, KeyValueList, MaskedValue, MetaChip, OrgSwitcher, ProgressBar, StatusChip, Tag, TreeList, TruncatedText, UserChip |
| **Charts** | AreaChart, ChartLegend, DonutChart, FunnelChart, GaugeChart, MiniBars, RankedBars, SankeyFlow, Sparkline, StackedBars, StateTileMap |
| **Navigation** | AppShell, Breadcrumbs, CommandPalette, FilterPills, PageHeader, Pagination, PeriodFilter, PhaseTracker, ProfileMenu, SegmentedControl, SidebarNav, Stepper, Tabs, Topbar |
| **Feedback** | Alert, CountdownPill, FeedbackCard, LiveIndicator, LockedPill, NotificationItem, PageLoader, PanelState, Skeleton, SlaTimer, Spinner, StickyActionBar, ToastStack |
| **Overlays** | BottomSheet, ConfirmDialog, Drawer, Modal, PopoverCard |
| **Data** | DataTable, DocumentViewer, FilterBar, HashBadge, JsonDiff, RateMatrix |
| **Consent Patterns** | AiRecommendation, AiSummary, AuthCard, CsvFormatCard, DecisionBar, EvidenceCard, GoLiveBanner, HeroStat, KpiCard, LiveChecks, LobFileGroup, MetricStrip, NextSteps, OnboardingPath, OutcomeSummary, ProcessStatus, ProcessingPanel, ResultCard, ScanPreview, SetupCard, SignatureBlock, SummaryStat, UploadChecklist, WelcomeHero |
| **Mobile** | AppHeader, BottomNav, CarouselDots, ConsentSplit, GreetingBar, ListCard, PhoneFrame, PromoBanner, PurposeItem |
| **Screens** | Channel Owner, Enterprise, Regulator, Sign In, Subscriber App |

## Principles

- **Never blame the user.** Errors say what happened, why, and what to do next.
- **No dead ends.** Empty and error states offer a next step, and disabled actions explain themselves.
- **Reveal complexity progressively.** Start with the simple path and put detail one step away.
- **Audit by design.** Masked values, hashes and diffs make changes traceable.
- **Never colour alone.** Status always has a label, icon or mark as well.
- **A person decides.** AI suggestions show confidence and reasons, and never act by themselves.

## Do's and don'ts

### Tokens and colour

| Do | Don't |
|---|---|
| Start with semantic tokens: `ink`, `surface`, `line`, `page` | Hardcode hex values when a token exists |
| Use `brand-600` for primary actions and `brand-700` for hover | Add a new blue |
| Use `ink-3` (`#667089`) for tertiary text | Use `#8590A8` for text on white. It fails AA |
| Use `warning-700` (`#8F5600`) for warning text on soft backgrounds | Use `#B26B00` there. It fails AA |
| Use the `app-*` blues in mobile components only | Use `app-*` in admin products |
| Use the blues first in charts, darkest for the most important series | Use a status colour on a series unless it means success, danger or warning |
| Keep `violet-600` for the Voice channel | Use violet as a general accent |

### Type, spacing and shape

| Do | Don't |
|---|---|
| Use the `portal-type-*` roles | Pick font sizes one at a time |
| Use Geist for everything people read | Add another typeface |
| Use Geist Mono for prices, IDs, file names, metric labels and countdowns | Set body copy in mono |
| Stay on the 4px grid with `--space-*` | Use one-off margins |
| Use 32px between sections, 16px between fields, 12px in dense lists, 8px between controls | Invent new stack gaps |
| Use radius by role: `md` for buttons and inputs, `xl` for cards, `2xl` for dialogs, `full` for pills | Mix radii on the same kind of element |
| Use `shadow-card` at rest and `shadow-pop` for menus and dialogs | Add shadows for decoration |

### Components

| Do | Don't |
|---|---|
| Use `StatusChip` with a status key such as `OPTED_IN` or `SLA_BREACHED` | Hand-build chips, or remap a status to a different colour or label |
| Use one `primary` button per decision, with `secondary` or `ghost` beside it | Put several primary buttons in one action group |
| Use `danger` or `danger-soft` for destructive actions, with `ConfirmDialog` for the commit | Style destructive actions as primary |
| Use `RowActions` at the end of table rows | Fill a row with loose icon buttons |
| Give every `IconButton` a `label` | Ship an icon-only control with no accessible name |
| Use `PanelState` for loading, empty and error panels | Leave a blank panel |
| Use `Skeleton` when loading a known layout | Use a full-page spinner for one panel |
| Keep `FileDropzone` disabled until its prerequisite, such as an LOB, is set | Let people upload before the choice that the upload depends on |
| Use Lucide through `<Icon>`, at 14, 16, 18 or 20px | Import other icon sets or change the 1.75 stroke without a reason |
| Compose Screens from library components only | Fork a component inside a screen |

### Consent

| Do | Don't |
|---|---|
| Leave `DeclarationCheck` unchecked until the person acts | Pre-check a declaration or consent |
| Make opting out as easy as opting in | Hide or discourage opting out |
| Show `AiRecommendation` with its confidence and reasons | Let AI commit a decision by itself |
| Mask personal values with `MaskedValue` | Show full personal data by default |
| Show what changed with `JsonDiff`, `HashBadge` and `ActivityFeed` | Change records with no visible trail |
| Say what will happen before a commit: "69,000 records will proceed" | Use a bare "Are you sure?" |

### Writing

| Do | Don't |
|---|---|
| **Admin:** state the count first, then its meaning: "351 errors need offline fixes" | Lead with a vague summary such as "Some errors occurred" |
| **Admin:** use regulator terms exactly: DLT, PEID, LOB, TCCCPR | Paraphrase regulated terms |
| **Subscriber app:** use plain words that translate well into Indian languages | Use legal or telecom jargon |
| **Subscriber app:** say what the person gets | Describe the system instead of the benefit |
| Write errors as what, why, next step | Write "Invalid input" with no way forward |
| Use Indian number units with a smaller, regular-weight unit: 14.3 Cr, 82 Lac | Use millions or billions |
| Group exact counts in lakh-crore style: 12,34,567 | Use 1,234,567 |
| Call the product DigiConsent | Use WiselyConsent or ConsentOS in UI copy |

### Accessibility

| Do | Don't |
|---|---|
| Aim for WCAG 2.1 AA and check the Accessibility tab on each story | Treat a passing automated check as the full test |
| Keep every interaction reachable by keyboard, with the 2px focus ring | Remove focus outlines |
| Give status a label, direction text or +/- mark | Rely on colour alone |
| Keep mobile targets at least 44 × 44px | Shrink touch targets to fit |
| Give charts a text summary through `aria-label` | Ship a chart with no text alternative |
| Use the reka-ui based dialogs, menus, tabs and switches | Rebuild them with custom focus handling |

### Motion

| Do | Don't |
|---|---|
| Use motion to explain a change, with `--ease-standard` | Animate for decoration |
| Use 150-200ms for hover and toggles, 200ms for dialogs, 240ms for drawers and sheets | Invent new timings |
| Pulse only for a critical SLA with under one hour left | Pulse anything else |

## Known gaps

- Keyboard and screen reader testing hasn't been done. Only automated checks have run.
- `DocumentViewer` has a find box, but it doesn't search the document yet.
- `StateTileMap` is a tile grid, not an official map of India.
- Numbers and names in stories are sample data, and some don't add up. Don't copy them into specs.
- Some production modules have no screen story, so their layouts are unreviewed. `COVERAGE.md` lists them, along with the deliberate differences from production.
- Open question: the screens show a subtle gradient on the primary button, but the library follows production's flat `brand-600`.

## Using it in a project

- **Vue 3:** import `digiconsent-design-system/style.css` and the components. No Tailwind needed. It includes a CSS reset, so check existing styles.
- **Other frameworks:** use `tokens.css` or `tokens.json`, rebuild components against the tokens, and load Geist and Geist Mono yourself.
- **Tailwind v4:** import `digiconsent-design-system/theme.css`.

## Figma

[DigiConsentDesignSystem](https://www.figma.com/design/w4pLriCZvdzciVi3ECZkvB) mirrors Storybook, and token values come from the code. So far it covers Foundations, Actions and Forms from ChannelChoice to FileDropzone. If you change a token or component that's in Figma, update both.
