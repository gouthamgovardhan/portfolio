import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { CareerTrack, getDefaultTrack } from '../data/portfolio'

const CAREER_TRACK_EVENT = 'portfolio-career-track-change'
const CAREER_TRACK_STORAGE_KEY = 'portfolio-career-track'

interface CareerTrackContextValue {
  activeTrack: CareerTrack
  setActiveTrack: (track: CareerTrack) => void
}

const CareerTrackContext = createContext<CareerTrackContextValue | null>(null)

function isValidTrack(value: string | null | undefined): value is CareerTrack {
  return Object.values(CareerTrack).includes(value as CareerTrack)
}

function readSavedTrack(): CareerTrack {
  try {
    const saved = window.localStorage.getItem(CAREER_TRACK_STORAGE_KEY)
    return isValidTrack(saved) ? saved : getDefaultTrack()
  } catch {
    return getDefaultTrack()
  }
}

function applyTrack(track: CareerTrack) {
  document.documentElement.dataset.careerTrack = track
  try {
    window.localStorage.setItem(CAREER_TRACK_STORAGE_KEY, track)
  } catch {
    // Track switching still works when storage is unavailable.
  }
  window.dispatchEvent(new CustomEvent<CareerTrack>(CAREER_TRACK_EVENT, { detail: track }))
}

export function CareerTrackProvider({ children }: { children: ReactNode }) {
  const [activeTrack, setActiveTrackState] = useState<CareerTrack>(() => readSavedTrack())

  useEffect(() => {
    applyTrack(activeTrack)

    const handler = (event: Event) => {
      const nextTrack = (event as CustomEvent<CareerTrack>).detail
      setActiveTrackState(nextTrack)
    }
    window.addEventListener(CAREER_TRACK_EVENT, handler)

    return () => window.removeEventListener(CAREER_TRACK_EVENT, handler)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setActiveTrack = (track: CareerTrack) => {
    setActiveTrackState(track)
    applyTrack(track)
  }

  return (
    <CareerTrackContext.Provider value={{ activeTrack, setActiveTrack }}>
      {children}
    </CareerTrackContext.Provider>
  )
}

export function useCareerTrack() {
  const context = useContext(CareerTrackContext)
  if (!context) {
    throw new Error('useCareerTrack must be used within CareerTrackProvider')
  }
  return context
}
