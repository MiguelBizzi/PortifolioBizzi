import Image from 'next/image'
import { Badge } from '../ui/badge'
// import { Button } from '../ui/button'
// import { ArrowRight } from 'lucide-react'
import type { Project } from '@/lib/types/project'
// import { useTranslations } from 'next-intl'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  // const t = useTranslations('Projects')

  return (
    <div className="group relative flex flex-col-reverse overflow-hidden rounded-lg border p-6 shadow-lg transition-transform hover:bg-gray-50 hover:dark:bg-white/5 lg:flex-row lg:p-8">
      {/* <div className="group relative flex flex-col-reverse overflow-hidden rounded-lg border p-6 shadow-lg transition-transform hover:bg-gray-50 hover:dark:bg-white/5 lg:flex-row lg:p-8 lg:even:flex-row-reverse"> */}
      <div className="flex-1">
        <h1 className="text-xl font-bold">{project.title}</h1>
        <p className="mt-1 text-sm dark:text-white/60">{project.description}</p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {project.stack.map((tech, index) => (
            <Badge key={index}>{tech}</Badge>
          ))}
        </div>

        {/* <div className="flex justify-end lg:justify-start">
          <Button className="mt-4" size="sm" variant="outline">
            {t('see_project_button')} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div> */}
      </div>

      <div className="mb-4 flex-1 lg:mb-0">
        <Image
          src={project.image}
          alt="Project"
          width={500}
          height={400}
          // className="top-12 rounded-lg transition-all group-odd:-right-36 group-even:-left-36 max-lg:w-full lg:absolute lg:group-odd:-right-24 group-even:lg:-left-28 lg:group-hover:scale-105 lg:group-odd:group-hover:-rotate-3 lg:group-even:group-hover:rotate-3"
          className="-right-36 top-12 rounded-lg transition-all max-lg:w-full lg:absolute lg:-right-24 lg:group-hover:-rotate-3 lg:group-hover:scale-105"
        />
      </div>
    </div>
  )
}
