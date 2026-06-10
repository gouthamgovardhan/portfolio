import { CAPABILITIES, SECTION_TEXT } from '../data/portfolio'
import { SectionHeader } from './ui/SectionHeader'
import { Tag } from './ui/Tag'

const accentClasses = {
  cyan: 'border-cyan/40 bg-cyan/10 text-cyan shadow-cyan/10',
  accent: 'border-accent/40 bg-accent/10 text-accent-h shadow-accent/10',
  emerald: 'border-emerald/40 bg-emerald/10 text-emerald shadow-emerald/10',
  amber: 'border-amber/40 bg-amber/10 text-amber shadow-amber/10',
  rose: 'border-rose/40 bg-rose/10 text-rose shadow-rose/10',
  violet: 'border-violet/40 bg-violet/10 text-violet shadow-violet/10',
} as const

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative overflow-hidden bg-surface px-6 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(167,139,250,0.12),transparent_28%),radial-gradient(circle_at_88%_70%,rgba(255,107,107,0.1),transparent_30%),radial-gradient(circle_at_55%_45%,rgba(251,191,36,0.06),transparent_24%)]" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          label={SECTION_TEXT.capabilities.label}
          title={SECTION_TEXT.capabilities.title}
          subtitle={SECTION_TEXT.capabilities.subtitle}
        />

        <div className="grid auto-rows-fr gap-5 lg:grid-cols-3">
          {CAPABILITIES.map((item) => (
            <article
              key={item.title}
              className={`lift-card group relative min-h-[390px] overflow-hidden rounded-[1.7rem] border bg-card/85 p-6 shadow-2xl backdrop-blur ${accentClasses[item.accent]}`}
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-current opacity-10 blur-2xl transition-transform duration-500 group-hover:scale-125" />
              <div className="relative z-10 flex h-full flex-col">
                <p className="font-mono text-xs uppercase tracking-[0.22em] opacity-80">{item.label}</p>
                <h3 className="mt-5 text-2xl font-black leading-tight text-text">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
                <div className="my-6 rounded-2xl border border-border-dim bg-bg/50 p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-dim">proof</p>
                  <p className="mt-2 text-sm font-semibold text-text">{item.proof}</p>
                </div>
                <div className="mt-auto flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Tag key={tag} label={tag} compact />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
