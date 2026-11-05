import type { ProjectKey } from '@/lib/types/project'
import { WiggleVisual } from './wiggle-visual'
import { PhewVisual } from './phew-visual'
import { BizziDbVisual } from './bizzidb-visual'
import { SlTreinosVisual } from './sltreinos-visual'

export function ProjectVisual({ projectKey }: { projectKey: ProjectKey }) {
  switch (projectKey) {
    case 'wiggle':
      return <WiggleVisual />
    case 'phew':
      return <PhewVisual />
    case 'bizzidb':
      return <BizziDbVisual />
    case 'sltreinos':
      return <SlTreinosVisual />
  }
}
