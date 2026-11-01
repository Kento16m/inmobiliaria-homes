export const leadStatuses = ['Nuevo', 'Contactado', 'Calificado', 'Perdido'] as const
export const leadSources = ['Sitio web', 'Referido', 'Redes sociales', 'Llamada'] as const

export type LeadStatus = (typeof leadStatuses)[number]
export type LeadSource = (typeof leadSources)[number]

export interface Lead {
  id: string
  name: string
  phone: string
  // Nombre completo; coincide con Agent.name
  agent: string
  source: LeadSource
  campaign: string
  status: LeadStatus
  // Fecha ISO (YYYY-MM-DD)
  createdAt: string
}

export const leads: Lead[] = [
  { id: 'lead-01', name: 'Julio Cesar Rolón', phone: '+595 971 100 201', agent: 'Carlos Benítez', source: 'Sitio web', campaign: 'Lanzamiento Villa Morra', status: 'Calificado', createdAt: '2026-04-06' },
  { id: 'lead-02', name: 'María Fernanda Duarte', phone: '+595 972 100 202', agent: 'Lorena Giménez', source: 'Redes sociales', campaign: 'Campaña de verano', status: 'Contactado', createdAt: '2026-04-14' },
  { id: 'lead-03', name: 'Roberto Aquino', phone: '+595 973 100 203', agent: 'Marcelo Ortiz', source: 'Llamada', campaign: 'Búsqueda en Google', status: 'Perdido', createdAt: '2026-04-27' },
  { id: 'lead-04', name: 'Sofía Peralta', phone: '+595 974 100 204', agent: 'Valeria Acosta', source: 'Referido', campaign: 'Referidos del año', status: 'Calificado', createdAt: '2026-05-03' },
  { id: 'lead-05', name: 'Gustavo Rojas', phone: '+595 975 100 205', agent: 'Diego Cabrera', source: 'Sitio web', campaign: 'Búsqueda en Google', status: 'Contactado', createdAt: '2026-05-11' },
  { id: 'lead-06', name: 'Natalia Báez', phone: '+595 976 100 206', agent: 'Andrea Villalba', source: 'Redes sociales', campaign: 'Campaña de verano', status: 'Nuevo', createdAt: '2026-05-19' },
  { id: 'lead-07', name: 'Héctor Samudio', phone: '+595 981 100 207', agent: 'Carlos Benítez', source: 'Llamada', campaign: 'Feria inmobiliaria', status: 'Calificado', createdAt: '2026-05-28' },
  { id: 'lead-08', name: 'Claudia Insfrán', phone: '+595 982 100 208', agent: 'Lorena Giménez', source: 'Referido', campaign: 'Referidos del año', status: 'Contactado', createdAt: '2026-06-02' },
  { id: 'lead-09', name: 'Fabián Ayala', phone: '+595 983 100 209', agent: 'Marcelo Ortiz', source: 'Sitio web', campaign: 'Lanzamiento Villa Morra', status: 'Nuevo', createdAt: '2026-06-09' },
  { id: 'lead-10', name: 'Liliana Martínez', phone: '+595 984 100 210', agent: 'Valeria Acosta', source: 'Redes sociales', campaign: 'Campaña de verano', status: 'Perdido', createdAt: '2026-06-18' },
  { id: 'lead-11', name: 'Óscar Vera', phone: '+595 985 100 211', agent: 'Diego Cabrera', source: 'Llamada', campaign: 'Búsqueda en Google', status: 'Contactado', createdAt: '2026-06-25' },
  { id: 'lead-12', name: 'Patricia Caballero', phone: '+595 986 100 212', agent: 'Andrea Villalba', source: 'Sitio web', campaign: 'Feria inmobiliaria', status: 'Calificado', createdAt: '2026-07-01' },
  { id: 'lead-13', name: 'Ramón Franco', phone: '+595 991 100 213', agent: 'Carlos Benítez', source: 'Referido', campaign: 'Referidos del año', status: 'Calificado', createdAt: '2026-07-07' },
  { id: 'lead-14', name: 'Graciela Bogado', phone: '+595 992 100 214', agent: 'Lorena Giménez', source: 'Redes sociales', campaign: 'Lanzamiento Villa Morra', status: 'Contactado', createdAt: '2026-07-13' },
  { id: 'lead-15', name: 'Andrés Núñez', phone: '+595 993 100 215', agent: 'Marcelo Ortiz', source: 'Llamada', campaign: 'Feria inmobiliaria', status: 'Perdido', createdAt: '2026-07-21' },
  { id: 'lead-16', name: 'Teresa Ocampos', phone: '+595 994 100 216', agent: 'Valeria Acosta', source: 'Sitio web', campaign: 'Búsqueda en Google', status: 'Nuevo', createdAt: '2026-07-30' },
  { id: 'lead-17', name: 'Raúl Gómez', phone: '+595 995 100 217', agent: 'Diego Cabrera', source: 'Redes sociales', campaign: 'Campaña de verano', status: 'Contactado', createdAt: '2026-08-04' },
  { id: 'lead-18', name: 'Silvana Lezcano', phone: '+595 996 100 218', agent: 'Andrea Villalba', source: 'Referido', campaign: 'Referidos del año', status: 'Calificado', createdAt: '2026-08-12' },
  { id: 'lead-19', name: 'Cristian Mendoza', phone: '+595 961 100 219', agent: 'Carlos Benítez', source: 'Sitio web', campaign: 'Lanzamiento Villa Morra', status: 'Nuevo', createdAt: '2026-08-20' },
  { id: 'lead-20', name: 'Daniela Riveros', phone: '+595 962 100 220', agent: 'Lorena Giménez', source: 'Llamada', campaign: 'Búsqueda en Google', status: 'Perdido', createdAt: '2026-08-29' },
  { id: 'lead-21', name: 'Walter Alderete', phone: '+595 963 100 221', agent: 'Marcelo Ortiz', source: 'Redes sociales', campaign: 'Campaña de verano', status: 'Contactado', createdAt: '2026-09-03' },
  { id: 'lead-22', name: 'Rocío Benítez', phone: '+595 964 100 222', agent: 'Valeria Acosta', source: 'Referido', campaign: 'Referidos del año', status: 'Calificado', createdAt: '2026-09-10' },
  { id: 'lead-23', name: 'Esteban Villasanti', phone: '+595 965 100 223', agent: 'Diego Cabrera', source: 'Sitio web', campaign: 'Feria inmobiliaria', status: 'Nuevo', createdAt: '2026-09-16' },
  { id: 'lead-24', name: 'Mónica Zarza', phone: '+595 966 100 224', agent: 'Andrea Villalba', source: 'Llamada', campaign: 'Búsqueda en Google', status: 'Contactado', createdAt: '2026-09-23' },
  { id: 'lead-25', name: 'Pablo Servín', phone: '+595 971 100 225', agent: 'Carlos Benítez', source: 'Redes sociales', campaign: 'Lanzamiento Villa Morra', status: 'Calificado', createdAt: '2026-09-29' },
  { id: 'lead-26', name: 'Karina Estigarribia', phone: '+595 972 100 226', agent: 'Lorena Giménez', source: 'Sitio web', campaign: 'Campaña de verano', status: 'Nuevo', createdAt: '2026-10-02' },
  { id: 'lead-27', name: 'Federico Sosa', phone: '+595 973 100 227', agent: 'Marcelo Ortiz', source: 'Referido', campaign: 'Referidos del año', status: 'Contactado', createdAt: '2026-10-08' },
  { id: 'lead-28', name: 'Belén Garcete', phone: '+595 974 100 228', agent: 'Valeria Acosta', source: 'Llamada', campaign: 'Feria inmobiliaria', status: 'Perdido', createdAt: '2026-10-15' },
  { id: 'lead-29', name: 'Ignacio Cardozo', phone: '+595 975 100 229', agent: 'Diego Cabrera', source: 'Redes sociales', campaign: 'Búsqueda en Google', status: 'Nuevo', createdAt: '2026-10-22' },
  { id: 'lead-30', name: 'Lourdes Paredes', phone: '+595 976 100 230', agent: 'Andrea Villalba', source: 'Sitio web', campaign: 'Lanzamiento Villa Morra', status: 'Nuevo', createdAt: '2026-10-29' },
]
