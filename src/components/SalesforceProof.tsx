import { useState, type KeyboardEvent } from 'react'
import { FaSalesforce } from 'react-icons/fa'
import { PERSONAL, SECTION_TEXT, SUPERBADGES, TRAILHEAD_METRICS } from '../data/portfolio'
import { DetailDialog, type DetailDialogContent } from './ui/DetailDialog'
import { SectionHeader } from './ui/SectionHeader'

function handleCardKeyDown(event: KeyboardEvent<HTMLElement>, onOpen: () => void) {
  if (event.currentTarget !== event.target) return
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    onOpen()
  }
}

function getTrailblazerDetail(): DetailDialogContent {
  return {
    eyebrow: 'Trailblazer',
    title: 'Agentblazer Champion 2025',
    description: 'Salesforce learning proof across Agentforce, Prompt Builder, service automation, and platform workflows.',
    tone: 'cyan',
    sections: [
      { title: 'Profile signal', body: 'Public Trailblazer proof helps recruiters and Salesforce teams quickly verify hands-on platform learning.' },
      { title: 'Best discussion angle', body: 'Useful for conversations about Service Cloud, Agentforce, Prompt Builder, case lifecycle work, and AI-assisted support workflows.' },
    ],
    tags: ['Agentforce', 'Prompt Builder', 'Service Cloud', 'Trailhead'],
    actions: [{ label: 'View Trailblazer Profile', href: PERSONAL.trailblazer, external: true, tone: 'cyan' }],
  }
}

export default function SalesforceProof() {
  const [detail, setDetail] = useState<DetailDialogContent | null>(null)

  return (
    <section id="salesforce" className="section-shell px-6 py-24">
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          label={SECTION_TEXT.salesforce.label}
          title={SECTION_TEXT.salesforce.title}
          subtitle={SECTION_TEXT.salesforce.subtitle}
        />

        <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <aside
            className="lift-card glass-card h-full cursor-pointer rounded-[1.8rem] border border-cyan/30 p-6 shadow-2xl shadow-cyan/10 outline-none"
            role="button"
            tabIndex={0}
            onClick={() => setDetail(getTrailblazerDetail())}
            onKeyDown={(event) => handleCardKeyDown(event, () => setDetail(getTrailblazerDetail()))}
          >
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
              onClick={(event) => event.stopPropagation()}
              className="lift-card-subtle mt-6 inline-flex rounded-full border border-cyan/40 px-5 py-3 text-sm font-bold text-cyan hover:bg-cyan/10"
            >
              View Trailblazer Profile
            </a>
          </aside>

          <div className="grid gap-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {TRAILHEAD_METRICS.map((metric, index) => (
                <button
                  type="button"
                  key={metric.label}
                  onClick={() =>
                    setDetail({
                      eyebrow: 'Trailhead metric',
                      title: `${metric.value} ${metric.label}`,
                      description: metric.detail,
                      tone: index % 2 === 0 ? 'emerald' : 'cyan',
                      sections: [
                        { title: 'Why it matters', body: metric.detail },
                        { title: 'Portfolio context', body: 'This supports the Salesforce proof area without forcing the home page to carry every credential detail.' },
                      ],
                    })
                  }
                  className="lift-card-subtle flex h-full flex-col rounded-2xl border border-border bg-card/80 p-4 text-left outline-none"
                >
                  <p className="text-3xl font-black text-text">{metric.value}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-amber">{metric.label}</p>
                  <p className="mt-3 text-xs leading-5 text-muted">{metric.detail}</p>
                </button>
              ))}
            </div>

            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-dim">Superbadges & scenario credentials</p>
              <div className="grid gap-3 md:grid-cols-2">
                {SUPERBADGES.map((badge) => (
                  <button
                    type="button"
                    key={badge.name}
                    onClick={() =>
                      setDetail({
                        eyebrow: 'Scenario credential',
                        title: badge.name,
                        description: badge.description,
                        tone: 'rose',
                        sections: [
                          { title: 'Completed', body: badge.completed },
                          { title: 'What it shows', body: badge.description },
                        ],
                      })
                    }
                    className="lift-card-subtle rounded-2xl border border-border bg-bg/55 p-5 text-left outline-none"
                  >
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-rose">{badge.completed}</p>
                    <h3 className="mt-3 text-lg font-black leading-tight text-text">{badge.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">{badge.description}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {detail ? <DetailDialog content={detail} onClose={() => setDetail(null)} /> : null}
    </section>
  )
}
