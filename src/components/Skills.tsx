import { useMemo, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { SECTION_TEXT, TECH_EXPLANATIONS, type SkillGroup } from '../data/portfolio'
import { getTechIcon } from '../lib/techIcons'
import { BlurFade } from './ui/BlurFade'
import { DetailDialog, type DetailDialogContent, type DetailTone } from './ui/DetailDialog'
import { SectionHeader } from './ui/SectionHeader'
import { Tag } from './ui/Tag'
import { IconCloud } from './ui/icon-cloud'

const iconLabels = [
  'TypeScript',
  'JavaScript',
  'React',
  'Node.js',
  'Python',
  'FastAPI',
  'Flask',
  'OpenAI',
  'LangChain',
  'Ollama',
  'HuggingFace',
  'LLaMA',
  'RAG',
  'Vector Search',
  'Embeddings',
  'Eval Loops',
  'Salesforce',
  'Agentforce',
  'Flow Builder',
  'Service Cloud',
  'Docker',
  'AWS',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Redis',
  'GitHub Actions',
  'Linux',
  'REST APIs',
  'Tailwind CSS',
]
const iconColors = ['#4CC9F0', '#FF6B5F', '#F4C95D', '#47D18C', '#8EA2FF', '#FF7AAE']
const workflowSteps = [
  'Map the workflow',
  'Choose the stack',
  'Build the API',
  'Wire Salesforce',
  'Observe and improve',
]

interface SkillsProps {
  skills: SkillGroup[]
}

const skillTones: DetailTone[] = ['emerald', 'cyan', 'accent', 'amber', 'violet']

function getSkillDetail(group: SkillGroup, index: number): DetailDialogContent {
  return {
    eyebrow: 'Skill category',
    title: group.category,
    description: `${group.skills.length} tools and concepts loaded in this lane.`,
    tone: skillTones[index % skillTones.length],
    sections: [
      {
        title: 'Tools',
        items: group.skills.map((skill) => `${skill}: ${TECH_EXPLANATIONS[skill] ?? 'Portfolio-backed tool or concept used across projects, roles, or experience.'}`),
      },
      { title: 'How to use this', body: 'Open Skills Depth for interview-style proof points and deeper implementation notes.' },
    ],
    tags: group.skills,
    actions: [{ label: 'Read deeper skill breakdown', href: '#/skills-depth', tone: 'cyan' }],
  }
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
            {skills.map((group, index) => (
              <BlurFade key={group.category} delay={0.06 * index}>
                <button
                  type="button"
                  onClick={() => setDetail(getSkillDetail(group, index))}
                  className="lift-card-subtle flex h-full flex-col gap-3 rounded-xl border border-border-dim/80 bg-card/45 p-4 text-left outline-none hover:border-accent/40"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{group.category}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <Tag key={skill} label={skill} compact />
                    ))}
                  </div>
                </button>
              </BlurFade>
            ))}
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
              <a
                href="#/skills-depth"
                className="lift-card-subtle mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-accent/45 bg-accent/10 px-5 py-3 text-sm font-black text-text transition hover:border-accent hover:bg-accent/20 hover:text-accent-h"
              >
                Read deeper skill breakdown
                <FaArrowRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {detail ? <DetailDialog content={detail} onClose={() => setDetail(null)} /> : null}
    </section>
  )
}
