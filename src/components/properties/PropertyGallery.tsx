import { useState } from 'react'
import PropertyStatusBadge from '@/components/properties/PropertyStatusBadge'
import { cn } from '@/lib/cn'
import { strings } from '@/lib/strings'
import type { Property } from '@/data/properties'

interface PropertyGalleryProps {
  property: Property
}

export default function PropertyGallery({ property }: PropertyGalleryProps) {
  const [selected, setSelected] = useState(0)

  return (
    <div className="flex flex-col gap-3">
      <div className="relative">
        <img
          src={property.images[selected]}
          alt={property.title}
          className="aspect-16/10 w-full rounded-card object-cover"
        />
        <PropertyStatusBadge status={property.status} className="absolute bottom-3 left-3" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {property.images.map((image, index) => (
          <button
            key={image}
            type="button"
            aria-label={strings.propertyDetail.thumbnail(index + 1)}
            aria-pressed={index === selected}
            onClick={() => setSelected(index)}
            className={cn(
              'overflow-hidden rounded-button border-2 transition-colors',
              index === selected ? 'border-primary-500' : 'border-transparent opacity-80 hover:opacity-100',
            )}
          >
            <img src={image} alt="" loading="lazy" className="aspect-16/10 w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
