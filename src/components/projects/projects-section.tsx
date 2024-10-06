'use client'

import { useTranslations } from 'next-intl'
import ProjectCard from './project-card'
import { useSectionInView } from '@/hooks/section-in-view'
import type { SectionName } from '@/hooks/active-section-provider'
import { useProjects } from '@/hooks/use-projects'

export default function ProjectsSection() {
  const t = useTranslations('Projects')
  const tHeader = useTranslations('Header')

  const { ref } = useSectionInView(tHeader('projects') as SectionName)
  const projects = useProjects()

  return (
    <div id="projects" className="scroll-mt-32 px-4 md:scroll-mt-48 lg:scroll-mt-60" ref={ref}>
      <div className="mx-auto max-w-lg text-center">
        <div className="flex justify-center">
          <p className="bg-gradient-to-r from-blue-500 to-violet-400 bg-clip-text font-semibold uppercase tracking-widest text-transparent">
            {t('real_world')}
          </p>
        </div>
        <h2 className="mt-4 text-3xl font-bold">{t('title')}</h2>
        <p className="mt-2 dark:text-white/60">{t('description')}</p>
      </div>

      <div className="mx-auto mt-16 max-w-4xl space-y-8 sm:mt-20">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}
