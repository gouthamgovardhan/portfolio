import { useState } from 'react'
import { ROLE_PATHS, SECTION_TEXT } from '../data/portfolio'
import { DetailDialog, type DetailDialogContent } from './ui/DetailDialog'
import { SectionHeader } from './ui/SectionHeader'
import { Tag } from './ui/Tag'

const toneClasses = {
  cyan: 'border-cyan/40 bg-cyan/10 text-cyan shadow-cyan/10',
  accent: 'border-accent/40 bg-accent/10 text-accent-h shadow-accent/10',
  emerald: 'border-emerald/40 bg-emerald/10 text-emerald shadow-emerald/10',
  amber: 'border-amber/40 bg-amber/10 text-amber shadow-amber/10',
  rose: 'border-rose/40 bg-rose/10 text-rose shadow-rose/10',
  violet: 'border-violet/40 bg-violet/10 text-violet shadow-violet/10',
} as const

const roleColSpan = ['lg:col-span-2', 'lg:col-span-2', 'lg:col-span-2', 'lg:col-span-3', 'lg:col-span-3'] as const

function getRoleDetail(path: (typeof ROLE_PATHS)[number]): DetailDialogContent {
  return {
    eyebrow: path.role,
    title: path.headline,
    description: path.pitch,
    tone: path.tone,
    sections: [
      { title: 'Role fit', body: `Best when the team needs ${path.role.toLowerCase()} ownership with production context, clear communication, and implementation range.` },
      { title: 'Proof', body: path.proof },
      { title: 'Suggested conversation', body: `Ask about shipped examples, tradeoffs, and how this maps to your ${path.role.toLowerCase()} opening or project.` },
    ],
    tags: path.stack,
  }
}

export default function RolePathways() {
  const [selectedRole, setSelectedRole] = useState<(typeof ROLE_PATHS)[number] | null>(null)

  return (
    <section id="roles" className="section-shell px-6 py-24">
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          label={SECTION_TEXT.roles.label}
          title={SECTION_TEXT.roles.title}
          subtitle={SECTION_TEXT.roles.subtitle}
        />

        <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {ROLE_PATHS.map((path, index) => (
            <button
              type="button"
              id={path.id}
              key={path.id}
              onClick={() => setSelectedRole(path)}
              className={`magic-card lift-card group glass-card relative flex min-h-[380px] flex-col overflow-hidden rounded-[1.6rem] border p-5 text-left shadow-2xl outline-none sm:min-h-[400px] ${toneClasses[path.tone]} ${roleColSpan[index] ?? 'lg:col-span-2'}`}
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-current opacity-10 blur-2xl transition-transform duration-500 group-hover:scale-125" />
              <p className="relative font-mono text-xs uppercase tracking-[0.2em] opacity-80">{path.role}</p>
              <h3 className="relative mt-5 text-xl font-black leading-tight text-text sm:text-2xl">{path.headline}</h3>
              <p className="relative mt-4 text-sm leading-7 text-muted">{path.pitch}</p>
              <p className="relative mt-5 rounded-2xl border border-border-dim bg-bg/60 p-4 text-sm font-semibold leading-6 text-text">
                {path.proof}
              </p>
              <div className="relative mt-auto flex flex-wrap gap-2 pt-5">
                {path.stack.map((item) => (
                  <Tag key={item} label={item} />
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
      {selectedRole ? <DetailDialog content={getRoleDetail(selectedRole)} onClose={() => setSelectedRole(null)} /> : null}
    </section>
  )
}
