import { useEffect, useState } from 'react'

interface WordRotateProps {
  words: readonly string[]
  duration?: number
  className?: string
}

export function WordRotate({ words, duration = 2600, className = '' }: WordRotateProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (words.length < 2) return undefined

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motionQuery.matches) return undefined

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % words.length)
    }, duration)

    return () => window.clearInterval(interval)
  }, [duration, words.length])

  if (!words.length) return null

  return (
    <span className={`word-rotate ${className}`}>
      <span key={words[activeIndex]} className="word-rotate-item" aria-hidden="true">
        {words[activeIndex]}
      </span>
      <span className="sr-only">{words.join(', ')}</span>
    </span>
  )
}
