<script setup lang="ts">
const routes = [
  { title: 'Vue 3 project', use: 'Use the components', code: `npm install ./consentos-design-system-0.1.0.tgz

// main.ts
import 'consentos-design-system/style.css'

// Any component
import { Button, StatusChip } from 'consentos-design-system'`, note: 'No Tailwind needed. Fonts are included. The stylesheet includes a CSS reset, so check existing styles if you add it to an existing app.' },
  { title: 'Any other project', use: 'Use the tokens', code: `@import 'consentos-design-system/tokens.css';

.my-button {
  background: var(--color-primary);
  height: var(--button-height-md);
  border-radius: var(--radius-button);
}`, note: 'Works in plain HTML, React, Angular or anything else. tokens.json has the same values. Components are Vue only, so other frameworks rebuild them against these tokens.' },
  { title: 'Tailwind v4 project', use: 'Use the theme', code: `@import 'tailwindcss';
@import 'consentos-design-system/theme.css';`, note: 'Gives you classes such as bg-brand-600, text-ink, shadow-card and portal-type-page-title.' },
]
const principles = [
  ['Never blame the user', 'Errors say what happened, why, and what to do next.'],
  ['No dead ends', 'Empty and error states offer a next step, and disabled actions explain themselves.'],
  ['Reveal complexity progressively', 'Start with the simple path and put detail one step away.'],
  ['Audit by design', 'Masked values, hashes and diffs make changes traceable.'],
  ['Never colour alone', 'Status always has a label, icon or mark as well.'],
  ['A person decides', 'AI suggestions show confidence and reasons, and never act by themselves.'],
]
</script>

<template>
  <div class="portal-stack-section max-w-4xl">
    <header>
      <h1 class="portal-type-page-title">ConsentOS Design System</h1>
      <p class="portal-type-body mt-2 max-w-2xl">Tokens and Vue 3 components for consent products under India's DPDPA and TRAI's TCCCPR rules. Pick a section to see each component, with code you can copy. Names and figures in the examples are illustrative sample data.</p>
    </header>
    <section>
      <h2 class="portal-type-section-title">Use it in your project</h2>
      <div class="mt-4 flex flex-col gap-4">
        <Card v-for="route in routes" :key="route.title" :title="route.title" :description="route.use">
          <pre class="overflow-x-auto rounded-md bg-navy-900 p-4 font-mono text-xs leading-5 text-white"><code>{{ route.code }}</code></pre>
          <p class="portal-type-page-subtitle mt-3">{{ route.note }}</p>
        </Card>
      </div>
    </section>
    <section>
      <h2 class="portal-type-section-title">Principles</h2>
      <dl class="mt-4 grid gap-x-8 gap-y-4 md:grid-cols-2">
        <div v-for="[name, text] in principles" :key="name"><dt class="portal-type-body-emphasis">{{ name }}</dt><dd class="portal-type-page-subtitle mt-0.5">{{ text }}</dd></div>
      </dl>
    </section>
  </div>
</template>
