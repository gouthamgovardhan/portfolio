interface MagicGlobeProps {
  className?: string
  label?: string
}

export function MagicGlobe({ className = '', label = 'Bengaluru signal map' }: MagicGlobeProps) {
  return (
    <div className={`magic-globe ${className}`} role="img" aria-label={label}>
      <div className="magic-globe-sphere">
        <span className="magic-globe-orbit magic-globe-equator" />
        <span className="magic-globe-orbit magic-globe-meridian" />
        <span className="magic-globe-route" />
        <span className="magic-globe-pin" />
      </div>
    </div>
  )
}
