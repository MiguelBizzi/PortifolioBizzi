'use client'

import { useSectionInView } from '@/hooks/section-in-view'
import TestimonialCard from './testimonial-card'
import { useTranslations } from 'next-intl'
import type { SectionName } from '@/hooks/active-section-provider'
import { useTestimonials } from '@/hooks/use-testimonials'

export default function TestimonialsSection() {
  const tHeader = useTranslations('Header')
  const t = useTranslations('Testimonials')

  const testimonials = useTestimonials()

  const { ref } = useSectionInView(tHeader('testimonials') as SectionName)

  return (
    <div id="testimonials" className="my-32 px-4" ref={ref}>
      <div className="mx-auto max-w-lg text-center">
        <div className="flex justify-center">
          <p className="bg-gradient-to-r from-blue-500 to-violet-400 bg-clip-text font-semibold uppercase tracking-widest text-transparent">
            {t('what_clients_say')}
          </p>
        </div>
        <h2 className="mt-4 text-3xl font-bold">{t('title')}</h2>
        <p className="mt-2 dark:text-white/60">{t('description')}</p>
      </div>

      <div className="mx-auto mt-16 max-w-screen-2xl space-y-8 sm:mt-20">
        <div className="[mask-image:linear-gradient(to_right, transparent, black_10%)] -my-4 flex overflow-x-clip py-4">
          <div className="group flex flex-none animate-infinite-slider gap-8 [animation-duration:30s] hover:[animation-play-state:paused]">
            {[
              new Array(2)
                .fill(0)
                .map(() =>
                  testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} data={testimonial} />
                  ))
                ),
            ]}
          </div>
        </div>
      </div>
    </div>
  )
}
