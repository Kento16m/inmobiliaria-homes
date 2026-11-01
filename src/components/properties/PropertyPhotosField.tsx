import { ImagePlus, X } from 'lucide-react'
import { useId, useRef } from 'react'
import { cn } from '@/lib/cn'
import type { PhotoPreview } from '@/lib/propertyForm'
import { strings } from '@/lib/strings'

interface PropertyPhotosFieldProps {
  photos: PhotoPreview[]
  max: number
  error?: string
  onAdd: (files: File[]) => void
  onRemove: (index: number) => void
}

export default function PropertyPhotosField({ photos, max, error, onAdd, onRemove }: PropertyPhotosFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const errorId = useId()
  const text = strings.propertyForm

  return (
    <div className="flex flex-col gap-2">
      <span className="text-p2 font-medium text-gray-700">
        {text.photos}
        <span className="text-danger-500"> *</span>
      </span>
      <div className={cn('grid grid-cols-2 gap-3 sm:grid-cols-3', error && 'rounded-card ring-2 ring-danger-100')}>
        {photos.map((photo, index) => (
          <div key={photo.url} className="relative">
            <img
              src={photo.url}
              alt={text.photoAlt(index + 1)}
              className="aspect-4/3 w-full rounded-button object-cover"
            />
            <button
              type="button"
              aria-label={text.removePhoto}
              onClick={() => onRemove(index)}
              className="absolute right-2 top-2 flex size-7 items-center justify-center rounded-pill bg-white text-gray-700 shadow-card hover:text-danger-500"
            >
              <X className="size-4" />
            </button>
          </div>
        ))}
        {photos.length < max && (
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="flex aspect-4/3 flex-col items-center justify-center gap-1 rounded-button border border-dashed border-gray-300 bg-surface text-p3 text-gray-500 hover:border-primary-400 hover:text-primary-500"
          >
            <ImagePlus className="size-6" />
            {text.addPhoto}
          </button>
        )}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        tabIndex={-1}
        aria-hidden="true"
        aria-describedby={error ? errorId : undefined}
        className="sr-only"
        onChange={(event) => {
          onAdd(Array.from(event.target.files ?? []))
          event.target.value = ''
        }}
      />
      {error && (
        <p id={errorId} className="text-p3 text-danger-500">
          {error}
        </p>
      )}
    </div>
  )
}
