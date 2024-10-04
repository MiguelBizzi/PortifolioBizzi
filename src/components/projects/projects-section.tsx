'use client'

import { useInView } from 'react-intersection-observer'
import ProjectCard from './project-card'
import { useActiveSection } from '@/hooks/active-section-provider'
import { useEffect } from 'react'

export default function ProjectsSection() {
  const { ref, inView } = useInView({
    initialInView: false,
    threshold: 0.75,
  })
  const { setActiveSection, timeOfLastClick } = useActiveSection()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection('Projects')
    }
  }, [inView, setActiveSection, timeOfLastClick])

  return (
    <div id="projects" className="scroll-mt-32 px-4 md:scroll-mt-48 lg:scroll-mt-60" ref={ref}>
      <div className="mx-auto max-w-lg text-center">
        <div className="flex justify-center">
          <p className="bg-gradient-to-r from-blue-500 to-violet-400 bg-clip-text font-semibold uppercase tracking-widest text-transparent">
            Real world results
          </p>
        </div>
        <h2 className="mt-4 text-3xl font-bold">Featured Projects</h2>
        <p className="mt-2 dark:text-white/60">
          See how I helped businesses like yours grow their online presence and increase revenue.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-4xl space-y-8 sm:mt-20">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}
