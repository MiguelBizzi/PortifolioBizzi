import { useTranslations } from 'next-intl'
import type { Testimonial } from '@/lib/types/testimonials'

export const useTestimonials = () => {
  const t = useTranslations('TestimonialsItems')

  return [
    {
      name: t('testimonial_1.name'),
      field: t('testimonial_1.field'),
      text: t('testimonial_1.text'),
    },
    {
      name: t('testimonial_2.name'),
      field: t('testimonial_2.field'),
      text: t('testimonial_2.text'),
    },
    {
      name: t('testimonial_3.name'),
      field: t('testimonial_3.field'),
      text: t('testimonial_3.text'),
    },
  ] as Testimonial[]
}
