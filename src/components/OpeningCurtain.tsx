import { useEffect, useState } from 'react'

export default function OpeningCurtain() {
  const [visible, setVisible] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  useEffect(() => {
    if (!visible) return undefined

    const timeout = window.setTimeout(() => {
      setVisible(false)
    }, 2600)

    return () => window.clearTimeout(timeout)
  }, [visible])

  if (!visible) return null

  return (
    <div className="opening-curtain" aria-hidden="true">
      <div className="opening-curtain-grid" />
      <div className="opening-curtain-sparks" aria-hidden="true">
        {Array.from({ length: 10 }, (_, index) => (
          <span key={index} />
        ))}
      </div>
      <div className="opening-curtain-mark">
        <span className="opening-curtain-ring" />
        <p className="opening-curtain-kicker">portfolio system</p>
        <p className="opening-curtain-logo">SGR</p>
      </div>
      <div className="opening-curtain-track">
        <span />
      </div>
    </div>
  )
}
