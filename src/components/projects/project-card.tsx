import { Fragment } from 'react'
import { useTranslations } from 'next-intl'
import type { Project } from '@/lib/types/project'
import { cn } from '@/lib/utils'
import { ProjectVisual } from './visuals'

function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split('**').map((part, i) =>
        i % 2 === 1 ? (
          <b key={i} className="font-semibold">
            {part}
          </b>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  )
}

interface Props {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: Props) {
  const t = useTranslations('Projects')
  const reversed = index % 2 === 1

  return (
    <article className="grid grid-cols-1 items-center gap-8 rounded-3xl border border-border bg-card p-6 sm:p-9 min-[900px]:grid-cols-12 min-[900px]:gap-12 min-[900px]:p-11">
      <div
        className={cn(
          'min-w-0 min-[900px]:col-span-5',
          reversed && 'min-[900px]:order-2 min-[900px]:col-span-5'
        )}
      >
        <p className="eyebrow normal-case">
          {String(index + 1).padStart(2, '0')} · {project.category}
        </p>
        <h3 className="mt-3.5 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.025em]">
          {project.title}
        </h3>
        <p className="mt-3.5 text-base leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground">
          {t('achieved_label')}
        </p>
        <ul className="mt-3 flex flex-col gap-2.5 text-[15px] leading-normal">
          {project.achievements.map((text) => (
            <li key={text} className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-2 size-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]"
              />
              <span>
                <Rich text={text} />
              </span>
            </li>
          ))}
        </ul>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Stack">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-border bg-muted px-2.5 py-1 font-mono text-xs"
            >
              {tech}
            </li>
          ))}
        </ul>

        {project.link && (
          <a
            href={project.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block rounded text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {project.link.label} <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>

      <div className={cn('min-w-0 min-[900px]:col-span-7', reversed && 'min-[900px]:order-1')}>
        <ProjectVisual projectKey={project.key} />
      </div>
    </article>
  )
}
