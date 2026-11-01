import PropertyForm from '@/components/properties/PropertyForm'
import { strings } from '@/lib/strings'

export default function NewPropertyPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-5">
      <h1 className="text-h3 text-gray-900">{strings.pages.newProperty}</h1>
      <PropertyForm />
    </div>
  )
}
