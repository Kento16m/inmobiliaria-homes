import { Bath, BedDouble, Car, Ruler, type LucideIcon } from 'lucide-react'
import Card from '@/components/ui/Card'
import type { Property } from '@/data/properties'
import { formatNumber } from '@/lib/format'
import { strings } from '@/lib/strings'

interface PropertySpecsProps {
  property: Property
}

interface SpecRow {
  icon: LucideIcon
  label: string
  value: string
}

export default function PropertySpecs({ property }: PropertySpecsProps) {
  const text = strings.propertyDetail
  const rows: SpecRow[] = [
    { icon: Ruler, label: text.area, value: strings.property.sqft(formatNumber(property.sqft)) },
  ]
  if (property.bedrooms > 0) {
    rows.push({ icon: BedDouble, label: text.bedrooms, value: formatNumber(property.bedrooms) })
  }
  if (property.bathrooms > 0) {
    rows.push({ icon: Bath, label: text.bathrooms, value: formatNumber(property.bathrooms) })
  }
  if (property.type !== 'Terreno') {
    rows.push({
      icon: Car,
      label: text.parking,
      value: property.parking > 0 ? formatNumber(property.parking) : text.noParking,
    })
  }

  return (
    <Card>
      <h2 className="mb-4 text-p3 font-medium uppercase tracking-widest text-gray-400">{text.specifications}</h2>
      <ul className="flex flex-col gap-3">
        {rows.map(({ icon: Icon, label, value }) => (
          <li key={label} className="flex items-center gap-3">
            <span className="flex size-7 items-center justify-center rounded-pill bg-primary-50 text-primary-500">
              <Icon className="size-3.5" />
            </span>
            <span className="text-p2 text-gray-600">{label}</span>
            <span className="ml-auto text-p2 font-medium text-gray-900">{value}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}
