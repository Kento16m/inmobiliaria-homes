import type { ReactNode } from 'react'
import Card from '@/components/ui/Card'

interface ShowcaseSectionProps {
  title: string
  children: ReactNode
}

export default function ShowcaseSection({ title, children }: ShowcaseSectionProps) {
  return (
    <Card className="p-6">
      <h3 className="mb-4 text-p3 font-medium uppercase tracking-widest text-gray-400">{title}</h3>
      <div className="flex flex-wrap items-start gap-4">{children}</div>
    </Card>
  )
}
