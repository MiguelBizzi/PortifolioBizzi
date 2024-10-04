import memojiImage from '@/assets/memoji.png'
import Image from 'next/image'
import { Button } from '../ui/button'
import { ArrowDown } from 'lucide-react'
import HeroOrbitList from './hero-orbit-list'

export default function HeroSection() {
  return (
    <div id="home" className="relative z-0 h-screen py-32 md:py-48 lg:py-60">
      <div className="hero-ring size-[620px]"></div>
      <div className="hero-ring size-[820px]"></div>
      <div className="hero-ring size-[1020px]"></div>
      <div className="hero-ring size-[1220px]"></div>

      <HeroOrbitList />

      <div className="flex flex-col items-center">
        <Image src={memojiImage} alt="Memoji" className="-mb-2 size-[100px]" />

        <div className="inline-flex items-center gap-4 rounded-lg border bg-secondary px-4 py-1.5 dark:border-gray-800 dark:bg-gray-950">
          <div className="size-2.5 rounded-full bg-green-500" />
          <div className="text-sm font-medium">Available for new projects</div>
        </div>

        <div className="mx-auto max-w-lg">
          <h1 className="mt-8 text-center text-3xl font-bold tracking-wide md:text-4xl">
            Hello, I'm Miguel Bizzi
          </h1>
          <p className="mt-4 text-center text-gray-600 dark:text-white/60 md:text-lg">
            A fullstack software engineer based in Brazil. I specialize in building high-quality
            mobile applications and websites.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          <Button variant="outline">
            Veja meu trabalho <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          <Button>
            <span className="mr-2">👋</span> Entre em contato
          </Button>
        </div>
      </div>
    </div>
  )
}
