import { BUILD_MODES, SECTION_TEXT } from '../data/portfolio'
import { SectionHeader } from './ui/SectionHeader'

const toneClasses = {
  cyan: 'border-cyan/35 text-cyan bg-cyan/10',
  accent: 'border-accent/35 text-accent-h bg-accent/10',
  emerald: 'border-emerald/35 text-emerald bg-emerald/10',
  amber: 'border-amber/35 text-amber bg-amber/10',
  rose: 'border-rose/35 text-rose bg-rose/10',
  violet: 'border-violet/35 text-violet bg-violet/10',
} as const

export default function BuilderOS() {
  return (
    <section id="builder-os" className="relative overflow-hidden px-6 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(244,114,182,0.08),transparent_28%),radial-gradient(circle_at_85%_25%,rgba(251,191,36,0.08),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(74,222,128,0.08),transparent_34%)]" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          label={SECTION_TEXT.builderOS.label}
          title={SECTION_TEXT.builderOS.title}
          subtitle={SECTION_TEXT.builderOS.subtitle}
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {BUILD_MODES.map((mode) => (
            <article
              key={mode.label}
              className="group rounded-[1.5rem] border border-border bg-card/80 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-current hover:shadow-2xl"
            >
              <p
                className={`inline-flex rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] ${toneClasses[mode.tone]}`}
              >
                {mode.label}
              </p>
              <h3 className="mt-5 text-xl font-black leading-tight text-text">{mode.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{mode.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {mode.items.map((item) => (
                  <span key={item} className="rounded-full border border-border-dim bg-bg/50 px-3 py-1 font-mono text-xs text-muted">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
