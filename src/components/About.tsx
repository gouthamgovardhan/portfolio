import { PERSONA_TRAITS, type PERSONAL, SECTION_TEXT } from '../data/portfolio'
import { SectionHeader } from './ui/SectionHeader'

const cityVisualStyle = {
  '--city-image': `url("${import.meta.env.BASE_URL}assets/bengaluru-night.jpg")`,
} as React.CSSProperties

interface AboutProps {
  personal: typeof PERSONAL
}

export default function About({ personal }: AboutProps) {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1.25fr]">
        <div className="group relative max-w-sm lg:max-w-none">
          <div
            className="city-visual relative flex aspect-[4/5] items-end overflow-hidden rounded-[2rem] border border-border bg-card p-6 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-cyan"
            style={cityVisualStyle}
          >
            {/* Replace inner content with: <img src={personal.resumeUrl.replace('resume.pdf','profile.jpg')} className="w-full h-full object-cover" /> */}
            <div className="relative z-10">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-cyan">{personal.locationEyebrow}</p>
              <p className="text-5xl font-black uppercase text-text">{personal.country}</p>
              <p className="mt-2 font-mono text-xs text-muted">{personal.coordinates}</p>
              <p className="font-mono text-xs text-muted">{personal.timezone}</p>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 rounded-full bg-text px-4 py-2 text-sm font-bold text-bg">
            {personal.openToHire}
          </div>
        </div>

        <div>
          <SectionHeader label={SECTION_TEXT.about.label} title={SECTION_TEXT.about.title} />
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
          <p className="mt-8 border-l border-cyan pl-5 text-lg font-medium text-text">{personal.aboutQuote}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {PERSONA_TRAITS.map((trait) => (
              <article key={trait.label} className="rounded-2xl border border-border-dim bg-surface/70 p-5">
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">{trait.label}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{trait.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
