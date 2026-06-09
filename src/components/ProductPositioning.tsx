import { PRODUCT_PILLARS, PROOF_POINTS, ROLE_FITS, SECTION_TEXT } from '../data/portfolio'
import { SectionHeader } from './ui/SectionHeader'

const toneClasses = {
  cyan: 'border-cyan/35 bg-cyan/10 text-cyan',
  accent: 'border-accent/35 bg-accent/10 text-accent-h',
  emerald: 'border-emerald/35 bg-emerald/10 text-emerald',
  amber: 'border-amber/35 bg-amber/10 text-amber',
  rose: 'border-rose/35 bg-rose/10 text-rose',
  violet: 'border-violet/35 bg-violet/10 text-violet',
} as const

export default function ProductPositioning() {
  return (
    <section id="product" className="relative overflow-hidden bg-surface px-6 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(255,107,107,0.12),transparent_26%),radial-gradient(circle_at_82%_25%,rgba(74,222,128,0.1),transparent_28%),radial-gradient(circle_at_55%_90%,rgba(167,139,250,0.12),transparent_32%)]" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          label={SECTION_TEXT.product.label}
          title={SECTION_TEXT.product.title}
          subtitle={SECTION_TEXT.product.subtitle}
        />

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {PRODUCT_PILLARS.map((pillar) => (
              <article key={pillar.title} className="rounded-[1.5rem] border border-border bg-card/85 p-5">
                <p
                  className={`inline-flex rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] ${
                    toneClasses[pillar.tone]
                  }`}
                >
                  {pillar.label}
                </p>
                <h3 className="mt-5 text-xl font-black leading-tight text-text">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{pillar.description}</p>
                <p className="mt-5 rounded-2xl border border-border-dim bg-bg/60 p-4 font-mono text-sm text-text">
                  {pillar.metric}
                </p>
              </article>
            ))}
          </div>

          <aside className="rounded-[1.7rem] border border-border bg-card/90 p-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">Proof stack</p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {PROOF_POINTS.map((point) => (
                <div key={point.label} className="rounded-2xl border border-border-dim bg-bg/60 p-4">
                  <p className="text-3xl font-black text-text">{point.value}</p>
                  <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-violet">{point.label}</p>
                  <p className="mt-3 text-xs leading-5 text-muted">{point.detail}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          {ROLE_FITS.map((fit) => (
            <article key={fit.role} className="rounded-[1.5rem] border border-border bg-bg/45 p-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-rose">role fit</p>
              <h3 className="mt-3 text-xl font-black text-text">{fit.role}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{fit.pitch}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {fit.strengths.map((strength) => (
                  <span
                    key={strength}
                    className="rounded-full border border-border-dim bg-card px-3 py-1 font-mono text-xs text-muted"
                  >
                    {strength}
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
