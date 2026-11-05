import { Github, Linkedin } from 'lucide-react'
import { useTranslations } from 'next-intl'

const iconLink =
  'rounded text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'

export default function Footer() {
  const t = useTranslations('Footer')

  return (
    <footer className="mx-auto w-full max-w-[1120px] px-6 pt-24 sm:px-8">
      <div
        aria-hidden="true"
        className="h-px bg-[linear-gradient(90deg,transparent,#3B82F6,#8B5CF6,transparent)]"
      />
      <div className="flex flex-wrap items-center justify-between gap-4 pb-10 pt-7 text-[13px] text-muted-foreground">
        <span>© {new Date().getFullYear()} Miguel Oliveira Bizzi</span>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/MiguelBizzi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={iconLink}
          >
            <Github aria-hidden="true" className="size-[18px]" />
          </a>
          <a
            href="https://www.linkedin.com/in/miguelbizzi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={iconLink}
          >
            <Linkedin aria-hidden="true" className="size-[18px]" />
          </a>
          <a
            href="#home"
            className="rounded text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {t('back_to_top')} <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
