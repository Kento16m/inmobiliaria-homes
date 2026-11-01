import { ChevronDown } from 'lucide-react'
import { useId, type SelectHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

export interface SelectOption {
  value: string
  label: string
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  options: SelectOption[]
}

export default function Select({ label, options, id, className, ...rest }: SelectProps) {
  const generatedId = useId()
  const selectId = id ?? generatedId

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={selectId} className="text-p2 font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          className={cn(
            'h-10 w-full appearance-none rounded-button border border-gray-200 bg-white pl-3 pr-9 text-p2 text-gray-900 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100 disabled:bg-surface disabled:text-gray-400',
            className,
          )}
          {...rest}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-gray-500" />
      </div>
    </div>
  )
}
