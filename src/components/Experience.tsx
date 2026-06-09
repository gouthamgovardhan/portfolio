import { FaLocationDot } from 'react-icons/fa6'
import { SECTION_TEXT, type ExperienceItem } from '../data/portfolio'
import { SectionHeader } from './ui/SectionHeader'
import { Tag } from './ui/Tag'

interface ExperienceProps {
  experience: ExperienceItem[]
}

const typeTone: Record<ExperienceItem['type'], string> = {
  'Full-time': 'border-emerald/35 bg-emerald/10 text-emerald',
  Internship: 'border-cyan/35 bg-cyan/10 text-cyan',
  Contract: 'border-amber/35 bg-amber/10 text-amber',
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="section-shell px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label={SECTION_TEXT.experience.label}
          title={SECTION_TEXT.experience.title}
          subtitle={SECTION_TEXT.experience.subtitle}
        />
        <div className="relative pl-8 sm:pl-10">
          <div className="absolute bottom-0 left-3 top-3 w-0.5 bg-gradient-to-b from-accent to-transparent sm:left-3.5" />
          <div className="space-y-11">
            {experience.map((item) => (
              <article key={`${item.company}-${item.period}`} className="relative rounded-2xl border border-transparent p-1 transition-colors hover:border-border-dim/60">
                <span
                  className={`absolute -left-[1.65rem] top-3 h-3.5 w-3.5 rounded-full border-[3px] border-bg sm:-left-[2.1rem] ${
                    item.current ? 'bg-accent' : 'bg-border'
                  }`}
                />
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <p className="font-semibold text-text">{item.company}</p>
                  <span className={`rounded-full border px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.12em] ${typeTone[item.type]}`}>
                    {item.type}
                  </span>
                  <span className="rounded border border-border-dim bg-surface px-2.5 py-1 font-mono text-xs text-muted">
                    {item.period}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-text">{item.role}</h3>
                <p className="mb-4 flex items-center gap-2 text-sm text-dim">
                  <FaLocationDot aria-hidden="true" />
                  {item.location}
                </p>
                <ul className="mb-4 space-y-2.5">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-6 text-muted">
                      <span className="shrink-0 font-mono text-accent">{'>'}</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
