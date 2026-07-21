import { ROLE_PATHS } from '../data/portfolio'
import { useActiveRole } from '../context/RoleContext'

const toneClasses = {
  cyan: 'border-cyan/40 bg-cyan/10 text-cyan',
  accent: 'border-accent/40 bg-accent/10 text-accent-h',
  emerald: 'border-emerald/40 bg-emerald/10 text-emerald',
  amber: 'border-amber/40 bg-amber/10 text-amber',
  rose: 'border-rose/40 bg-rose/10 text-rose',
  violet: 'border-violet/40 bg-violet/10 text-violet',
  azure: 'border-azure/40 bg-azure/10 text-azure',
} as const

export default function RoleSwitcher() {
  const { activeRole, setActiveRole } = useActiveRole()

  return (
    <div className="flex items-center gap-2 overflow-x-auto py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <button
        type="button"
        onClick={() => setActiveRole(null)}
        aria-pressed={activeRole === null}
        className={`shrink-0 rounded-full border px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.12em] transition ${
          activeRole === null
            ? 'border-text/40 bg-text/10 text-text'
            : 'border-border-dim bg-bg/45 text-muted hover:text-text'
        }`}
      >
        All
      </button>
      {ROLE_PATHS.map((path) => {
        const active = activeRole === path.id

        return (
          <button
            key={path.id}
            type="button"
            onClick={() => setActiveRole(path.id)}
            aria-pressed={active}
            className={`shrink-0 rounded-full border px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.12em] transition ${
              active ? toneClasses[path.tone] : 'border-border-dim bg-bg/45 text-muted hover:text-text'
            }`}
          >
            {path.shortLabel}
          </button>
        )
      })}
    </div>
  )
}
