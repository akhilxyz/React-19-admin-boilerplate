import { createContext } from 'react'

const defaultContext = {
  refresh: () => ({}),
}

export const AppLayoutContext = createContext<{
  refresh: () => void
}>(defaultContext)
