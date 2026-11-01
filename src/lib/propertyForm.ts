import { agents } from '@/data/agents'
import type { Property, PropertyStatus, PropertyType } from '@/data/properties'
import { strings } from '@/lib/strings'

export interface PhotoPreview {
  url: string
  name: string
}

export interface PropertyFormValues {
  name: string
  address: string
  city: string
  price: string
  description: string
  status: PropertyStatus
  furnished: boolean
  elevator: boolean
  parking: boolean
  type: PropertyType
  area: number
  bedrooms: number
  bathrooms: number
  floor: number
}

export type PropertyFormErrors = Partial<Record<keyof PropertyFormValues | 'photos', string>>

export const initialFormValues: PropertyFormValues = {
  name: '',
  address: '',
  city: '',
  price: '',
  description: '',
  status: 'En venta',
  furnished: false,
  elevator: false,
  parking: false,
  type: 'Departamento',
  area: 0,
  bedrooms: 1,
  bathrooms: 1,
  floor: 0,
}

// Asunción centro, hasta que el formulario permita elegir ubicación en el mapa
const DEFAULT_COORDS = { lat: -25.2822, lng: -57.6359 }

const PRICE_PATTERN = /^\d+([.,]\d{1,2})?$/

export const parsePrice = (value: string) => Number(value.trim().replace(',', '.'))

export function validateProperty(values: PropertyFormValues, photos: PhotoPreview[]): PropertyFormErrors {
  const { errors: messages } = strings.propertyForm
  const errors: PropertyFormErrors = {}

  if (!values.name.trim()) errors.name = messages.required
  if (!values.address.trim()) errors.address = messages.required
  if (!values.city.trim()) errors.city = messages.required
  if (!values.description.trim()) errors.description = messages.required

  if (!values.price.trim()) {
    errors.price = messages.required
  } else if (!PRICE_PATTERN.test(values.price.trim()) || parsePrice(values.price) <= 0) {
    errors.price = messages.invalidPrice
  }

  if (!(values.area > 0)) errors.area = messages.invalidNumber
  if (photos.length === 0) errors.photos = messages.photosRequired
  return errors
}

export function toPropertyDraft(values: PropertyFormValues, photos: PhotoPreview[]): Omit<Property, 'id'> {
  const isLand = values.type === 'Terreno'
  return {
    title: values.name.trim(),
    address: values.address.trim(),
    city: values.city.trim(),
    price: parsePrice(values.price),
    type: values.type,
    status: values.status,
    sqft: values.area,
    bedrooms: isLand ? 0 : values.bedrooms,
    bathrooms: isLand ? 0 : values.bathrooms,
    parking: values.parking ? 1 : 0,
    yearBuilt: null,
    description: values.description.trim(),
    images: photos.map((photo) => photo.url),
    ...DEFAULT_COORDS,
    // Agente por defecto hasta que el formulario permita elegir uno
    agent: agents[0].name,
    furnished: values.furnished,
    elevator: isLand ? false : values.elevator,
    floor: isLand ? 0 : values.floor,
  }
}
