import { SECTION_TEXT, type SkillGroup } from '../data/portfolio'
import { SectionHeader } from './ui/SectionHeader'
import { Tag } from './ui/Tag'

interface SkillsProps {
  skills: SkillGroup[]
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="section-shell px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label={SECTION_TEXT.skills.label}
          title={SECTION_TEXT.skills.title}
          subtitle={SECTION_TEXT.skills.subtitle}
        />
        <div className="space-y-9">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="mb-4 border-b border-border-dim pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-dim">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Tag key={skill} label={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
