import { Mail, Phone } from 'lucide-react'
import Avatar from '@/components/ui/Avatar'
import Card from '@/components/ui/Card'
import type { Agent } from '@/data/agents'
import { strings } from '@/lib/strings'

interface AgentCardProps {
  agent: Agent
}

export default function AgentCard({ agent }: AgentCardProps) {
  return (
    <Card>
      <h2 className="mb-4 text-p3 font-medium uppercase tracking-widest text-gray-400">
        {strings.propertyDetail.assignedAgent}
      </h2>
      <div className="flex items-center gap-3">
        <Avatar name={agent.name} size="lg" />
        <div className="min-w-0">
          <p className="text-p1 font-semibold text-gray-900">{agent.name}</p>
          <p className="text-p3 text-gray-500">{agent.role}</p>
        </div>
      </div>
      <ul className="mt-4 flex flex-col gap-2 text-p2 text-gray-600">
        <li className="flex items-center gap-2">
          <Phone className="size-4 text-primary-500" />
          <a href={`tel:${agent.phone.replace(/\s/g, '')}`} className="hover:text-primary-500">
            {agent.phone}
          </a>
        </li>
        <li className="flex items-center gap-2">
          <Mail className="size-4 shrink-0 text-primary-500" />
          <a href={`mailto:${agent.email}`} className="truncate hover:text-primary-500">
            {agent.email}
          </a>
        </li>
      </ul>
    </Card>
  )
}
