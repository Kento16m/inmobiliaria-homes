import Card from '@/components/ui/Card'
import type { Property } from '@/data/properties'
import { formatCurrency } from '@/lib/format'
import { strings } from '@/lib/strings'

interface PropertyDetailsProps {
  property: Property
}

function Item({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-p3 text-gray-500">{label}</dt>
      <dd className="mt-0.5 text-p2 font-medium text-gray-900">{value}</dd>
    </div>
  )
}

export default function PropertyDetails({ property }: PropertyDetailsProps) {
  const text = strings.propertyDetail
  const isSale = property.status === 'En venta'

  const parking =
    property.parking > 0 ? text.parkingSpots(property.parking) : text.noParking
  const items = [
    { label: text.propertyType, value: property.type },
    { label: text.status, value: isSale ? strings.listingStatus.forSale : strings.listingStatus.forRent },
    { label: text.yearBuilt, value: property.yearBuilt ? String(property.yearBuilt) : text.notApplicable },
    { label: text.city, value: property.city },
    { label: text.reference, value: property.id.toUpperCase() },
  ]
  if (property.type !== 'Terreno') {
    items.splice(3, 0, { label: text.parking, value: parking })
  }
  if (property.furnished !== undefined) {
    items.push({ label: text.furnished, value: property.furnished ? strings.common.yes : strings.common.no })
  }
  if (property.elevator !== undefined && property.type !== 'Terreno') {
    items.push({ label: text.elevator, value: property.elevator ? strings.common.yes : strings.common.no })
  }
  if (property.floor !== undefined && property.type !== 'Terreno') {
    items.push({ label: text.floor, value: String(property.floor) })
  }
  if (isSale) {
    items.push({ label: text.pricePerSqft, value: formatCurrency(property.price / property.sqft) })
  }

  return (
    <Card className="flex flex-col gap-5">
      <div>
        <h2 className="text-h5 text-gray-900">{text.details}</h2>
        <p className="text-p3 text-gray-500">{text.detailsSubtitle}</p>
      </div>
      <p className="text-p2 text-gray-600">{property.description}</p>
      <dl className="grid grid-cols-2 gap-x-6 gap-y-4 rounded-button border border-gray-100 p-4 sm:grid-cols-3">
        {items.map((item) => (
          <Item key={item.label} {...item} />
        ))}
      </dl>
    </Card>
  )
}
