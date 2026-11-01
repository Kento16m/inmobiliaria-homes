import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/cn'

export interface IconToggleOption {
  value: string
  label: string
  icon: LucideIcon
}

interface IconToggleProps {
  options: IconToggleOption[]
  value: string
  onChange: (value: string) => void
}

export default function IconToggle({ options, value, onChange }: IconToggleProps) {
  return (
    <div role="group" className="flex items-center gap-1 rounded-button border border-gray-100 bg-white p-1">
      {options.map(({ value: optionValue, label, icon: Icon }) => {
        const active = optionValue === value
        return (
          <button
            key={optionValue}
            type="button"
            aria-label={label}
            aria-pressed={active}
            onClick={() => onChange(optionValue)}
            className={cn(
              'flex size-7 items-center justify-center rounded-button transition-colors',
              active ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-surface',
            )}
          >
            <Icon className="size-4" />
          </button>
        )
      })}
    </div>
  )
}
