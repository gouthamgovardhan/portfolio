interface SectionHeaderProps {
  label: string
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionHeader({ label, title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div className={centered ? 'mx-auto mb-10 max-w-xl text-center' : 'mb-14 max-w-2xl'}>
      <p className="mb-2 font-mono text-xs uppercase tracking-[0.14em] text-accent">{label}</p>
      <h2 className="mb-3 text-3xl font-bold leading-tight text-text sm:text-4xl">{title}</h2>
      {subtitle ? <p className="text-base leading-relaxed text-muted sm:text-lg">{subtitle}</p> : null}
    </div>
  )
}
