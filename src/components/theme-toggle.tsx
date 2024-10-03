'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  function handleToggleTheme() {
    setTheme(() => (theme === 'light' ? 'dark' : 'light'))
  }

  return (
    <button onClick={handleToggleTheme} className="ml-2 mr-4 sm:m-0">
      <Sun className="h-0 w-[1.2rem] rotate-90 scale-0 transition-all dark:h-[1.2rem] dark:rotate-0 dark:scale-100" />
      <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:h-0 dark:-rotate-90 dark:scale-0" />
    </button>
  )
}
