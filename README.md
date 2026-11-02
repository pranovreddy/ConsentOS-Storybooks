# ConsentOS Design System

Tokens and 135 Vue 3 components for consent products, documented in Storybook. Built with Vue 3, Tailwind CSS v4 and reka-ui.

**See it without installing anything:** download [`share/ConsentOS-Design-System.html`](share/ConsentOS-Design-System.html) and open it. It's one self-contained file with every component, example screen and copyable code.

## Use it in a project

### Vue 3: use the components

```bash
npm install github:pranovreddy/ConsentOS-Storybooks
```

```ts
// main.ts
import 'consentos-design-system/style.css'
```

```vue
<script setup>
import { Button, StatusChip } from 'consentos-design-system'
</script>

<template>
  <Button icon="download">Download Errors</Button>
  <StatusChip status="OPTED_IN" />
</template>
```

You don't need Tailwind, and the fonts are included. `style.css` includes a CSS reset, so check your existing styles if you add it to an existing app.

### Any other project: use the tokens

`dist/tokens.css` is plain CSS variables, and `dist/tokens.json` has the same values. Neither needs a build step.

```css
@import 'consentos-design-system/tokens.css';

.my-button {
  background: var(--color-primary);
  height: var(--button-height-md);
  border-radius: var(--radius-button);
}
```

Components are Vue only, so other frameworks need to rebuild them against these tokens. Load Geist and Geist Mono yourself on this route.

### Tailwind v4: use the theme

```css
@import 'tailwindcss';
@import 'consentos-design-system/theme.css';
```

## Work on the system

```bash
npm install
npm run storybook
```

Storybook runs at http://localhost:6006.

| Command | What it does |
|---|---|
| `npm run storybook` | Runs Storybook locally |
| `npm run build` | Builds the package and tokens into `dist/` |
| `npm run build-share` | Builds the single HTML file into `share/` |
| `npm run build-storybook` | Builds a static Storybook site |

## What's where

| Path | Contents |
|---|---|
| `src/components` | Components, grouped by type |
| `src/theme.css` | Tailwind theme and colour ramps |
| `src/styles` | Base design tokens and typography roles |
| `src/stories` | Foundations, component stories and example screens |
| `COVERAGE.md` | What's covered, what isn't, and open questions |

Names and figures in the examples are illustrative sample data. The state map is a tile grid, not an official map of India.

Geist and Geist Mono are licensed under the SIL Open Font License (`src/assets/fonts/OFL.txt`).
