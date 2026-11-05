'use client'

import { Download } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useSectionInView } from '@/hooks/section-in-view'
import type { SectionName } from '@/hooks/active-section-provider'
import { GradientText } from '@/components/ui/gradient-text'

const line = 'mb-1.5 h-1 rounded-sm bg-[#E4E7EC]'

export default function ResumeSection() {
  const t = useTranslations('Resume')
  const tHeader = useTranslations('Header')
  const { ref } = useSectionInView(tHeader('resume') as SectionName)

  return (
    <section
      id="resume"
      ref={ref}
      className="mx-auto mt-24 w-full max-w-[1120px] scroll-mt-28 px-6 sm:px-8 md:mt-28"
    >
      <div className="grid items-center gap-10 overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-10 min-[900px]:grid-cols-[1.1fr_1fr] min-[900px]:gap-14 min-[900px]:p-14">
        <div>
          <p className="eyebrow">{t('eyebrow')}</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[40px]">
            {t('title_lead')} <GradientText>{t('title_accent')}</GradientText>
          </h2>
          <p className="mt-5 max-w-[460px] text-[17px] leading-relaxed text-muted-foreground">
            {t('description')}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/cv/miguelbizzi-cv-en.pdf"
              download
              className="inline-flex items-center gap-2.5 rounded-[10px] bg-foreground px-[22px] py-3.5 text-[15px] font-medium text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Download aria-hidden="true" className="h-4 w-4" />
              {t('download_en')}
            </a>
            <a
              href="/cv/miguelbizzi-cv-pt.pdf"
              download
              lang="pt"
              className="inline-flex items-center gap-2.5 rounded-[10px] border border-border bg-card px-[22px] py-3.5 text-[15px] font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Download aria-hidden="true" className="h-4 w-4" />
              {t('download_pt')}
            </a>
          </div>
          <p className="mt-5 font-mono text-xs text-muted-foreground">{t('file_note')}</p>
        </div>

        <div aria-hidden="true" className="relative flex justify-center py-6">
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(139,92,246,0.14),rgba(59,130,246,0.06)_60%,transparent_80%)]" />
          <div className="relative w-[300px] max-w-full -rotate-[2.5deg] rounded-[10px] border border-[#E4E7EC] bg-white p-7 text-[#0B1020] shadow-[0_24px_50px_-20px_rgba(11,16,32,0.25)]">
            <div className="font-display text-[17px] font-semibold tracking-[-0.01em]">
              Miguel Oliveira Bizzi
            </div>
            <GradientText className="mt-0.5 inline-block text-[11px] font-medium">
              {t('preview_role')}
            </GradientText>
            <div className="my-4 mb-3.5 h-px bg-[#E4E7EC]" />
            <div className="mb-2.5 h-[5px] w-[70px] rounded-[3px] bg-[#0B1020]" />
            <div className={line} />
            <div className={line} />
            <div className={`${line} mb-4 w-4/5`} />
            <div className="mb-2.5 h-[5px] w-[90px] rounded-[3px] bg-[#0B1020]" />
            <div className={line} />
            <div className={`${line} w-[90%]`} />
            <div className={line} />
            <div className={`${line} mb-4 w-3/5`} />
            <div className="mb-2.5 h-[5px] w-[70px] rounded-[3px] bg-[#0B1020]" />
            <div className="flex flex-wrap gap-1.5">
              <span className="h-3.5 w-11 rounded bg-[#EEF2FF]" />
              <span className="h-3.5 w-[54px] rounded bg-[#F3E8FF]" />
              <span className="h-3.5 w-[38px] rounded bg-[#EEF2FF]" />
              <span className="h-3.5 w-12 rounded bg-[#F3E8FF]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
