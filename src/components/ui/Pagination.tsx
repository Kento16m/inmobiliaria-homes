import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/cn'
import { formatNumber } from '@/lib/format'
import { strings } from '@/lib/strings'

interface PaginationProps {
  page: number
  total: number
  pageSize: number
  onPageChange: (page: number) => void
  maxVisible?: number
}

const itemBase =
  'flex h-8 min-w-8 items-center justify-center gap-1 rounded-button px-2 text-p3 font-medium transition-colors disabled:pointer-events-none disabled:opacity-40'

export default function Pagination({
  page,
  total,
  pageSize,
  onPageChange,
  maxVisible = 5,
}: PaginationProps) {
  const pageCount = Math.max(1, Math.ceil(total / pageSize))
  const from = total === 0 ? 0 : (page - 1) * pageSize + 1
  const to = Math.min(page * pageSize, total)
  const start = Math.max(1, Math.min(page - Math.floor(maxVisible / 2), pageCount - maxVisible + 1))
  const end = Math.min(pageCount, start + maxVisible - 1)
  const pages = Array.from({ length: end - start + 1 }, (_, index) => start + index)

  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <p className="text-p3 text-gray-500">
        {strings.common.showing(formatNumber(from), formatNumber(to), formatNumber(total))}
      </p>
      <nav className="flex items-center gap-1">
        <button
          type="button"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
          className={cn(itemBase, 'bg-gray-50 text-gray-700 hover:bg-gray-100')}
        >
          <ChevronLeft className="size-4" />
          {strings.common.previous}
        </button>
        {pages.map((item) => (
          <button
            key={item}
            type="button"
            aria-label={strings.common.goToPage(formatNumber(item))}
            aria-current={item === page ? 'page' : undefined}
            onClick={() => onPageChange(item)}
            className={cn(
              itemBase,
              item === page ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-50',
            )}
          >
            {formatNumber(item)}
          </button>
        ))}
        <button
          type="button"
          disabled={page >= pageCount}
          onClick={() => onPageChange(page + 1)}
          className={cn(itemBase, 'bg-gray-50 text-gray-700 hover:bg-gray-100')}
        >
          {strings.common.next}
          <ChevronRight className="size-4" />
        </button>
      </nav>
    </div>
  )
}
