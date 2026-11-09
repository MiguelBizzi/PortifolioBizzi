import Image from 'next/image'
import gridImage from '@/assets/projects/bizzidb-grid.png'
import erdImage from '@/assets/projects/bizzidb-erd.png'
import { ScaledStage } from './scaled-stage'

export function BizziDbVisual() {
  return (
    <ScaledStage designWidth={580} designHeight={400}>
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[440px] w-[580px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(216,121,67,0.16),rgba(139,92,246,0.06)_60%,transparent)]"
      />
      <Image
        src={gridImage}
        alt="Bizzi DB data grid"
        width={560}
        sizes="560px"
        className="absolute left-0 top-1.5 block h-auto w-[560px]"
      />
      <Image
        src={erdImage}
        alt="Bizzi DB schema diagram"
        width={330}
        sizes="330px"
        className="absolute bottom-0 right-0 block h-auto w-[330px]"
      />
    </ScaledStage>
  )
}
