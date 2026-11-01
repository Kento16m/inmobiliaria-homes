import { Search } from 'lucide-react'

interface SearchInputProps {
  placeholder: string
}

export default function SearchInput({ placeholder }: SearchInputProps) {
  return (
    <label className="relative block w-full max-w-md">
      <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
      <input
        type="search"
        placeholder={placeholder}
        aria-label={placeholder}
        className="h-10 w-full rounded-button border border-gray-100 bg-surface pl-9 pr-3 text-p2 text-gray-900 placeholder:text-gray-400 focus:border-primary-300 focus:outline-none"
      />
    </label>
  )
}
