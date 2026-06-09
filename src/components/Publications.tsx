import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { PUBLICATIONS, SECTION_TEXT } from '../data/portfolio'
import { SectionHeader } from './ui/SectionHeader'
import { Tag } from './ui/Tag'

export default function Publications() {
  return (
    <section id="publications" className="section-shell px-6 py-24">
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          label={SECTION_TEXT.publications.label}
          title={SECTION_TEXT.publications.title}
          subtitle={SECTION_TEXT.publications.subtitle}
        />

        <div className="grid gap-5">
          {PUBLICATIONS.map((paper) => (
            <article key={paper.doi} className="glass-card rounded-[1.7rem] border border-amber/35 p-6 shadow-2xl shadow-amber/5">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-amber">{paper.published}</p>
                  <h3 className="mt-4 text-2xl font-black leading-tight text-text">{paper.title}</h3>
                  <p className="mt-3 text-sm font-semibold text-violet">{paper.journal}</p>
                </div>
                <a
                  href={paper.doiUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-amber/40 px-5 py-3 text-sm font-bold text-amber transition-all hover:-translate-y-0.5 hover:bg-amber/10"
                >
                  DOI <FaArrowUpRightFromSquare aria-hidden="true" />
                </a>
              </div>

              <p className="mt-6 text-sm leading-7 text-muted">{paper.summary}</p>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                <div className="rounded-2xl border border-border-dim bg-bg/40 p-4">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-dim">Authors</p>
                  <p className="mt-2 text-sm leading-6 text-text">{paper.authors.join(' · ')}</p>
                  {paper.authorListingNote ? (
                    <p className="mt-2 text-xs leading-5 text-muted">{paper.authorListingNote}</p>
                  ) : null}
                  <p className="mt-4 break-all font-mono text-xs text-amber">DOI: {paper.doi}</p>
                </div>
                <div className="rounded-2xl border border-border-dim bg-bg/40 p-4">
                  <p className="mb-3 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-dim">Topics</p>
                  <div className="flex flex-wrap gap-2">
                    {paper.tags.map((tag) => (
                      <Tag key={tag} label={tag} />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
