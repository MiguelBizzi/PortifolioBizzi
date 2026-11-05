import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

const failures = []
const links = [...readFileSync('src/lib/constants/links.ts', 'utf8').matchAll(/slug:\s*'#([^']+)'/g)].map(
  (m) => m[1],
)

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name)
    return statSync(p).isDirectory() ? walk(p) : [p]
  })
}
const components = walk('src/components')
  .filter((f) => f.endsWith('.tsx'))
  .map((f) => readFileSync(f, 'utf8'))
  .join('\n')

for (const id of links) {
  if (!components.includes(`id="${id}"`)) failures.push(`no element with id="${id}" in src/components`)
}

// Page order must match header order.
const page = readFileSync('src/app/[locale]/page.tsx', 'utf8')
const byId = { home: 'HeroSection', projects: 'ProjectsSection', about: 'AboutSection', resume: 'ResumeSection', skills: 'SkillsSection', testimonials: 'TestimonialsSection', contact: 'ContactSection' }
const rendered = [...page.matchAll(/<(\w+Section)\s*\/>/g)].map((m) => m[1])
const expected = links.map((id) => byId[id])
if (JSON.stringify(rendered) !== JSON.stringify(expected)) {
  failures.push(`page order ${rendered.join(', ')} does not match links order ${expected.join(', ')}`)
}

if (failures.length) {
  console.error(failures.join('\n'))
  process.exit(1)
}
console.log(`sections ok (${links.join(' > ')})`)
