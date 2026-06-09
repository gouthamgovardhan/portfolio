import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'
import { ACTION_LABELS, SECTION_TEXT, type ProjectItem } from '../data/portfolio'
import { SectionHeader } from './ui/SectionHeader'
import { Tag } from './ui/Tag'

interface ProjectsProps {
  projects: ProjectItem[]
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="bg-surface px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader label={SECTION_TEXT.projects.label} title={SECTION_TEXT.projects.title} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex min-h-[320px] flex-col overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-accent"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 font-mono text-sm font-semibold text-accent-h">
                  {project.icon}
                </div>
                <div className="flex gap-3 text-muted">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      aria-label={ACTION_LABELS.githubProject}
                      className="transition-colors hover:text-accent-h"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub aria-hidden="true" />
                    </a>
                  ) : null}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      aria-label={ACTION_LABELS.liveProject}
                      className="transition-colors hover:text-accent-h"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaArrowUpRightFromSquare aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </div>
              <h3 className="mb-3 text-lg font-bold text-text">{project.title}</h3>
              <p className="mb-5 flex-1 text-sm leading-6 text-muted">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
