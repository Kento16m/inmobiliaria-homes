import { cn } from '@/lib/cn'

export interface TabItem {
  value: string
  label: string
}

interface TabsProps {
  items: TabItem[]
  value: string
  onChange: (value: string) => void
  className?: string
}

export default function Tabs({ items, value, onChange, className }: TabsProps) {
  return (
    <div role="tablist" className={cn('flex flex-wrap gap-2', className)}>
      {items.map((item) => {
        const active = item.value === value
        return (
          <button
            key={item.value}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(item.value)}
            className={cn(
              'h-9 rounded-button border px-4 text-p2 font-medium transition-colors',
              active
                ? 'border-gray-900 bg-gray-900 text-white'
                : 'border-gray-100 bg-white text-gray-500 hover:bg-surface',
            )}
          >
            {item.label}
          </button>
        )
      })}
    </div>
  )
}
