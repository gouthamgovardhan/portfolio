import { useState, type CSSProperties } from 'react'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { ACTION_LABELS, SECTION_TEXT, type ProjectItem } from '../data/portfolio'
import { SectionHeader } from './ui/SectionHeader'
import { Tag } from './ui/Tag'
import { DetailDialog, type DetailDialogAction, type DetailDialogContent } from './ui/DetailDialog'
import { BentoGrid } from './ui/bento-grid'
import { ProjectShowcase } from './ProjectShowcase'

interface ProjectsProps {
  projects: ProjectItem[]
}

const accentStyles = {
  violet: {
    color: 'var(--color-violet)',
    bar: 'from-violet/80 via-violet/30 to-transparent',
    ring: 'group-hover/card:border-violet/50 group-hover/card:shadow-violet/10',
    icon: 'bg-violet/15 text-violet ring-violet/25',
    chip: 'border-violet/35 bg-violet/10 text-violet',
    step: 'border-violet/25 bg-violet/5',
    glow: 'bg-violet/20',
  },
  cyan: {
    color: 'var(--color-cyan)',
    bar: 'from-cyan/80 via-cyan/30 to-transparent',
    ring: 'group-hover/card:border-cyan/50 group-hover/card:shadow-cyan/10',
    icon: 'bg-cyan/15 text-cyan ring-cyan/25',
    chip: 'border-cyan/35 bg-cyan/10 text-cyan',
    step: 'border-cyan/25 bg-cyan/5',
    glow: 'bg-cyan/20',
  },
  emerald: {
    color: 'var(--color-emerald)',
    bar: 'from-emerald/80 via-emerald/30 to-transparent',
    ring: 'group-hover/card:border-emerald/50 group-hover/card:shadow-emerald/10',
    icon: 'bg-emerald/15 text-emerald ring-emerald/25',
    chip: 'border-emerald/35 bg-emerald/10 text-emerald',
    step: 'border-emerald/25 bg-emerald/5',
    glow: 'bg-emerald/20',
  },
  amber: {
    color: 'var(--color-amber)',
    bar: 'from-amber/80 via-amber/30 to-transparent',
    ring: 'group-hover/card:border-amber/50 group-hover/card:shadow-amber/10',
    icon: 'bg-amber/15 text-amber ring-amber/25',
    chip: 'border-amber/35 bg-amber/10 text-amber',
    step: 'border-amber/25 bg-amber/5',
    glow: 'bg-amber/20',
  },
  rose: {
    color: 'var(--color-rose)',
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
  const cardStyle = { '--project-accent': style.color } as CSSProperties

  return (
    <button
      type="button"
      onClick={onOpen}
      className="project-bento-card group/card relative flex h-[36rem] flex-col overflow-hidden rounded-[1.45rem] border border-border/80 bg-card/65 text-left shadow-xl shadow-bg/25 outline-none"
      style={cardStyle}
    >
      <div className={`h-1.5 w-full bg-gradient-to-r ${style.bar}`} />

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

        {project.showcase ? (
          <div className="project-showcase-frame relative mb-5 overflow-hidden rounded-[1rem] border border-border-dim bg-bg/75">
            <ProjectShowcase project={project} />
            <span className="absolute bottom-2 right-2 rounded-full border border-cyan/25 bg-bg/75 px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-cyan">
              Live map
            </span>
          </div>
        ) : null}

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

function getProjectDetail(project: ProjectItem): DetailDialogContent {
  const style = accentStyles[project.accent]
  const actionCandidates: (DetailDialogAction | null)[] = [
    project.githubUrl ? { label: 'GitHub', href: project.githubUrl, external: true, tone: project.accent } : null,
    project.liveUrl ? { label: 'Live', href: project.liveUrl, external: true, tone: project.accent } : null,
    project.proofUrl
      ? {
          label: project.proofLinkLabel ?? ACTION_LABELS.viewProof,
          href: project.proofUrl,
          external: project.proofUrl.startsWith('http'),
          tone: 'violet',
        }
      : null,
  ]
  const actions = actionCandidates.filter((action): action is DetailDialogAction => action !== null)

  return {
    eyebrow: project.category,
    title: project.title,
    description: project.description,
    media: project.showcase ? (
      <div className="project-showcase-stage relative h-full overflow-hidden bg-bg">
        <ProjectShowcase project={project} interactive />
      </div>
    ) : undefined,
    tone: project.accent,
    sections: [
      project.disclaimer ? { title: 'Private Work Note', body: project.disclaimer } : null,
      { title: 'Outcome', body: project.outcome },
      { title: 'Highlights', items: project.highlights },
    ].filter((section): section is NonNullable<typeof section> => Boolean(section)),
    tags: project.tags,
    actions,
    aside: (
      <>
        <div className="rounded-[1rem] border border-border-dim bg-card/45 p-5">
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
        <div className="rounded-[1rem] border border-border-dim bg-card/45 p-5">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-dim">Proof status</p>
          <p className="mt-3 text-sm font-bold leading-6 text-text">{project.proofStatus}</p>
          {project.featured ? <p className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-amber">{ACTION_LABELS.caseStudy}</p> : null}
        </div>
      </>
    ),
  }
}

export default function Projects({ projects }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)

  return (
    <section id="projects" className="section-shell px-6 py-24">
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          label={SECTION_TEXT.projects.label}
          title={SECTION_TEXT.projects.title}
          subtitle={SECTION_TEXT.projects.subtitle}
        />

        <BentoGrid className="grid-cols-1 auto-rows-auto gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </BentoGrid>
      </div>
      {selectedProject ? <DetailDialog content={getProjectDetail(selectedProject)} onClose={() => setSelectedProject(null)} /> : null}
    </section>
  )
}
