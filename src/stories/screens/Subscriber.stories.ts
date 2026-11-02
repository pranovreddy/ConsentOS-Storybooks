import { ref } from 'vue'
import { t } from '../util'
export default { title: 'Screens/Subscriber App' }

export const Home = t(`
<PhoneFrame>
  <GreetingBar name="Parth" unread />
  <div class="flex flex-col gap-4 p-5">
    <PromoBanner :slides="[{ title: 'Your consent wallet', body: 'See every brand that can reach you. Change it whenever you want.' }, { title: 'Stop spam', body: 'Report a consent you never gave.' }, { title: 'Your language', body: 'Use the app in the language you prefer.' }, { title: 'Stay in control', body: 'Choose how brands reach you.' }]" />
    <ConsentSplit :opted-in="2" :opted-out="5" />
    <Eyebrow as="h2">Quick actions</Eyebrow>
    <ListCard icon="sliders" title="Manage Preferences" description="Choose days, times, and how often brands can reach you." />
    <ListCard icon="flag" title="Report a claimed consent" description="Dispute a consent you never gave." />
    <ListCard icon="warning" title="Raise a Complaint" description="Report unauthorised spam" />
    <div class="flex items-center justify-between"><Eyebrow as="h2">Who can contact you</Eyebrow><LinkArrow size="sm">View all</LinkArrow></div>
    <ListCard v-bind="fx.wallet[0]" />
  </div>
  <BottomNav v-model="nav" />
</PhoneFrame>`, () => ({ nav: ref('home') }))

export const Wallet = t(`
<PhoneFrame>
  <AppHeader title="My Wallet" subtitle="Manage your purposes" search />
  <div class="flex flex-col gap-3 p-5">
    <FilterPills v-model="filter" tone="app" aria-label="Filter brands" :options="[{ label: 'All', value: 'a', count: 12 }, { label: 'Opted in', value: 'i', count: 4 }, { label: 'Opted out', value: 'o', count: 8 }]" />
    <ListCard v-for="brand in fx.wallet" :key="brand.title" v-bind="brand" />
  </div>
  <BottomNav v-model="nav" />
</PhoneFrame>`, () => ({ filter: ref('a'), nav: ref('wallet') }))

export const BrandDetail = t(`
<PhoneFrame>
  <AppHeader title="HDFC Bank" subtitle="HDFC Bank Limited" back :brand="{ name: 'HDFC Bank', color: '#d9232e' }" />
  <div class="p-5">
    <Eyebrow as="h2" class="mb-3">Purposes of communication</Eyebrow>
    <div class="divide-y divide-line rounded-[20px] border border-line bg-surface p-4 shadow-card">
      <PurposeItem v-model:enabled="a" title="Personal Loans" :benefits="['Pre-approved Offers', 'Lower Rate Offers']" />
      <PurposeItem v-model:enabled="b" title="Home Loans & Balance Transfer" :benefits="['Rate Offers', 'Balance Transfer Offers']" />
      <PurposeItem v-model:enabled="c" title="Credit Cards" :benefits="['New Card Offers', 'Upgrade Offers']" />
      <PurposeItem v-model:enabled="d" title="Deposits & Savings" :benefits="['FD Rate Offers', 'Account Benefits']" />
    </div>
    <Eyebrow as="h2" class="mt-5 mb-3">Brands from the same enterprise</Eyebrow>
    <ListCard v-bind="fx.wallet[1]" />
  </div>
</PhoneFrame>`, () => ({ a: ref(true), b: ref(true), c: ref(false), d: ref(false) }))

