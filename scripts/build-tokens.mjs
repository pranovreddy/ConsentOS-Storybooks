// Emits framework-free tokens to dist/: tokens.css (plain :root variables) and tokens.json.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'

const src = (p) => readFileSync(new URL(`../src/${p}`, import.meta.url), 'utf8')
const dist = new URL('../dist/', import.meta.url)
mkdirSync(dist, { recursive: true })

const collect = (css) => [...css.matchAll(/^\s*(--[\w-]+):\s*([^;]+);/gm)].map((m) => [m[1], m[2].trim()])
const theme = src('theme.css')
const block = theme.slice(theme.indexOf('@theme static'), theme.indexOf('@layer base'))

// Production tokens come last so they win, except fonts, where the design system ships real Geist Mono.
const merged = new Map([...collect(block).filter(([k]) => !k.startsWith('--animate')), ...collect(src('styles/portal-tokens.css'))])
merged.set('--font-sans', "'Geist', ui-sans-serif, system-ui, sans-serif")
merged.set('--font-mono', "'Geist Mono', ui-monospace, monospace")

writeFileSync(new URL('tokens.css', dist), `/* DigiConsent design tokens. Works in any project; no build step needed. */\n:root {\n${[...merged].map(([k, v]) => `  ${k}: ${v};`).join('\n')}\n}\n`)
writeFileSync(new URL('tokens.json', dist), JSON.stringify(Object.fromEntries(merged), null, 2) + '\n')
console.log(`tokens: ${merged.size} variables`)
