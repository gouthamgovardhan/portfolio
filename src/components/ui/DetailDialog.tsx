import { useEffect, useId, useRef, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { FaArrowUpRightFromSquare, FaXmark } from 'react-icons/fa6'

export type DetailTone = 'cyan' | 'accent' | 'emerald' | 'amber' | 'rose' | 'violet' | 'azure'

export interface DetailDialogAction {
  label: string
  href: string
  external?: boolean
  tone?: DetailTone
}

export interface DetailDialogSection {
  title: string
  body?: string
  items?: string[]
  ordered?: boolean
}

export interface DetailDialogContent {
  eyebrow?: string
  title: string
  description?: string
  media?: ReactNode
  sections?: DetailDialogSection[]
  tags?: string[]
  actions?: DetailDialogAction[]
  tone?: DetailTone
  aside?: ReactNode
}

interface DetailDialogProps {
  content: DetailDialogContent
  onClose: () => void
}

const toneClasses: Record<DetailTone, { chip: string; bar: string; action: string }> = {
  cyan: {
    chip: 'border-cyan/40 bg-cyan/10 text-cyan',
    bar: 'from-cyan via-cyan/35 to-transparent',
    action: 'border-cyan/40 text-cyan hover:bg-cyan/10',
  },
  accent: {
    chip: 'border-accent/40 bg-accent/10 text-accent-h',
    bar: 'from-accent via-accent/35 to-transparent',
    action: 'border-accent/40 text-accent-h hover:bg-accent/10',
  },
  emerald: {
    chip: 'border-emerald/40 bg-emerald/10 text-emerald',
    bar: 'from-emerald via-emerald/35 to-transparent',
    action: 'border-emerald/40 text-emerald hover:bg-emerald/10',
  },
  amber: {
    chip: 'border-amber/40 bg-amber/10 text-amber',
    bar: 'from-amber via-amber/35 to-transparent',
    action: 'border-amber/40 text-amber hover:bg-amber/10',
  },
  rose: {
    chip: 'border-rose/40 bg-rose/10 text-rose',
    bar: 'from-rose via-rose/35 to-transparent',
    action: 'border-rose/40 text-rose hover:bg-rose/10',
  },
  violet: {
    chip: 'border-violet/40 bg-violet/10 text-violet',
    bar: 'from-violet via-violet/35 to-transparent',
    action: 'border-violet/40 text-violet hover:bg-violet/10',
  },
  azure: {
    chip: 'border-azure/40 bg-azure/10 text-azure',
    bar: 'from-azure via-azure/35 to-transparent',
    action: 'border-azure/40 text-azure hover:bg-azure/10',
  },
}

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

export function DetailDialog({ content, onClose }: DetailDialogProps) {
  const titleId = useId()
  const panelRef = useRef<HTMLElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const tone = toneClasses[content.tone ?? 'cyan']
  const hasMedia = Boolean(content.media)

  useEffect(() => {
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab' || !panelRef.current) return

      const focusable = Array.from(panelRef.current.querySelectorAll<HTMLElement>(focusableSelector)).filter(
        (element) => element.offsetParent !== null || element === closeButtonRef.current,
      )
      if (!focusable.length) {
        event.preventDefault()
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    requestAnimationFrame(() => closeButtonRef.current?.focus())

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
      previouslyFocused?.focus()
    }
  }, [onClose])

  return createPortal(
    <div
      className="detail-dialog-backdrop fixed inset-0 z-[999] grid place-items-center px-4 py-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onMouseDown={onClose}
    >
      <article
        ref={panelRef}
        className={
          hasMedia
            ? 'detail-dialog-panel detail-dialog-panel-media relative max-h-[92vh] w-full max-w-7xl overflow-y-auto overflow-x-hidden rounded-[1.25rem] border border-border shadow-2xl lg:w-[82vw]'
            : 'detail-dialog-panel relative max-h-[86vh] w-full max-w-5xl overflow-hidden rounded-[1.25rem] border border-border shadow-2xl lg:w-[58vw]'
        }
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className={`h-1 w-full bg-gradient-to-r ${tone.bar}`} />
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="detail-dialog-close absolute right-4 top-4 z-30 grid size-11 shrink-0 place-items-center rounded-full border border-border-dim bg-bg/85 text-muted shadow-xl shadow-bg/30 backdrop-blur transition hover:border-accent/55 hover:text-text"
          aria-label="Close detail"
        >
          <FaXmark aria-hidden="true" />
        </button>

        {hasMedia ? (
          <div className="detail-dialog-media-stage relative border-b border-border-dim">
            {content.media}
          </div>
        ) : (
          <div className="flex items-start justify-between gap-5 border-b border-border-dim p-5 pr-16 sm:p-6 sm:pr-20">
            <div className="min-w-0">
              {content.eyebrow ? (
                <p className={`w-fit rounded-full border px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.16em] ${tone.chip}`}>
                  {content.eyebrow}
                </p>
              ) : null}
              <h3 id={titleId} className="mt-4 text-2xl font-black leading-tight text-text sm:text-3xl">
                {content.title}
              </h3>
              {content.description ? <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">{content.description}</p> : null}
            </div>
          </div>
        )}

        <div className={hasMedia ? 'detail-dialog-scroll p-5 sm:p-6' : 'detail-dialog-scroll max-h-[64vh] overflow-y-auto p-5 sm:p-6'}>
          {hasMedia ? (
            <div className="detail-dialog-media-summary mb-5 rounded-[1rem] border border-border-dim bg-card/45 p-5 sm:p-6">
              {content.eyebrow ? (
                <p className={`w-fit rounded-full border px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.16em] ${tone.chip}`}>
                  {content.eyebrow}
                </p>
              ) : null}
              <h3 id={titleId} className="mt-4 text-2xl font-black leading-tight text-text sm:text-4xl">
                {content.title}
              </h3>
              {content.description ? <p className="mt-4 max-w-4xl text-sm font-medium leading-6 text-muted sm:text-base">{content.description}</p> : null}
            </div>
          ) : null}

          <div className={content.aside ? (hasMedia ? 'grid gap-5' : 'grid gap-5 lg:grid-cols-[minmax(0,1fr)_18rem]') : 'grid gap-5'}>
            <div className="grid gap-5">
              {content.sections?.map((section) => {
                const List = section.ordered ? 'ol' : 'ul'

                return (
                  <section key={section.title} className="detail-dialog-section rounded-[1rem] border border-border-dim bg-card/45 p-5">
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent">{section.title}</p>
                    {section.body ? <p className="mt-3 text-sm font-medium leading-7 text-text">{section.body}</p> : null}
                    {section.items?.length ? (
                      <List className="mt-4 grid gap-3">
                        {section.items.map((item, index) => (
                          <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
                            <span className="mt-0.5 shrink-0 font-mono text-accent">
                              {section.ordered ? String(index + 1).padStart(2, '0') : '›'}
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </List>
                    ) : null}
                  </section>
                )
              })}

              {content.tags?.length ? (
                <section className="detail-dialog-section rounded-[1rem] border border-border-dim bg-card/45 p-5">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-dim">Signals</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {content.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-border-dim bg-bg/55 px-3 py-1.5 font-mono text-xs font-semibold text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </section>
              ) : null}
            </div>

            {content.aside ? <aside className={hasMedia ? 'grid gap-4 md:grid-cols-2' : 'grid content-start gap-4'}>{content.aside}</aside> : null}
          </div>

          {content.actions?.length ? (
            <div className="mt-5 flex flex-wrap gap-3">
              {content.actions.map((action) => {
                const actionTone = toneClasses[action.tone ?? content.tone ?? 'cyan']
                const external = action.external ?? action.href.startsWith('http')

                return (
                  <a
                    key={`${action.label}-${action.href}`}
                    href={action.href}
                    className={`lift-card-subtle inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-bold ${actionTone.action}`}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noreferrer' : undefined}
                  >
                    {action.label}
                    <FaArrowUpRightFromSquare aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          ) : null}
        </div>
      </article>
    </div>,
    document.body,
  )
}
