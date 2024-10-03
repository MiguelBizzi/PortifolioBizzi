'use client'

import * as React from 'react'
import { Globe } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

type Language = 'pt' | 'en' | 'ge'

export function LanguageToggle() {
  function handleToggleLanguage(language: Language) {
    console.log(language)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="mr-4">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="z-50">
        <DropdownMenuItem onClick={() => handleToggleLanguage('pt')}>🇧🇷 Português</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleToggleLanguage('en')}>🇺🇸 English</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleToggleLanguage('ge')}>🇩🇪 Deutsch</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
