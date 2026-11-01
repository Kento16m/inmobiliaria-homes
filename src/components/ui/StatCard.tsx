import { ArrowDownRight, ArrowUpRight, type LucideIcon } from 'lucide-react'
import Card from '@/components/ui/Card'
import { cn } from '@/lib/cn'
import { formatPercent } from '@/lib/format'

interface StatCardProps {
  label: string
  value: string
  icon?: LucideIcon
  // Variación como fracción (0.12 = +12 %)
  trend?: number
}

export default function StatCard({ label, value, icon: Icon, trend }: StatCardProps) {
  const positive = trend !== undefined && trend >= 0
  const TrendIcon = positive ? ArrowUpRight : ArrowDownRight

  return (
    <Card className="flex items-start gap-4">
      {Icon && (
        <div className="flex size-11 shrink-0 items-center justify-center rounded-button bg-primary-50 text-primary-500">
          <Icon className="size-5" />
        </div>
      )}
      <div className="min-w-0">
        <p className="text-p2 text-gray-500">{label}</p>
        <p className="text-h3 text-gray-900">{value}</p>
        {trend !== undefined && (
          <p
            className={cn(
              'mt-1 flex items-center gap-1 text-p3 font-medium',
              positive ? 'text-secondary-600' : 'text-danger-500',
            )}
          >
            <TrendIcon className="size-3.5" />
            {formatPercent(trend)}
          </p>
        )}
      </div>
    </Card>
  )
}
