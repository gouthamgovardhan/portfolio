import type { StatItem } from '../data/portfolio'

interface StatsProps {
  stats: StatItem[]
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section id="stats" className="section-shell border-y border-border-dim/40 bg-card/20 py-9 backdrop-blur-sm" aria-label="Career highlights">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-4 px-6 text-center md:grid-cols-4 md:gap-y-0">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex min-h-32 flex-col items-center justify-start px-4 py-3 ${
              index % 2 === 0 ? 'border-r border-border-dim' : ''
            } ${index < stats.length - 2 ? 'border-b border-border-dim md:border-b-0' : ''} ${
              index < stats.length - 1 ? 'md:border-r md:border-border-dim' : ''
            }`}
          >
            <p className="text-3xl font-bold tracking-tight text-text">
              {stat.value}
              <span className="text-accent">{stat.suffix}</span>
            </p>
            <p className="mt-1 text-sm font-medium text-text">{stat.label}</p>
            {stat.detail ? <p className="mt-1 text-xs leading-5 text-muted">{stat.detail}</p> : null}
          </div>
        ))}
      </div>
    </section>
  )
}
