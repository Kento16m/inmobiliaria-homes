import { Bath, BedDouble, Ruler, type LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import PropertyStatusBadge from '@/components/properties/PropertyStatusBadge'
import Card from '@/components/ui/Card'
import type { Property } from '@/data/properties'
import { formatNumber, formatPrice } from '@/lib/format'
import { strings } from '@/lib/strings'

interface PropertyCardProps {
  property: Property
}

function Spec({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <span className="flex items-center gap-1.5 text-p3 text-gray-600">
      <Icon className="size-3.5 text-primary-500" />
      {label}
    </span>
  )
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const isRent = property.status === 'En alquiler'

  return (
    <Link to={`/properties/${property.id}`} className="block rounded-card focus-visible:outline-2 focus-visible:outline-primary-500">
      <Card padded={false} className="p-2 transition-shadow hover:shadow-lg">
        <div className="relative">
          <img
            src={property.images[0]}
            alt={property.title}
            loading="lazy"
            className="aspect-4/3 w-full rounded-button object-cover"
          />
          <PropertyStatusBadge status={property.status} className="absolute bottom-2 left-2" />
        </div>
        <div className="px-1 pb-1 pt-3">
          <p className="text-h5 font-bold text-primary-500">
            {formatPrice(property.price)}
            {isRent && <span className="text-p3 font-medium text-gray-500">{strings.property.perMonth}</span>}
          </p>
          <p className="mt-0.5 truncate text-p3 text-gray-600">
            {property.address}, {property.city}
          </p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 rounded-button bg-surface px-3 py-2">
            <Spec icon={Ruler} label={strings.property.sqft(formatNumber(property.sqft))} />
            {property.bedrooms > 0 && (
              <Spec icon={BedDouble} label={strings.property.bedrooms(property.bedrooms)} />
            )}
            {property.bathrooms > 0 && (
              <Spec icon={Bath} label={strings.property.bathrooms(property.bathrooms)} />
            )}
          </div>
        </div>
      </Card>
    </Link>
  )
}
