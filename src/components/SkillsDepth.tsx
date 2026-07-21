import { useMemo, useState, type CSSProperties } from 'react'
import { FaArrowLeft, FaBrain, FaCloud, FaDatabase, FaPlay, FaSalesforce, FaUserTie } from 'react-icons/fa6'
import {
  AI_BACKEND_RANGE,
  CERTIFICATIONS,
  PERSONAL,
  SALESFORCE_FOCUS,
  SECTION_TEXT,
  SKILL_DEPTH,
  type RangeItem,
  type SkillDepthItem,
} from '../data/portfolio'
import { DetailDialog, type DetailDialogContent } from './ui/DetailDialog'
import { SectionHeader } from './ui/SectionHeader'
import { Tag } from './ui/Tag'
import { AnimatedList } from './ui/animated-list'
import { BentoGrid } from './ui/bento-grid'
import { BlurFade } from './ui/BlurFade'
import { Marquee } from './ui/marquee'
import { useActiveRole } from '../context/RoleContext'
import { filterByRole } from '../lib/roleSort'

type DepthGroupId = 'all' | 'ai' | 'backend' | 'salesforce' | 'leadership'

const toneClasses = {
  cyan: 'border-cyan/35 bg-cyan/10 text-cyan',
  accent: 'border-accent/35 bg-accent/10 text-accent-h',
  emerald: 'border-emerald/35 bg-emerald/10 text-emerald',
  amber: 'border-amber/35 bg-amber/10 text-amber',
  rose: 'border-rose/35 bg-rose/10 text-rose',
  violet: 'border-violet/35 bg-violet/10 text-violet',
} as const

const groupStyles = {
  all: 'border-text/30 bg-text/10 text-text',
  ai: 'border-violet/40 bg-violet/10 text-violet',
  backend: 'border-cyan/40 bg-cyan/10 text-cyan',
  salesforce: 'border-emerald/40 bg-emerald/10 text-emerald',
  leadership: 'border-rose/40 bg-rose/10 text-rose',
} as const

const DEPTH_GROUPS: Array<{
  id: DepthGroupId
  label: string
  icon: typeof FaBrain
  summary: string
}> = [
  { id: 'all', label: 'All Depth', icon: FaDatabase, summary: 'Full technical range' },
  { id: 'ai', label: 'AI Systems', icon: FaBrain, summary: 'RAG, agents, evals' },
  { id: 'backend', label: 'Backend / DevOps', icon: FaCloud, summary: 'APIs, infra, cost' },
  { id: 'salesforce', label: 'Salesforce', icon: FaSalesforce, summary: 'Service Cloud + Agentforce' },
  { id: 'leadership', label: 'Leadership', icon: FaUserTie, summary: 'Docs, mentoring, impact' },
]

const MEDIA_SLOTS = [
  {
    title: 'AI project demos',
    detail: 'Best for 20-40 sec clips of RAG evaluation, agent routing, cost dashboards, or API workflows.',
    target: 'Projects',
  },
  {
    title: 'Production evidence',
    detail: 'Best for anonymized Grafana/Loki dashboards, log traces, architecture diagrams, and incident notes.',
    target: 'Experience',
  },
  {
    title: 'Salesforce proof',
    detail: 'Best for Trailhead badges, Agentforce prompt/action screenshots, Flow diagrams, and Service Cloud case paths.',
    target: 'Salesforce',
  },
  {
    title: 'Professional identity',
    detail: 'Best for the profile portrait, recruiter context, and a more human About section.',
    target: 'About',
  },
]

const PROOF_TILES = [
  {
    label: 'System range',
    value: 'E2E',
    detail: 'AI workflows, APIs, data, integrations, reliability, and delivery.',
    tone: 'text-cyan border-cyan/30 bg-cyan/10',
  },
  {
    label: 'Evaluation loop',
    value: 'RAGAS',
    detail: 'retrieval quality, faithfulness, coherence, and answer relevance checks.',
    tone: 'text-emerald border-emerald/30 bg-emerald/10',
  },
  {
    label: 'Agent systems',
    value: 'LangGraph',
    detail: 'multi-agent routing, capability comparison, and cost-aware design.',
    tone: 'text-violet border-violet/30 bg-violet/10',
  },
  {
    label: 'Cost control',
    value: 'FinOps',
    detail: 'AWS and LLM vendor cost aggregation with approval workflow patterns.',
    tone: 'text-amber border-amber/30 bg-amber/10',
  },
]

const LIVE_SIGNALS = [
  { label: 'RAG diagnostics', detail: 'Scoring normalization, reranking thresholds, chunk hierarchy.' },
  { label: 'Observability', detail: 'Loki, Grafana, traces, structured logs, failure visibility.' },
  { label: 'Salesforce AI', detail: 'Agentforce prompts, action patterns, Service Cloud workflow context.' },
  { label: 'Backend reliability', detail: 'Rate limits, retries, validation, migrations, workers.' },
  { label: 'Leadership', detail: 'Mentoring, documentation, reviews, and stakeholder explanation.' },
]

const MARQUEE_SKILLS = [
  'LangGraph',
  'CrewAI',
  'RAGAS',
  'LangSmith',
  'Hybrid Search',
  'Pinecone',
  'Loki',
  'Grafana',
  'Redis',
  'FastAPI',
  'Agentforce',
  'Service Cloud',
  'Apex',
  'FinOps',
]

const firstSkillRow = MARQUEE_SKILLS.slice(0, Math.ceil(MARQUEE_SKILLS.length / 2))
const secondSkillRow = MARQUEE_SKILLS.slice(Math.ceil(MARQUEE_SKILLS.length / 2))

const getDepthGroup = (category: string): Exclude<DepthGroupId, 'all'> => {
  if (category.includes('Salesforce') || category.includes('Agentforce')) return 'salesforce'
  if (
    category.includes('Technical Writing') ||
    category.includes('Problem-Solving') ||
    category.includes('Mentoring') ||
    category.includes('Quantifiable') ||
    category.includes('Tooling')
  ) {
    return 'leadership'
  }
  if (
    category.includes('Infrastructure') ||
    category.includes('Cloud') ||
    category.includes('API') ||
    category.includes('Database') ||
    category.includes('Async') ||
    category.includes('Data & Security') ||
    category.includes('FinOps')
  ) {
    return 'backend'
  }
  return 'ai'
}

function getSkillDepthDetail(item: SkillDepthItem): DetailDialogContent {
  return {
    eyebrow: item.category,
    title: item.interviewTest,
    description: 'Readable depth for interview-style conversations and proof-backed technical discussion.',
    tone: item.tone,
    sections: [{ title: 'Readable depth', items: item.points }],
    tags: [item.category],
  }
}

function getRangeDetail(title: string, item: RangeItem, tone: 'cyan' | 'emerald'): DetailDialogContent {
  return {
    eyebrow: title,
    title: item.title,
    description: item.detail,
    tone,
    sections: [
      { title: 'Focus area', body: item.detail },
      { title: 'Where it appears', body: 'This connects the Skills Depth page to portfolio proof across projects, Salesforce, backend, and experience sections.' },
    ],
    tags: item.tags,
  }
}

function RangeStrip({
  title,
  items,
  tone,
  onOpen,
}: {
  title: string
  items: typeof SALESFORCE_FOCUS
  tone: 'cyan' | 'emerald'
  onOpen: (content: DetailDialogContent) => void
}) {
  const textClass = tone === 'cyan' ? 'text-cyan' : 'text-emerald'

  return (
    <div className="rounded-[1.2rem] border border-border-dim bg-bg/35 p-4">
      <p className={`font-mono text-[0.65rem] uppercase tracking-[0.18em] ${textClass}`}>{title}</p>
      <div className="mt-4 grid gap-3">
        {items.map((item) => (
          <button key={item.title} type="button" onClick={() => onOpen(getRangeDetail(title, item, tone))} className="border-l border-border pl-4 text-left outline-none transition hover:border-accent">
            <h3 className="text-sm font-black leading-tight text-text">{item.title}</h3>
            <p className="mt-2 text-xs leading-5 text-muted">{item.detail}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tags.slice(0, 4).map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

function DepthCard({
  item,
  onOpen,
}: {
  item: SkillDepthItem
  onOpen: () => void
}) {
  const visiblePoints = item.points.slice(0, 2)

  return (
    <button
      type="button"
      onClick={onOpen}
      className="depth-card group relative flex h-full min-h-[18rem] overflow-hidden rounded-[1.35rem] border border-border/80 bg-card/65 p-5 text-left shadow-xl shadow-bg/25 outline-none"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,color-mix(in_srgb,var(--color-accent)_18%,transparent),transparent_34%)] opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
      <div className="depth-card-summary relative z-10 flex min-h-full w-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <p className={`w-fit rounded-full border px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] ${toneClasses[item.tone]}`}>
            {item.category}
          </p>
          <span className="rounded-full border border-border-dim bg-bg/45 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-dim">
            Open
          </span>
        </div>

        <h3 className="mt-5 text-lg font-black leading-tight text-text">{item.interviewTest}</h3>

        <ul className="mt-5 grid gap-2.5">
          {visiblePoints.map((point) => (
            <li key={point} className="flex gap-2 text-sm leading-6 text-muted">
              <span className="mt-0.5 shrink-0 font-mono text-accent">›</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <p className="mt-auto pt-4 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-accent">+ deeper notes</p>
      </div>
    </button>
  )
}

export default function SkillsDepth() {
  const [activeGroup, setActiveGroup] = useState<DepthGroupId>('all')
  const [detail, setDetail] = useState<DetailDialogContent | null>(null)
  const { activeRole } = useActiveRole()

  const visibleSkills = useMemo(
    () =>
      filterByRole(
        SKILL_DEPTH.filter((item) => activeGroup === 'all' || getDepthGroup(item.category) === activeGroup),
        activeRole,
      ),
    [activeGroup, activeRole],
  )

  const activeGroupData = DEPTH_GROUPS.find((group) => group.id === activeGroup) ?? DEPTH_GROUPS[0]

  return (
    <section id="skills-depth" className="section-shell px-6 py-24 pt-32">
      <div className="relative mx-auto max-w-6xl">
        <a
          href="#skills"
          className="lift-card-subtle mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/65 px-4 py-2 text-sm font-black text-text transition hover:border-accent/45 hover:text-accent"
        >
          <FaArrowLeft aria-hidden="true" />
          Back to portfolio
        </a>

        <SectionHeader
          label={SECTION_TEXT.skillsDepth.label}
          title={SECTION_TEXT.skillsDepth.title}
          subtitle={SECTION_TEXT.skillsDepth.subtitle}
        />

        <BlurFade inView duration={0.28} blur="4px" offset={6}>
          <div className="mb-6 overflow-hidden rounded-[1.6rem] border border-border bg-card/60 shadow-2xl shadow-bg/35">
          <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_19rem]">
            <div className="p-5 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-3 rounded-full border border-accent/35 bg-accent/10 px-4 py-2 text-accent">
                    <FaBrain aria-hidden="true" />
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.18em]">Depth Navigator</span>
                  </div>
                  <h3 className="mt-5 max-w-2xl text-2xl font-black leading-tight text-text sm:text-3xl">
                    Role lanes with expandable proof points.
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
                    Skills are grouped like interview tracks, so the page moves from broad positioning into specific evidence without reading like a report.
                  </p>
                </div>
                <div className="rounded-2xl border border-border-dim bg-bg/45 px-4 py-3 text-right">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-dim">Active view</p>
                  <p className="mt-1 text-lg font-black text-text">{activeGroupData.label}</p>
                  <p className="text-xs text-muted">{activeGroupData.summary}</p>
                </div>
              </div>

              <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
                {DEPTH_GROUPS.map((group) => {
                  const Icon = group.icon
                  const active = activeGroup === group.id

                  return (
                    <button
                      key={group.id}
                      type="button"
                      onClick={() => {
                        setActiveGroup(group.id)
                      }}
                      className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-black transition ${
                        active ? groupStyles[group.id] : 'border-border-dim bg-bg/35 text-muted hover:border-text/40 hover:text-text'
                      }`}
                    >
                      <Icon aria-hidden="true" />
                      {group.label}
                    </button>
                  )
                })}
              </div>

              <div className="relative mt-5 overflow-hidden rounded-[1.15rem] border border-border-dim bg-bg/35 py-2">
                <Marquee pauseOnHover className="[--duration:42s]" repeat={3}>
                  {firstSkillRow.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border-dim bg-card/60 px-3 py-1.5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="mt-2 [--duration:46s]" repeat={3}>
                  {secondSkillRow.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border-dim bg-card/60 px-3 py-1.5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bg to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bg to-transparent" />
              </div>
            </div>

            <div className="relative min-h-72 border-t border-border-dim lg:border-l lg:border-t-0">
              <img src={PERSONAL.profileImageUrl} alt="Goutham Reddy S" className="h-full min-h-72 w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg via-bg/70 to-transparent p-5">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-accent">Profile signal</p>
                <p className="mt-2 text-sm font-bold leading-5 text-text">A familiar portrait for About, recruiter context, and experience storytelling.</p>
              </div>
            </div>
          </div>
          </div>
        </BlurFade>

        <BlurFade inView duration={0.28} blur="4px" offset={6}>
          <BentoGrid className="mb-6 grid-cols-1 auto-rows-fr gap-4 md:grid-cols-2 xl:grid-cols-4">
            {PROOF_TILES.map((tile) => (
              <button
                type="button"
                key={tile.label}
                onClick={() =>
                  setDetail({
                    eyebrow: tile.label,
                    title: tile.value,
                    description: tile.detail,
                    tone: tile.label.includes('Cost') ? 'amber' : tile.label.includes('Agent') ? 'violet' : tile.label.includes('Evaluation') ? 'emerald' : 'cyan',
                    sections: [{ title: 'Proof context', body: tile.detail }],
                  })
                }
                className="glass-card min-h-44 rounded-[1.25rem] border border-border/80 p-5 text-left shadow-xl shadow-bg/20 outline-none"
              >
                <p className={`w-fit rounded-full border px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] ${tile.tone}`}>{tile.label}</p>
                <p className="mt-5 text-3xl font-black leading-none text-text">{tile.value}</p>
                <p className="mt-3 text-sm leading-6 text-muted">{tile.detail}</p>
              </button>
            ))}
          </BentoGrid>
        </BlurFade>

        <BlurFade inView duration={0.28} blur="4px" offset={6}>
          <div className="mb-6 grid gap-5 lg:grid-cols-2">
            <RangeStrip title="Salesforce focus" items={SALESFORCE_FOCUS} tone="cyan" onOpen={setDetail} />
            <RangeStrip title="AI + backend range" items={AI_BACKEND_RANGE} tone="emerald" onOpen={setDetail} />
          </div>
        </BlurFade>

        <BlurFade inView duration={0.28} blur="4px" offset={6} className="mb-6 grid gap-5 lg:grid-cols-[minmax(0,1fr)_21rem]">
          <BentoGrid className="depth-bento-grid grid-cols-1 auto-rows-[18rem] gap-4 md:grid-cols-2 xl:grid-cols-3">
            {visibleSkills.map((item, index) => (
              <div key={item.category} className="depth-card-enter h-full" style={{ '--depth-card-delay': `${Math.min(index, 5) * 32}ms` } as CSSProperties}>
                <DepthCard
                  item={item}
                  onOpen={() => setDetail(getSkillDepthDetail(item))}
                />
              </div>
            ))}
          </BentoGrid>

          <aside className="space-y-5">
            <div className="rounded-[1.3rem] border border-cyan/30 bg-bg/50 p-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">Live signals</p>
              <AnimatedList className="mt-4" delay={90}>
                {LIVE_SIGNALS.map((signal) => (
                  <button
                    type="button"
                    key={signal.label}
                    onClick={() =>
                      setDetail({
                        eyebrow: 'Live signal',
                        title: signal.label,
                        description: signal.detail,
                        tone: 'cyan',
                        sections: [{ title: 'Operational meaning', body: signal.detail }],
                      })
                    }
                    className="rounded-2xl border border-border-dim bg-card/45 p-4 text-left outline-none transition hover:border-accent/45"
                  >
                    <p className="text-sm font-black text-text">{signal.label}</p>
                    <p className="mt-1 text-xs leading-5 text-muted">{signal.detail}</p>
                  </button>
                ))}
              </AnimatedList>
            </div>

            <div className="rounded-[1.3rem] border border-amber/30 bg-bg/50 p-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-amber">Certifications & achievements</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {CERTIFICATIONS.map((certification) => (
                  <span
                    key={certification}
                    className="rounded-full border border-border-dim bg-card/50 px-3 py-1.5 font-mono text-xs font-semibold text-muted"
                  >
                    {certification}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[1.3rem] border border-border bg-card/55 p-5">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full border border-accent/35 bg-accent/10 text-accent">
                  <FaPlay aria-hidden="true" />
                </span>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Proof map</p>
                  <h3 className="text-lg font-black text-text">Best visual moments</h3>
                </div>
              </div>
              <div className="mt-5 grid gap-3">
                {MEDIA_SLOTS.map((slot) => (
                  <a
                    key={slot.title}
                    href={`#${slot.target.toLowerCase()}`}
                    className="block rounded-2xl border border-border-dim bg-bg/35 p-4 transition hover:border-accent/45 hover:bg-accent/10"
                  >
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-dim">{slot.target}</span>
                    <span className="mt-1 block text-sm font-black text-text">{slot.title}</span>
                    <span className="mt-2 block text-xs leading-5 text-muted">{slot.detail}</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </BlurFade>

        {detail ? <DetailDialog content={detail} onClose={() => setDetail(null)} /> : null}
      </div>
    </section>
  )
}
