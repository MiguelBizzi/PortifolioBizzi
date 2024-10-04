import Image from 'next/image'
import { Badge } from '../ui/badge'
import projectImage from '@/assets/ai-startup-landing-page.png'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

export default function ProjectCard() {
  return (
    <div className="group relative flex flex-col-reverse overflow-hidden rounded-lg border p-6 shadow-lg transition-transform hover:bg-gray-50 hover:dark:bg-white/5 lg:flex-row lg:p-8 lg:even:flex-row-reverse">
      <div className="flex-1">
        <h1 className="text-xl font-bold">Nome do proj</h1>
        <p className="mt-1 dark:text-white/60">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et provident facere ratione
          ipsam incidunt dolorum temporibus, aliquam adipisci earum excepturi.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Badge>React</Badge>
          <Badge>Next.js</Badge>
          <Badge>Node.js</Badge>
          <Badge>Express</Badge>
          <Badge>PostgreSQL</Badge>
          <Badge>Prisma</Badge>
        </div>

        <div className="flex justify-end lg:justify-start">
          <Button className="mt-4" size="sm" variant="outline">
            View Project <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="mb-4 flex-1 lg:mb-0">
        <Image
          src={projectImage}
          alt="Project"
          width={500}
          height={400}
          className="top-12 rounded-lg transition-all group-odd:-right-36 group-even:-left-36 max-lg:w-full lg:absolute lg:group-odd:-right-24 group-even:lg:-left-28 lg:group-hover:scale-105 lg:group-odd:group-hover:-rotate-3 lg:group-even:group-hover:rotate-3"
        />
      </div>
    </div>
  )
}
