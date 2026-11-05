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
      <motion.div className="fixed left-1/2 top-0 w-full max-w-full -translate-x-1/2 rounded-none border border-border bg-background/80 px-2 shadow-lg backdrop-blur-md sm:top-6 sm:w-auto sm:rounded-full sm:p-2">
        <nav className="py-2 sm:py-0">
          <ul className="flex flex-1 flex-wrap items-center justify-center gap-y-1 text-sm font-medium text-muted-foreground sm:flex-nowrap sm:gap-0.5">
            {links.map((link, index) => (
              <li key={index}>
                <motion.a
                  href={link.slug}
                  className={cn(
                    'relative z-20 inline-block rounded-full px-3 py-2 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                    { 'text-foreground': activeSection === link.name }
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
                      className="absolute inset-0 -z-10 rounded-full bg-foreground/10"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.a>
              </li>
            ))}

            <li className="flex items-center sm:ml-1">
              <ThemeToggle />
              <LanguageToggle />
            </li>
          </ul>
        </nav>
      </motion.div>
    </header>
  )
}
