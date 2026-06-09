import type { CSSProperties } from 'react'

export default function AmbientBackground() {
  return (
    <div className="ambient-bg" aria-hidden="true">
      <div className="ambient-grid" />
      <div className="ambient-traces">
        <span />
        <span />
        <span />
      </div>
      <div className="ambient-particles">
        {Array.from({ length: 18 }, (_, index) => {
          const style = {
            '--particle-index': index,
            '--particle-top': `${(index * 13) % 100}%`,
            '--particle-left': `${(index * 19) % 100}%`,
          } as CSSProperties

          return <i key={index} style={style} />
        })}
      </div>
      <div className="ambient-orb ambient-orb-a" />
      <div className="ambient-orb ambient-orb-b" />
      <div className="ambient-orb ambient-orb-c" />
      <div className="ambient-orb ambient-orb-d" />
    </div>
  )
}
