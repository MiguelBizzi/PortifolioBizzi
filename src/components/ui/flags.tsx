import type { Languages } from '@/lib/types/languages'
import { cn } from '@/lib/utils'

const stripes = [0, 4.6, 9.2, 13.7]
const stars: [number, number][] = [
  [2, 1.8],
  [5.2, 1.8],
  [8.4, 1.8],
  [3.6, 4.6],
  [6.8, 4.6],
  [2, 7.4],
  [5.2, 7.4],
  [8.4, 7.4],
]

export function Flag({ locale, className }: { locale: Languages; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="22"
      height="15"
      viewBox="0 0 24 16"
      className={cn('block shrink-0 rounded-[3px] shadow-[0_0_0_1px_rgba(0,0,0,0.1)]', className)}
    >
      {locale === 'pt' && (
        <>
          <rect width="24" height="16" fill="#009C3B" />
          <path d="M12 2 21.6 8 12 14 2.4 8Z" fill="#FFDF00" />
          <circle cx="12" cy="8" r="3.3" fill="#002776" />
          <path d="M8.9 7.2c2.2-.7 4.4-.3 6.3.9" stroke="#fff" strokeWidth=".7" fill="none" />
        </>
      )}
      {locale === 'en' && (
        <>
          <rect width="24" height="16" fill="#fff" />
          <g fill="#B22234">
            {stripes.map((y) => (
              <rect key={y} y={y} width="24" height="2.3" />
            ))}
          </g>
          <rect width="10.5" height="9.2" fill="#3C3B6E" />
          <g fill="#fff">
            {stars.map(([cx, cy]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r=".55" />
            ))}
          </g>
        </>
      )}
      {locale === 'es' && (
        <>
          <rect width="24" height="16" fill="#AA151B" />
          <rect y="4" width="24" height="8" fill="#F1BF00" />
        </>
      )}
    </svg>
  )
}
