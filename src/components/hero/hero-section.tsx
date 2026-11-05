'use client'

import memojiImage from '@/assets/memoji.png'
import Image from 'next/image'
import { ArrowDown, Mail } from 'lucide-react'
import { FlowLines } from './flow-lines'
import { GradientText } from '../ui/gradient-text'
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
    <div
      id="home"
      className="relative z-0 flex min-h-[760px] items-center justify-center overflow-hidden px-6 pb-28 pt-44 sm:min-h-screen sm:py-28"
      ref={ref}
    >
      <FlowLines />

      <div className="flex flex-col items-center text-center">
        <Image src={memojiImage} alt="Miguel's memoji" priority className="-mb-1.5 size-24" />

        <div className="inline-flex items-center gap-3 rounded-[10px] border border-border bg-muted px-4 py-1.5">
          <span className="pulse-dot size-2.5 rounded-full bg-[#22A06B]" aria-hidden="true" />
          <span className="text-sm font-medium">{t('available')}</span>
        </div>

        <h1 className="mt-8 max-w-[820px] text-balance font-display text-[40px] font-semibold leading-[1.04] tracking-[-0.035em] sm:text-6xl lg:text-[68px] lg:leading-[1.02]">
          {t('headline_lead')} <GradientText>{t('headline_accent')}</GradientText>
        </h1>
        <p className="mt-6 max-w-[640px] text-base leading-relaxed text-muted-foreground sm:text-[19px]">
          {t('description')}
        </p>

        <div className="relative z-10 mt-9 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleGoToProjects}
            className="inline-flex items-center gap-2 rounded-[10px] border border-border bg-card px-5 py-3 text-[15px] font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {t('see_work')} <ArrowDown aria-hidden="true" className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={handleGoToContact}
            className="inline-flex items-center gap-2 rounded-[10px] bg-foreground px-5 py-3 text-[15px] font-medium text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Mail aria-hidden="true" className="h-4 w-4" /> {t('contact')}
          </button>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent to-background"
      />

      <ScrollToNextSectionButton onClick={handleGoToProjects} />
    </div>
  )
}
