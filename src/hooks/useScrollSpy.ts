import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds: readonly string[], offset = 80) {
  const [activeId, setActiveId] = useState('')
  const sectionKey = sectionIds.join('|')

  useEffect(() => {
    const ids = sectionKey.split('|').filter(Boolean)

    const handler = () => {
      const isPhoneViewport = window.matchMedia('(max-width: 767px)').matches
      const scrollBottom = window.scrollY + window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      if (scrollBottom >= documentHeight - 4) {
        setActiveId(ids.at(-1) ?? '')
        return
      }

      const pivot = window.scrollY + window.innerHeight * (isPhoneViewport ? 0.62 : 0.42) + (isPhoneViewport ? 24 : offset)
      let current = ids[0] ?? ''

      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= pivot) current = id
      }

      setActiveId(current)
    }

    window.addEventListener('scroll', handler, { passive: true })
    window.addEventListener('resize', handler)
    handler()

    return () => {
      window.removeEventListener('scroll', handler)
      window.removeEventListener('resize', handler)
    }
  }, [offset, sectionKey])

  return activeId
}
