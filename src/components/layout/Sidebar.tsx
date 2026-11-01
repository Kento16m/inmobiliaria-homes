import { X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import Logo from '@/components/ui/Logo'
import { navItems } from '@/data/navigation'
import { strings } from '@/lib/strings'

interface SidebarProps {
  open: boolean
  onClose: () => void
}

const linkBase =
  'flex items-center gap-3 rounded-button border px-3 py-2.5 text-p2 font-medium transition-colors'
const linkActive = 'border-primary-200 bg-primary-50 text-primary-500'
const linkIdle = 'border-transparent text-gray-700 hover:bg-surface'

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-30 bg-gray-900/40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-gray-100 bg-white p-4 transition-transform lg:static lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-2 py-2">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            aria-label={strings.nav.closeMenu}
            className="rounded-button p-1.5 text-gray-500 hover:bg-surface lg:hidden"
          >
            <X className="size-5" />
          </button>
        </div>

        <p className="mb-2 mt-8 px-3 text-p3 font-medium uppercase tracking-widest text-gray-400">
          {strings.nav.sectionTitle}
        </p>
        <nav className="flex flex-col gap-1 overflow-y-auto">
          {navItems.map(({ key, path, icon: Icon }) => (
            <NavLink
              key={key}
              to={path}
              onClick={onClose}
              className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`}
            >
              {({ isActive }) => (
                <>
                  <Icon className={`size-5 shrink-0 ${isActive ? 'text-primary-500' : 'text-gray-400'}`} />
                  {strings.menu[key]}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  )
}
