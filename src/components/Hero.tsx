import { FaLocationDot } from 'react-icons/fa6'
import { ACTION_LABELS, HERO_TECH, HERO_TERMINAL, SOCIAL_LINKS, TECH_EXPLANATIONS, type PERSONAL } from '../data/portfolio'
import { getTechIcon } from '../lib/techIcons'

interface HeroProps {
  personal: typeof PERSONAL
}

export default function Hero({ personal }: HeroProps) {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="hero-dot-grid pointer-events-none absolute inset-0 opacity-45" />
      <div className="orb-1 pointer-events-none absolute -right-[15%] -top-[15%] h-[min(70vw,700px)] w-[min(70vw,700px)] rounded-full" />
      <div className="orb-2 pointer-events-none absolute -bottom-[10%] -left-[10%] h-[min(50vw,500px)] w-[min(50vw,500px)] rounded-full" />
      <div className="pointer-events-none absolute left-0 right-0 top-20 overflow-hidden border-y border-border-dim/70 bg-bg/35 py-3 backdrop-blur">
        <div className="tech-marquee flex w-max gap-3">
          {[...HERO_TECH, ...HERO_TECH].map((tech, index) => {
            const Icon = getTechIcon(tech)

            return (
              <span
                key={`${tech}-${index}`}
                title={TECH_EXPLANATIONS[tech] ?? tech}
                className="inline-flex items-center gap-2 rounded-full border border-border-dim bg-card/70 px-4 py-1 font-mono text-xs uppercase tracking-[0.14em] text-muted"
              >
                <Icon className="h-3.5 w-3.5 shrink-0 text-amber" aria-hidden="true" />
                {tech}
              </span>
            )
          })}
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0">
            <p className="mb-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-amber before:h-px before:w-7 before:bg-amber">
              {personal.eyebrow}
            </p>
            <h1 className="mb-4 text-5xl font-black uppercase leading-[0.9] tracking-tight text-text sm:text-7xl lg:text-8xl">
              {personal.firstName}
              <br />
              {personal.lastName} <span className="text-rose">{personal.suffixName}</span>
            </h1>
            <div className="mb-5 font-mono text-3xl font-bold leading-none text-transparent opacity-20 [-webkit-text-stroke:1px_#E8EEF8] sm:text-5xl lg:text-6xl">
              AI · BACKEND · SALESFORCE
            </div>
            <p className="mb-3 max-w-2xl text-lg font-medium leading-8 text-text sm:text-xl">{personal.heroHeadline}</p>
            <p className="mb-9 max-w-xl text-base leading-7 text-muted">{personal.heroDescription}</p>

            <div className="mb-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-bold text-bg transition-all hover:-translate-y-0.5 hover:bg-amber"
              >
                {ACTION_LABELS.viewProjects}
              </a>
              <a
                href="#roles"
                className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium text-text transition-all hover:-translate-y-0.5 hover:border-violet hover:text-violet"
              >
                View Role Fit
              </a>
              <a
                href={personal.resumeUrl}
                className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium text-text transition-all hover:-translate-y-0.5 hover:border-violet hover:text-violet"
              >
                {ACTION_LABELS.downloadResume}
              </a>
            </div>

            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-muted transition-all hover:border-amber hover:bg-amber/10 hover:text-amber"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    <Icon aria-hidden="true" />
                  </a>
                )
              })}
            </div>

            <p className="mt-7 flex items-center gap-2 font-mono text-xs text-dim">
              <FaLocationDot aria-hidden="true" />
              {personal.location}
            </p>
          </div>

          <div className="grid w-full gap-4 sm:gap-5">
            <div className="rounded-[1.6rem] border border-border bg-card/85 p-5 shadow-xl shadow-accent/10 backdrop-blur transition-transform duration-500 hover:-translate-y-1">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">Current focus</p>
              <p className="mt-3 text-2xl font-black leading-tight text-text sm:text-3xl">AI + Salesforce systems</p>
              <p className="mt-2 text-sm leading-6 text-muted">{personal.currentRole}</p>
            </div>

            <div className="overflow-hidden rounded-[1.6rem] border border-border-dim bg-surface/80 p-5 shadow-lg shadow-violet/5 backdrop-blur transition-transform duration-500 hover:-translate-y-1">
              <img
                src={personal.formalImageUrl}
                alt={`${personal.name} professional headshot`}
                className="mb-4 aspect-[4/3] w-full rounded-[1.2rem] border border-border-dim bg-bg/40 object-cover object-[50%_20%]"
                width={640}
                height={480}
              />
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">{personal.country}</p>
              <p className="mt-1 text-xl font-bold text-text sm:text-2xl">{personal.location}</p>
            </div>

            <div className="rounded-[1.6rem] border border-rose/30 bg-bg/80 p-5 font-mono text-xs text-muted shadow-lg shadow-rose/10 backdrop-blur transition-transform duration-500 hover:-translate-y-1">
              <p className="text-rose">$ run goutham --production</p>
              <div className="mt-3 space-y-1">
                {HERO_TERMINAL.map((line) => (
                  <p key={line.label}>
                    <span className="text-dim">{line.label}:</span> {line.value}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
