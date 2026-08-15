import { motion } from 'framer-motion'
import { ChevronDown, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { type FlagshipProject } from '../data/portfolio'
import { BlurFade } from './ui/BlurFade'
import { Tag } from './ui/Tag'

interface FlagshipCaseStudyProps {
  project: FlagshipProject
  index: number
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function FlagshipCaseStudy({ project, index }: FlagshipCaseStudyProps) {
  const [isExpanded, setIsExpanded] = useState(index === 0)

  return (
    <motion.article
      className="mb-8 overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur"
      variants={itemVariants}
    >
      {/* Header / Summary */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-6 text-left transition-colors hover:bg-card/80 sm:px-8 sm:py-8"
      >
        <motion.div
          className="flex items-start justify-between gap-4"
          layout
        >
          <div className="min-w-0 flex-1">
            <div className="mb-3 flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border"
                style={{ borderColor: `var(--color-${project.accent})` }}
              >
                <span
                  className="font-mono text-xs font-bold"
                  style={{ color: `var(--color-${project.accent})` }}
                >
                  {project.icon}
                </span>
              </div>
              <h2
                className="text-2xl font-black uppercase tracking-tight"
                style={{ color: `var(--color-${project.accent})` }}
              >
                {project.title}
              </h2>
            </div>

            <p className="mb-4 text-lg font-bold leading-7 text-text">
              {project.outcomeHeadline || project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 4).map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
              {project.tags.length > 4 && <Tag label={`+${project.tags.length - 4}`} />}
            </div>
          </div>

          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="mt-1 flex-shrink-0"
          >
            <ChevronDown className="h-6 w-6 text-muted" />
          </motion.div>
        </motion.div>
      </button>

      {/* Expanded Content */}
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden border-t border-border/50"
      >
        <div className="px-6 py-8 sm:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isExpanded ? 'visible' : 'hidden'}
            className="space-y-10"
          >
            {/* Outcome First */}
            <motion.section variants={itemVariants}>
              <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-amber">
                The Outcome
              </h3>
              <p className="text-lg leading-8 text-text">{project.outcome}</p>
            </motion.section>

            {/* Challenge / Context */}
            <motion.section variants={itemVariants}>
              <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-amber">
                The Challenge
              </h3>
              <p className="leading-8 text-muted">{project.outlookHeadline}</p>
            </motion.section>

            {/* Solution / Architecture */}
            <motion.section variants={itemVariants}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-amber">
                The Solution
              </h3>
              <div className="mb-6 space-y-3">
                {project.expandedDescription && (
                  <p className="leading-8 text-text">{project.expandedDescription}</p>
                )}
              </div>

              {project.architecture && project.architecture.length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-muted">Architecture Flow:</p>
                  <ol className="space-y-2 border-l-2 border-border-dim pl-4">
                    {project.architecture.map((step, i) => (
                      <li
                        key={i}
                        className="text-sm leading-6 text-muted before:mr-3 before:inline-block before:font-mono before:text-xs before:font-bold before:text-amber before:content-['→']"
                      >
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </motion.section>

            {/* Architecture Diagrams */}
            {project.architectureDiagrams && project.architectureDiagrams.length > 0 && (
              <motion.section variants={itemVariants}>
                <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-amber">
                  Architecture Diagrams
                </h3>
                <div className="space-y-4">
                  {project.architectureDiagrams.map((diagram, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-border-dim bg-bg/50 p-4 text-center text-sm text-muted"
                    >
                      📊 {diagram}
                      <p className="mt-2 text-xs">(Visual assets available on request)</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Observability / Proof */}
            {project.observabilityScreenshots && project.observabilityScreenshots.length > 0 && (
              <motion.section variants={itemVariants}>
                <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-amber">
                  Observability & Proof
                </h3>
                <div className="space-y-4">
                  {project.observabilityScreenshots.map((screenshot, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-border-dim bg-bg/50 p-4 text-center text-sm text-muted"
                    >
                      📈 {screenshot}
                      <p className="mt-2 text-xs">(Screenshots available on request)</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Highlights / Key Metrics */}
            {project.highlights && project.highlights.length > 0 && (
              <motion.section variants={itemVariants}>
                <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-amber">
                  Key Highlights
                </h3>
                <ul className="space-y-3">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex-shrink-0 text-amber">✓</span>
                      <span className="leading-6 text-text">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}

            {/* Status & Disclaimer */}
            <motion.section variants={itemVariants} className="rounded-lg bg-bg/50 p-4 text-sm">
              <p className="mb-2 font-semibold text-amber">{project.proofStatus}</p>
              {project.disclaimer && <p className="text-muted">{project.disclaimer}</p>}
            </motion.section>

            {/* CTA */}
            <motion.section variants={itemVariants}>
              <p className="mb-4 text-xs uppercase tracking-[0.1em] text-dim">Next steps</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="lift-card-subtle inline-flex items-center justify-center gap-2 rounded-lg border border-violet bg-violet/10 px-6 py-3 text-sm font-semibold text-violet transition-colors hover:bg-violet/20"
                >
                  Discuss This Work
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href={project.proofUrl || '#contact'}
                  className="lift-card-subtle inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-text transition-colors hover:text-violet hover:border-violet"
                >
                  {project.proofLinkLabel || 'View Details'}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </motion.div>
    </motion.article>
  )
}
