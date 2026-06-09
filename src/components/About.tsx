import { FaLocationDot } from 'react-icons/fa6'
import { PERSONA_TRAITS, QUICK_FACTS, type PERSONAL, SECTION_TEXT } from '../data/portfolio'
import { SectionHeader } from './ui/SectionHeader'

interface AboutProps {
  personal: typeof PERSONAL
}

export default function About({ personal }: AboutProps) {
  return (
    <section id="about" className="section-shell px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
        <div className="group relative mx-auto w-full max-w-md pb-6 lg:mx-0 lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-card transition-all duration-500 group-hover:-translate-y-1 group-hover:border-amber">
            <img
              src={personal.profileImageUrl}
              alt={`${personal.name} professional photo`}
              className="h-full w-full object-cover object-[45%_center]"
              width={640}
              height={800}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 z-10 p-6">
              <p className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-amber">
                <FaLocationDot aria-hidden="true" />
                {personal.location}
              </p>
              <p className="text-2xl font-black uppercase leading-tight text-text sm:text-3xl">{personal.currentRole}</p>
              <p className="mt-2 font-mono text-xs text-muted">{personal.timezone}</p>
            </div>
          </div>
          <div className="absolute -bottom-2 right-4 rounded-full bg-text px-4 py-2 text-sm font-bold text-bg sm:right-6">
            {personal.openToHire}
          </div>
        </div>

        <div className="min-w-0">
          <SectionHeader
            label={SECTION_TEXT.about.label}
            title={SECTION_TEXT.about.title}
            subtitle={SECTION_TEXT.about.subtitle}
          />

          <div className="mb-8 grid gap-3 sm:grid-cols-2">
            {QUICK_FACTS.map((fact) =>
              fact.href ? (
                <a
                  key={fact.label}
                  href={fact.href}
                  className="rounded-2xl border border-border-dim bg-surface/70 p-4 transition-colors hover:border-amber/40 hover:bg-surface"
                >
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-amber">{fact.label}</p>
                  <p className="mt-2 text-sm leading-6 text-text">{fact.value}</p>
                </a>
              ) : (
                <div key={fact.label} className="rounded-2xl border border-border-dim bg-surface/70 p-4">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-amber">{fact.label}</p>
                  <p className="mt-2 text-sm leading-6 text-text">{fact.value}</p>
                </div>
              ),
            )}
          </div>

          <div className="space-y-4">
            {personal.bio.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-muted">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {personal.highlightPoints.map((point) => (
              <div key={point} className="flex items-start gap-3 text-sm text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{point}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 border-l border-rose pl-5 text-lg font-medium text-text">{personal.aboutQuote}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PERSONA_TRAITS.map((trait) => (
              <article key={trait.label} className="rounded-2xl border border-border-dim bg-surface/70 p-5">
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-violet">{trait.label}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{trait.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
