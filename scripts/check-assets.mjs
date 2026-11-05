import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { join, dirname } from 'node:path'

const failures = []
for (const f of ['public/cv/miguelbizzi-cv-en.pdf', 'public/cv/miguelbizzi-cv-pt.pdf']) {
  if (!existsSync(f)) failures.push(`missing ${f}`)
}

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name)
    return statSync(p).isDirectory() ? walk(p) : [p]
  })
}

const re = /from\s+['"]@\/assets\/([^'"]+\.(?:png|jpe?g|webp|svg))['"]/g
for (const file of walk('src').filter((f) => /\.tsx?$/.test(f))) {
  const src = readFileSync(file, 'utf8')
  for (const m of src.matchAll(re)) {
    if (!existsSync(join('src/assets', m[1]))) failures.push(`${file} imports missing src/assets/${m[1]}`)
  }
}

if (failures.length) {
  console.error(failures.join('\n'))
  process.exit(1)
}
console.log('assets ok')
