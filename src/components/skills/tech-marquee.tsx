import { cn } from '@/lib/utils'

function Group({ items, hidden }: { items: string[]; hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="flex items-center gap-10 whitespace-nowrap pr-10 font-display text-[32px] font-semibold tracking-[-0.02em]"
    >
      {items.map((item, i) => (
        <span key={item} className="flex items-center gap-10">
          <span className={i % 2 === 0 ? 'text-foreground' : 'text-muted-foreground'}>{item}</span>
          <i
            aria-hidden="true"
            className="block size-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]"
          />
        </span>
      ))}
    </div>
  )
}

export function TechMarquee({ rows }: { rows: string[][] }) {
  return (
    <div className="flex flex-col gap-5">
      {rows.map((items, row) => (
        <div
          key={row}
          className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]"
        >
          <div
            className={cn('marquee flex w-max', row % 2 === 1 && 'marquee-reverse')}
            style={{ animationDuration: row === 0 ? '45s' : '55s' }}
          >
            <Group items={items} />
            <Group items={items} hidden />
          </div>
        </div>
      ))}
    </div>
  )
}
