import { cn } from '@/lib/cn'

export interface RadioOption {
  value: string
  label: string
}

interface RadioGroupProps {
  legend: string
  name: string
  options: RadioOption[]
  value: string
  onChange: (value: string) => void
  requiredMark?: boolean
  className?: string
}

export default function RadioGroup({
  legend,
  name,
  options,
  value,
  onChange,
  requiredMark,
  className,
}: RadioGroupProps) {
  return (
    <fieldset className={cn('flex flex-col gap-1.5', className)}>
      <legend className="mb-1.5 text-p2 font-medium text-gray-700">
        {legend}
        {requiredMark && <span className="text-danger-500"> *</span>}
      </legend>
      <div className="flex gap-2">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex h-10 flex-1 cursor-pointer items-center justify-center rounded-button border border-gray-100 bg-surface px-3 text-p2 text-gray-500 transition-colors has-checked:border-gray-900 has-checked:bg-white has-checked:font-semibold has-checked:text-gray-900 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-primary-500"
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={option.value === value}
              onChange={() => onChange(option.value)}
              className="sr-only"
            />
            {option.label}
          </label>
        ))}
      </div>
    </fieldset>
  )
}
