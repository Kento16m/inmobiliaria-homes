import { LayoutGrid, Map as MapIcon, Plus, SlidersHorizontal } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button, { buttonStyles } from '@/components/ui/Button'
import IconToggle from '@/components/ui/IconToggle'
import Tabs from '@/components/ui/Tabs'
import type { PropertyType } from '@/data/properties'
import { strings } from '@/lib/strings'

export type PropertyView = 'grid' | 'map'

const typeTabs: { value: PropertyType; label: string }[] = [
  { value: 'Departamento', label: strings.propertyTypes.apartment },
  { value: 'Terreno', label: strings.propertyTypes.land },
  { value: 'Prefabricada', label: strings.propertyTypes.manufactured },
  { value: 'Multifamiliar', label: strings.propertyTypes.multifamily },
]

const viewOptions = [
  { value: 'grid', label: strings.propertiesPage.viewGrid, icon: LayoutGrid },
  { value: 'map', label: strings.propertiesPage.viewMap, icon: MapIcon },
]

interface PropertyToolbarProps {
  type: PropertyType
  onTypeChange: (type: PropertyType) => void
  view: PropertyView
  onViewChange: (view: PropertyView) => void
}

export default function PropertyToolbar({ type, onTypeChange, view, onViewChange }: PropertyToolbarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <Tabs items={typeTabs} value={type} onChange={(value) => onTypeChange(value as PropertyType)} />
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="outline" icon={<SlidersHorizontal className="size-4" />}>
          {strings.actions.filters}
        </Button>
        <IconToggle options={viewOptions} value={view} onChange={(value) => onViewChange(value as PropertyView)} />
        <Link to="/properties/new" className={buttonStyles('primary')}>
          <Plus className="size-4" />
          {strings.actions.addProperty}
        </Link>
      </div>
    </div>
  )
}
