export type ProjectKey = 'wiggle' | 'phew' | 'bizzidb' | 'sltreinos'

export interface Project {
  key: ProjectKey
  category: string
  title: string
  description: string
  achievements: [string, string, string]
  stack: string[]
  link?: { href: string; label: string }
}
