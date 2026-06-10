import { useState, type KeyboardEvent } from 'react'
import { EDUCATION, PERSONAL, SECTION_TEXT, SIGNALS } from '../data/portfolio'
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
  const [isCardFlipped, setIsCardFlipped] = useState(false)
  const education = EDUCATION[0]
  const batchYears = education.period.split(' - ')
  const issuedYear = batchYears[0] ?? '2020'
  const passoutYear = batchYears[1] ?? '2024'
  const handleCardKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      setIsCardFlipped((flipped) => !flipped)
    }
  }

  return (
    <section id="education" className="section-shell px-6 py-24">
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          label={SECTION_TEXT.education.label}
          title={SECTION_TEXT.education.title}
          subtitle={SECTION_TEXT.education.subtitle}
        />

        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <div className="education-id-scene">
            <article
              className={`education-id-card group relative min-h-[700px] cursor-pointer rounded-[1.65rem] border border-border/90 bg-card/80 p-5 shadow-2xl shadow-violet/10 sm:min-h-[580px] lg:min-h-[540px] ${
                isCardFlipped ? 'is-flipped' : ''
              }`}
              role="button"
              tabIndex={0}
              aria-label={`${education.school} student ID card. Activate to flip.`}
              aria-pressed={isCardFlipped}
              onClick={() => setIsCardFlipped((flipped) => !flipped)}
              onKeyDown={handleCardKeyDown}
            >
              <div className="education-id-face education-id-front">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">Class of</p>
                    <h3 className="mt-2 flex gap-2 text-6xl font-black leading-none text-text sm:text-7xl">
                      {passoutYear.split('').map((digit, index) => (
                        <span key={`${digit}-${index}`}>{digit}</span>
                      ))}
                    </h3>
                  </div>
                  <div className="rounded-full border border-emerald/35 bg-emerald/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-emerald">
                    Graduated
                  </div>
                </div>

                <div className="mt-8 grid gap-5 sm:grid-cols-[10rem_1fr]">
                  <div className="w-36 overflow-hidden rounded-[1.2rem] border border-border-dim bg-bg/50 sm:w-auto">
                    <img
                      src={education.imageUrl}
                      alt={`${PERSONAL.name} at graduation`}
                      className="aspect-[3/4] h-full w-full object-cover object-[50%_18%]"
                      width={360}
                      height={480}
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-dim">Student ID</p>
                      <h4 className="mt-1 text-2xl font-black text-text">{PERSONAL.name}</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-border-dim bg-bg/45 p-3">
                        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-dim">Programme</p>
                        <p className="mt-1 text-sm font-semibold leading-5 text-text">B.Tech · CSE Data Science</p>
                      </div>
                      <div className="rounded-xl border border-border-dim bg-bg/45 p-3">
                        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-dim">Batch</p>
                        <p className="mt-1 text-sm font-semibold text-text">{education.period}</p>
                      </div>
                      <div className="rounded-xl border border-border-dim bg-bg/45 p-3">
                        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-dim">Issued</p>
                        <p className="mt-1 text-sm font-semibold text-text">Aug {issuedYear}</p>
                      </div>
                      <div className="rounded-xl border border-border-dim bg-bg/45 p-3">
                        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-dim">Location</p>
                        <p className="mt-1 text-sm font-semibold text-text">Bengaluru, IN</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-border-dim pt-5">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-violet">Coursework - partial transcript</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {education.coursework.map((course) => (
                      <Tag key={course} label={course} />
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border-dim pt-5">
                  <div>
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-dim">Property of</p>
                    <p className="text-sm font-semibold text-text">{education.school}</p>
                  </div>
                  <p className="font-mono text-xs text-dim">Valid through {passoutYear}</p>
                </div>
              </div>

              <div className="education-id-face education-id-back">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-rose">Back of card</p>
                <h3 className="mt-3 text-3xl font-black text-text">{education.school}</h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-muted">{education.degree}</p>

                <div className="mt-8">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-amber">Leadership</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {education.activities.map((activity) => (
                      <span key={activity} className="rounded-full border border-border-dim bg-bg/50 px-3 py-1.5 text-xs text-muted">
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto border-t border-border-dim pt-5">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-dim">If found, return to</p>
                  <p className="mt-2 text-sm text-muted">Presidency University · Bengaluru, Karnataka</p>
                  <p className="mt-5 font-mono text-xs text-dim">tap to flip · hover to tilt</p>
                </div>
              </div>
            </article>
          </div>

          <div className="grid h-full gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {SIGNALS.map((signal) => (
              <article key={signal.title} className="lift-card glass-card flex flex-col rounded-[1.5rem] border border-border/80 p-5">
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
