'use client'

import { useTranslations } from 'next-intl'
import { useSectionInView } from '@/hooks/section-in-view'
import type { SectionName } from '@/hooks/active-section-provider'
import { GradientText } from '@/components/ui/gradient-text'

export default function AboutSection() {
  const t = useTranslations('About')
  const tHeader = useTranslations('Header')
  const { ref } = useSectionInView(tHeader('about') as SectionName)

  return (
    <section
      id="about"
      ref={ref}
      className="mx-auto mt-24 w-full max-w-[1120px] scroll-mt-28 px-6 sm:px-8 md:mt-28"
    >
      <div className="grid gap-8 min-[900px]:grid-cols-[1fr_2fr] min-[900px]:gap-12">
        <div>
          <p className="eyebrow">{t('eyebrow')}</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[40px]">
            {t('title_lead')} <GradientText>{t('title_accent')}</GradientText>
            {t('title_tail')}
          </h2>
        </div>
        <div>
          <p className="text-lg leading-relaxed sm:text-xl sm:leading-[1.6]">{t('paragraph_1')}</p>
          <p className="mt-5 text-[17px] leading-[1.65] text-muted-foreground">
            {t('paragraph_2')}
          </p>

          <dl className="mt-9 grid gap-6 border-t border-border pt-7 sm:grid-cols-3">
            <div>
              <dt className="eyebrow">{t('education_label')}</dt>
              <dd className="mt-2 text-[15px] leading-normal">
                {t('education_value')}
                <br />
                <span className="text-muted-foreground">{t('education_detail')}</span>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">{t('languages_label')}</dt>
              <dd className="mt-2 text-[15px] leading-normal">
                {t('languages_value')
                  .split('|')
                  .map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                <span className="text-muted-foreground">{t('languages_detail')}</span>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">{t('industries_label')}</dt>
              <dd className="mt-2 text-[15px] leading-normal">{t('industries_value')}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
