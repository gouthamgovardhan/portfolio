import type { CSSProperties, ElementType, HTMLAttributes } from 'react'

interface KineticTextProps extends HTMLAttributes<HTMLElement> {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
}

export function KineticText({ text, as = 'h1', className = '', ...props }: KineticTextProps) {
  const Component = as as ElementType
  let characterIndex = 0

  return (
    <Component className={`kinetic-text ${className}`} aria-label={text} {...props}>
      {text.split(' ').map((word, wordIndex) => (
        <span key={`${word}-${wordIndex}`} className="kinetic-word" aria-hidden="true">
          {Array.from(word).map((character) => {
            const index = characterIndex
            characterIndex += 1

            return (
              <span key={`${character}-${index}`} style={{ '--kinetic-index': index } as CSSProperties}>
                {character}
              </span>
            )
          })}
        </span>
      ))}
    </Component>
  )
}
