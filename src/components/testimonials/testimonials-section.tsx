'use client'

import { useTranslations } from 'next-intl'
import { useSectionInView } from '@/hooks/section-in-view'
import type { SectionName } from '@/hooks/active-section-provider'
import { useTestimonials } from '@/hooks/use-testimonials'
import { GradientText } from '@/components/ui/gradient-text'
import TestimonialCard from './testimonial-card'

export default function TestimonialsSection() {
  const tHeader = useTranslations('Header')
  const t = useTranslations('Testimonials')
  const testimonials = useTestimonials()
  const { ref } = useSectionInView(tHeader('testimonials') as SectionName)

  return (
    <section
      id="testimonials"
      ref={ref}
      className="mx-auto mt-24 w-full max-w-[1120px] scroll-mt-28 px-6 sm:px-8 md:mt-28"
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">{t('eyebrow')}</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[40px]">
            {t('title_lead')} <GradientText>{t('title_accent')}</GradientText>
          </h2>
        </div>
        <p className="font-mono text-xs text-muted-foreground">{t('roles_label')}</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 min-[900px]:grid-cols-[1.15fr_1fr]">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={testimonial.id} data={testimonial} featured={index === 0} />
        ))}
      </div>
    </section>
  )
}
