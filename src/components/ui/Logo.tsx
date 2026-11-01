import { strings } from '@/lib/strings'

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 32 32" className="size-8 text-primary-500" aria-hidden="true">
        <path d="M16 3 30 21a2 2 0 0 1-1.6 3.2H3.6A2 2 0 0 1 2 21L16 3Z" fill="currentColor" />
      </svg>
      <span className="text-h5 text-gray-900">{strings.brand}</span>
    </div>
  )
}
