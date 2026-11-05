'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useTranslations } from 'next-intl'

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const t = useTranslations('Header')

  return (
    <button
      type="button"
      aria-label={t('toggle_theme')}
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="flex h-9 w-9 items-center justify-center rounded-full text-inherit transition-colors hover:bg-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Sun aria-hidden="true" className="hidden h-[1.1rem] w-[1.1rem] dark:block" />
      <Moon aria-hidden="true" className="h-[1.1rem] w-[1.1rem] dark:hidden" />
    </button>
  )
}
