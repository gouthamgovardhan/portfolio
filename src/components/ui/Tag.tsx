import { TECH_EXPLANATIONS } from '../../data/portfolio'

interface TagProps {
  label: string
  variant?: 'default' | 'accent'
  /** Show a single tooltip on hover/focus only — off by default in dense layouts */
  tooltip?: boolean
}

export function Tag({ label, variant = 'default', tooltip = false }: TagProps) {
  const explanation = TECH_EXPLANATIONS[label] ?? 'Related tool, concept, or workflow signal used in this portfolio.'
  const base =
    'inline-flex max-w-full items-center rounded-full border px-3 py-1.5 font-mono text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber'
  const variants = {
    default: 'border-border-dim bg-card/50 text-muted hover:border-accent/40 hover:text-text',
    accent: 'border-accent/30 bg-emerald/10 text-emerald hover:border-emerald',
  }

  if (!tooltip) {
    return <span className={`${base} ${variants[variant]}`}>{label}</span>
  }

  return (
    <span className={`group/tag relative ${base} ${variants[variant]}`} tabIndex={0} aria-label={`${label}: ${explanation}`}>
      {label}
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-[calc(100%+0.45rem)] left-1/2 z-50 hidden w-52 -translate-x-1/2 rounded-xl border border-border bg-bg/95 p-3 text-left text-[0.7rem] font-normal leading-5 text-muted shadow-2xl opacity-0 backdrop-blur-sm transition-opacity duration-150 group-hover/tag:opacity-100 group-focus-visible/tag:opacity-100 group-hover/tag:block group-focus-visible/tag:block"
      >
        <span className="mb-1 block font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-amber">{label}</span>
        {explanation}
      </span>
    </span>
  )
}
