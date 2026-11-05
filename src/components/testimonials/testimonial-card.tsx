import type { Testimonial } from '@/lib/types/testimonials'
import { GradientText } from '@/components/ui/gradient-text'
import { cn } from '@/lib/utils'

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
}

export default function TestimonialCard({
  data,
  featured = false,
}: {
  data: Testimonial
  featured?: boolean
}) {
  return (
    <figure
      className={cn(
        'relative m-0 flex flex-col justify-between overflow-hidden rounded-3xl',
        featured
          ? 'gap-10 border border-border bg-panel p-8 text-panel-foreground sm:p-12 min-[900px]:row-span-2'
          : 'gap-7 border border-border bg-card p-7 sm:p-9'
      )}
    >
      {featured && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 -top-28 size-[360px] rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.35),rgba(59,130,246,0.12)_60%,transparent)]"
        />
      )}
      <div className="relative">
        {featured && (
          <GradientText className="block h-10 font-display text-[80px] font-bold leading-[0.7]">
            <span aria-hidden="true">“</span>
          </GradientText>
        )}
        <blockquote
          className={cn(
            'font-display font-semibold',
            featured
              ? 'mt-6 text-[28px] leading-[1.2] tracking-[-0.025em] sm:text-[34px]'
              : 'text-[22px] leading-[1.3] tracking-[-0.015em]'
          )}
        >
          {data.pullBefore}
          <GradientText>{data.pullAccent}</GradientText>
          {data.pullAfter}
        </blockquote>
        <p
          className={cn(
            'leading-[1.7]',
            featured ? 'mt-7 text-[15px] text-[#B4BBCA]' : 'mt-4 text-sm text-muted-foreground'
          )}
        >
          {data.body}
        </p>
      </div>
      <figcaption className="relative flex items-center gap-3.5">
        <span
          aria-hidden="true"
          className={cn(
            'flex items-center justify-center rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] font-medium text-white',
            featured ? 'size-12' : 'size-10 text-sm'
          )}
        >
          {initials(data.name)}
        </span>
        <span>
          <span className="block font-medium">{data.name}</span>
          <span
            className={cn('block text-sm', featured ? 'text-[#B4BBCA]' : 'text-muted-foreground')}
          >
            {data.role}
          </span>
        </span>
      </figcaption>
    </figure>
  )
}
