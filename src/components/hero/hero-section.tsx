'use client'

import memojiImage from '@/assets/memoji.png'
import Image from 'next/image'
import { Button } from '../ui/button'
import { ArrowDown } from 'lucide-react'
import { BackgroundBeams } from '../ui/background-beams'
import { useSectionInView } from '@/hooks/section-in-view'
import { useActiveSection } from '@/hooks/active-section-provider'
import ScrollToNextSectionButton from './scroll-to-next-section-button'
import { annotate, annotationGroup } from 'rough-notation'
import { useEffect } from 'react'

export default function HeroSection() {
  const { ref } = useSectionInView('Home', true)
  const { setActiveSection, setTimeOfLastClick } = useActiveSection()

  function handleGoToProjects() {
    setActiveSection('Projects')
    setTimeOfLastClick(Date.now())

    const element = document.getElementById('projects')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const a2 = annotate(document.querySelector('.e2') as HTMLElement, {
      type: 'underline',
      color: '#2563eb',
      strokeWidth: 1,
    })
    const a3 = annotate(document.querySelector('.e3') as HTMLElement, {
      type: 'underline',
      color: '#2563eb',
      strokeWidth: 1,
    })

    const ag = annotationGroup([a2, a3])
    ag.show()
  }, [])

  return (
    <div id="home" className="relative z-0 h-screen py-32 md:py-48 lg:py-60" ref={ref}>
      {/* <div className="hero-ring size-[620px]"></div>
      <div className="hero-ring size-[820px]"></div>
      <div className="hero-ring size-[1020px]"></div>
      <div className="hero-ring size-[1220px]"></div> */}

      {/* <HeroOrbitList /> */}
      <BackgroundBeams className="-z-10" />

      <div className="flex flex-col items-center">
        <Image src={memojiImage} alt="Memoji" className="-mb-2 size-[100px]" />

        <div className="inline-flex items-center gap-4 rounded-lg border bg-secondary px-4 py-1.5 dark:border-gray-800 dark:bg-gray-950">
          <div className="size-2.5 rounded-full bg-green-500" />
          <div className="text-sm font-medium">Available for new projects</div>
        </div>

        <div className="mx-auto max-w-lg">
          <h1 className="mt-8 text-center text-3xl font-bold tracking-wide md:text-4xl">
            Hello, I&apos;m Miguel Bizzi
          </h1>
          <p className="mt-4 text-center text-gray-600 dark:text-white/60 md:text-lg">
            A fullstack software engineer based in Brazil. I specialize in building high-quality{' '}
            <span className="e2">mobile</span> applications and <span className="e3">websites</span>
            .
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          <Button variant="outline" onClick={handleGoToProjects}>
            Veja meu trabalho <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          <Button>
            <span className="mr-2">👋</span> Entre em contato
          </Button>
        </div>
      </div>

      <ScrollToNextSectionButton onClick={handleGoToProjects} />
    </div>
  )
}
