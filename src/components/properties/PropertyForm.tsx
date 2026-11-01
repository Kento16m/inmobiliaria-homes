import { useEffect, useRef, useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import PropertyExclusiveFields from '@/components/properties/PropertyExclusiveFields'
import PropertyPhotosField from '@/components/properties/PropertyPhotosField'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import { usePropertiesContext } from '@/lib/propertiesContext'
import {
  initialFormValues,
  toPropertyDraft,
  validateProperty,
  type PhotoPreview,
  type PropertyFormErrors,
  type PropertyFormValues,
} from '@/lib/propertyForm'
import { strings } from '@/lib/strings'

const MAX_PHOTOS = 6
const text = strings.propertyForm

export default function PropertyForm() {
  const navigate = useNavigate()
  const { addProperty } = usePropertiesContext()
  const [values, setValues] = useState<PropertyFormValues>(initialFormValues)
  const [photos, setPhotos] = useState<PhotoPreview[]>([])
  const [errors, setErrors] = useState<PropertyFormErrors>({})

  // Las URLs de las fotos guardadas deben seguir vivas; el resto se libera al salir
  const photosRef = useRef(photos)
  const savedRef = useRef(false)
  useEffect(() => {
    photosRef.current = photos
  }, [photos])
  useEffect(
    () => () => {
      if (!savedRef.current) photosRef.current.forEach((photo) => URL.revokeObjectURL(photo.url))
    },
    [],
  )

  const setValue = <K extends keyof PropertyFormValues>(key: K, value: PropertyFormValues[K]) => {
    setValues((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: undefined }))
  }

  const addPhotos = (files: File[]) => {
    const next = files
      .filter((file) => file.type.startsWith('image/'))
      .slice(0, MAX_PHOTOS - photos.length)
      .map((file) => ({ url: URL.createObjectURL(file), name: file.name }))
    if (next.length === 0) return
    setPhotos((current) => [...current, ...next])
    setErrors((current) => ({ ...current, photos: undefined }))
  }

  const removePhoto = (index: number) => {
    URL.revokeObjectURL(photos[index].url)
    setPhotos((current) => current.filter((_, i) => i !== index))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const found = validateProperty(values, photos)
    setErrors(found)
    if (Object.keys(found).length > 0) return
    const property = addProperty(toPropertyDraft(values, photos))
    savedRef.current = true
    navigate('/properties', { state: { type: property.type } })
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Card className="flex flex-col gap-5 p-6">
        <Input
          label={text.name}
          placeholder={text.namePlaceholder}
          value={values.name}
          onChange={(event) => setValue('name', event.target.value)}
          error={errors.name}
          requiredMark
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Input
            label={text.address}
            placeholder={text.addressPlaceholder}
            value={values.address}
            onChange={(event) => setValue('address', event.target.value)}
            error={errors.address}
            requiredMark
          />
          <Input
            label={text.city}
            placeholder={text.cityPlaceholder}
            value={values.city}
            onChange={(event) => setValue('city', event.target.value)}
            error={errors.city}
            requiredMark
          />
        </div>
        <Input
          label={text.price}
          placeholder={text.pricePlaceholder}
          inputMode="decimal"
          value={values.price}
          onChange={(event) => setValue('price', event.target.value)}
          error={errors.price}
          requiredMark
        />
        <PropertyPhotosField
          photos={photos}
          max={MAX_PHOTOS}
          error={errors.photos}
          onAdd={addPhotos}
          onRemove={removePhoto}
        />
        <Textarea
          label={text.description}
          placeholder={text.descriptionPlaceholder}
          value={values.description}
          onChange={(event) => setValue('description', event.target.value)}
          error={errors.description}
          requiredMark
        />
        <PropertyExclusiveFields values={values} errors={errors} onChange={setValue} />
        <div className="flex justify-end gap-3 border-t border-gray-100 pt-5">
          <Button variant="outline" onClick={() => navigate('/properties')}>
            {strings.actions.cancel}
          </Button>
          <Button type="submit">{strings.actions.save}</Button>
        </div>
      </Card>
    </form>
  )
}
