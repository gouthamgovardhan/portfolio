import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { FaArrowUpRightFromSquare, FaGithub, FaXmark } from 'react-icons/fa6'
import { ACTION_LABELS, SECTION_TEXT, type ProjectItem } from '../data/portfolio'
import { SectionHeader } from './ui/SectionHeader'
import { Tag } from './ui/Tag'
import { BentoGrid } from './ui/bento-grid'

interface ProjectsProps {
  projects: ProjectItem[]
}

const accentStyles = {
  violet: {
    bar: 'from-violet/80 via-violet/30 to-transparent',
    ring: 'group-hover/card:border-violet/50 group-hover/card:shadow-violet/10',
    icon: 'bg-violet/15 text-violet ring-violet/25',
    chip: 'border-violet/35 bg-violet/10 text-violet',
    step: 'border-violet/25 bg-violet/5',
    glow: 'bg-violet/20',
  },
  cyan: {
    bar: 'from-cyan/80 via-cyan/30 to-transparent',
    ring: 'group-hover/card:border-cyan/50 group-hover/card:shadow-cyan/10',
    icon: 'bg-cyan/15 text-cyan ring-cyan/25',
    chip: 'border-cyan/35 bg-cyan/10 text-cyan',
    step: 'border-cyan/25 bg-cyan/5',
    glow: 'bg-cyan/20',
  },
  emerald: {
    bar: 'from-emerald/80 via-emerald/30 to-transparent',
    ring: 'group-hover/card:border-emerald/50 group-hover/card:shadow-emerald/10',
    icon: 'bg-emerald/15 text-emerald ring-emerald/25',
    chip: 'border-emerald/35 bg-emerald/10 text-emerald',
    step: 'border-emerald/25 bg-emerald/5',
    glow: 'bg-emerald/20',
  },
  amber: {
    bar: 'from-amber/80 via-amber/30 to-transparent',
    ring: 'group-hover/card:border-amber/50 group-hover/card:shadow-amber/10',
    icon: 'bg-amber/15 text-amber ring-amber/25',
    chip: 'border-amber/35 bg-amber/10 text-amber',
    step: 'border-amber/25 bg-amber/5',
    glow: 'bg-amber/20',
  },
  rose: {
    bar: 'from-rose/80 via-rose/30 to-transparent',
    ring: 'group-hover/card:border-rose/50 group-hover/card:shadow-rose/10',
    icon: 'bg-rose/15 text-rose ring-rose/25',
    chip: 'border-rose/35 bg-rose/10 text-rose',
    step: 'border-rose/25 bg-rose/5',
    glow: 'bg-rose/20',
  },
} as const

function ProjectCard({ project, onOpen }: { project: ProjectItem; onOpen: () => void }) {
  const style = accentStyles[project.accent]
  const previewHighlights = project.highlights.slice(0, 2)
  const previewTags = project.tags.slice(0, 3)

  return (
    <button
      type="button"
      onClick={onOpen}
      className="project-bento-card group/card relative flex h-full min-h-[20rem] flex-col overflow-hidden rounded-[1.45rem] border border-border/80 bg-card/65 text-left shadow-xl shadow-bg/25 outline-none"
    >
      <div className={`h-1.5 w-full bg-gradient-to-r ${style.bar}`} />
      <div className={`pointer-events-none absolute -right-14 -top-16 h-40 w-40 rotate-45 border ${style.step} opacity-60 transition duration-300 group-hover/card:scale-110`} />
      <div className={`pointer-events-none absolute -bottom-20 left-8 h-40 w-40 rounded-full blur-3xl ${style.glow} opacity-0 transition-opacity duration-500 group-hover/card:opacity-100`} />

      <div className="relative flex flex-1 flex-col p-6 sm:p-7">
        <div className="mb-5 flex items-start justify-between gap-3">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl font-mono text-sm font-bold ring-1 sm:h-14 sm:w-14 ${style.icon}`}
          >
            {project.icon}
          </div>

          <span className="rounded-full border border-border-dim bg-bg/60 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted">
            Open case
          </span>
        </div>

        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className={`rounded-full border px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.16em] ${style.chip}`}>
            {project.category}
          </span>
          {project.featured ? (
            <span className="rounded-full border border-amber/35 bg-amber/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-amber">
              {ACTION_LABELS.caseStudy}
            </span>
          ) : null}
        </div>

        <h3 className="text-xl font-black leading-tight text-text sm:text-2xl">{project.title}</h3>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted">{project.outcome}</p>

        <ul className="mt-5 grid gap-2">
          {previewHighlights.map((point) => (
            <li key={point} className="flex gap-2 text-sm leading-6 text-muted">
              <span className="mt-0.5 shrink-0 font-mono text-accent">›</span>
              <span className="line-clamp-1">{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto border-t border-border-dim pt-5">
          <div className="mb-4 flex flex-wrap gap-2">
            {previewTags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-dim">{project.proofStatus}</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-bold text-violet transition group-hover/card:border-violet/40 group-hover/card:bg-violet/10">
              Details
              <FaArrowUpRightFromSquare aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
    </button>
  )
}

function ProjectDialog({ project, onClose }: { project: ProjectItem; onClose: () => void }) {
  const style = accentStyles[project.accent]

  return createPortal(
    <div className="project-dialog-backdrop fixed inset-0 z-[999] grid place-items-center px-4 py-6" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" onMouseDown={onClose}>
      <article className="project-dialog-panel max-h-[84vh] w-full max-w-5xl overflow-hidden rounded-[1.6rem] border border-accent/45 shadow-2xl lg:w-[58vw]" onMouseDown={(event) => event.stopPropagation()}>
        <div className={`h-1.5 w-full bg-gradient-to-r ${style.bar}`} />
        <div className="flex items-start justify-between gap-5 border-b border-border-dim p-5 sm:p-6">
          <div className="min-w-0">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className={`rounded-full border px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.16em] ${style.chip}`}>
                {project.category}
              </span>
              <span className="rounded-full border border-border-dim bg-card/70 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted">
                {project.proofStatus}
              </span>
            </div>
            <h3 id="project-dialog-title" className="text-2xl font-black leading-tight text-text sm:text-3xl">{project.title}</h3>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">{project.description}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid size-10 shrink-0 place-items-center rounded-full border border-border-dim bg-card/70 text-muted transition hover:border-accent/55 hover:text-text"
            aria-label="Close project detail"
          >
            <FaXmark aria-hidden="true" />
          </button>
        </div>

        <div className="max-h-[62vh] overflow-y-auto p-5 sm:p-6">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_18rem]">
            <div className="grid gap-5">
              {project.disclaimer ? (
                <p className="rounded-2xl border border-rose/25 bg-rose/10 px-4 py-3 text-xs leading-6 text-rose">
                  {project.disclaimer}
                </p>
              ) : null}

              <div className="rounded-[1.2rem] border border-border-dim bg-card/45 p-5">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent">Outcome</p>
                <p className="mt-3 text-base font-bold leading-7 text-text">{project.outcome}</p>
              </div>

              <div className="rounded-[1.2rem] border border-border-dim bg-card/45 p-5">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent">Highlights</p>
                <ul className="mt-4 grid gap-3">
                  {project.highlights.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-6 text-muted">
                      <span className="mt-0.5 shrink-0 font-mono text-accent">›</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="grid content-start gap-5">
              <div className="rounded-[1.2rem] border border-border-dim bg-card/45 p-5">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-dim">{ACTION_LABELS.workflow}</p>
                <div className="mt-4 grid gap-2">
                  {project.architecture.map((step, index) => (
                    <div key={`${project.title}-${step}`} className={`flex min-h-10 items-center gap-2 rounded-xl border px-3 py-2 text-xs font-semibold leading-5 text-text ${style.step}`}>
                      <span className="font-mono text-[0.62rem] text-dim">{String(index + 1).padStart(2, '0')}</span>
                      <span className="min-w-0 break-words">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.2rem] border border-border-dim bg-card/45 p-5">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-dim">Stack</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>
              </div>

              <div className="grid gap-3">
                {project.githubUrl ? (
                  <a href={project.githubUrl} className="lift-card-subtle inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-bold text-text hover:bg-bg" target="_blank" rel="noreferrer">
                    <FaGithub aria-hidden="true" />
                    GitHub
                  </a>
                ) : null}
                {project.liveUrl ? (
                  <a href={project.liveUrl} className="lift-card-subtle inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-bold text-text hover:bg-bg" target="_blank" rel="noreferrer">
                    <FaArrowUpRightFromSquare aria-hidden="true" />
                    Live
                  </a>
                ) : null}
                {project.proofUrl ? (
                  <a href={project.proofUrl} className="lift-card-subtle inline-flex items-center justify-center gap-2 rounded-full border border-violet/35 px-4 py-2 text-sm font-bold text-violet hover:bg-violet/10" target={project.proofUrl.startsWith('http') ? '_blank' : undefined} rel={project.proofUrl.startsWith('http') ? 'noreferrer' : undefined}>
                    {project.proofLinkLabel ?? ACTION_LABELS.viewProof}
                    <FaArrowUpRightFromSquare aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </aside>
          </div>
        </div>
      </article>
    </div>,
    document.body,
  )
}

export default function Projects({ projects }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)

  useEffect(() => {
    if (!selectedProject) return undefined

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedProject(null)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedProject])

  return (
    <section id="projects" className="section-shell px-6 py-24">
      <div className="pointer-events-none absolute right-[8%] top-24 h-28 w-28 rotate-45 border border-violet/20" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-24 left-[6%] h-20 w-40 -rotate-6 border border-cyan/20" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          label={SECTION_TEXT.projects.label}
          title={SECTION_TEXT.projects.title}
          subtitle={SECTION_TEXT.projects.subtitle}
        />

        <BentoGrid className="grid-cols-1 auto-rows-[20rem] gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </BentoGrid>
      </div>
      {selectedProject ? <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} /> : null}
    </section>
  )
}
