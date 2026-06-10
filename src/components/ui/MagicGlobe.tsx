interface MagicGlobeProps {
  className?: string
  label?: string
}

export function MagicGlobe({ className = '', label = 'Bengaluru signal map' }: MagicGlobeProps) {
  return (
    <div className={`magic-globe ${className}`} role="img" aria-label={label}>
      <div className="magic-globe-sphere">
        <span className="magic-globe-ring magic-globe-ring-a" />
        <span className="magic-globe-ring magic-globe-ring-b" />
        <span className="magic-globe-ring magic-globe-ring-c" />
        <span className="magic-globe-meridian magic-globe-meridian-a" />
        <span className="magic-globe-meridian magic-globe-meridian-b" />
        <span className="magic-globe-pin magic-globe-pin-a" />
        <span className="magic-globe-pin magic-globe-pin-b" />
      </div>
    </div>
  )
}
