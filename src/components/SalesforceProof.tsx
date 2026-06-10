import { FaSalesforce } from 'react-icons/fa'
import { PERSONAL, SECTION_TEXT, SUPERBADGES, TRAILHEAD_METRICS } from '../data/portfolio'
import { SectionHeader } from './ui/SectionHeader'

export default function SalesforceProof() {
  return (
    <section id="salesforce" className="section-shell px-6 py-24">
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          label={SECTION_TEXT.salesforce.label}
          title={SECTION_TEXT.salesforce.title}
          subtitle={SECTION_TEXT.salesforce.subtitle}
        />

        <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <aside className="lift-card glass-card h-full rounded-[1.8rem] border border-cyan/30 p-6 shadow-2xl shadow-cyan/10">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan/10 text-3xl text-cyan">
                <FaSalesforce aria-hidden="true" />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">Trailblazer</p>
                <h3 className="text-2xl font-black text-text">Agentblazer Champion 2025</h3>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-muted">
              Trailhead Expeditioner with Agentforce, Prompt Builder, service automation, and Salesforce platform learning
              visible on the public Trailblazer profile.
            </p>
            <a
              href={PERSONAL.trailblazer}
              target="_blank"
              rel="noreferrer"
              className="lift-card-subtle mt-6 inline-flex rounded-full border border-cyan/40 px-5 py-3 text-sm font-bold text-cyan hover:bg-cyan/10"
            >
              View Trailblazer Profile
            </a>
          </aside>

          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {TRAILHEAD_METRICS.map((metric) => (
                <article key={metric.label} className="lift-card-subtle flex h-full flex-col rounded-2xl border border-border bg-card/80 p-4">
                  <p className="text-3xl font-black text-text">{metric.value}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-amber">{metric.label}</p>
                  <p className="mt-3 text-xs leading-5 text-muted">{metric.detail}</p>
                </article>
              ))}
            </div>

            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-dim">Superbadges & scenario credentials</p>
              <div className="grid gap-3 md:grid-cols-2">
                {SUPERBADGES.map((badge) => (
                  <article key={badge.name} className="lift-card-subtle rounded-2xl border border-border bg-bg/55 p-5">
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-rose">{badge.completed}</p>
                    <h3 className="mt-3 text-lg font-black leading-tight text-text">{badge.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">{badge.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
