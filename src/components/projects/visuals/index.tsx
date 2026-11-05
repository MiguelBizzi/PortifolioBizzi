import type { ProjectKey } from '@/lib/types/project'
import { PhewVisual } from './phew-visual'

export function ProjectVisual({ projectKey }: { projectKey: ProjectKey }) {
  switch (projectKey) {
    case 'phew':
      return <PhewVisual />
    default:
      return <div className="h-[380px]" />
  }
}
