import { useState } from 'react'
import type { StatItem } from '../data/portfolio'
import { DetailDialog, type DetailDialogContent, type DetailTone } from './ui/DetailDialog'

interface StatsProps {
  stats: StatItem[]
}

const statTones: DetailTone[] = ['cyan', 'emerald', 'accent', 'amber']

function getStatDetail(stat: StatItem, index: number): DetailDialogContent {
  return {
    eyebrow: 'Career signal',
    title: `${stat.value}${stat.suffix} ${stat.label}`,
    description: stat.detail ?? 'A quick metric that summarizes the portfolio evidence at a glance.',
    tone: statTones[index % statTones.length],
    sections: [
      { title: 'What it means', body: stat.detail ?? 'This is a compressed proof point; use it as a starting point for the project, experience, or contact conversation.' },
      { title: 'How to read it', body: 'The number is intentionally brief on the home page, with this popup carrying the extra context.' },
    ],
  }
}

export default function Stats({ stats }: StatsProps) {
  const [selectedStat, setSelectedStat] = useState<{ stat: StatItem; index: number } | null>(null)

  return (
    <section id="stats" className="section-shell border-y border-border-dim/40 bg-card/20 py-9 backdrop-blur-sm" aria-label="Career highlights">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-4 px-6 text-center md:grid-cols-4 md:gap-y-0">
        {stats.map((stat, index) => (
          <button
            type="button"
            key={stat.label}
            onClick={() => setSelectedStat({ stat, index })}
            className={`flex min-h-32 flex-col items-center justify-start px-4 py-3 ${
              index % 2 === 0 ? 'border-r border-border-dim' : ''
            } ${index < stats.length - 2 ? 'border-b border-border-dim md:border-b-0' : ''} ${
              index < stats.length - 1 ? 'md:border-r md:border-border-dim' : ''
            } outline-none transition hover:bg-card/35 focus-visible:bg-card/45`}
          >
            <p className="text-3xl font-bold tracking-tight text-text">
              {stat.value}
              <span className="text-accent">{stat.suffix}</span>
            </p>
            <p className="mt-1 text-sm font-medium text-text">{stat.label}</p>
            <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-dim">View context</p>
          </button>
        ))}
      </div>
      {selectedStat ? <DetailDialog content={getStatDetail(selectedStat.stat, selectedStat.index)} onClose={() => setSelectedStat(null)} /> : null}
    </section>
  )
}
