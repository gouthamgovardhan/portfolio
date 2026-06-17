import { Children, type CSSProperties, type HTMLAttributes, type ReactNode } from 'react'

interface AnimatedListProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  delay?: number
}

export function AnimatedList({ children, className = '', delay = 120, style, ...props }: AnimatedListProps) {
  const items = Children.toArray(children)

  return (
    <div className={`animated-list ${className}`} style={style} {...props}>
      {items.map((child, index) => (
        <div
          key={index}
          className="animated-list-item"
          style={{ '--animated-list-delay': `${index * delay}ms` } as CSSProperties}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
