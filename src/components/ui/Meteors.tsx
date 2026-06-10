import type { CSSProperties } from 'react'

interface MeteorsProps {
  number?: number
  className?: string
}

export function Meteors({ number = 16, className = '' }: MeteorsProps) {
  return (
    <div className={`meteors ${className}`} aria-hidden="true">
      {Array.from({ length: number }, (_, index) => {
        const style = {
          '--meteor-index': index,
          '--meteor-left': `${(index * 17) % 100}%`,
          '--meteor-top': `${(index * 29) % 75}%`,
          '--meteor-delay': `${(index * 0.47) % 6}s`,
          '--meteor-duration': `${5.8 + (index % 6) * 0.65}s`,
        } as CSSProperties

        return <span key={index} style={style} />
      })}
    </div>
  )
}
