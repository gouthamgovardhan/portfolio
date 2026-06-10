import { PERSONAL, SECTION_TEXT, type SkillGroup } from '../data/portfolio'
import { AnimatedSpan, Terminal, TypingAnimation } from './ui/MagicTerminal'
import { SectionHeader } from './ui/SectionHeader'

interface SkillsProps {
  skills: SkillGroup[]
}

export default function Skills({ skills }: SkillsProps) {
  const toolCount = skills.reduce((count, group) => count + group.skills.length, 0)

  return (
    <section id="skills" className="section-shell px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label={SECTION_TEXT.skills.label}
          title={SECTION_TEXT.skills.title}
          subtitle={SECTION_TEXT.skills.subtitle}
        />
        <div className="terminal-window overflow-hidden rounded-[1.45rem] border border-border/90 bg-[#120f14]/90 shadow-2xl shadow-accent/10">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-dim bg-card/70 px-4 py-3 font-mono text-xs text-muted sm:px-5">
            <div className="flex min-w-0 items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose" aria-hidden="true" />
              <span className="h-3 w-3 rounded-full bg-amber" aria-hidden="true" />
              <span className="h-3 w-3 rounded-full bg-emerald" aria-hidden="true" />
              <span className="ml-2 truncate text-dim">~/site - zsh - {toolCount}x{skills.length}</span>
            </div>
            <span className="inline-flex items-center gap-2 text-emerald">
              <span className="h-2 w-2 rounded-full bg-emerald shadow-[0_0_14px_rgba(74,222,128,0.75)]" aria-hidden="true" />
              live
            </span>
          </div>

          <Terminal className="relative p-4 font-mono text-xs leading-6 text-muted sm:p-6 sm:text-sm">
            <div className="terminal-scanline pointer-events-none absolute inset-0" aria-hidden="true" />
            <AnimatedSpan as="p" className="text-dim">
              last login: thu jun 11 2026 on ttys001
            </AnimatedSpan>
            <TypingAnimation as="p" className="text-amber">
              goutham@portfolio:~/site (main) $ whoami
            </TypingAnimation>
            <AnimatedSpan as="p" className="mb-4 text-text">
              {PERSONAL.name} - ai + salesforce engineer · bengaluru
            </AnimatedSpan>

            <TypingAnimation as="p" className="text-amber">
              goutham@portfolio:~/site (main) $ cat skills.txt
            </TypingAnimation>

            <AnimatedSpan as="div" className="mt-3 grid gap-3">
              {skills.map((group, index) => (
                <div key={group.category} className="terminal-row rounded-xl border border-border-dim/80 bg-bg/45 p-3">
                  <div className="mb-1 flex items-center gap-2">
                    <span className={index < 5 ? 'text-emerald' : 'text-cyan'}>{index < 5 ? '✓' : 'i'}</span>
                    <span className="font-semibold text-text">{group.category}</span>
                  </div>
                  <p className="break-words text-muted">{group.skills.join(' · ')}</p>
                </div>
              ))}
            </AnimatedSpan>

            <AnimatedSpan as="div" className="mt-5 space-y-1">
              <p>
                <span className="text-emerald">✓</span> Success! {skills.length} categories, {toolCount} tools loaded.
              </p>
              <p>
                <span className="text-cyan">i</span> Stack ready for production. 0 errors.
              </p>
              <p>
                <span className="text-amber">goutham@portfolio</span>
                <span className="text-dim">:~/site (main) $ </span>
                <span className="cursor-blink text-text">▮</span>
              </p>
            </AnimatedSpan>
          </Terminal>
        </div>
      </div>
    </section>
  )
}
