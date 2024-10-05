import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-3xl flex-col justify-between gap-4 px-4 py-6 lg:flex-row lg:items-center">
        <p className="text-sm">© 2024 Miguel Oliveira Bizzi </p>

        <div className="flex items-center gap-4">
          <a href="https://github.com/MiguelBizzi" target="_blank">
            <Github className="size-4 lg:size-5" />
          </a>

          <a href="https://www.linkedin.com/in/miguelbizzi/" target="_blank">
            <Linkedin className="size-4 lg:size-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
