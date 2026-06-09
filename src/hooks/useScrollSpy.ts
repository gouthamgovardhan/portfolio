import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds: readonly string[], offset = 80) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + offset
      let current = ''

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollY) current = id
      }

      setActiveId(current)
    }

    window.addEventListener('scroll', handler, { passive: true })
    handler()

    return () => window.removeEventListener('scroll', handler)
  }, [offset, sectionIds])

  return activeId
}
