'use client'

import type { links } from '@/lib/constants/links'
import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from 'react'

export type SectionName = (typeof links)[number]['name']

type ActiveSectionContextType = {
  activeSection: SectionName
  setActiveSection: Dispatch<SetStateAction<SectionName>>
  timeOfLastClick: number
  setTimeOfLastClick: Dispatch<SetStateAction<number>>
}

const ActiveSectionContext = createContext<ActiveSectionContextType>({} as ActiveSectionContextType)

export function ActiveSectionContextProvider({ children }: PropsWithChildren) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home')
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0)

  return (
    <ActiveSectionContext.Provider
      value={{ activeSection, setActiveSection, setTimeOfLastClick, timeOfLastClick }}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext)

  if (!context) {
    throw new Error('useActiveSection must be used within an ActiveSectionContextProvider')
  }

  return context
}
