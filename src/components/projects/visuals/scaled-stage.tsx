'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Renders a fixed-size composition (designWidth x designHeight) and scales it
 * down to fit narrower containers, so absolute-positioned layouts never overflow.
 */
export function ScaledStage({
  designWidth,
  designHeight,
  children,
}: {
  designWidth: number
  designHeight: number
  children: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const update = () => setScale(Math.min(1, el.clientWidth / designWidth))
    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    return () => observer.disconnect()
  }, [designWidth])

  return (
    <div ref={ref} className="relative w-full overflow-x-clip" style={{ height: designHeight * scale }}>
      <div
        className="absolute left-1/2 top-0 origin-top"
        style={{
          width: designWidth,
          height: designHeight,
          transform: `translateX(-50%) scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  )
}
