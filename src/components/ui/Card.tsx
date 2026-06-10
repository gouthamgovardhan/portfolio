import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: CardProps) {
  const hoverClass = hover ? 'lift-card' : ''

  return (
    <div className={`rounded-xl border border-border bg-card p-7 ${hoverClass} ${className}`}>
      {children}
    </div>
  )
}
