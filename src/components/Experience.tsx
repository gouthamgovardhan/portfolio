import { useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { SECTION_TEXT, type ExperienceItem } from '../data/portfolio'
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
      { title: item.current ? 'Current work' : 'Role summary', body: item.current ? 'Active production engineering work with enterprise AI, Salesforce, and backend workflows.' : 'Completed role with resume-backed delivery and technical ownership.' },
      { title: 'Impact points', items: item.bullets },
      { title: 'Stack context', body: item.tags.join(' · ') },
    ],
    tags: item.tags,
  }
}

export default function Experience({ experience }: ExperienceProps) {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null)

  return (
    <section id="experience" className="section-shell px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label={SECTION_TEXT.experience.label}
          title={SECTION_TEXT.experience.title}
          subtitle={SECTION_TEXT.experience.subtitle}
        />
        <div className="grid gap-5">
          {experience.map((item, index) => {
            const periodParts = item.period.split(' - ')
            const closedLabel = periodParts[periodParts.length - 1]

            return (
              <button
                type="button"
                key={`${item.company}-${item.period}`}
                onClick={() => setSelectedExperience(item)}
                className="magic-card lift-card role-card group relative overflow-hidden rounded-[1.35rem] border border-border/80 bg-card/60 p-5 text-left shadow-xl shadow-bg/40 outline-none sm:p-6"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber/80 to-transparent opacity-70" />
                <div className="grid gap-5 lg:grid-cols-[10rem_1fr]">
                  <aside className="flex flex-col gap-4 border-b border-border-dim pb-4 sm:flex-row sm:items-start sm:justify-between lg:flex-col lg:border-b-0 lg:border-r lg:pb-0 lg:pr-5">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-dim">N° G-{String(index + 1).padStart(3, '0')}</p>
                      <span className={`mt-3 inline-flex rounded-full border px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] ${typeTone[item.type]}`}>
                        {item.type}
                      </span>
                    </div>
                    <div className="sm:text-right lg:text-left">
                      <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-emerald">
                        {item.current ? 'Authenticated current' : 'Authenticated closed'}
                      </p>
                      <p className="mt-2 font-mono text-xs text-dim">{item.current ? new Date().getFullYear() : closedLabel}</p>
                    </div>
                  </aside>

                  <div>
                    <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <h3 className="text-2xl font-black leading-tight text-text">{item.company}</h3>
                        <p className="mt-1 text-base font-semibold text-amber">{item.role}</p>
                      </div>
                      <span className="w-fit shrink-0 rounded border border-border-dim bg-bg/70 px-3 py-1.5 font-mono text-xs text-muted">
                        {item.period}
                      </span>
                    </div>

                    <p className="mb-5 flex items-center gap-2 text-sm text-dim">
                      <FaLocationDot aria-hidden="true" />
                      {item.location}
                    </p>

                    <ul className="mb-5 grid gap-2.5">
                      {item.bullets.slice(0, 2).map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-sm leading-6 text-muted">
                          <span className="shrink-0 font-mono text-accent">▸</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="border-t border-border-dim pt-4">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <p className="font-mono text-xs leading-6 text-muted">
                          {item.tags.slice(0, 4).map((tag) => tag.toLowerCase()).join(' · ')}
                        </p>
                        <span className="rounded-full border border-amber/30 bg-amber/10 px-3 py-1.5 text-xs font-bold text-amber">
                          View full role · {item.bullets.length} points
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
      {selectedExperience ? <DetailDialog content={getExperienceDetail(selectedExperience)} onClose={() => setSelectedExperience(null)} /> : null}
    </section>
  )
}
