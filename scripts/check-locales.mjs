import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const dir = 'locale'
const expected = ['en', 'es', 'pt']
const files = readdirSync(dir).filter((f) => f.endsWith('.json')).map((f) => f.replace('.json', '')).sort()
let failed = false

if (JSON.stringify(files) !== JSON.stringify(expected)) {
  console.error(`Locale files must be exactly ${expected.join(', ')}; found ${files.join(', ')}`)
  failed = true
}

function flatten(obj, prefix = '') {
  return Object.entries(obj).flatMap(([k, v]) =>
    v && typeof v === 'object' ? flatten(v, `${prefix}${k}.`) : [`${prefix}${k}`],
  )
}

const keys = Object.fromEntries(
  files.map((f) => [f, new Set(flatten(JSON.parse(readFileSync(join(dir, `${f}.json`), 'utf8'))))]),
)
const all = new Set(Object.values(keys).flatMap((s) => [...s]))
for (const f of files) {
  const missing = [...all].filter((k) => !keys[f].has(k))
  if (missing.length) {
    failed = true
    console.error(`${f}.json is missing keys:\n  ${missing.join('\n  ')}`)
  }
}
if (failed) process.exit(1)
console.log(`locales ok (${all.size} keys x ${files.length})`)
