import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: CardProps) {
  const hoverClass = hover ? 'hover:-translate-y-0.5 hover:border-accent' : ''

  return (
    <div className={`rounded-xl border border-border bg-card p-7 transition-all ${hoverClass} ${className}`}>
      {children}
    </div>
  )
}
