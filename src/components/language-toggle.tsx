'use client'

import { ChevronDown } from 'lucide-react'
import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Flag } from '@/components/ui/flags'
import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import type { Languages } from '@/lib/types/languages'

const languages: { locale: Languages; label: string }[] = [
  { locale: 'pt', label: 'Português' },
  { locale: 'en', label: 'English' },
  { locale: 'es', label: 'Español' },
]

export function LanguageToggle() {
  const params: { locale: Languages } = useParams()
  const t = useTranslations('Header')
  const current = languages.some((l) => l.locale === params.locale) ? params.locale : 'pt'

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label={t('change_language')}
          className="flex h-9 items-center gap-1.5 rounded-full px-2.5 transition-colors hover:bg-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Flag locale={current} />
          <ChevronDown aria-hidden="true" className="h-3.5 w-3.5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="z-50 min-w-[168px] rounded-2xl border-0 bg-popover/95 p-1.5 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.25),0_0_0_1px_hsl(var(--border))] backdrop-blur-sm"
      >
        {languages.map(({ locale, label }) => (
          <DropdownMenuItem
            key={locale}
            asChild
            className={cn(
              'cursor-pointer gap-2.5 rounded-lg px-3 py-2 text-sm',
              locale === current && 'bg-foreground/10'
            )}
          >
            <Link href="/" locale={locale} lang={locale} hrefLang={locale}>
              <Flag locale={locale} />
              <span>{label}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
