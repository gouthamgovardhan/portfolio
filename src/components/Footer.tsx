import type { PERSONAL } from '../data/portfolio'

interface FooterProps {
  personal: typeof PERSONAL
}

export default function Footer({ personal }: FooterProps) {
  return (
    <footer className="border-t border-border-dim px-6 py-7 text-center font-mono text-xs text-dim">
      <p>
        {'©'} {personal.copyrightYear} {personal.name} · {personal.footerLine}
      </p>
    </footer>
  )
}
