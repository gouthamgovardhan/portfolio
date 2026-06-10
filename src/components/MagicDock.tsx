import { FaBriefcase, FaCode, FaGraduationCap, FaLayerGroup, FaPaperPlane, FaSalesforce, FaUser } from 'react-icons/fa6'
import { NAV_LINKS } from '../data/portfolio'
import { useScrollSpy } from '../hooks/useScrollSpy'

const dockIcons = {
  roles: FaLayerGroup,
  projects: FaCode,
  salesforce: FaSalesforce,
  experience: FaBriefcase,
  skills: FaUser,
  about: FaGraduationCap,
  contact: FaPaperPlane,
} as const

export default function MagicDock() {
  const activeId = useScrollSpy(NAV_LINKS.map((link) => link.id))

  return (
    <nav className="magic-dock hidden lg:flex" aria-label="Quick section navigation">
      {NAV_LINKS.map((link) => {
        const Icon = dockIcons[link.id as keyof typeof dockIcons] ?? FaLayerGroup
        const active = activeId === link.id

        return (
          <a key={link.id} href={link.href} className={`magic-dock-item group ${active ? 'is-active' : ''}`} aria-label={link.label}>
            <Icon aria-hidden="true" />
            <span>{link.label}</span>
          </a>
        )
      })}
    </nav>
  )
}
