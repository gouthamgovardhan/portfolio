import { CONTACT_LINKS, SECTION_TEXT, WORKFLOW_STEPS, type PERSONAL } from '../data/portfolio'
import { SectionHeader } from './ui/SectionHeader'

interface ContactProps {
  personal: typeof PERSONAL
}

export default function Contact({ personal }: ContactProps) {
  return (
    <section id="contact" className="section-shell overflow-hidden px-6 py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 overflow-hidden border-y border-border-dim/40 bg-card/15 py-3 opacity-80">
        <div className="tech-marquee tech-marquee-reverse flex w-max gap-3">
          {[...WORKFLOW_STEPS, ...WORKFLOW_STEPS].map((step, index) => (
            <span
              key={`${step.label}-${index}`}
              className="rounded-full border border-border-dim bg-bg/70 px-5 py-1 font-mono text-xs uppercase tracking-[0.2em] text-amber"
            >
              {step.label}
            </span>
          ))}
        </div>
      </div>
      <div className="relative mx-auto flex max-w-6xl justify-center pt-14">
        <div className="glass-card w-full max-w-2xl rounded-[2rem] border border-border/80 p-8 text-center shadow-2xl shadow-accent/10 sm:p-12">
          <SectionHeader
            label={SECTION_TEXT.contact.label}
            title={SECTION_TEXT.contact.title}
            subtitle={SECTION_TEXT.contact.subtitle}
            centered
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {CONTACT_LINKS.map((link) => {
              const Icon = link.icon

              return (
                <a
                  key={`${personal.name}-${link.label}`}
                  href={link.href}
                  className="inline-flex min-h-[4.5rem] items-center justify-start gap-3 rounded-xl border border-border px-5 py-3 text-left text-sm font-medium text-text transition-all hover:-translate-y-0.5 hover:border-rose hover:text-rose"
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-bg text-rose">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-xs uppercase tracking-[0.14em] text-dim">{link.label}</span>
                    <span className="block truncate">{link.value}</span>
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
