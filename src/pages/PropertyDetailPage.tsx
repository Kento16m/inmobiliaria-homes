import { ArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import AgentCard from '@/components/properties/AgentCard'
import PropertyDetails from '@/components/properties/PropertyDetails'
import PropertyGallery from '@/components/properties/PropertyGallery'
import PropertyHeader from '@/components/properties/PropertyHeader'
import PropertySpecs from '@/components/properties/PropertySpecs'
import Card from '@/components/ui/Card'
import { agents } from '@/data/agents'
import { usePropertiesContext } from '@/lib/propertiesContext'
import { strings } from '@/lib/strings'

const backLink = (
  <Link to="/properties" className="inline-flex items-center gap-1.5 text-p2 font-medium text-gray-600 hover:text-primary-500">
    <ArrowLeft className="size-4" />
    {strings.propertyDetail.back}
  </Link>
)

export default function PropertyDetailPage() {
  const { id } = useParams()
  const { properties } = usePropertiesContext()
  const property = properties.find((item) => item.id === id)

  if (!property) {
    return (
      <div className="flex flex-col gap-5">
        {backLink}
        <Card className="py-16 text-center">
          <h1 className="text-h4 text-gray-900">{strings.propertyDetail.notFoundTitle}</h1>
          <p className="mt-2 text-p2 text-gray-500">{strings.propertyDetail.notFoundText}</p>
        </Card>
      </div>
    )
  }

  const agent = agents.find((item) => item.name === property.agent)

  return (
    <div className="flex flex-col gap-5">
      {backLink}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="flex flex-col gap-5 lg:col-span-2">
          <PropertyHeader property={property} agent={agent} />
          <PropertyGallery key={property.id} property={property} />
          <PropertyDetails property={property} />
        </div>
        <aside className="flex flex-col gap-5">
          <PropertySpecs property={property} />
          {agent && <AgentCard agent={agent} />}
        </aside>
      </div>
    </div>
  )
}
