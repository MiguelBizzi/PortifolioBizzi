import Image from 'next/image'
import dashboardImage from '@/assets/projects/sl-dashboard.png'
import appImage from '@/assets/projects/sl-app.png'
import { BrowserFrame } from './browser-frame'
import { ScaledStage } from './scaled-stage'

export function SlTreinosVisual() {
  return (
    <ScaledStage designWidth={560} designHeight={400}>
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[420px] w-[560px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(59,130,246,0.12),rgba(139,92,246,0.06)_60%,transparent)]"
      />
      <div className="absolute left-0 top-0 w-[520px]">
        <BrowserFrame>
          <Image
            src={dashboardImage}
            alt="SL Treinos coach dashboard"
            width={520}
            sizes="520px"
            className="block h-auto w-full"
          />
        </BrowserFrame>
      </div>
      <div className="absolute bottom-0 right-0 w-[330px] overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white p-2">
        <Image
          src={appImage}
          alt="SL Treinos student app screens"
          width={330}
          sizes="330px"
          className="block h-auto w-full"
        />
      </div>
    </ScaledStage>
  )
}
