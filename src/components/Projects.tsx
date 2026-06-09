import { FaArrowRight, FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'
import { ACTION_LABELS, SECTION_TEXT, type ProjectItem } from '../data/portfolio'
import { SectionHeader } from './ui/SectionHeader'
import { Tag } from './ui/Tag'

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

function ProjectCard({ project }: { project: ProjectItem }) {
  const style = accentStyles[project.accent]

  return (
    <article
      className={`group/card glass-card relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border/80 shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl ${style.ring}`}
    >
      <div className={`h-1.5 w-full bg-gradient-to-r ${style.bar}`} />
      <div className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl ${style.glow} opacity-0 transition-opacity duration-500 group-hover/card:opacity-100`} />

      <div className="relative flex flex-1 flex-col p-6 sm:p-7">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-start gap-4">
            <div
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl font-mono text-sm font-bold ring-1 ${style.icon}`}
            >
              {project.icon}
            </div>
            <div className="min-w-0">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className={`rounded-full border px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.16em] ${style.chip}`}>
                  {project.category}
                </span>
                {project.featured ? (
                  <span className="rounded-full border border-amber/35 bg-amber/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-amber">
                    {ACTION_LABELS.caseStudy}
                  </span>
                ) : null}
                <span className="rounded-full border border-border-dim bg-bg/60 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-muted">
                  {project.proofStatus}
                </span>
              </div>
              <h3 className="text-2xl font-black leading-tight text-text sm:text-[1.65rem]">{project.title}</h3>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-3 text-lg text-muted">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                aria-label={ACTION_LABELS.githubProject}
                className="rounded-lg p-2 transition-colors hover:bg-bg hover:text-accent-h"
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
                className="rounded-lg p-2 transition-colors hover:bg-bg hover:text-accent-h"
                target="_blank"
                rel="noreferrer"
              >
                <FaArrowUpRightFromSquare aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>

        <p className="mb-4 text-sm leading-7 text-muted sm:text-base">{project.description}</p>

        {project.highlights.length > 0 ? (
          <ul className="mb-4 space-y-2 rounded-2xl border border-border-dim bg-bg/35 p-4">
            {project.highlights.map((point) => (
              <li key={point} className="flex gap-2 text-sm leading-6 text-muted">
                <span className="mt-0.5 shrink-0 font-mono text-accent">›</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {project.disclaimer ? (
          <p className="mb-4 rounded-xl border border-rose/25 bg-rose/10 px-4 py-3 text-xs leading-6 text-rose">
            {project.disclaimer}
          </p>
        ) : null}

        <p className="mb-6 rounded-2xl border border-border-dim bg-bg/45 p-4 text-sm font-semibold leading-6 text-text">
          {project.outcome}
        </p>

        <div className="mb-6">
          <p className="mb-3 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-dim">{ACTION_LABELS.workflow}</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
            {project.architecture.map((step, index) => (
              <div key={`${project.title}-${step}`} className="flex items-center gap-2">
                <div className={`rounded-xl border px-3 py-2.5 text-xs font-semibold text-text ${style.step}`}>{step}</div>
                {index < project.architecture.length - 1 ? (
                  <FaArrowRight className="hidden shrink-0 text-dim sm:block" aria-hidden="true" />
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-4 border-t border-border-dim pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
          {project.proofUrl ? (
            <a
              href={project.proofUrl}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-violet transition-all hover:-translate-y-0.5 hover:border-violet hover:bg-violet/10"
              target={project.proofUrl.startsWith('http') ? '_blank' : undefined}
              rel={project.proofUrl.startsWith('http') ? 'noreferrer' : undefined}
            >
              {project.proofLinkLabel ?? ACTION_LABELS.viewProof}
              <FaArrowUpRightFromSquare aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}

export default function Projects({ projects }: ProjectsProps) {
  const featured = projects.filter((project) => project.featured)
  const other = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="section-shell px-6 py-24">
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          label={SECTION_TEXT.projects.label}
          title={SECTION_TEXT.projects.title}
          subtitle={SECTION_TEXT.projects.subtitle}
        />

        <div className="space-y-6">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}

          {other.length > 0 ? (
            <div className={`grid items-stretch gap-6 ${other.length > 1 ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
              {other.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
