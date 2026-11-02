// Names the shareable file, and writes the skeleton-free copy the Artifact tool expects.
import { readFileSync, renameSync, writeFileSync } from 'node:fs'

const dir = new URL('../share/', import.meta.url)
renameSync(new URL('index.html', dir), new URL('DigiConsent-Design-System.html', dir))
const html = readFileSync(new URL('DigiConsent-Design-System.html', dir), 'utf8')
const head = html.slice(html.indexOf('<head>') + 6, html.indexOf('</head>')).replace(/<meta charset[^>]*>|<meta name="viewport"[^>]*>/g, '')
const body = html.slice(html.indexOf('<body>') + 6, html.lastIndexOf('</body>'))
writeFileSync(new URL('artifact.html', dir), `${head}\n${body}\n`)
console.log(`share: ${(html.length / 1048576).toFixed(2)} MB`)
