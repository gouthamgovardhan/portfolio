import { FaLocationDot } from 'react-icons/fa6'
import { ACTION_LABELS, HERO_TECH, HERO_TERMINAL, SOCIAL_LINKS, TECH_EXPLANATIONS, type PERSONAL } from '../data/portfolio'
import { getTechIcon } from '../lib/techIcons'
import { BlurFade } from './ui/BlurFade'
import { KineticText } from './ui/KineticText'
import { MagicGlobe } from './ui/MagicGlobe'
import { RainbowButton } from './ui/RainbowButton'

interface HeroProps {
  personal: typeof PERSONAL
}

export default function Hero({ personal }: HeroProps) {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-28 sm:pt-32 lg:pt-36">
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

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-14 pt-8 sm:pt-10 lg:pt-12">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0">
            <BlurFade delay={0.08}>
              <p className="mb-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-amber before:h-px before:w-7 before:bg-amber">
                {personal.eyebrow}
              </p>
            </BlurFade>
            <BlurFade delay={0.16}>
              <h1 className="mb-4 text-5xl font-black uppercase leading-[0.9] tracking-tight text-text sm:text-7xl lg:text-8xl">
                {personal.firstName}
                <br />
                {personal.lastName} <span className="text-rose">{personal.suffixName}</span>
              </h1>
            </BlurFade>
            <BlurFade delay={0.24}>
              <KineticText
                text="AI · BACKEND · SALESFORCE"
                as="div"
                className="mb-5 font-mono text-3xl font-bold leading-none text-muted sm:text-5xl lg:text-6xl"
              />
            </BlurFade>
            <BlurFade delay={0.32}>
              <p className="mb-3 max-w-2xl text-lg font-medium leading-8 text-text sm:text-xl">{personal.heroHeadline}</p>
            </BlurFade>
            <BlurFade delay={0.4}>
              <p className="mb-9 max-w-xl text-base leading-7 text-muted">{personal.heroDescription}</p>
            </BlurFade>

            <BlurFade delay={0.48} className="mb-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <RainbowButton href="#projects">
                {ACTION_LABELS.viewProjects}
              </RainbowButton>
              <a
                href="#roles"
                className="lift-card-subtle inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-text hover:text-violet"
              >
                View Role Fit
              </a>
              <a
                href={personal.resumeUrl}
                className="lift-card-subtle inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-text hover:text-violet"
              >
                {ACTION_LABELS.downloadResume}
              </a>
            </BlurFade>

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
            <div className="lift-card rounded-[1.6rem] border border-border bg-card/85 p-5 shadow-xl shadow-accent/10 backdrop-blur">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber">Current focus</p>
              <p className="mt-3 text-2xl font-black leading-tight text-text sm:text-3xl">AI + Salesforce systems</p>
              <p className="mt-2 text-sm leading-6 text-muted">{personal.currentRole}</p>
            </div>

            <div className="lift-card overflow-hidden rounded-[1.6rem] border border-border-dim bg-surface/80 p-5 shadow-lg shadow-violet/5 backdrop-blur">
              <div className="mb-4 grid gap-4 sm:grid-cols-[1fr_12rem]">
                <div className="relative rounded-[1.2rem] border border-border-dim bg-bg/40">
                  <div className="overflow-hidden rounded-[1.2rem]">
                    <img
                      src={personal.formalImageUrl}
                      alt={`${personal.name} professional headshot`}
                      className="aspect-[16/10] w-full object-cover object-[50%_20%] sm:aspect-[4/3]"
                      width={640}
                      height={480}
                    />
                  </div>
                </div>
                <div className="min-h-44 overflow-hidden rounded-[1.2rem] border border-border-dim bg-bg/50 p-3">
                  <MagicGlobe className="h-full min-h-40" />
                </div>
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">{personal.country} · {personal.timezone}</p>
              <p className="mt-1 text-xl font-bold text-text sm:text-2xl">{personal.location}</p>
            </div>

            <div className="lift-card rounded-[1.6rem] border border-rose/30 bg-bg/80 p-5 font-mono text-xs text-muted shadow-lg shadow-rose/10 backdrop-blur">
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
