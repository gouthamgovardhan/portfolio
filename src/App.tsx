import About from './components/About'
import AmbientBackground from './components/AmbientBackground'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Publications from './components/Publications'
import RolePathways from './components/RolePathways'
import SalesforceProof from './components/SalesforceProof'
import Skills from './components/Skills'
import Stats from './components/Stats'
import { EXPERIENCE, PERSONAL, PROJECTS, SKILLS, STATS } from './data/portfolio'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <>
      <AmbientBackground />
      <div className="scroll-progress" aria-hidden="true" />
      <Navbar />
      <main className="relative z-[1]">
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
      </main>
      <Footer personal={PERSONAL} />
    </>
  )
}
