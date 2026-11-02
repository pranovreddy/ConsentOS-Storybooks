// Compiles every story template to a render function, so the shareable page needs no runtime compiler or eval.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import { createServer } from 'vite'
import { compile } from '@vue/compiler-dom'

const root = new URL('..', import.meta.url).pathname
const out = join(root, 'src/share/gen')
rmSync(out, { recursive: true, force: true })
mkdirSync(out, { recursive: true })

const walk = (d) => readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(join(d, e.name)) : [join(d, e.name)]))
const files = walk(join(root, 'src/stories')).filter((f) => f.endsWith('.stories.ts'))
const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-')

const server = await createServer({ root, server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
let count = 0
for (const file of files) {
  const mod = await server.ssrLoadModule(`/${relative(root, file)}`)
  for (const key of Object.keys(mod).filter((k) => k !== 'default')) {
    const { template } = mod[key].render(mod[key].args ?? {})
    const { code } = compile(template, { mode: 'module', prefixIdentifiers: true })
    writeFileSync(join(out, `${slugify(mod.default.title)}-${slugify(key)}.js`), code)
    count++
  }
}
await server.close()
console.log(`precompiled ${count} stories`)
