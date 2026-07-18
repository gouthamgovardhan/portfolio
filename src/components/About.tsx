import { useState, type KeyboardEvent } from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { PERSONA_TRAITS, QUICK_FACTS, SECTION_TEXT, type PERSONAL, type PersonaTrait, type QuickFact } from '../data/portfolio'
import { DetailDialog, type DetailDialogContent } from './ui/DetailDialog'
import { SectionHeader } from './ui/SectionHeader'

interface AboutProps {
  personal: typeof PERSONAL
}

function handleCardKeyDown(event: KeyboardEvent<HTMLElement>, onOpen: () => void) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    onOpen()
  }
}

function getProfileDetail(personal: typeof PERSONAL): DetailDialogContent {
  return {
    eyebrow: 'Builder profile',
    title: personal.currentRole,
    description: personal.aboutQuote,
    tone: 'accent',
    sections: [
      { title: 'Location', body: `${personal.location} · ${personal.timezone}` },
      { title: 'Profile', body: personal.bio.join('\n\n') },
      { title: 'Working highlights', items: [...personal.highlightPoints] },
    ],
    tags: [personal.openToHire, personal.country, 'AI', 'Salesforce', 'Backend'],
    actions: [{ label: 'Download Resume', href: personal.resumeUrl, tone: 'accent' }],
  }
}

function getQuickFactDetail(fact: QuickFact): DetailDialogContent {
  return {
    eyebrow: fact.label,
    title: fact.value,
    description: 'A compact profile fact with extra context kept out of the main portfolio flow.',
    tone: 'amber',
    sections: [{ title: 'Profile context', body: fact.value }],
    actions: fact.href ? [{ label: `Open ${fact.label}`, href: fact.href, external: fact.href.startsWith('http'), tone: 'amber' }] : undefined,
  }
}

function getTraitDetail(trait: PersonaTrait): DetailDialogContent {
  return {
    eyebrow: 'Working trait',
    title: trait.label,
    description: trait.description,
    tone: 'violet',
    sections: [
      { title: 'How this shows up', body: trait.description },
      { title: 'Best interview angle', body: 'Use this as a conversation starter around ownership, collaboration, technical explanation, and delivery habits.' },
    ],
  }
}

export default function About({ personal }: AboutProps) {
  const [detail, setDetail] = useState<DetailDialogContent | null>(null)

  return (
    <section id="about" className="section-shell px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
        <div className="group relative mx-auto w-full max-w-md pb-6 lg:mx-0 lg:max-w-none">
          <article
            className="lift-card relative aspect-[4/5] cursor-pointer overflow-hidden rounded-[2rem] border border-border bg-card outline-none"
            role="button"
            tabIndex={0}
            onClick={() => setDetail(getProfileDetail(personal))}
            onKeyDown={(event) => handleCardKeyDown(event, () => setDetail(getProfileDetail(personal)))}
          >
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
          </article>
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
            {QUICK_FACTS.map((fact) => (
              <button
                type="button"
                key={fact.label}
                onClick={() => setDetail(getQuickFactDetail(fact))}
                className="lift-card-subtle rounded-2xl border border-border-dim bg-surface/70 p-4 text-left outline-none"
              >
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-amber">{fact.label}</p>
                <p className="mt-2 text-sm leading-6 text-text">{fact.value}</p>
              </button>
            ))}
          </div>

          <p className="text-base leading-8 text-muted">{personal.bio[0]}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {personal.highlightPoints.slice(0, 4).map((point) => (
              <div key={point} className="flex items-start gap-3 text-sm text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{point}</span>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setDetail(getProfileDetail(personal))}
            className="lift-card-subtle mt-6 inline-flex rounded-full border border-accent/40 bg-accent/10 px-5 py-3 text-sm font-bold text-text outline-none hover:bg-accent/20"
          >
            Expand profile · {personal.highlightPoints.length} highlights
          </button>
          <p className="mt-8 border-l border-rose pl-5 text-lg font-medium text-text">{personal.aboutQuote}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PERSONA_TRAITS.map((trait) => (
              <button
                type="button"
                key={trait.label}
                onClick={() => setDetail(getTraitDetail(trait))}
                className="lift-card-subtle rounded-2xl border border-border-dim bg-surface/70 p-5 text-left outline-none"
              >
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-violet">{trait.label}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{trait.description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
      {detail ? <DetailDialog content={detail} onClose={() => setDetail(null)} /> : null}
    </section>
  )
}
