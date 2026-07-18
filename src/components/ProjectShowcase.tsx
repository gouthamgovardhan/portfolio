import type { ProjectItem } from '../data/portfolio'
import { LiveConsole } from './LiveConsole'

interface ProjectShowcaseProps {
  project: Pick<ProjectItem, 'showcase' | 'liveConsoleConfig'>
  interactive?: boolean
}

export function ProjectShowcase({ project, interactive = false }: ProjectShowcaseProps) {
  if (!project.liveConsoleConfig) return null

  return <LiveConsole config={project.liveConsoleConfig} preview={!interactive} />
}
