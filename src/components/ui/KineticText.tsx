import type { CSSProperties, ElementType, HTMLAttributes } from 'react'

interface KineticTextProps extends HTMLAttributes<HTMLElement> {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
}

export function KineticText({ text, as = 'h1', className = '', ...props }: KineticTextProps) {
  const Component = as as ElementType

  return (
    <Component className={`kinetic-text ${className}`} aria-label={text} {...props}>
      {Array.from(text).map((character, index) => (
        <span key={`${character}-${index}`} style={{ '--kinetic-index': index } as CSSProperties} aria-hidden="true">
          {character === ' ' ? '\u00A0' : character}
        </span>
      ))}
    </Component>
  )
}
