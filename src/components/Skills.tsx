import { useMemo, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa6'
import { SECTION_TEXT, type SkillGroup } from '../data/portfolio'
import { getTechIcon } from '../lib/techIcons'
import { BlurFade } from './ui/BlurFade'
import { DetailDialog, type DetailDialogContent } from './ui/DetailDialog'
import { SectionHeader } from './ui/SectionHeader'
import { Tag } from './ui/Tag'
import { IconCloud } from './ui/icon-cloud'

const iconLabels = [
  'Python',
  'FastAPI',
  'Flask',
  'OpenAI',
  'LangChain',
  'RAG',
  'Eval Loops',
  'Salesforce',
  'Agentforce',
  'Prompt Builder',
  'Flow Builder',
  'Service Cloud',
  'Docker',
  'MongoDB',
  'GitHub Actions',
  'REST APIs',
]
const iconColors = ['#4CC9F0', '#FF6B5F', '#F4C95D', '#47D18C', '#8EA2FF', '#FF7AAE']
const workflowSteps = [
  'Frame the workflow',
  'Build retrieval and APIs',
  'Evaluate model outputs',
  'Ship and improve',
]

interface SkillsProps {
  skills: SkillGroup[]
}

function getWorkflowDetail(step: string, index: number): DetailDialogContent {
  return {
    eyebrow: `Workflow step ${String(index + 1).padStart(2, '0')}`,
    title: step,
    description: 'A compact delivery loop used to move from problem framing into shipped systems.',
    tone: index % 2 === 0 ? 'cyan' : 'accent',
    sections: [
      { title: 'Purpose', body: step },
      { title: 'Portfolio meaning', body: 'This step connects the skill list to actual delivery: clarify the workflow, choose the right stack, build the integration, wire platform behavior, then observe and improve.' },
    ],
  }
}

export default function Skills({ skills }: SkillsProps) {
  const [detail, setDetail] = useState<DetailDialogContent | null>(null)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const cloudIcons = useMemo(
    () =>
      iconLabels.map((label, index) => {
        const Icon = getTechIcon(label)

        return <Icon key={label} aria-label={label} color={iconColors[index % iconColors.length]} size={100} />
      }),
    [],
  )

  return (
    <section id="skills" className="section-shell px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label={SECTION_TEXT.skills.label}
          title={SECTION_TEXT.skills.title}
          subtitle={SECTION_TEXT.skills.subtitle}
        />
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.92fr)]">
          <div className="grid gap-3 sm:grid-cols-2">
            {skills.map((group, index) => {
              const expanded = expandedCategory === group.category
              const contentId = `skill-${group.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

              return (
                <BlurFade key={group.category} delay={0.06 * index}>
                  <article className="h-full overflow-hidden rounded-xl border border-border-dim/80 bg-card/45 transition hover:border-accent/40">
                    <button
                      type="button"
                      aria-expanded={expanded}
                      aria-controls={contentId}
                      onClick={() => setExpandedCategory(expanded ? null : group.category)}
                      className="flex w-full items-start justify-between gap-4 p-4 text-left outline-none"
                    >
                      <span>
                        <span className="block font-mono text-xs uppercase tracking-[0.16em] text-accent">{group.category}</span>
                        <span className="mt-2 block text-xs text-muted">
                          {group.skills.slice(0, 3).join(' · ')}
                          {group.skills.length > 3 ? ` · +${group.skills.length - 3}` : ''}
                        </span>
                      </span>
                      <span className="flex shrink-0 items-center gap-2 rounded-full border border-border-dim bg-bg/45 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted">
                        {expanded ? 'Close' : 'Explore'}
                        <FaChevronDown className={`transition-transform ${expanded ? 'rotate-180' : ''}`} aria-hidden="true" />
                      </span>
                    </button>
                  <div
                    id={contentId}
                    aria-hidden={!expanded}
                    inert={!expanded}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ${expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <div className="overflow-hidden">
                        <div className="flex flex-wrap gap-1.5 border-t border-border-dim px-4 py-4">
                          {group.skills.map((skill) => (
                            <Tag key={skill} label={skill} compact />
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                </BlurFade>
              )
            })}
          </div>
          <div className="relative min-h-[34rem] overflow-hidden">
            <div className="pointer-events-none absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
            <div className="pointer-events-none absolute inset-y-12 left-1/2 w-px bg-gradient-to-b from-transparent via-border-dim to-transparent" />
            <div className="relative flex min-h-[25rem] items-center justify-center">
              <IconCloud icons={cloudIcons} />
            </div>
            <div className="mt-2 grid gap-2">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-amber">How it works</p>
              <div className="grid gap-2">
                {workflowSteps.map((step, index) => (
                  <button
                    type="button"
                    key={step}
                    onClick={() => setDetail(getWorkflowDetail(step, index))}
                    className="flex items-center gap-3 rounded-full border border-border-dim/80 bg-bg/45 px-3 py-2 text-left font-mono text-xs text-muted outline-none transition hover:border-accent/40 hover:text-text"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cyan/40 text-[0.65rem] text-cyan">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="min-w-0">{step}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {detail ? <DetailDialog content={detail} onClose={() => setDetail(null)} /> : null}
    </section>
  )
}
