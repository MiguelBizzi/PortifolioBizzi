import Image from 'next/image'
import phewImage from '@/assets/projects/phew.png'
import { BrowserFrame } from './browser-frame'

export function PhewVisual() {
  return (
    <div className="relative flex min-h-[260px] items-center sm:min-h-[380px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[560px] max-w-full -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(59,130,246,0.12),rgba(139,92,246,0.06)_60%,transparent)]"
      />
      <BrowserFrame className="relative w-full">
        <div className="max-h-[330px] overflow-hidden">
          <Image
            src={phewImage}
            alt="Phew.ai dashboard"
            sizes="(min-width: 900px) 640px, 90vw"
            className="block h-auto w-full"
          />
        </div>
      </BrowserFrame>
    </div>
  )
}
