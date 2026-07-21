import { useMemo, useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { ROLE_PATHS, SECTION_TEXT, type ExperienceItem } from '../data/portfolio'
import { useActiveRole } from '../context/RoleContext'
import { sortByRole } from '../lib/roleSort'
import { DetailDialog, type DetailDialogContent, type DetailTone } from './ui/DetailDialog'
import { SectionHeader } from './ui/SectionHeader'

interface ExperienceProps {
  experience: ExperienceItem[]
}

const typeTone: Record<ExperienceItem['type'], string> = {
  'Full-time': 'border-emerald/35 bg-emerald/10 text-emerald',
  Internship: 'border-cyan/35 bg-cyan/10 text-cyan',
  Contract: 'border-amber/35 bg-amber/10 text-amber',
}

const detailTone: Record<ExperienceItem['type'], DetailTone> = {
  'Full-time': 'emerald',
  Internship: 'cyan',
  Contract: 'amber',
}

function getExperienceDetail(item: ExperienceItem): DetailDialogContent {
  return {
    eyebrow: item.type,
    title: `${item.role} @ ${item.company}`,
    description: `${item.period} · ${item.location}`,
    tone: detailTone[item.type],
    sections: [
      { title: item.current ? 'Current work' : 'Role summary', body: item.current ? 'Active Salesforce consulting across platform development, automation, integrations, and AI-assisted workflows.' : 'Completed role with resume-backed delivery and technical ownership.' },
      { title: 'Impact points', items: item.bullets },
      { title: 'Stack context', body: item.tags.join(' · ') },
    ],
    tags: item.tags,
  }
}

export default function Experience({ experience }: ExperienceProps) {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null)
  const { activeRole } = useActiveRole()
  const activeRolePath = ROLE_PATHS.find((path) => path.id === activeRole)
  const sortedExperience = useMemo(() => sortByRole(experience, activeRole), [experience, activeRole])
  const subtitle = activeRolePath?.sectionCopy.experience ?? SECTION_TEXT.experience.subtitle

  return (
    <section id="experience" className="section-shell px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label={SECTION_TEXT.experience.label}
          title={SECTION_TEXT.experience.title}
          subtitle={subtitle}
        />
        <div className="experience-timeline grid gap-5">
          {sortedExperience.map((item, index) => {
            return (
              <div key={`${item.company}-${item.period}`} className="experience-timeline-entry relative grid gap-4 pl-10 sm:grid-cols-[8rem_minmax(0,1fr)] sm:pl-0">
                <div className="hidden pt-5 text-right sm:block">
                  <p className="font-mono text-xs font-bold leading-5 text-amber">{item.period}</p>
                  <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-dim">
                    {item.current ? 'Current' : `Role ${String(index + 1).padStart(2, '0')}`}
                  </p>
                </div>
                <span className={`experience-timeline-marker ${item.current ? 'is-current' : ''}`} aria-hidden="true" />
                <button
                  type="button"
                  onClick={() => setSelectedExperience(item)}
                  className="magic-card lift-card role-card group relative overflow-hidden rounded-[1.35rem] border border-border/80 bg-card/60 p-5 text-left shadow-xl shadow-bg/40 outline-none sm:p-6"
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-amber/70 via-cyan/40 to-transparent opacity-80" />
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`inline-flex rounded-full border px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.14em] ${typeTone[item.type]}`}>
                          {item.type}
                        </span>
                        <span className="font-mono text-xs text-dim sm:hidden">{item.period}</span>
                      </div>
                      <h3 className="mt-4 text-2xl font-black leading-tight text-text">{item.company}</h3>
                      <p className="mt-1 text-base font-semibold text-amber">{item.role}</p>
                    </div>
                    <span className="w-fit rounded-full border border-border-dim bg-bg/60 px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted">
                      Open role
                    </span>
                  </div>

                  <p className="mt-4 flex items-center gap-2 text-sm text-dim">
                    <FaLocationDot aria-hidden="true" />
                    {item.location}
                  </p>

                  <ul className="mt-5 grid gap-2.5">
                    {item.bullets.slice(0, 2).map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm leading-6 text-muted">
                        <span className="shrink-0 font-mono text-accent">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border-dim pt-4">
                    <p className="font-mono text-xs leading-6 text-muted">
                      {item.tags.slice(0, 4).map((tag) => tag.toLowerCase()).join(' · ')}
                    </p>
                    <span className="text-xs font-bold text-amber">{item.bullets.length} contribution points</span>
                  </div>
                </button>
              </div>
            )
          })}
        </div>
      </div>
      {selectedExperience ? <DetailDialog content={getExperienceDetail(selectedExperience)} onClose={() => setSelectedExperience(null)} /> : null}
    </section>
  )
}
