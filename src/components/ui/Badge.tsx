import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

export type BadgeVariant = 'for-sale' | 'green' | 'red' | 'yellow' | 'gray'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

const variants: Record<BadgeVariant, string> = {
  'for-sale': 'bg-accent text-gray-900',
  green: 'bg-secondary-100 text-secondary-700',
  red: 'bg-danger-100 text-danger-700',
  yellow: 'bg-accent/20 text-gray-800',
  gray: 'bg-gray-100 text-gray-700',
}

export default function Badge({ variant = 'gray', className, ...rest }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-pill px-2.5 py-0.5 text-p3 font-medium',
        variants[variant],
        className,
      )}
      {...rest}
    />
  )
}
