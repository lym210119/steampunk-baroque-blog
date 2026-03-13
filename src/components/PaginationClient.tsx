'use client'

import { useState } from 'react'
import PostCard from './PostCard'
import { PostData } from '@/lib/posts'

export default function ClientPagination({ posts, postsPerPage }: { posts: PostData[], postsPerPage: number }) {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(posts.length / postsPerPage)
  const currentPosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)

  return (
    <>
      <div className="space-y-8">
        {currentPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-4 mt-12">
        {currentPage > 1 && (
          <button onClick={() => setCurrentPage(currentPage - 1)}
                  className="px-4 py-2 border-2 border-brass-700 rounded-lg hover:bg-brass-900/50">
            上一页
          </button>
        )}
        <span className="text-brass-300">第 {currentPage} 页 / 共 {totalPages} 页</span>
        {currentPage < totalPages && (
          <button onClick={() => setCurrentPage(currentPage + 1)}
                  className="px-4 py-2 border-2 border-brass-700 rounded-lg hover:bg-brass-900/50">
            下一页
          </button>
        )}
      </div>
    </>
  )
}
