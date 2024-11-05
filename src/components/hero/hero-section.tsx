'use client'

import memojiImage from '@/assets/memoji.png'
import Image from 'next/image'
import { Button } from '../ui/button'
import { ArrowDown } from 'lucide-react'
import { BackgroundBeams } from '../ui/background-beams'
import { useSectionInView } from '@/hooks/section-in-view'
import { useActiveSection, type SectionName } from '@/hooks/active-section-provider'
import ScrollToNextSectionButton from './scroll-to-next-section-button'
import { useTranslations } from 'next-intl'

export default function HeroSection() {
  const t = useTranslations('Home')
  const tHeader = useTranslations('Header')

  const { ref } = useSectionInView(tHeader('home') as SectionName, true)
  const { setActiveSection, setTimeOfLastClick } = useActiveSection()

  function handleGoToProjects() {
    setActiveSection(tHeader('projects') as SectionName)
    setTimeOfLastClick(Date.now())

    const element = document.getElementById('projects')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  function handleGoToContact() {
    setActiveSection(tHeader('contact') as SectionName)
    setTimeOfLastClick(Date.now())

    const element = document.getElementById('contact')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div id="home" className="relative z-0 h-screen px-4 py-32 sm:px-0 md:py-48 lg:py-60" ref={ref}>
      <BackgroundBeams className="-z-10" />

      <div className="flex flex-col items-center">
        <Image src={memojiImage} alt="Memoji" className="-mb-2 size-[100px]" />

        <div className="inline-flex items-center gap-4 rounded-lg border bg-secondary px-4 py-1.5 dark:border-gray-800 dark:bg-gray-950">
          <div className="size-2.5 rounded-full bg-green-500" />
          <div className="text-sm font-medium">{t('available')}</div>
        </div>

        <div className="mx-auto max-w-lg">
          <h1 className="mt-8 text-center text-3xl font-bold tracking-wide md:text-4xl">
            {t('hello')}
          </h1>
          <p className="mt-4 text-center text-gray-600 dark:text-white/60 md:text-lg">
            {t('description')}
          </p>
        </div>

        <div className="z-[999] mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          <Button variant="outline" onClick={handleGoToProjects}>
            {t('see_work')} <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          <Button onClick={handleGoToContact}>
            <span className="mr-2">👋</span> {t('contact')}
          </Button>
        </div>
      </div>

      <ScrollToNextSectionButton onClick={handleGoToProjects} />
    </div>
  )
}
