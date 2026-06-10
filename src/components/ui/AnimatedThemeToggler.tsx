import { useEffect, useState, type ButtonHTMLAttributes, type MouseEvent } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa6'

type Theme = 'light' | 'dark'
type TransitionVariant = 'circle' | 'square' | 'diamond' | 'rectangle' | 'hexagon' | 'star'

interface AnimatedThemeTogglerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  duration?: number
  variant?: TransitionVariant
  fromCenter?: boolean
}

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => {
    ready: Promise<void>
    finished: Promise<void>
  }
}

const THEME_EVENT = 'portfolio-theme-change'

function isTheme(value: string | null): value is Theme {
  return value === 'light' || value === 'dark'
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  window.dispatchEvent(new CustomEvent<Theme>(THEME_EVENT, { detail: theme }))
}

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  const current = document.documentElement.dataset.theme
  if (isTheme(current)) return current
  return 'dark'
}

function clipPathForVariant(variant: TransitionVariant, radius: number) {
  if (variant === 'square') return [`inset(50% 50% 50% 50%)`, `inset(0 0 0 0)`]
  if (variant === 'rectangle') return [`inset(48% 34% 48% 34%)`, `inset(0 0 0 0)`]
  if (variant === 'diamond') return ['polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)', 'polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%)']
  if (variant === 'hexagon') return ['polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%)', 'polygon(25% 0%, 75% 0%, 115% 50%, 75% 100%, 25% 100%, -15% 50%)']
  if (variant === 'star') return ['circle(0px at 50% 50%)', `circle(${radius}px at 50% 50%)`]
  return [`circle(0px at var(--theme-x) var(--theme-y))`, `circle(${radius}px at var(--theme-x) var(--theme-y))`]
}

export function AnimatedThemeToggler({
  className = '',
  duration = 520,
  variant = 'circle',
  fromCenter = false,
  ...props
}: AnimatedThemeTogglerProps) {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme())

  useEffect(() => {
    const handler = (event: Event) => {
      const nextTheme = (event as CustomEvent<Theme>).detail
      if (nextTheme === 'light' || nextTheme === 'dark') {
        setTheme(nextTheme)
      }
    }

    applyTheme(theme)
    window.addEventListener(THEME_EVENT, handler)

    return () => window.removeEventListener(THEME_EVENT, handler)
    // Run once on mount. Theme changes go through applyTheme().
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggleTheme = async (event: MouseEvent<HTMLButtonElement>) => {
    const currentTheme = getInitialTheme()
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark'
    const root = document.documentElement
    const x = fromCenter ? window.innerWidth / 2 : event.clientX
    const y = fromCenter ? window.innerHeight / 2 : event.clientY
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))
    const [from, to] = clipPathForVariant(variant, radius)
    root.style.setProperty('--theme-x', `${x}px`)
    root.style.setProperty('--theme-y', `${y}px`)

    const transitionDocument = document as ViewTransitionDocument
    if (!transitionDocument.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTheme(nextTheme)
      applyTheme(nextTheme)
      return
    }

    const transition = transitionDocument.startViewTransition(() => {
      setTheme(nextTheme)
      applyTheme(nextTheme)
    })

    await transition.ready
    root.animate(
      { clipPath: [from, to] },
      {
        duration,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        pseudoElement: '::view-transition-new(root)',
      },
    )
  }

  return (
    <button
      {...props}
      type="button"
      className={`theme-toggle ${className}`}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      onClick={toggleTheme}
    >
      <span className="theme-toggle-track" aria-hidden="true">
        <FaSun className="theme-toggle-sun" />
        <FaMoon className="theme-toggle-moon" />
      </span>
    </button>
  )
}
