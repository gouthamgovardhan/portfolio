import { CONTACT_LINKS, SECTION_TEXT, WORKFLOW_STEPS, type PERSONAL } from '../data/portfolio'
import { SectionHeader } from './ui/SectionHeader'

interface ContactProps {
  personal: typeof PERSONAL
}

export default function Contact({ personal }: ContactProps) {
  return (
    <section id="contact" className="section-shell overflow-hidden px-6 py-24">
      <div className="pointer-events-none absolute left-[8%] top-28 h-24 w-24 rotate-12 border border-cyan/20" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-20 right-[10%] h-16 w-32 -rotate-6 border border-amber/20" aria-hidden="true" />
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
        <div className="lift-card glass-card w-full max-w-4xl rounded-[2rem] border border-border/80 p-6 shadow-2xl shadow-accent/10 sm:p-8 lg:p-10">
          <SectionHeader
            label={SECTION_TEXT.contact.label}
            title={SECTION_TEXT.contact.title}
            subtitle={SECTION_TEXT.contact.subtitle}
            centered
          />
          <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="relative overflow-hidden rounded-[1.4rem] border border-accent/30 bg-bg/45 p-5">
              <div className="absolute -right-10 -top-10 h-28 w-28 rotate-45 border border-cyan/20" aria-hidden="true" />
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Contact channel</p>
              <h3 className="mt-4 text-2xl font-black leading-tight text-text">{personal.openToHire}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                Best for AI engineering, Salesforce, backend automation, and production workflow conversations.
              </p>
              <div className="mt-6 grid gap-3">
                {['Email first', personal.location, personal.timezone].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-border-dim bg-card/45 px-4 py-3">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald shadow-[0_0_16px_color-mix(in_srgb,var(--color-emerald)_70%,transparent)]" />
                    <span className="text-sm font-semibold text-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {CONTACT_LINKS.map((link) => {
                const Icon = link.icon

                return (
                  <a
                    key={`${personal.name}-${link.label}`}
                    href={link.href}
                    className="lift-card-subtle group inline-flex min-h-[5.25rem] min-w-0 items-center justify-start gap-3 rounded-[1.1rem] border border-border bg-bg/35 px-5 py-4 text-left text-sm font-medium text-text hover:text-rose"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border-dim bg-card text-rose transition group-hover:border-rose/40 group-hover:bg-rose/10">
                      <Icon aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-xs uppercase tracking-[0.14em] text-dim">{link.label}</span>
                      <span className="mt-1 block break-words leading-snug">{link.value}</span>
                    </span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
