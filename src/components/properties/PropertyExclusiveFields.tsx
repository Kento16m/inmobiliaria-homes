import NumberStepper from '@/components/ui/NumberStepper'
import RadioGroup, { type RadioOption } from '@/components/ui/RadioGroup'
import type { PropertyStatus, PropertyType } from '@/data/properties'
import type { PropertyFormErrors, PropertyFormValues } from '@/lib/propertyForm'
import { strings } from '@/lib/strings'

const text = strings.propertyForm

const listingOptions: RadioOption[] = [
  { value: 'En venta', label: text.sell },
  { value: 'En alquiler', label: text.rent },
]
const furnishingOptions: RadioOption[] = [
  { value: 'yes', label: text.furnished },
  { value: 'no', label: text.unfurnished },
]
const yesNoOptions: RadioOption[] = [
  { value: 'yes', label: strings.common.yes },
  { value: 'no', label: strings.common.no },
]
const typeOptions: RadioOption[] = [
  { value: 'Departamento', label: strings.propertyTypes.apartment },
  { value: 'Terreno', label: strings.propertyTypes.land },
  { value: 'Prefabricada', label: strings.propertyTypes.manufactured },
  { value: 'Multifamiliar', label: strings.propertyTypes.multifamily },
]

interface PropertyExclusiveFieldsProps {
  values: PropertyFormValues
  errors: PropertyFormErrors
  onChange: <K extends keyof PropertyFormValues>(key: K, value: PropertyFormValues[K]) => void
}

export default function PropertyExclusiveFields({ values, errors, onChange }: PropertyExclusiveFieldsProps) {
  const isLand = values.type === 'Terreno'

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-p3 font-medium uppercase tracking-widest text-gray-400">{text.exclusiveDetails}</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <RadioGroup
          legend={text.listing}
          name="status"
          options={listingOptions}
          value={values.status}
          onChange={(value) => onChange('status', value as PropertyStatus)}
        />
        <RadioGroup
          legend={text.furnishing}
          name="furnished"
          options={furnishingOptions}
          value={values.furnished ? 'yes' : 'no'}
          onChange={(value) => onChange('furnished', value === 'yes')}
        />
        {!isLand && (
          <RadioGroup
            legend={text.elevator}
            name="elevator"
            options={yesNoOptions}
            value={values.elevator ? 'yes' : 'no'}
            onChange={(value) => onChange('elevator', value === 'yes')}
          />
        )}
        <RadioGroup
          legend={text.parking}
          name="parking"
          options={yesNoOptions}
          value={values.parking ? 'yes' : 'no'}
          onChange={(value) => onChange('parking', value === 'yes')}
        />
      </div>
      <RadioGroup
        legend={text.type}
        name="type"
        options={typeOptions}
        value={values.type}
        onChange={(value) => onChange('type', value as PropertyType)}
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <NumberStepper
          label={text.area}
          value={values.area}
          onChange={(value) => onChange('area', value)}
          error={errors.area}
          requiredMark
        />
        {!isLand && (
          <>
            <NumberStepper label={text.bedrooms} value={values.bedrooms} onChange={(value) => onChange('bedrooms', value)} />
            <NumberStepper label={text.bathrooms} value={values.bathrooms} onChange={(value) => onChange('bathrooms', value)} />
            <NumberStepper label={text.floor} value={values.floor} onChange={(value) => onChange('floor', value)} />
          </>
        )}
      </div>
    </section>
  )
}
