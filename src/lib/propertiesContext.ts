import { createContext, useContext } from 'react'
import type { Property } from '@/data/properties'

export interface PropertiesContextValue {
  properties: Property[]
  addProperty: (draft: Omit<Property, 'id'>) => Property
}

export const PropertiesContext = createContext<PropertiesContextValue | null>(null)

export function usePropertiesContext(): PropertiesContextValue {
  const context = useContext(PropertiesContext)
  if (!context) {
    throw new Error('usePropertiesContext debe usarse dentro de PropertiesProvider')
  }
  return context
}
