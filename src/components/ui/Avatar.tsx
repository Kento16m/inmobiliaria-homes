import { cn } from '@/lib/cn'

export type AvatarSize = 'sm' | 'md' | 'lg'

interface AvatarProps {
  name: string
  src?: string
  size?: AvatarSize
}

const sizes: Record<AvatarSize, string> = {
  sm: 'size-7 text-p4',
  md: 'size-9 text-p3',
  lg: 'size-12 text-p2',
}

export default function Avatar({ name, src, size = 'md' }: AvatarProps) {
  const base = cn('shrink-0 rounded-pill', sizes[size])

  if (src) {
    return <img src={src} alt={name} className={cn(base, 'object-cover')} />
  }

  const initials = name
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()

  return (
    <div
      className={cn(
        base,
        'flex items-center justify-center bg-primary-100 font-semibold text-primary-600',
      )}
    >
      {initials}
    </div>
  )
}
