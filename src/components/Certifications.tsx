import { FaCheck } from 'react-icons/fa6'
import { ACTION_LABELS, SECTION_TEXT, type CertItem } from '../data/portfolio'
import { SectionHeader } from './ui/SectionHeader'

interface CertificationsProps {
  certs: CertItem[]
}

export default function Certifications({ certs }: CertificationsProps) {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader label={SECTION_TEXT.certifications.label} title={SECTION_TEXT.certifications.title} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((cert) => (
            <article
              key={cert.name}
              className="rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-emerald"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-emerald/10 font-mono text-sm font-semibold text-emerald">
                {cert.icon}
              </div>
              <h3 className="mb-1 text-lg font-bold text-text">{cert.name}</h3>
              <p className="mb-4 text-sm text-muted">{cert.issuer}</p>
              <span className="inline-flex items-center gap-2 rounded border border-emerald/30 bg-emerald/10 px-2.5 py-1 font-mono text-xs text-emerald">
                <FaCheck aria-hidden="true" />
                {ACTION_LABELS.certified}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
