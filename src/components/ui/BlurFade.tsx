import { useEffect, useRef, useState, type CSSProperties, type HTMLAttributes, type ReactNode } from 'react'

interface BlurFadeProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  delay?: number
  duration?: number
  offset?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  inView?: boolean
  inViewMargin?: string
  blur?: string
}

function getOffset(direction: NonNullable<BlurFadeProps['direction']>, offset: number) {
  if (direction === 'up') return `0 ${offset}px`
  if (direction === 'down') return `0 -${offset}px`
  if (direction === 'left') return `${offset}px 0`
  return `-${offset}px 0`
}

export function BlurFade({
  children,
  className = '',
  delay = 0,
  duration = 0.42,
  offset = 10,
  direction = 'down',
  inView = false,
  inViewMargin = '-50px',
  blur = '8px',
  style,
  ...props
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(!inView)

  useEffect(() => {
    if (!inView || visible) return undefined
    const element = ref.current
    if (!element) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: inViewMargin },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [inView, inViewMargin, visible])

  const [x, y] = getOffset(direction, offset).split(' ')
  const blurStyle = {
    '--blur-fade-delay': `${delay}s`,
    '--blur-fade-duration': `${duration}s`,
    '--blur-fade-x': x,
    '--blur-fade-y': y,
    '--blur-fade-blur': blur,
    ...style,
  } as CSSProperties

  return (
    <div ref={ref} className={`blur-fade ${visible ? 'is-visible' : ''} ${className}`} style={blurStyle} {...props}>
      {children}
    </div>
  )
}
