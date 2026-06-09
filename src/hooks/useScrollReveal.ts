import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>('main section, main article, main [data-reveal]'),
    )
    const sectionTargets = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'))

    revealTargets.forEach((target, index) => {
      target.classList.add('scroll-reveal')
      if (target.tagName === 'ARTICLE') {
        const staggerIndex = index % 4
        target.style.setProperty('--reveal-delay', `${staggerIndex * 45}ms`)
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
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
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

    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    updateProgress()

    return () => {
      revealObserver.disconnect()
      sectionObserver.disconnect()
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])
}
