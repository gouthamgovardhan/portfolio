import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type RainbowButtonProps = {
  children: ReactNode
  className?: string
  variant?: 'default' | 'outline'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  href?: string
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> &
  ButtonHTMLAttributes<HTMLButtonElement>

const sizeClasses = {
  default: 'px-6 py-3 text-sm',
  sm: 'px-4 py-2 text-xs',
  lg: 'px-7 py-3.5 text-base',
  icon: 'h-10 w-10 p-0 text-sm',
} as const

export function RainbowButton({
  children,
  className = '',
  variant = 'default',
  size = 'default',
  href,
  type = 'button',
  ...props
}: RainbowButtonProps) {
  const classes = `rainbow-button inline-flex items-center justify-center rounded-full font-bold transition-transform hover:-translate-y-0.5 ${sizeClasses[size]} ${
    variant === 'outline' ? 'rainbow-button-outline text-text' : 'text-bg'
  } ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        <span className="rainbow-button-content">{children}</span>
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      <span className="rainbow-button-content">{children}</span>
    </button>
  )
}
