import { useState, type ReactNode } from 'react'
import { properties as initialProperties, type Property } from '@/data/properties'
import { PropertiesContext } from '@/lib/propertiesContext'

const nextId = (list: Property[]) => {
  const max = list.reduce((acc, item) => Math.max(acc, Number(item.id.replace(/\D/g, '')) || 0), 0)
  return `prop-${String(max + 1).padStart(2, '0')}`
}

export default function PropertiesProvider({ children }: { children: ReactNode }) {
  const [properties, setProperties] = useState<Property[]>(initialProperties)

  const addProperty = (draft: Omit<Property, 'id'>) => {
    const property: Property = { ...draft, id: nextId(properties) }
    setProperties((current) => [property, ...current])
    return property
  }

  return <PropertiesContext value={{ properties, addProperty }}>{children}</PropertiesContext>
}
