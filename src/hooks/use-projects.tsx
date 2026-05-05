import type { Project } from '@/lib/types/project'
import { useTranslations } from 'next-intl'
import projectPhewImage from '@/assets/printphew.png'
import projectWiggleImage from '@/assets/printwiggle.png'
import project1Image from '@/assets/sltreinosweb.png'
import project3Image from '@/assets/sltreinosapp.png'
import project4Image from '@/assets/saas-marketplace.png'

export const useProjects = () => {
  const t = useTranslations('ProjectsItems')

  return [
    {
      title: t('project_wiggle.title'),
      description: t('project_wiggle.description'),
      image: projectWiggleImage,
      stack: [
        'React JS',
        'NestJS',
        'Jest',
        'TurboRepo',
        'AWS RDS',
        'AWS EC2',
        'AWS ElasticBeanstalk',
        'AWS CloudFront',
      ],
    },
    {
      title: t('project_phew.title'),
      description: t('project_phew.description'),
      image: projectPhewImage,
      stack: ['NextJS', 'NestJS', 'N8N', 'AI', 'AWS', 'Jest'],
    },
    {
      title: t('project_4.title'),
      description: t('project_4.description'),
      image: project4Image,
      stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'oAuth', 'REST API', 'Multi-tenant'],
    },
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
  ] as Project[]
}
