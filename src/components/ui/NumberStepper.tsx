import { Minus, Plus } from 'lucide-react'
import { useId } from 'react'
import { cn } from '@/lib/cn'
import { strings } from '@/lib/strings'

interface NumberStepperProps {
  label: string
  value: number
  onChange: (value: number) => void
  min?: number
  error?: string
  requiredMark?: boolean
}

const stepButton =
  'flex size-10 shrink-0 items-center justify-center text-gray-500 transition-colors hover:bg-surface disabled:opacity-40'

export default function NumberStepper({ label, value, onChange, min = 0, error, requiredMark }: NumberStepperProps) {
  const id = useId()
  const errorId = `${id}-error`

  const handleInput = (raw: string) => {
    const parsed = Number(raw)
    onChange(Number.isFinite(parsed) ? Math.max(min, parsed) : min)
  }

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-p2 font-medium text-gray-700">
        {label}
        {requiredMark && <span className="text-danger-500"> *</span>}
      </label>
      <div
        className={cn(
          'flex items-center overflow-hidden rounded-button border bg-white focus-within:ring-2',
          error ? 'border-danger-500 focus-within:ring-danger-100' : 'border-gray-200 focus-within:ring-primary-100',
        )}
      >
        <button
          type="button"
          aria-label={strings.propertyForm.decrease}
          disabled={value <= min}
          onClick={() => onChange(value - 1)}
          className={stepButton}
        >
          <Minus className="size-4" />
        </button>
        <input
          id={id}
          type="number"
          inputMode="numeric"
          min={min}
          value={value}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          onChange={(event) => handleInput(event.target.value)}
          className="h-10 min-w-0 flex-1 text-center text-p2 text-gray-900 [appearance:textfield] focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        <button
          type="button"
          aria-label={strings.propertyForm.increase}
          onClick={() => onChange(value + 1)}
          className={stepButton}
        >
          <Plus className="size-4" />
        </button>
      </div>
      {error && (
        <p id={errorId} className="text-p3 text-danger-500">
          {error}
        </p>
      )}
    </div>
  )
}
