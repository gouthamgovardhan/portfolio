import { useState, type CSSProperties, type FormEvent } from 'react'
import { createPortal } from 'react-dom'
import { FaPaperPlane } from 'react-icons/fa6'
import { CONTACT_LINKS, SECTION_TEXT, WORKFLOW_STEPS, type ContactLinkItem, type PERSONAL } from '../data/portfolio'
import { DetailDialog, type DetailDialogContent } from './ui/DetailDialog'
import { SectionHeader } from './ui/SectionHeader'

interface ContactProps {
  personal: typeof PERSONAL
}

const DEFAULT_FORM_ENDPOINT = 'https://formspree.io/f/mkolwkjw'
const FORM_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT?.trim() || DEFAULT_FORM_ENDPOINT

function getContactLinkDetail(link: ContactLinkItem): DetailDialogContent {
  const description =
    link.label === 'LinkedIn'
      ? 'Best for recruiting conversations, professional context, and quick connection requests.'
      : link.label === 'GitHub'
        ? 'Best for code, repositories, implementation style, and project history.'
        : 'Best for Salesforce credentials, Trailhead proof, badges, and Agentforce learning context.'

  return {
    eyebrow: 'Public profile',
    title: link.label,
    description,
    tone: link.label === 'GitHub' ? 'emerald' : link.label === 'LinkedIn' ? 'cyan' : 'accent',
    sections: [
      { title: 'Best used for', body: description },
      { title: 'Handle', body: link.value },
    ],
    actions: [{ label: `Open ${link.label}`, href: link.href, external: true }],
  }
}

export default function Contact({ personal }: ContactProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [detail, setDetail] = useState<DetailDialogContent | null>(null)
  const [flightOrigin, setFlightOrigin] = useState<{ x: number; y: number } | null>(null)
  const isSuccess = status === 'success'

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!FORM_ENDPOINT) {
      setStatus('error')
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)

    if (formData.get('botcheck')) return

    setStatus('sending')

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      if (!response.ok) throw new Error('Contact form submission failed')

      form.reset()
      form.scrollIntoView({ behavior: 'auto', block: 'center' })

      const rect = form.getBoundingClientRect()
      setFlightOrigin({
        x: Math.min(window.innerWidth - 84, Math.max(84, rect.left + rect.width * 0.58)),
        y: Math.min(window.innerHeight - 156, Math.max(112, rect.top + rect.height * 0.44)),
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
    <section id="contact" className="section-shell overflow-hidden px-6 py-24">
      <div className="contact-section-field" aria-hidden="true">
        <span />
        <span />
      </div>
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
              <div className="contact-card-circuit" aria-hidden="true">
                <span />
                <span />
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Contact channel</p>
              <h3 className="mt-4 text-2xl font-black leading-tight text-text">{personal.openToHire}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                Best for AI engineering, Salesforce, backend automation, and production workflow conversations.
              </p>
              <div className="mt-6 grid gap-3">
                {['Form first', personal.location, personal.timezone].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-border-dim bg-card/45 px-4 py-3">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald shadow-[0_0_16px_color-mix(in_srgb,var(--color-emerald)_70%,transparent)]" />
                    <span className="text-sm font-semibold text-text">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3">
                {CONTACT_LINKS.map((link) => {
                  const Icon = link.icon

                return (
                    <button
                      type="button"
                      key={`${personal.name}-${link.label}`}
                      onClick={() => setDetail(getContactLinkDetail(link))}
                      className="lift-card-subtle group inline-flex min-w-0 items-center justify-start gap-3 rounded-[1.1rem] border border-border bg-bg/35 px-4 py-3 text-left text-sm font-medium text-text hover:text-rose"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border-dim bg-card text-rose transition group-hover:border-rose/40 group-hover:bg-rose/10">
                        <Icon aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-mono text-xs uppercase tracking-[0.14em] text-dim">{link.label}</span>
                        <span className="mt-1 block break-words leading-snug">{link.value}</span>
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            <form
              action={FORM_ENDPOINT}
              method="POST"
              className={`contact-form-shell grid gap-4 rounded-[1.4rem] border border-border bg-bg/35 p-5 ${isSuccess ? 'is-sent' : ''}`}
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="_subject" value="New portfolio contact message" />
              <input type="hidden" name="source" value="Portfolio contact form" />
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              {!isSuccess ? (
                <>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-dim">Name</span>
                  <input
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="rounded-2xl border border-border-dim bg-card/65 px-4 py-3 text-sm text-text outline-none transition placeholder:text-dim focus:border-accent"
                    placeholder="Your name"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-dim">Reply email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="rounded-2xl border border-border-dim bg-card/65 px-4 py-3 text-sm text-text outline-none transition placeholder:text-dim focus:border-accent"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-dim">Topic</span>
                  <select
                    name="topic"
                    required
                    defaultValue=""
                    className="rounded-2xl border border-border-dim bg-card/65 px-4 py-3 text-sm text-text outline-none transition focus:border-accent"
                  >
                    <option value="" disabled>
                      Choose a topic
                    </option>
                    <option>Hiring / role fit</option>
                    <option>AI or backend work</option>
                    <option>Salesforce work</option>
                    <option>Collaboration</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className="grid gap-2">
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-dim">Company / context</span>
                  <input
                    name="context"
                    type="text"
                    autoComplete="organization"
                    className="rounded-2xl border border-border-dim bg-card/65 px-4 py-3 text-sm text-text outline-none transition placeholder:text-dim focus:border-accent"
                    placeholder="Optional"
                  />
                </label>
              </div>

              <label className="grid gap-2">
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-dim">Message</span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="min-h-40 resize-y rounded-2xl border border-border-dim bg-card/65 px-4 py-3 text-sm leading-6 text-text outline-none transition placeholder:text-dim focus:border-accent"
                  placeholder="Tell me what you are building, hiring for, or trying to solve."
                />
              </label>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-5 text-muted">
                  {FORM_ENDPOINT
                    ? 'Your email is used only so I can reply.'
                    : 'Form delivery needs a contact endpoint before deployment.'}
                </p>
                <button
                  type="submit"
                  disabled={status === 'sending' || !FORM_ENDPOINT}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-accent/45 bg-accent px-5 py-3 text-sm font-black text-bg transition hover:bg-accent-h disabled:cursor-not-allowed disabled:border-border-dim disabled:bg-card disabled:text-dim"
                >
                  <FaPaperPlane aria-hidden="true" />
                  {status === 'sending' ? 'Sending...' : 'Send message'}
                </button>
              </div>

              {status === 'error' ? (
                <p className="rounded-2xl border border-rose/30 bg-rose/10 px-4 py-3 text-sm font-semibold text-rose">
                  The form could not send right now. Please try LinkedIn while the endpoint is being connected.
                </p>
              ) : null}
                </>
              ) : (
                <div className="contact-sent-stage" role="status" aria-live="polite">
                  <div className="contact-form-paper" aria-hidden="true">
                    <div className="contact-form-paper-bar" />
                    <div className="contact-form-paper-grid">
                      <span />
                      <span />
                    </div>
                    <div className="contact-form-paper-grid">
                      <span />
                      <span />
                    </div>
                    <div className="contact-form-paper-message" />
                    <div className="contact-form-paper-button" />
                  </div>
                  <div className="contact-sent-copy">
                    <p>Message sent.</p>
                    <span>Expect a reply at the earliest.</span>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      {detail ? <DetailDialog content={detail} onClose={() => setDetail(null)} /> : null}
    </section>
    {isSuccess
      ? createPortal(
          <div
            className="contact-flight-layer"
            style={
              {
                '--contact-pickup-x': flightOrigin ? `${flightOrigin.x}px` : '64vw',
                '--contact-pickup-y': flightOrigin ? `${flightOrigin.y}px` : '52vh',
              } as CSSProperties
            }
            aria-hidden="true"
          >
            <div className="contact-flight-trail" />
            <div className="contact-pickup-scroll">
              <span>MSG</span>
            </div>
            <div className="contact-flight-bird">
              <svg className="contact-flight-bird-svg" viewBox="0 0 180 112" focusable="false">
                <defs>
                  <linearGradient id="contactBirdBody" x1="34" x2="146" y1="34" y2="82" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#f7fbff" />
                    <stop offset="0.42" stopColor="#9fc8d8" />
                    <stop offset="1" stopColor="#56748a" />
                  </linearGradient>
                  <linearGradient id="contactBirdWing" x1="44" x2="104" y1="18" y2="76" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#dff6ff" />
                    <stop offset="0.52" stopColor="#5ca4c7" />
                    <stop offset="1" stopColor="#30475f" />
                  </linearGradient>
                  <linearGradient id="contactBirdScroll" x1="110" x2="152" y1="75" y2="94" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#fff9d9" />
                    <stop offset="1" stopColor="#f4d88c" />
                  </linearGradient>
                </defs>
                <path className="contact-flight-tail-feather contact-flight-tail-top" d="M48 57 C30 48 17 39 9 27 C29 28 45 36 58 49 Z" />
                <path className="contact-flight-tail-feather contact-flight-tail-bottom" d="M48 63 C29 68 17 77 8 91 C30 89 47 79 61 67 Z" />
                <path className="contact-flight-wing contact-flight-wing-back" d="M76 59 C54 47 42 31 40 12 C63 18 81 34 94 55 C90 67 84 70 76 59 Z" />
                <path className="contact-flight-body" d="M43 59 C56 38 89 31 116 38 C139 44 151 58 146 70 C139 86 108 93 76 84 C58 79 45 70 43 59 Z" />
                <path className="contact-flight-belly" d="M69 72 C86 80 117 78 135 66 C127 83 96 91 72 82 C60 78 52 71 49 63 C55 66 62 69 69 72 Z" />
                <path className="contact-flight-wing contact-flight-wing-front" d="M80 57 C61 33 59 15 76 4 C95 22 107 42 111 61 C101 72 91 72 80 57 Z" />
                <circle className="contact-flight-head" cx="139" cy="48" r="13" />
                <path className="contact-flight-beak" d="M151 47 L171 53 L151 58 Z" />
                <circle className="contact-flight-eye" cx="143" cy="44" r="2.4" />
                <path className="contact-flight-leg contact-flight-leg-left" d="M118 82 L112 95" />
                <path className="contact-flight-leg contact-flight-leg-right" d="M128 82 L132 96" />
                <g className="contact-flight-cargo">
                  <rect x="108" y="84" width="43" height="20" rx="10" />
                  <path d="M113 89 C124 95 136 95 146 89" />
                  <text x="129.5" y="98">MSG</text>
                </g>
              </svg>
            </div>
          </div>,
          document.body,
        )
      : null}
    </>
  )
}
