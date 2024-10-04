import ProjectCard from './project-card'

export default function ProjectsSection() {
  return (
    <div id="projects" className="mb-32 px-4">
      <div className="mx-auto max-w-lg text-center">
        <div className="flex justify-center">
          <p className="bg-gradient-to-r from-blue-500 to-violet-400 bg-clip-text font-semibold uppercase tracking-widest text-transparent">
            Real world results
          </p>
        </div>
        <h2 className="mt-4 text-3xl font-bold">Featured Projects</h2>
        <p className="mt-2 dark:text-white/60">
          See how I helped businesses like yours grow their online presence and increase revenue.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-4xl space-y-8 sm:mt-20">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}