import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PropertyGrid from '@/components/properties/PropertyGrid'
import PropertyToolbar, { type PropertyView } from '@/components/properties/PropertyToolbar'
import Card from '@/components/ui/Card'
import Pagination from '@/components/ui/Pagination'
import { propertyTypes, type PropertyType } from '@/data/properties'
import { usePropertiesContext } from '@/lib/propertiesContext'
import { strings } from '@/lib/strings'

const PAGE_SIZE = 9

export default function PropertiesPage() {
  const { properties } = usePropertiesContext()
  // Al guardar una propiedad nueva se abre directamente su pestaña
  const stateType = (useLocation().state as { type?: PropertyType } | null)?.type
  const [type, setType] = useState<PropertyType>(
    stateType && propertyTypes.includes(stateType) ? stateType : 'Departamento',
  )
  const [view, setView] = useState<PropertyView>('grid')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => properties.filter((property) => property.type === type), [properties, type])
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const handleTypeChange = (nextType: PropertyType) => {
    setType(nextType)
    setPage(1)
  }

  return (
    <div className="flex flex-col gap-5">
      <h1 className="sr-only">{strings.menu.properties}</h1>
      <PropertyToolbar type={type} onTypeChange={handleTypeChange} view={view} onViewChange={setView} />

      {view === 'map' ? (
        <Card className="py-16 text-center text-p2 text-gray-500">{strings.propertiesPage.mapPlaceholder}</Card>
      ) : filtered.length === 0 ? (
        <Card className="py-16 text-center text-p2 text-gray-500">{strings.propertiesPage.empty}</Card>
      ) : (
        <>
          <PropertyGrid properties={visible} />
          <Pagination page={page} total={filtered.length} pageSize={PAGE_SIZE} onPageChange={setPage} />
        </>
      )}
    </div>
  )
}
