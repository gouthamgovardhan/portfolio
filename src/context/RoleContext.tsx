import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { ROLE_PATHS } from '../data/portfolio'

export type RoleId = (typeof ROLE_PATHS)[number]['id']

const ROLE_EVENT = 'portfolio-role-change'
const ROLE_STORAGE_KEY = 'portfolio-role'

interface RoleContextValue {
  activeRole: RoleId | null
  setActiveRole: (role: RoleId | null) => void
}

const RoleContext = createContext<RoleContextValue | null>(null)

function isRoleId(value: string | null | undefined): value is RoleId {
  return ROLE_PATHS.some((path) => path.id === value)
}

function readSavedRole(): RoleId | null {
  try {
    const saved = window.localStorage.getItem(ROLE_STORAGE_KEY)
    return isRoleId(saved) ? saved : null
  } catch {
    return null
  }
}

function applyRole(role: RoleId | null) {
  if (role) {
    document.documentElement.dataset.role = role
  } else {
    delete document.documentElement.dataset.role
  }
  try {
    if (role) {
      window.localStorage.setItem(ROLE_STORAGE_KEY, role)
    } else {
      window.localStorage.removeItem(ROLE_STORAGE_KEY)
    }
  } catch {
    // Role switching still works when storage is unavailable.
  }
  window.dispatchEvent(new CustomEvent<RoleId | null>(ROLE_EVENT, { detail: role }))
}

export function RoleProvider({ children }: { children: ReactNode }) {
  const [activeRole, setActiveRoleState] = useState<RoleId | null>(() => readSavedRole())

  useEffect(() => {
    applyRole(activeRole)

    const handler = (event: Event) => {
      const nextRole = (event as CustomEvent<RoleId | null>).detail
      setActiveRoleState(nextRole ?? null)
    }
    window.addEventListener(ROLE_EVENT, handler)

    return () => window.removeEventListener(ROLE_EVENT, handler)
    // Run once on mount to sync the DOM with the initial state; subsequent
    // changes flow through setActiveRole -> applyRole -> the event listener.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setActiveRole = (role: RoleId | null) => {
    const nextRole = role === activeRole ? null : role
    setActiveRoleState(nextRole)
    applyRole(nextRole)
  }

  return <RoleContext.Provider value={{ activeRole, setActiveRole }}>{children}</RoleContext.Provider>
}

export function useActiveRole(): RoleContextValue {
  const context = useContext(RoleContext)
  if (!context) {
    throw new Error('useActiveRole must be used within a RoleProvider')
  }
  return context
}
