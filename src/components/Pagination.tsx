import Link from 'next/link'

export default function Pagination({ currentPage, totalPages }: { currentPage: number; totalPages: number }) {
  return (
    <div className="flex justify-center items-center gap-4 mt-12">
      {currentPage > 1 && (
        <Link href={`?page=${currentPage - 1}`} 
              className="px-4 py-2 border-2 border-brass-700 rounded-lg hover:bg-brass-900/50">
          上一页
        </Link>
      )}
      <span className="text-brass-300">第 {currentPage} 页 / 共 {totalPages} 页</span>
      {currentPage < totalPages && (
        <Link href={`?page=${currentPage + 1}`} 
              className="px-4 py-2 border-2 border-brass-700 rounded-lg hover:bg-brass-900/50">
          下一页
        </Link>
      )}
    </div>
  )
}
