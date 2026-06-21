import { useEffect } from 'react'

const STAGE_TITLES: Record<string, string> = {
  stats: 'SIGNALS',
  roles: 'ROLE FIT',
  projects: 'SHIPPED',
  salesforce: 'TRAILHEAD',
  experience: 'WORK',
  skills: 'STACK',
  about: 'PROFILE',
  publications: 'RESEARCH',
  education: 'CLASS 2024',
  contact: 'CONNECT',
  'skills-depth': 'DEPTH',
}

export function useScrollReveal() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const prefersTouchScroll = window.matchMedia('(pointer: coarse)').matches
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)

    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>('main section, main article, main [data-reveal]'),
    )
    const sectionTargets = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'))

    sectionTargets.forEach((section) => {
      if (section.id === 'hero') return

      const stageTitle = STAGE_TITLES[section.id] ?? section.id.replaceAll('-', ' ').toUpperCase()
      const stageTarget = section.querySelector<HTMLElement>(':scope > .relative, :scope > .mx-auto, :scope > div:not(.pointer-events-none)')
      section.classList.add('stage-section')
      section.dataset.stageTitle = stageTitle
      stageTarget?.setAttribute('data-stage-word', stageTitle)
    })

    revealTargets.forEach((target, index) => {
      target.classList.add('scroll-reveal')
      const bounds = target.getBoundingClientRect()
      if (bounds.top < window.innerHeight && bounds.bottom > 0) {
        target.classList.add('is-visible')
      }
      if (target.tagName === 'ARTICLE') {
        const staggerIndex = index % 4
        target.style.setProperty('--reveal-delay', `${staggerIndex * 60}ms`)
      }
    })

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target
          if (!(target instanceof HTMLElement)) return

          if (entry.isIntersecting) {
            target.classList.add('is-visible')
          }
        })
      },
      { rootMargin: '0px 0px -16% 0px', threshold: 0.1 },
    )

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target
          if (!(target instanceof HTMLElement)) return
          target.classList.toggle('section-in-view', entry.isIntersecting)
        })
      },
      { rootMargin: '-28% 0px -45% 0px', threshold: 0.01 },
    )

    revealTargets.forEach((target) => revealObserver.observe(target))
    sectionTargets.forEach((target) => sectionObserver.observe(target))

    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0
      document.documentElement.style.setProperty('--scroll-progress', progress.toFixed(4))

      sectionTargets.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const sectionProgress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)))
        section.style.setProperty('--section-progress', sectionProgress.toFixed(4))
      })
    }

    let scrollAnimationFrame = 0
    const easeOutCubic = (value: number) => 1 - Math.pow(1 - value, 3)
    const smoothScrollTo = (targetY: number, duration = 320) => {
      if (scrollAnimationFrame) cancelAnimationFrame(scrollAnimationFrame)

      const startY = window.scrollY
      const distance = targetY - startY
      if (Math.abs(distance) < 12) {
        window.scrollTo(0, targetY)
        return
      }

      const startTime = performance.now()

      const tick = (time: number) => {
        const elapsed = time - startTime
        const progress = Math.min(elapsed / duration, 1)
        window.scrollTo(0, startY + distance * easeOutCubic(progress))
        if (progress < 1) {
          scrollAnimationFrame = requestAnimationFrame(tick)
        } else {
          scrollAnimationFrame = 0
        }
      }

      scrollAnimationFrame = requestAnimationFrame(tick)
    }

    const handleAnchorClick = (event: MouseEvent) => {
      if (prefersReducedMotion || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return
      }

      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]')
      if (!anchor) return

      const hash = anchor.getAttribute('href')
      if (!hash || hash === '#') return

      const target = document.querySelector<HTMLElement>(hash)
      if (!target) return

      event.preventDefault()
      const scrollMargin = Number.parseFloat(window.getComputedStyle(target).scrollMarginTop) || 0
      const targetY = target.getBoundingClientRect().top + window.scrollY - scrollMargin
      window.history.pushState(null, '', hash)
      smoothScrollTo(Math.max(0, targetY), prefersTouchScroll ? 360 : 680)
    }

    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    document.addEventListener('click', handleAnchorClick)
    updateProgress()

    return () => {
      revealObserver.disconnect()
      sectionObserver.disconnect()
      if (scrollAnimationFrame) cancelAnimationFrame(scrollAnimationFrame)
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])
}
