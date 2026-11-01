import { House, TrendingUp, Users } from 'lucide-react'
import StatCard from '@/components/ui/StatCard'
import ShowcaseSection from '@/pages/styleguide/ShowcaseSection'
import { formatCurrency, formatNumber } from '@/lib/format'
import { strings } from '@/lib/strings'

export default function StatsShowcase() {
  const { components } = strings.styleguide

  return (
    <ShowcaseSection title={components.stats}>
      <StatCard label={components.statLeads} value={formatNumber(1248)} icon={Users} trend={0.124} />
      <StatCard label={components.statProperties} value={formatNumber(86)} icon={House} trend={-0.032} />
      <StatCard label={components.statSales} value={formatCurrency(896000)} icon={TrendingUp} />
    </ShowcaseSection>
  )
}
