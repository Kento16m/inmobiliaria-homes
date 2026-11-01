import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padded?: boolean
}

export default function Card({ padded = true, className, ...rest }: CardProps) {
  return (
    <div
      className={cn('rounded-card bg-white shadow-card', padded && 'p-5', className)}
      {...rest}
    />
  )
}
