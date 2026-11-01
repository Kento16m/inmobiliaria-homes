import Badge, { type BadgeVariant } from '@/components/ui/Badge'
import type { PropertyStatus } from '@/data/properties'
import { strings } from '@/lib/strings'

const statusBadges: Record<PropertyStatus, { variant: BadgeVariant; label: string }> = {
  'En venta': { variant: 'for-sale', label: strings.listingStatus.forSale },
  'En alquiler': { variant: 'green', label: strings.listingStatus.forRent },
}

interface PropertyStatusBadgeProps {
  status: PropertyStatus
  className?: string
}

export default function PropertyStatusBadge({ status, className }: PropertyStatusBadgeProps) {
  const { variant, label } = statusBadges[status]
  return (
    <Badge variant={variant} className={className}>
      {label}
    </Badge>
  )
}
