import { useId, type TextareaHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  requiredMark?: boolean
}

export default function Textarea({ label, error, requiredMark, id, className, ...rest }: TextareaProps) {
  const generatedId = useId()
  const textareaId = id ?? generatedId
  const errorId = `${textareaId}-error`

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={textareaId} className="text-p2 font-medium text-gray-700">
          {label}
          {requiredMark && <span className="text-danger-500"> *</span>}
        </label>
      )}
      <textarea
        id={textareaId}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          'min-h-28 resize-y rounded-button border bg-white px-3 py-2 text-p2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2',
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
