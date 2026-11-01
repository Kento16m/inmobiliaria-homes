import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: ReactNode
}

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-primary-500 text-white hover:bg-primary-600',
  secondary: 'bg-primary-50 text-primary-500 hover:bg-primary-100',
  outline: 'border border-primary-500 text-primary-500 hover:bg-primary-50',
  ghost: 'text-gray-700 hover:bg-gray-50',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'h-8 gap-1.5 px-3 text-p3',
  md: 'h-10 gap-2 px-4 text-p2',
}

// Estilos compartidos para usar el aspecto de botón en otros elementos (p. ej. Link)
export function buttonStyles(variant: ButtonVariant = 'primary', size: ButtonSize = 'md', className?: string) {
  return cn(
    'inline-flex items-center justify-center rounded-button font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 disabled:pointer-events-none disabled:opacity-50',
    variants[variant],
    sizes[size],
    className,
  )
}

export default function Button({
  variant = 'primary',
  size = 'md',
  icon,
  className,
  children,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button type={type} className={buttonStyles(variant, size, className)} {...rest}>
      {icon}
      {children}
    </button>
  )
}
