import { useEffect, useMemo, useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'
import { ACTION_LABELS, NAV_LINKS, PERSONAL } from '../data/portfolio'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { AnimatedThemeToggler } from './ui/AnimatedThemeToggler'

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

  useEffect(() => {
    if (!open) return undefined

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [open])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 h-16 bg-bg/75 backdrop-blur-lg transition-colors ${
        scrolled ? 'border-b border-border-dim' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
        <a href="#hero" className="nav-brand text-lg font-bold tracking-tight" onClick={() => setOpen(false)}>
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
                    ? `rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                        active
                          ? 'bg-text text-bg shadow-lg shadow-accent/20'
                          : 'bg-accent text-bg hover:bg-accent-h'
                      }`
                    : `text-sm font-medium transition-colors hover:text-text ${
                        active ? 'text-accent-h' : 'text-muted'
                      }`
                }
              >
                {link.label}
              </a>
            )
          })}
          <AnimatedThemeToggler variant="hexagon" />
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <AnimatedThemeToggler variant="hexagon" />
          <button
            type="button"
            className="lift-card-subtle inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/70 text-text hover:bg-accent/10"
            aria-label={ACTION_LABELS.menu}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-border bg-bg px-6 py-4 shadow-2xl shadow-bg/60 lg:hidden ${
          open ? 'grid gap-2' : 'hidden'
        }`}
      >
        {NAV_LINKS.map((link) => {
          const active = activeId === link.id

          return (
            <a
              key={link.id}
              href={link.href}
              className={`lift-card-subtle rounded-xl border px-4 py-3 text-sm font-semibold ${
                active
                  ? 'border-accent/50 bg-accent/15 text-text shadow-lg shadow-accent/10'
                  : 'border-border bg-card text-text hover:bg-surface'
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          )
        })}
      </div>
    </nav>
  )
}
