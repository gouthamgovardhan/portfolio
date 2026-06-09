import { useEffect, useState } from 'react'

export function useTypewriter(phrases: readonly string[], typingSpeed = 80, deletingSpeed = 50, pauseMs = 2000) {
  const [displayed, setDisplayed] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex] ?? ''
    let timeout: ReturnType<typeof setTimeout> | undefined

    if (!deleting) {
      if (charIndex < current.length) {
        timeout = setTimeout(() => setCharIndex((index) => index + 1), typingSpeed)
      } else {
        timeout = setTimeout(() => setDeleting(true), pauseMs)
      }
    } else if (charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((index) => index - 1), deletingSpeed)
    } else {
      setDeleting(false)
      setPhraseIndex((index) => (index + 1) % phrases.length)
    }

    setDisplayed(current.slice(0, charIndex))

    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [charIndex, deleting, deletingSpeed, pauseMs, phraseIndex, phrases, typingSpeed])

  return displayed
}
