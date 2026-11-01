export type AgentRole = 'Corredor' | 'Agente'

export interface Agent {
  id: string
  name: string
  email: string
  phone: string
  role: AgentRole
}

export const agents: Agent[] = [
  { id: 'agent-1', name: 'Carlos Benítez', email: 'carlos.benitez@swiftprop.com.py', phone: '+595 981 234 567', role: 'Corredor' },
  { id: 'agent-2', name: 'Lorena Giménez', email: 'lorena.gimenez@swiftprop.com.py', phone: '+595 982 345 678', role: 'Agente' },
  { id: 'agent-3', name: 'Marcelo Ortiz', email: 'marcelo.ortiz@swiftprop.com.py', phone: '+595 983 456 789', role: 'Agente' },
  { id: 'agent-4', name: 'Valeria Acosta', email: 'valeria.acosta@swiftprop.com.py', phone: '+595 984 567 890', role: 'Corredor' },
  { id: 'agent-5', name: 'Diego Cabrera', email: 'diego.cabrera@swiftprop.com.py', phone: '+595 985 678 901', role: 'Agente' },
  { id: 'agent-6', name: 'Andrea Villalba', email: 'andrea.villalba@swiftprop.com.py', phone: '+595 986 789 012', role: 'Agente' },
]
