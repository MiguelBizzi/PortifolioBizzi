import { useTranslations } from 'next-intl'
import type { SectionName } from './active-section-provider'

export const useLinks = () => {
  const t = useTranslations('Header')

  return [
    {
      name: t('home') as SectionName,
      slug: '#home',
    },
    {
      name: t('projects') as SectionName,
      slug: '#projects',
    },
    {
      name: t('testimonials') as SectionName,
      slug: '#testimonials',
    },
    {
      name: t('skills') as SectionName,
      slug: '#skills',
    },
    {
      name: t('contact') as SectionName,
      slug: '#contact',
    },
  ] as const
}
