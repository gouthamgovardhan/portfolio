import { FaLocationDot } from 'react-icons/fa6'
import { ACTION_LABELS, HERO_TECH, HERO_TERMINAL, SOCIAL_LINKS, type PERSONAL } from '../data/portfolio'

const cityVisualStyle = {
  '--city-image': `url("${import.meta.env.BASE_URL}assets/bengaluru-night.jpg")`,
} as React.CSSProperties

interface HeroProps {
  personal: typeof PERSONAL
  roleText: string
}

export default function Hero({ personal, roleText }: HeroProps) {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="hero-dot-grid pointer-events-none absolute inset-0 opacity-45" />
      <div className="orb-1 pointer-events-none absolute -right-[15%] -top-[15%] h-[min(70vw,700px)] w-[min(70vw,700px)] rounded-full" />
      <div className="orb-2 pointer-events-none absolute -bottom-[10%] -left-[10%] h-[min(50vw,500px)] w-[min(50vw,500px)] rounded-full" />
      <div className="pointer-events-none absolute left-0 right-0 top-20 overflow-hidden border-y border-border-dim/70 bg-bg/35 py-3 backdrop-blur">
        <div className="tech-marquee flex w-max gap-3">
          {[...HERO_TECH, ...HERO_TECH].map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="rounded-full border border-border-dim bg-card/70 px-4 py-1 font-mono text-xs uppercase tracking-[0.18em] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-amber before:h-px before:w-7 before:bg-amber">
              {personal.eyebrow}
            </p>
            <h1 className="mb-4 text-[clamp(3rem,8vw,6.6rem)] font-black uppercase leading-[0.9] tracking-tight text-text">
              {personal.firstName}
              <br />
              {personal.lastName} <span className="text-rose">{personal.suffixName}</span>
            </h1>
            <div className="mb-5 font-mono text-[clamp(2.6rem,10vw,8rem)] font-bold leading-none text-transparent opacity-20 [-webkit-text-stroke:1px_#E8EEF8]">
              AI ENGINEER
            </div>
            <p className="mb-3 flex min-h-8 flex-wrap items-center gap-2 text-lg text-muted sm:text-2xl">
              <span>{personal.rolePrefix}</span>
              <span className="font-medium text-violet">{roleText}</span>
              <span className="cursor-blink inline-block h-6 w-0.5 bg-amber align-middle" />
            </p>
            <p className="mb-9 max-w-xl text-base leading-7 text-muted">{personal.heroDescription}</p>

            <div className="mb-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-bold text-bg transition-all hover:-translate-y-0.5 hover:bg-amber"
              >
                {ACTION_LABELS.viewProjects}
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

          <div className="hero-console relative hidden min-h-[520px] lg:block">
            <div className="floating-card absolute left-4 top-6 w-56 rounded-2xl border border-border bg-card/85 p-5 shadow-2xl shadow-accent/10 backdrop-blur">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">Lounge 1</p>
              <p className="mt-10 text-4xl font-black text-text">{personal.shortName}</p>
              <p className="mt-1 text-sm text-muted">{personal.tagline}</p>
            </div>
            <div className="floating-card floating-card-delay absolute right-0 top-20 w-72 rounded-[2rem] border border-border-dim bg-surface/80 p-5 backdrop-blur">
              <div
                className="city-visual mb-5 h-44 overflow-hidden rounded-[1.4rem] border border-border-dim"
                style={cityVisualStyle}
              />
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">{personal.country}</p>
              <p className="mt-1 text-2xl font-bold text-text">{personal.location}</p>
            </div>
            <div className="floating-card floating-card-slow absolute bottom-10 left-12 w-80 rounded-2xl border border-rose/30 bg-bg/80 p-5 font-mono text-xs text-muted shadow-2xl shadow-rose/10 backdrop-blur">
              <p className="text-rose">$ run goutham --vivid</p>
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
