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
      <DropdownMenuContent
        align="end"
        className="z-50 bg-white bg-opacity-80 backdrop-blur-sm dark:bg-white/20"
      >
        <DropdownMenuItem
          className="dark:hover:bg-white/20"
          onClick={() => handleToggleLanguage('pt')}
        >
          🇧🇷 Português
        </DropdownMenuItem>
        <DropdownMenuItem
          className="dark:hover:bg-white/20"
          onClick={() => handleToggleLanguage('en')}
        >
          🇺🇸 English
        </DropdownMenuItem>
        <DropdownMenuItem
          className="dark:hover:bg-white/20"
          onClick={() => handleToggleLanguage('ge')}
        >
          🇩🇪 Deutsch
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
