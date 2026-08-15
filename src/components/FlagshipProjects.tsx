import { useMemo } from 'react'
import { useCareerTrack } from '../context/CareerTrackContext'
import { getTrackContext } from '../data/portfolio'
import { BlurFade } from './ui/BlurFade'
import { SectionHeader } from './ui/SectionHeader'
import FlagshipCaseStudy from './FlagshipCaseStudy'

export default function FlagshipProjects() {
  const { activeTrack } = useCareerTrack()
  const trackContext = useMemo(() => getTrackContext(activeTrack), [activeTrack])

  return (
    <section id="projects" className="relative z-10 px-6 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-4xl">
        <BlurFade>
          <SectionHeader
            eyebrow="Deep work"
            title="Featured Case Studies"
            description="Outcome-first deep dives into systems I've built, the problems they solve, and the architectures that power them."
          />
        </BlurFade>

        <div className="mt-16 space-y-6 sm:mt-20">
          {trackContext.flagshipProjects.map((project, index) => (
            <FlagshipCaseStudy key={project.title} project={project} index={index} />
          ))}
        </div>

        {trackContext.flagshipProjects.length === 0 && (
          <div className="rounded-lg border border-border-dim bg-bg/50 p-8 text-center">
            <p className="text-muted">No projects available for this track yet.</p>
            <p className="mt-2 text-sm text-dim">Switch to another track to see more work.</p>
          </div>
        )}
      </div>
    </section>
  )
}
