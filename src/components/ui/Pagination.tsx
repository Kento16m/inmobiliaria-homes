import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/cn'
import { strings } from '@/lib/strings'

interface PaginationProps {
  page: number
  pageCount: number
  onPageChange: (page: number) => void
  maxVisible?: number
}

const itemBase =
  'flex size-8 items-center justify-center rounded-button text-p3 font-medium transition-colors disabled:pointer-events-none disabled:opacity-40'

export default function Pagination({ page, pageCount, onPageChange, maxVisible = 5 }: PaginationProps) {
  const start = Math.max(1, Math.min(page - Math.floor(maxVisible / 2), pageCount - maxVisible + 1))
  const end = Math.min(pageCount, start + maxVisible - 1)
  const pages = Array.from({ length: end - start + 1 }, (_, index) => start + index)

  return (
    <nav className="flex items-center gap-1">
      <button
        type="button"
        aria-label={strings.common.previousPage}
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
        className={cn(itemBase, 'bg-gray-50 text-gray-700 hover:bg-gray-100')}
      >
        <ChevronLeft className="size-4" />
      </button>
      {pages.map((item) => (
        <button
          key={item}
          type="button"
          aria-current={item === page ? 'page' : undefined}
          onClick={() => onPageChange(item)}
          className={cn(
            itemBase,
            item === page ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-50',
          )}
        >
          {item}
        </button>
      ))}
      <button
        type="button"
        aria-label={strings.common.nextPage}
        disabled={page >= pageCount}
        onClick={() => onPageChange(page + 1)}
        className={cn(itemBase, 'bg-gray-50 text-gray-700 hover:bg-gray-100')}
      >
        <ChevronRight className="size-4" />
      </button>
    </nav>
  )
}
