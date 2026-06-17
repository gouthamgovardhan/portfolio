import { type CSSProperties, type HTMLAttributes, type ReactNode } from 'react'

interface MarqueeProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  reverse?: boolean
  pauseOnHover?: boolean
  vertical?: boolean
  repeat?: number
}

export function Marquee({
  children,
  className = '',
  reverse = false,
  pauseOnHover = false,
  vertical = false,
  repeat = 4,
  style,
  ...props
}: MarqueeProps) {
  return (
    <div
      className={`marquee ${vertical ? 'marquee-vertical' : ''} ${pauseOnHover ? 'marquee-pause' : ''} ${className}`}
      data-reverse={reverse}
      style={style as CSSProperties}
      {...props}
    >
      {Array.from({ length: repeat }).map((_, index) => (
        <div key={index} className="marquee-track" aria-hidden={index > 0}>
          {children}
        </div>
      ))}
    </div>
  )
}
