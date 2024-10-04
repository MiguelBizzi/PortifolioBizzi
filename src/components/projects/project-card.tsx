import Image from 'next/image'
import { Badge } from '../ui/badge'
import projectImage from '@/assets/ai-startup-landing-page.png'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

export default function ProjectCard() {
  return (
    <div className="relative flex flex-col-reverse overflow-hidden rounded-lg border p-6 shadow-lg transition-transform sm:flex-row sm:p-8">
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

        <Button className="mt-4" size="sm" variant="outline">
          View Project <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="mb-4 flex-1 sm:mb-0">
        <Image
          src={projectImage}
          alt="Project"
          width={500}
          height={400}
          className="-right-36 top-12 rounded-lg transition-transform sm:absolute sm:hover:rotate-6 sm:hover:scale-105 lg:-right-14"
        />
      </div>
    </div>
  )
}
