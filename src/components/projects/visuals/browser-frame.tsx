import { cn } from '@/lib/utils'

export function BrowserFrame({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border border-border bg-card shadow-[0_26px_60px_-28px_rgba(11,16,32,0.4)]',
        className
      )}
    >
      <div
        aria-hidden="true"
        className="flex h-[26px] items-center gap-1.5 border-b border-border bg-muted px-3"
      >
        <i className="block size-2 rounded-full bg-foreground/20" />
        <i className="block size-2 rounded-full bg-foreground/20" />
        <i className="block size-2 rounded-full bg-foreground/20" />
      </div>
      {children}
    </div>
  )
}
