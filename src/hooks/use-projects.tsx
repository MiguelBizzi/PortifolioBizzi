import type { Project } from '@/lib/types/project'
import { useTranslations } from 'next-intl'
import project1Image from '@/assets/sltreinosweb.png'
import project2Image from '@/assets/bizzidashboard.png'
import project3Image from '@/assets/sltreinosapp.png'

export const useProjects = () => {
  const t = useTranslations('ProjectsItems')

  return [
    {
      title: t('project_3.title'),
      description: t('project_3.description'),
      image: project3Image,
      stack: ['React Native', 'Expo', 'TypeScript', 'Restyle', 'Redux Toolkit'],
    },
    {
      title: t('project_1.title'),
      description: t('project_1.description'),
      image: project1Image,
      stack: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Redux Toolkit',
        'Node.JS',
        'Fastify',
        'Prisma',
        'PostgreSQL',
      ],
    },
    {
      title: t('project_2.title'),
      description: t('project_2.description'),
      image: project2Image,
      stack: [],
    },
  ] as Project[]
}
