import About from './components/About'
import AmbientBackground from './components/AmbientBackground'
import CareerTrackSwitcher from './components/CareerTrackSwitcher'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import FlagshipProjects from './components/FlagshipProjects'
import Footer from './components/Footer'
import Hero from './components/Hero'
import MagicDock from './components/MagicDock'
import Navbar from './components/Navbar'
import SalesforceProof from './components/SalesforceProof'
import Skills from './components/Skills'
import Stats from './components/Stats'
import { EXPERIENCE, PERSONAL, SKILLS, STATS } from './data/portfolio'
import { CareerTrackProvider } from './context/CareerTrackContext'
import { RoleProvider } from './context/RoleContext'
import { useScrollReveal } from './hooks/useScrollReveal'

function HomePage() {
  return (
    <>
      <Hero personal={PERSONAL} />
      <Stats stats={STATS} />
      <FlagshipProjects />
      {/* RolePathways and SkillsDepth hidden in Phase 4 */}
      {/* <RolePathways /> */}
      <SalesforceProof />
      <Experience experience={EXPERIENCE} />
      <Skills skills={SKILLS} />
      <About personal={PERSONAL} />
      {/* Publications moved to footer in Phase 4 */}
      {/* <Publications /> */}
      <Education />
      <Contact personal={PERSONAL} />
    </>
  )
}

export default function App() {
  useScrollReveal()

  return (
    <CareerTrackProvider>
      <RoleProvider>
        <AmbientBackground />
        <div className="scroll-progress" aria-hidden="true" />
        <Navbar />
        <CareerTrackSwitcher />
        <main className="relative z-[1]">
          <HomePage />
        </main>
        <MagicDock />
        <Footer personal={PERSONAL} />
      </RoleProvider>
    </CareerTrackProvider>
  )
}
