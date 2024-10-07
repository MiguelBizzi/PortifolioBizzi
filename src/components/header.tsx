'use client'

import { motion } from 'framer-motion'
import { ThemeToggle } from './theme-toggle'
import { LanguageToggle } from './language-toggle'
import { cn } from '@/lib/utils'
import { useActiveSection } from '@/hooks/active-section-provider'
import { useLinks } from '@/hooks/use-links'

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSection()
  const links = useLinks()

  return (
    <header className="relative z-40">
      <motion.div className="fixed left-1/2 top-0 w-full -translate-x-1/2 rounded-none border border-black/5 bg-white bg-opacity-80 shadow-lg backdrop-blur-sm dark:bg-white/20 sm:top-6 sm:w-auto sm:rounded-full sm:p-2">
        <nav className="py-2 sm:py-0">
          <ul className="flex flex-1 flex-wrap items-center justify-center gap-y-1 text-sm font-medium text-gray-500 dark:text-gray-200 sm:flex-nowrap sm:gap-5">
            {links.map((link, index) => (
              <motion.a
                href={link.slug}
                key={index}
                className={cn(
                  'relative z-20 inline-block rounded-full px-4 py-2 transition-colors hover:text-gray-950 dark:hover:text-gray-50',
                  {
                    'text-gray-950 dark:hover:text-gray-950': activeSection === link.name,
                  }
                )}
                onClick={() => {
                  setActiveSection(link.name)
                  setTimeOfLastClick(Date.now())
                }}
              >
                <span>{link.name}</span>
                {activeSection === link.name && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute inset-0 -z-10 rounded-full bg-gray-100"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </motion.a>
            ))}

            <ThemeToggle />

            <LanguageToggle />
          </ul>
        </nav>
      </motion.div>
    </header>
  )
}
