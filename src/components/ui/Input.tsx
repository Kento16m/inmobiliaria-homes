import { useId, type InputHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  requiredMark?: boolean
}

export default function Input({ label, error, requiredMark, id, className, ...rest }: InputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const errorId = `${inputId}-error`

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-p2 font-medium text-gray-700">
          {label}
          {requiredMark && <span className="text-danger-500"> *</span>}
        </label>
      )}
      <input
        id={inputId}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          'h-10 rounded-button border bg-white px-3 text-p2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 disabled:bg-surface disabled:text-gray-400',
          error
            ? 'border-danger-500 focus:ring-danger-100'
            : 'border-gray-200 focus:border-primary-400 focus:ring-primary-100',
          className,
        )}
        {...rest}
      />
      {error && (
        <p id={errorId} className="text-p3 text-danger-500">
          {error}
        </p>
      )}
    </div>
  )
}
