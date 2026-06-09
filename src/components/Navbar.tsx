import { useEffect, useMemo, useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { ACTION_LABELS, NAV_LINKS, PERSONAL } from '../data/portfolio'
import { useScrollSpy } from '../hooks/useScrollSpy'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const sectionIds = useMemo(() => NAV_LINKS.map((link) => link.id), [])
  const activeId = useScrollSpy(sectionIds)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    handler()

    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 h-16 bg-bg/75 backdrop-blur-lg transition-colors ${
        scrolled ? 'border-b border-border-dim' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
        <a href="#hero" className="text-lg font-bold tracking-tight" onClick={() => setOpen(false)}>
          {PERSONAL.shortName}
          <span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {NAV_LINKS.map((link) => {
            const active = activeId === link.id
            const isContact = link.id === 'contact'

            return (
              <a
                key={link.id}
                href={link.href}
                className={
                  isContact
                    ? 'rounded-md bg-accent px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-accent-h'
                    : `text-sm font-medium transition-colors hover:text-text ${
                        active ? 'text-accent-h' : 'text-muted'
                      }`
                }
              >
                {link.label}
              </a>
            )
          })}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-text lg:hidden"
          aria-label={ACTION_LABELS.menu}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </div>

      <div
        className={`border-b border-border bg-bg/95 px-6 py-4 backdrop-blur-lg lg:hidden ${
          open ? 'flex flex-col gap-3' : 'hidden'
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className="border-b border-border-dim py-2 text-sm font-medium text-muted last:border-b-0"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
