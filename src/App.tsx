import { useEffect, useLayoutEffect, useState } from 'react'
import About from './components/About'
import AmbientBackground from './components/AmbientBackground'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import MagicDock from './components/MagicDock'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Publications from './components/Publications'
import RolePathways from './components/RolePathways'
import SalesforceProof from './components/SalesforceProof'
import Skills from './components/Skills'
import SkillsDepth from './components/SkillsDepth'
import Stats from './components/Stats'
import { EXPERIENCE, PERSONAL, PROJECTS, SKILLS, STATS } from './data/portfolio'
import { useScrollReveal } from './hooks/useScrollReveal'

const SKILLS_DEPTH_ROUTE = '#/skills-depth'

function getCurrentRoute() {
  return window.location.hash === SKILLS_DEPTH_ROUTE ? 'skills-depth' : 'home'
}

function HomePage() {
  return (
    <>
      <Hero personal={PERSONAL} />
      <Stats stats={STATS} />
      <RolePathways />
      <Projects projects={PROJECTS} />
      <SalesforceProof />
      <Experience experience={EXPERIENCE} />
      <Skills skills={SKILLS} />
      <About personal={PERSONAL} />
      <Publications />
      <Education />
      <Contact personal={PERSONAL} />
    </>
  )
}

export default function App() {
  const [route, setRoute] = useState(getCurrentRoute)
  useScrollReveal()

  useLayoutEffect(() => {
    if (route !== 'home') return

    const hash = window.location.hash
    if (!hash || hash.startsWith('#/')) return

    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)
    window.scrollTo(0, 0)
  }, [route])

  useEffect(() => {
    const handleHashChange = () => setRoute(getCurrentRoute())

    window.addEventListener('hashchange', handleHashChange)

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    if (route === 'skills-depth') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const id = window.location.hash.replace('#', '')
    if (!id || id.startsWith('/')) return

    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [route])

  return (
    <>
      <AmbientBackground />
      <div className="scroll-progress" aria-hidden="true" />
      <Navbar />
      <main className="relative z-[1]">
        {route === 'skills-depth' ? <SkillsDepth /> : <HomePage />}
      </main>
      {route === 'home' ? <MagicDock /> : null}
      <Footer personal={PERSONAL} />
    </>
  )
}
