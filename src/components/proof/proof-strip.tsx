import { useTranslations } from 'next-intl'
import { GradientText } from '@/components/ui/gradient-text'

const items = ['years', 'volume', 'articles', 'users'] as const

export function ProofStrip() {
  const t = useTranslations('Proof')

  return (
    <section aria-label="Highlights" className="mx-auto w-full max-w-[1120px] px-6 sm:px-8">
      <dl className="grid grid-cols-2 border-y border-border lg:grid-cols-4">
        {items.map((item, i) => (
          <div
            key={item}
            className={
              'border-border py-6 sm:py-8 ' +
              (i % 2 === 0 ? 'border-r pr-5' : 'pl-5') +
              (i < 2 ? 'border-b lg:border-b-0' : '') +
              'lg:px-6' +
              (i === 0 ? 'lg:pl-0' : '') +
              (i === 3 ? 'lg:border-r-0 lg:pr-0' : 'lg:border-r')
            }
          >
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
