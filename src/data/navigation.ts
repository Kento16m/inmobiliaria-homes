import {
  Building2,
  Calendar,
  CircleUserRound,
  Contact,
  FileSignature,
  FileText,
  House,
  LayoutGrid,
  SquareCheckBig,
  Users,
  type LucideIcon,
} from 'lucide-react'
import type { MenuKey } from '@/lib/strings'

export interface NavItem {
  key: MenuKey
  path: string
  icon: LucideIcon
}

export const navItems: NavItem[] = [
  { key: 'dashboard', path: '/dashboard', icon: LayoutGrid },
  { key: 'properties', path: '/properties', icon: House },
  { key: 'projects', path: '/projects', icon: Building2 },
  { key: 'leads', path: '/leads', icon: Users },
  { key: 'contracts', path: '/contracts', icon: FileSignature },
  { key: 'calendar', path: '/calendar', icon: Calendar },
  { key: 'activities', path: '/activities', icon: SquareCheckBig },
  { key: 'contacts', path: '/contacts', icon: Contact },
  { key: 'brokers', path: '/brokers', icon: CircleUserRound },
  { key: 'documents', path: '/documents', icon: FileText },
]
