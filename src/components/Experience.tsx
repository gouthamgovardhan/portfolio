import { FaLocationDot } from 'react-icons/fa6'
import { SECTION_TEXT, type ExperienceItem } from '../data/portfolio'
import { SectionHeader } from './ui/SectionHeader'
import { Tag } from './ui/Tag'

interface ExperienceProps {
  experience: ExperienceItem[]
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader label={SECTION_TEXT.experience.label} title={SECTION_TEXT.experience.title} />
        <div className="relative pl-9">
          <div className="absolute bottom-0 left-2.5 top-3 w-0.5 bg-gradient-to-b from-accent to-transparent" />
          <div className="space-y-11">
            {experience.map((item) => (
              <article key={`${item.company}-${item.period}`} className="relative">
                <span
                  className={`absolute -left-[34px] top-3 h-3.5 w-3.5 rounded-full border-[3px] border-bg ${
                    item.current ? 'bg-accent' : 'bg-border'
                  }`}
                />
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <p className="font-semibold text-text">{item.company}</p>
                  <span className="rounded border border-border-dim bg-surface px-2.5 py-1 font-mono text-xs text-muted">
                    {item.period}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-text">{item.role}</h3>
                <p className="mb-4 flex items-center gap-2 text-sm text-dim">
                  <FaLocationDot aria-hidden="true" />
                  {item.location}
                </p>
                <ul className="mb-4 space-y-2">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-6 text-muted">
                      <span className="font-mono text-accent">{'>'}</span>
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
