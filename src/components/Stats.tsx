import type { StatItem } from '../data/portfolio'

interface StatsProps {
  stats: StatItem[]
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section id="stats" className="border-y border-border-dim bg-surface py-9">
      <div className="mx-auto grid max-w-6xl grid-cols-2 px-6 text-center md:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`px-4 py-3 ${
              index !== stats.length - 1 ? 'md:border-r md:border-border-dim' : ''
            } ${index % 2 === 0 ? 'border-r border-border-dim md:border-r' : ''}`}
          >
            <p className="text-3xl font-bold tracking-tight text-text">
              {stat.value}
              <span className="text-accent">{stat.suffix}</span>
            </p>
            <p className="mt-1 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
