'use client'

import { useTranslations } from 'next-intl'
import ProjectCard from './project-card'
import { useSectionInView } from '@/hooks/section-in-view'
import type { SectionName } from '@/hooks/active-section-provider'
import { useProjects } from '@/hooks/use-projects'
import { GradientText } from '@/components/ui/gradient-text'

export default function ProjectsSection() {
  const t = useTranslations('Projects')
  const tHeader = useTranslations('Header')

  const { ref } = useSectionInView(tHeader('projects') as SectionName)
  const projects = useProjects()

  return (
    <section
      id="projects"
      className="mx-auto mt-24 w-full max-w-[1120px] scroll-mt-28 px-6 sm:px-8 md:mt-28"
      ref={ref}
    >
      <p className="eyebrow">{t('eyebrow')}</p>
      <h2 className="mt-3.5 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
        {t('title_lead')} <GradientText>{t('title_accent')}</GradientText>
      </h2>
      <p className="mt-4 max-w-[560px] text-[17px] leading-relaxed text-muted-foreground">
        {t('subtitle')}
      </p>

      <div className="mt-12 flex flex-col gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={project.key} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
