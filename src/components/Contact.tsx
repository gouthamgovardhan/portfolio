import { SECTION_TEXT, SOCIAL_LINKS, WORKFLOW_STEPS, type PERSONAL } from '../data/portfolio'
import { SectionHeader } from './ui/SectionHeader'

interface ContactProps {
  personal: typeof PERSONAL
}

export default function Contact({ personal }: ContactProps) {
  return (
    <section id="contact" className="relative overflow-hidden bg-surface px-6 py-24">
      <div className="pointer-events-none absolute inset-x-0 top-10 overflow-hidden border-y border-border-dim/60 py-3 opacity-70">
        <div className="tech-marquee tech-marquee-reverse flex w-max gap-3">
          {[...WORKFLOW_STEPS, ...WORKFLOW_STEPS].map((step, index) => (
            <span
              key={`${step.label}-${index}`}
              className="rounded-full border border-border-dim bg-bg/70 px-5 py-1 font-mono text-xs uppercase tracking-[0.2em] text-muted"
            >
              {step.label}
            </span>
          ))}
        </div>
      </div>
      <div className="relative mx-auto max-w-xl rounded-[2rem] border border-border bg-card/95 p-8 text-center shadow-2xl shadow-accent/10 sm:p-12">
        <SectionHeader
          label={SECTION_TEXT.contact.label}
          title={SECTION_TEXT.contact.title}
          subtitle={SECTION_TEXT.contact.subtitle}
          centered
        />
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          {SOCIAL_LINKS.map((link) => {
            const Icon = link.icon

            return (
              <a
                key={`${personal.name}-${link.label}`}
                href={link.href}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-text transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent-h"
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <Icon aria-hidden="true" />
                {link.label}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
