'use client'

import { useEffect } from 'react'
import { useActiveSection, type SectionName } from './active-section-provider'
import { useInView } from 'react-intersection-observer'

export function useSectionInView(
  section: SectionName,
  initialInView: boolean = false,
  threshold: number = 0.5
) {
  const { ref, inView } = useInView({
    initialInView,
    threshold,
  })
  const { setActiveSection, timeOfLastClick } = useActiveSection()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(section)
    }
  }, [inView, setActiveSection, timeOfLastClick, section, initialInView])

  return { ref }
}
