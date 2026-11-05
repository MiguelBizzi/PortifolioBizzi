import { useTranslations } from 'next-intl'
import type { Testimonial } from '@/lib/types/testimonials'

const ids: Testimonial['id'][] = ['daniel', 'lucas', 'rodrigo']

export const useTestimonials = (): Testimonial[] => {
  const t = useTranslations('TestimonialsItems')

  return ids.map((id) => ({
    id,
    name: t(`${id}.name`),
    role: t(`${id}.role`),
    pullBefore: t(`${id}.pull_before`),
    pullAccent: t(`${id}.pull_accent`),
    pullAfter: t(`${id}.pull_after`),
    body: t(`${id}.body`),
  }))
}
