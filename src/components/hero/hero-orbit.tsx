import type { PropsWithChildren } from 'react'

export default function HeroOrbit({
  children,
  size,
  rotation,
}: PropsWithChildren<{ size: number; rotation: number }>) {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className="flex rotate-45 animate-spin items-start justify-start [animation-duration:30s]"
        style={{
          height: `${size}px`,
          width: `${size}px`,
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <div
          className="inline-flex animate-spin [animation-duration:5s]"
          style={{
            transform: `rotate(-${rotation * -1}deg)`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
