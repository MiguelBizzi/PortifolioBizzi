import { useTranslations } from 'next-intl'

export const useProjects = () => {
  const t = useTranslations('ProjectsItems')

  return [
    {
      title: t('project_1.title'),
      description: t('project_1.description'),
      image: '/images/projects/project1.jpg',
      url: 'https://example.com',
    },
    {
      title: t('project_2.title'),
      description: t('project_2.description'),
      image: '/images/projects/project2.jpg',
      url: 'https://example.com',
    },
    {
      title: t('project_3.title'),
      description: t('project_3.description'),
      image: '/images/projects/project3.jpg',
      url: 'https://example.com',
    },
  ]
}
