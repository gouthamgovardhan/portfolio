import { EDUCATION, SECTION_TEXT, SIGNALS } from '../data/portfolio'
import { SectionHeader } from './ui/SectionHeader'
import { Tag } from './ui/Tag'

const toneClasses = {
  cyan: 'border-cyan/35 bg-cyan/10 text-cyan',
  accent: 'border-accent/35 bg-accent/10 text-accent-h',
  emerald: 'border-emerald/35 bg-emerald/10 text-emerald',
  amber: 'border-amber/35 bg-amber/10 text-amber',
  rose: 'border-rose/35 bg-rose/10 text-rose',
  violet: 'border-violet/35 bg-violet/10 text-violet',
} as const

export default function Education() {
  return (
    <section id="education" className="section-shell px-6 py-24">
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          label={SECTION_TEXT.education.label}
          title={SECTION_TEXT.education.title}
          subtitle={SECTION_TEXT.education.subtitle}
        />

        <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
          {EDUCATION.map((item) => (
            <article key={item.school} className="glass-card flex h-full flex-col rounded-[1.7rem] border border-border/80 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">{item.period}</p>
              <h3 className="mt-4 text-2xl font-black text-text">{item.school}</h3>
              <p className="mt-2 text-base leading-7 text-muted">{item.degree}</p>
              <p className="mt-2 font-mono text-xs text-dim">{item.location}</p>

              <div className="mt-6">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-violet">Coursework</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.coursework.map((course) => (
                    <Tag key={course} label={course} />
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-rose">Leadership</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.activities.map((activity) => (
                    <span key={activity} className="rounded-full border border-border-dim bg-bg/50 px-3 py-1.5 text-xs text-muted">
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}

          <div className="grid h-full gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {SIGNALS.map((signal) => (
              <article key={signal.title} className="glass-card flex flex-col rounded-[1.5rem] border border-border/80 p-5">
                <p
                  className={`inline-flex w-fit rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] ${
                    toneClasses[signal.tone]
                  }`}
                >
                  {signal.label}
                </p>
                <h3 className="mt-4 text-lg font-black leading-snug text-text sm:text-xl">{signal.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-muted">{signal.detail}</p>
                <div className="mt-4 flex flex-wrap gap-2 border-t border-border-dim/70 pt-4">
                  {signal.tags.map((tag) => (
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
