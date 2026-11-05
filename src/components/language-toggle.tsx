'use client'

import * as React from 'react'
import { ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Link } from '@/i18n/routing'
import { useParams } from 'next/navigation'
import type { Languages } from '@/lib/types/languages'

export function LanguageToggle() {
  const params: { locale: Languages } = useParams()

  function getFlagEmoji(locale: Languages): string {
    switch (locale) {
      case 'pt':
        return '🇧🇷'
      case 'en':
        return '🇺🇸'
      case 'es':
        return '🇪🇸'
      default:
        return '🇧🇷'
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="mr-4 flex items-center">
          <span className="text-lg">{getFlagEmoji(params.locale)}</span>
          <ChevronDown className="ml-1 h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="z-50 bg-white bg-opacity-80 backdrop-blur-sm dark:bg-white/20"
      >
        <Link href="/" locale="pt" className="hover:cursor-pointer">
          <DropdownMenuItem className="dark:hover:bg-white/20">🇧🇷 Português</DropdownMenuItem>
        </Link>
        <Link href="/" locale="en" className="hover:cursor-pointer">
          <DropdownMenuItem className="dark:hover:bg-white/20">🇺🇸 English</DropdownMenuItem>
        </Link>
        <Link href="/" locale="es" className="hover:cursor-pointer">
          <DropdownMenuItem className="dark:hover:bg-white/20">🇪🇸 Español</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
