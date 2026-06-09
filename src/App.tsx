import About from './components/About'
import BuilderOS from './components/BuilderOS'
import Capabilities from './components/Capabilities'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProductPositioning from './components/ProductPositioning'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Stats from './components/Stats'
import { CERTIFICATIONS, EXPERIENCE, PERSONAL, PROJECTS, SKILLS, STATS } from './data/portfolio'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useTypewriter } from './hooks/useTypewriter'

export default function App() {
  const roleText = useTypewriter(PERSONAL.roles)
  useScrollReveal()

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero personal={PERSONAL} roleText={roleText} />
        <Stats stats={STATS} />
        <About personal={PERSONAL} />
        <Capabilities />
        <BuilderOS />
        <ProductPositioning />
        <Skills skills={SKILLS} />
        <Experience experience={EXPERIENCE} />
        <Projects projects={PROJECTS} />
        <Certifications certs={CERTIFICATIONS} />
        <Contact personal={PERSONAL} />
      </main>
      <Footer personal={PERSONAL} />
    </>
  )
}
