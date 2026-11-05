import { useTranslations } from 'next-intl'
import type { Project, ProjectKey } from '@/lib/types/project'

const stacks: Record<ProjectKey, string[]> = {
  wiggle: ['NestJS', 'React', 'Prisma', 'PostgreSQL', 'AWS'],
  phew: ['Next.js', 'Supabase', 'n8n', 'Vercel', 'LLM'],
  bizzidb: ['Tauri', 'Rust', 'React', 'PostgreSQL', 'MySQL'],
  sltreinos: ['Next.js', 'React Native', 'Fastify', 'Prisma', 'PostgreSQL'],
}

const keys: ProjectKey[] = ['wiggle', 'phew', 'bizzidb', 'sltreinos']

export const useProjects = (): Project[] => {
  const t = useTranslations('ProjectsItems')
  const tProjects = useTranslations('Projects')

  return keys.map((key) => ({
    key,
    category: t(`${key}.category`),
    title: t(`${key}.title`),
    description: t(`${key}.description`),
    achievements: [t(`${key}.achievement_1`), t(`${key}.achievement_2`), t(`${key}.achievement_3`)],
    stack: stacks[key],
    ...(key === 'bizzidb' && {
      link: { href: 'https://github.com/MiguelBizzi/bizzi-db', label: tProjects('github_link') },
    }),
  }))
}
