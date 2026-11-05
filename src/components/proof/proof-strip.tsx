import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { GradientText } from '@/components/ui/gradient-text'

const items = ['years', 'volume', 'articles', 'users'] as const

// Static class strings per column so Tailwind can see them.
const columnClasses = [
  'border-b border-r pb-8 pr-6 pt-8 lg:border-b-0 lg:px-6 lg:pl-0',
  'border-b pb-8 pl-6 pt-8 lg:border-b-0 lg:border-r lg:px-6',
  'border-r pb-8 pr-6 pt-8 lg:px-6',
  'pb-8 pl-6 pt-8 lg:px-6 lg:pr-0',
]
export function ProofStrip() {
  const t = useTranslations('Proof')

  return (
    <section aria-label="Highlights" className="mx-auto w-full max-w-[1120px] px-6 sm:px-8">
      <dl className="grid grid-cols-2 border-y border-border lg:grid-cols-4">
        {items.map((item, i) => (
          <div key={item} className={cn('border-border', columnClasses[i])}>
            <dd className="font-display text-4xl font-semibold tracking-[-0.03em]">
              <GradientText className="inline-block">{t(`${item}_value`)}</GradientText>
            </dd>
            <dt className="mt-1.5 text-sm leading-snug text-muted-foreground">
              {t(`${item}_label`)}
            </dt>
          </div>
        ))}
      </dl>
    </section>
  )
}
