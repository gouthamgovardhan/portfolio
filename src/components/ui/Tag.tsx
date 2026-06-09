interface TagProps {
  label: string
  variant?: 'default' | 'accent'
}

export function Tag({ label, variant = 'default' }: TagProps) {
  const base = 'font-mono text-xs px-2.5 py-0.5 rounded border transition-colors'
  const variants = {
    default: 'border-border text-muted bg-accent/5 hover:border-accent hover:text-accent-h',
    accent: 'border-accent/30 text-emerald bg-emerald/10',
  }

  return <span className={`${base} ${variants[variant]}`}>{label}</span>
}
