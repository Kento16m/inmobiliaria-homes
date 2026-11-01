import { MapPin } from 'lucide-react'
import { buttonStyles } from '@/components/ui/Button'
import type { Agent } from '@/data/agents'
import type { Property } from '@/data/properties'
import { formatPrice } from '@/lib/format'
import { strings } from '@/lib/strings'

interface PropertyHeaderProps {
  property: Property
  agent?: Agent
}

export default function PropertyHeader({ property, agent }: PropertyHeaderProps) {
  const isRent = property.status === 'En alquiler'
  const subject = encodeURIComponent(strings.propertyDetail.emailSubject(property.title))
  const mailto = `mailto:${agent?.email ?? ''}?subject=${subject}`

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-h3 text-gray-900">{property.title}</h1>
        <p className="mt-1 flex items-center gap-1.5 text-p2 text-gray-500">
          <MapPin className="size-4 shrink-0" />
          {property.address}, {property.city}
        </p>
      </div>
      <p className="text-h3 font-bold text-primary-500">
        {formatPrice(property.price)}
        {isRent && <span className="text-p1 font-medium text-gray-500">{strings.property.perMonth}</span>}
      </p>
      <div className="flex flex-wrap gap-3">
        <a href={mailto} className={buttonStyles('primary')}>
          {strings.actions.generateEmail}
        </a>
        <button type="button" className={buttonStyles('outline')}>
          {strings.actions.brochure}
        </button>
      </div>
    </div>
  )
}
