import { Bell, Menu } from 'lucide-react'
import Avatar from '@/components/ui/Avatar'
import SearchInput from '@/components/ui/SearchInput'
import { currentUser } from '@/data/currentUser'
import { strings } from '@/lib/strings'

interface TopbarProps {
  onMenuClick: () => void
}

export default function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-3 border-b border-gray-100 bg-white px-4 sm:px-6">
      <button
        type="button"
        onClick={onMenuClick}
        aria-label={strings.nav.openMenu}
        className="rounded-button p-2 text-gray-700 hover:bg-surface lg:hidden"
      >
        <Menu className="size-5" />
      </button>

      <SearchInput placeholder={strings.topbar.searchPlaceholder} />

      <div className="ml-auto flex items-center gap-4">
        <button
          type="button"
          aria-label={strings.topbar.notifications}
          className="rounded-button p-2 text-gray-500 hover:bg-surface"
        >
          <Bell className="size-5" />
        </button>
        <div className="flex items-center gap-3">
          <Avatar name={currentUser.name} />
          <div className="hidden sm:block">
            <p className="text-p2 font-medium text-gray-900">{currentUser.name}</p>
            <p className="text-p3 text-gray-500">{strings.topbar.userRole}</p>
          </div>
        </div>
      </div>
    </header>
  )
}
