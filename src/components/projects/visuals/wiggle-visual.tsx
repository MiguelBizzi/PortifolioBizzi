import Image from 'next/image'
import dashboardImage from '@/assets/projects/wiggle-dashboard.png'
import extensionImage from '@/assets/projects/wiggle-extension.png'
import billPayImage from '@/assets/projects/wiggle-bill-pay.png'
import { BrowserFrame } from './browser-frame'
import { ScaledStage } from './scaled-stage'

export function WiggleVisual() {
  return (
    <ScaledStage designWidth={560} designHeight={380}>
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[420px] w-[560px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(139,92,246,0.14),rgba(59,130,246,0.06)_60%,transparent)]"
      />
      {/* Wiggle's web app is always shown in its light theme */}
      <div className="absolute left-[62px] top-1.5 w-[500px] [color-scheme:light]">
        <BrowserFrame className="!border-[#E4E7EC] !bg-white [&>div:first-child]:!border-[#E4E7EC] [&>div:first-child]:!bg-[#F6F7F9] [&_i]:!bg-[#D5D9E0]">
          <Image
            src={dashboardImage}
            alt="Wiggle web app dashboard"
            width={500}
            sizes="500px"
            className="block h-auto w-full"
          />
        </BrowserFrame>
      </div>
      <div className="absolute left-0 top-[84px] h-[296px] w-[186px] overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white shadow-[0_26px_56px_-22px_rgba(11,16,32,0.5)]">
        <Image
          src={extensionImage}
          alt="Wiggle browser extension sidebar over a practice-management page"
          width={740}
          sizes="740px"
          className="ml-[-22px] mt-[-9px] block h-auto w-[740px] max-w-none"
        />
      </div>
      <div className="absolute right-0 top-14 w-[146px] rounded-[26px] bg-[#0B1020] p-[5px] shadow-[0_26px_56px_-22px_rgba(11,16,32,0.55)]">
        <div className="aspect-[390/844] overflow-hidden rounded-[21px] bg-white">
          <Image
            src={billPayImage}
            alt="Wiggle online bill pay on a phone"
            width={292}
            sizes="146px"
            className="block h-auto w-full"
          />
        </div>
      </div>
    </ScaledStage>
  )
}
