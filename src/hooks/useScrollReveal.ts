import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)

    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>('main section, main article, main [data-reveal]'),
    )
    const sectionTargets = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'))

    revealTargets.forEach((target, index) => {
      target.classList.add('scroll-reveal')
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
    }

    const easeOutCubic = (value: number) => 1 - Math.pow(1 - value, 3)
    const smoothScrollTo = (targetY: number, duration = 760) => {
      const startY = window.scrollY
      const distance = targetY - startY
      const startTime = performance.now()

      const tick = (time: number) => {
        const elapsed = time - startTime
        const progress = Math.min(elapsed / duration, 1)
        window.scrollTo(0, startY + distance * easeOutCubic(progress))
        if (progress < 1) requestAnimationFrame(tick)
      }

      requestAnimationFrame(tick)
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
      smoothScrollTo(Math.max(0, targetY), 760)
    }

    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    document.addEventListener('click', handleAnchorClick)
    updateProgress()

    return () => {
      revealObserver.disconnect()
      sectionObserver.disconnect()
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])
}
