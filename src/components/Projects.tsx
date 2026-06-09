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
        <SectionHeader
          label={SECTION_TEXT.projects.label}
          title={SECTION_TEXT.projects.title}
          subtitle={SECTION_TEXT.projects.subtitle}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group flex min-h-[320px] flex-col overflow-hidden rounded-[1.7rem] border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent ${
                index === 0 ? 'sm:col-span-2 lg:col-span-2 lg:min-h-[380px]' : ''
              }`}
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 font-mono text-sm font-semibold text-accent-h ring-1 ring-accent/20">
                    {project.icon}
                  </div>
                  {project.featured ? (
                    <span className="rounded-full border border-violet/30 bg-violet/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] text-violet">
                      {ACTION_LABELS.caseStudy}
                    </span>
                  ) : null}
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
              <h3 className="mb-3 text-2xl font-black leading-tight text-text">{project.title}</h3>
              <p className="mb-6 flex-1 text-sm leading-7 text-muted sm:text-base">{project.description}</p>
              <div className="mb-6 grid gap-3 sm:grid-cols-3">
                {project.tags.slice(0, 3).map((tag) => (
                  <div key={`${project.title}-${tag}`} className="rounded-2xl border border-border-dim bg-bg/50 p-4">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-dim">signal</p>
                    <p className="mt-1 text-sm font-semibold text-text">{tag}</p>
                  </div>
                ))}
              </div>
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
