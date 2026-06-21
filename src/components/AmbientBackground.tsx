import { Meteors } from './ui/Meteors'

export default function AmbientBackground() {
  return (
    <div className="ambient-bg" aria-hidden="true">
      <div className="ambient-grid" />
      <div className="ambient-traces">
        <span />
        <span />
        <span />
      </div>
      <Meteors number={18} />
    </div>
  )
}
