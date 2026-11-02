<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import GettingStarted from './GettingStarted.vue'
import StoryFrame from './StoryFrame.vue'

/** One-file catalog of every story, for sharing the system with people who don't run Storybook. */
interface Story { name: string; id: string; render: (args: Record<string, unknown>) => object; args: Record<string, unknown>; code?: string; fullscreen: boolean }
interface Entry { title: string; group: string; name: string; slug: string; stories: Story[] }

const order = ['Foundations', 'Actions', 'Forms', 'Data Display', 'Charts', 'Navigation', 'Feedback', 'Overlays', 'Data', 'Consent Patterns', 'Mobile', 'Screens']
const foundationOrder = ['Colors', 'Typography', 'Spacing', 'Radius', 'Elevation', 'Motion', 'Icons', 'Logo', 'Content', 'Accessibility']
const label = (s: string) => s.replace(/([a-z])([A-Z])/g, '$1 $2')
const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-')

// Lead with the main example; the rest stay alphabetical.
const lead = ['Playground', 'Palette', 'Roles', 'Scale', 'Default']
const rank = (k: string) => (lead.includes(k) ? lead.indexOf(k) : lead.length)

const modules = import.meta.glob('../stories/**/*.stories.ts', { eager: true }) as Record<string, Record<string, any>>
const compiled = import.meta.glob('./gen/*.js', { eager: true }) as Record<string, { render: () => unknown }>
const entries: Entry[] = Object.values(modules)
  .map((mod) => {
    const title: string = mod.default.title
    const [group, ...rest] = title.split('/')
    const stories = Object.keys(mod)
      .filter((k) => k !== 'default')
      .sort((a, b) => rank(a) - rank(b))
      .map((k) => ({
        name: label(k),
        id: `${slugify(title)}-${slugify(k)}`,
        render: (args: Record<string, unknown>) => ({ ...mod[k].render(args), template: undefined, render: compiled[`./gen/${slugify(title)}-${slugify(k)}.js`].render }),
        args: mod[k].args ?? {},
        code: mod[k].parameters?.docs?.source?.code as string | undefined,
        fullscreen: mod[k].parameters?.layout === 'fullscreen' || mod.default.parameters?.layout === 'fullscreen',
      }))
    return { title, group, name: rest.join(' / '), slug: slugify(title), stories }
  })
  .sort((a, b) => {
    const g = order.indexOf(a.group) - order.indexOf(b.group)
    if (g) return g
    if (a.group === 'Foundations') return foundationOrder.indexOf(a.name) - foundationOrder.indexOf(b.name)
    return a.name.localeCompare(b.name)
  })

const START = 'start'
const current = ref(START)
const query = ref('')
const entry = computed(() => entries.find((e) => e.slug === current.value))
const groups = computed(() => {
  const q = query.value.trim().toLowerCase()
  return order
    .map((group) => ({ group, items: entries.filter((e) => e.group === group && (!q || e.name.toLowerCase().includes(q) || e.group.toLowerCase().includes(q))) }))
    .filter((g) => g.items.length)
})
const main = ref<HTMLElement>()

function fromHash() {
  const hash = location.hash.slice(1)
  if (hash === START || entries.some((e) => e.slug === hash)) current.value = hash
}
function go(slug: string) {
  current.value = slug
  try { history.replaceState(null, '', `#${slug}`) } catch { /* Some viewers don't allow URL changes. */ }
}
onMounted(() => {
  fromHash()
  window.addEventListener('hashchange', fromHash)
})
watch(current, () => main.value?.scrollTo(0, 0))
</script>

<template>
  <div class="flex h-full flex-col bg-page text-ink lg:flex-row">
    <aside class="hidden w-[272px] shrink-0 flex-col border-r border-line bg-surface lg:flex" style="padding-left: env(safe-area-inset-left, 0px)">
      <button type="button" class="border-b border-line px-5 py-4 text-left" @click="go(START)">
        <span><LogoMark wordmark :size="22" class="-ml-2" /><span class="mt-0.5 block text-xs text-ink-2">Design System v0.1</span></span>
      </button>
      <div class="border-b border-line p-3"><SearchInput v-model="query" placeholder="Find a component" /></div>
      <nav class="flex-1 overflow-y-auto p-3" aria-label="Design system">
        <button type="button" class="mb-3 flex h-8 w-full items-center rounded-sm px-2.5 text-left text-[13px]" :class="current === START ? 'bg-brand-50 font-medium text-brand-700' : 'text-gray-700 hover:bg-gray-100'" :aria-current="current === START ? 'page' : undefined" @click="go(START)">Getting Started</button>
        <section v-for="g in groups" :key="g.group" class="mb-4">
          <h2 class="eyebrow px-2.5 pb-1">{{ g.group }}</h2>
          <button
            v-for="item in g.items"
            :key="item.slug"
            type="button"
            class="flex h-8 w-full items-center rounded-sm px-2.5 text-left text-[13px]"
            :class="current === item.slug ? 'bg-brand-50 font-medium text-brand-700' : 'text-gray-700 hover:bg-gray-100'"
            :aria-current="current === item.slug ? 'page' : undefined"
            @click="go(item.slug)"
          >{{ item.name }}</button>
        </section>
        <p v-if="!groups.length" class="px-2.5 py-6 text-center text-[13px] text-ink-2">Nothing matches "{{ query }}".</p>
      </nav>
    </aside>

    <header class="flex items-center gap-3 border-b border-line bg-surface py-3 lg:hidden" style="padding-left: max(16px, env(safe-area-inset-left, 0px)); padding-right: max(16px, env(safe-area-inset-right, 0px))">
      <LogoMark :size="24" />
      <label class="sr-only" for="section-select">Section</label>
      <select id="section-select" class="h-10 min-w-0 flex-1 rounded-md border border-line bg-surface px-2 text-[13px]" :value="current" @change="go(($event.target as HTMLSelectElement).value)">
        <option :value="START">Getting Started</option>
        <optgroup v-for="g in groups" :key="g.group" :label="g.group"><option v-for="item in g.items" :key="item.slug" :value="item.slug">{{ item.name }}</option></optgroup>
      </select>
    </header>

    <main ref="main" class="min-w-0 flex-1 overflow-y-auto" style="padding-left: max(16px, env(safe-area-inset-left, 0px)); padding-right: max(16px, env(safe-area-inset-right, 0px))">
      <div class="mx-auto max-w-[1280px] py-8 lg:px-6">
        <GettingStarted v-if="current === START" />
        <template v-else-if="entry">
          <p class="eyebrow">{{ entry.group }}</p>
          <h1 class="portal-type-page-title mt-1">{{ entry.name }}</h1>
          <div class="mt-6 flex flex-col gap-8">
            <StoryFrame v-for="story in entry.stories" :key="story.id" :story="story" :single="entry.stories.length === 1" />
          </div>
        </template>
      </div>
    </main>
  </div>
</template>
