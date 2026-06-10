import { Children, cloneElement, isValidElement, useEffect, useMemo, useRef, useState, type HTMLAttributes, type ReactElement, type ReactNode } from 'react'

type SequenceChildProps = {
  sequenceDelay?: number
  sequenceActive?: boolean
}

interface TerminalProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  sequence?: boolean
  startOnView?: boolean
}

interface AnimatedSpanProps extends HTMLAttributes<HTMLElement> {
  delay?: number
  as?: 'div' | 'li' | 'p' | 'span'
  startOnView?: boolean
  sequenceDelay?: number
  sequenceActive?: boolean
}

interface TypingAnimationProps extends HTMLAttributes<HTMLElement> {
  children: string
  duration?: number
  delay?: number
  as?: 'article' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'li' | 'p' | 'section' | 'span'
  startOnView?: boolean
  sequenceDelay?: number
  sequenceActive?: boolean
}

function useInView<T extends HTMLElement>(startOnView = true) {
  const ref = useRef<T | null>(null)
  const [isInView, setIsInView] = useState(!startOnView)

  useEffect(() => {
    if (!startOnView || isInView) return undefined
    const element = ref.current
    if (!element) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [isInView, startOnView])

  return [ref, isInView] as const
}

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function Terminal({ children, className = '', sequence = true, startOnView = true, ...props }: TerminalProps) {
  const [ref, isInView] = useInView<HTMLDivElement>(startOnView)
  const sequencedChildren = useMemo(() => {
    if (!sequence) return children

    let nextDelay = 120

    return Children.map(children, (child) => {
      if (!isValidElement<SequenceChildProps>(child)) return child
      if (typeof child.type === 'string') return child

      const props = child.props as SequenceChildProps & { children?: ReactNode; duration?: number }
      const sequenceDelay = nextDelay
      const textLength = typeof props.children === 'string' ? props.children.length : 18
      const duration = typeof props.duration === 'number' ? props.duration : 32
      nextDelay += child.type === TypingAnimation ? textLength * duration + 220 : 260

      return cloneElement(child as ReactElement<SequenceChildProps>, {
        sequenceDelay,
        sequenceActive: isInView,
      })
    })
  }, [children, isInView, sequence])

  return (
    <div ref={ref} className={`magic-terminal ${className}`} {...props}>
      {sequencedChildren}
    </div>
  )
}

export function AnimatedSpan({
  children,
  className = '',
  delay = 0,
  as: Component = 'span',
  startOnView = false,
  sequenceDelay,
  sequenceActive,
  ...props
}: AnimatedSpanProps) {
  const [ref, isInView] = useInView<HTMLElement>(startOnView)
  const active = sequenceActive ?? isInView
  const finalDelay = sequenceDelay ?? delay

  return (
    <Component
      ref={ref}
      className={`magic-terminal-line ${active ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: active ? `${finalDelay}ms` : '0ms' }}
      {...props}
    >
      {children}
    </Component>
  )
}

export function TypingAnimation({
  children,
  className = '',
  duration = 32,
  delay = 0,
  as: Component = 'span',
  startOnView = true,
  sequenceDelay,
  sequenceActive,
  ...props
}: TypingAnimationProps) {
  const [ref, isInView] = useInView<HTMLElement>(startOnView)
  const [displayedText, setDisplayedText] = useState('')
  const active = sequenceActive ?? isInView
  const finalDelay = sequenceDelay ?? delay

  useEffect(() => {
    if (!active) return undefined
    if (prefersReducedMotion()) {
      setDisplayedText(children)
      return undefined
    }

    setDisplayedText('')
    let index = 0
    let intervalId: number | undefined
    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        index += 1
        setDisplayedText(children.slice(0, index))
        if (index >= children.length && intervalId) {
          window.clearInterval(intervalId)
        }
      }, duration)
    }, finalDelay)

    return () => {
      window.clearTimeout(timeoutId)
      if (intervalId) window.clearInterval(intervalId)
    }
  }, [active, children, duration, finalDelay])

  return (
    <Component ref={ref as never} className={`magic-terminal-line is-visible ${className}`} {...props}>
      {displayedText}
    </Component>
  )
}
