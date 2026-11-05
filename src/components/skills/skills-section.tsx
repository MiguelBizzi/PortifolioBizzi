'use client'

import { useTranslations } from 'next-intl'
import type { SectionName } from '@/hooks/active-section-provider'
import { useSectionInView } from '@/hooks/section-in-view'
import { marqueeRows, skillGroups } from '@/lib/constants/skills'
import { GradientText } from '@/components/ui/gradient-text'
import { cn } from '@/lib/utils'
import { TechMarquee } from './tech-marquee'

function GroupCard({
  index,
  id,
  items,
}: {
  index: number
  id: (typeof skillGroups)[number]['id']
  items: string[]
}) {
  const t = useTranslations('Skills.groups')
  const featured = id === 'payments'

  return (
    <div
      className={cn(
        'rounded-[20px]',
        featured && 'bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] p-px',
        id === 'practice' && 'min-[900px]:col-span-2'
      )}
    >
      <div
        className={cn(
          'h-full rounded-[20px] bg-card p-7',
          featured ? 'rounded-[19px]' : 'border border-border'
        )}
      >
        <p className="eyebrow">{String(index + 1).padStart(2, '0')}</p>
        <h3 className="mt-2 font-display text-xl font-semibold">{t(id)}</h3>
        <ul className="mt-[18px] flex flex-wrap gap-2">
          {items.map((item) => (
            <li
              key={item}
              className="rounded-md border border-border bg-background px-2 py-1 font-mono text-xs"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function SkillsSection() {
  const tHeader = useTranslations('Header')
  const t = useTranslations('Skills')

  const { ref } = useSectionInView(tHeader('skills') as SectionName)

  return (
    <section id="skills" ref={ref} className="mt-24 scroll-mt-28 md:mt-28">
      <div className="mx-auto max-w-[1120px] px-6 sm:px-8">
        <p className="eyebrow">{t('eyebrow')}</p>
        <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-[-0.025em] sm:text-[40px]">
          {t('title_lead')} <GradientText>{t('title_accent')}</GradientText> {t('title_tail')}
        </h2>
      </div>

      <div className="mt-12">
        <TechMarquee rows={marqueeRows} />
      </div>

      <div className="mx-auto mt-14 max-w-[1120px] px-6 sm:px-8">
        <div className="grid gap-5 min-[900px]:grid-cols-3">
          {skillGroups.map((group, index) => (
            <GroupCard key={group.id} index={index} id={group.id} items={group.items} />
          ))}
        </div>
      </div>
    </section>
  )
}
