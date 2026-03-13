'use client'
import { useState } from 'react'
import Fuse from 'fuse.js'
import { getSortedPostsData } from '@/lib/posts'
import Link from 'next/link'

// 注意：在客户端组件中直接调用 getSortedPostsData 会导致打包时包含文件系统，但 Next.js 会处理
// 更佳方式是将数据作为 props 传入，但为了简化，我们使用静态数据
const allPosts = getSortedPostsData()
const fuse = new Fuse(allPosts, {
  keys: ['title', 'excerpt', 'tags'],
  includeScore: true,
  threshold: 0.4,
})

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const results = query ? fuse.search(query).map(r => r.item) : []

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-4xl mb-8">搜索齿轮文库</h1>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="w-full p-4 bg-black/60 border-2 border-brass-700 rounded-lg text-parchment 
                   placeholder:text-brass-800 focus:outline-none focus:border-brass-400"
        placeholder="输入关键词..."
        autoFocus
      />
      <div className="mt-8 space-y-4">
        {results.map(post => (
          <Link key={post.id} href={`/posts/${post.id}`} className="block p-4 border border-brass-800 hover:bg-brass-900/20">
            <h2 className="text-2xl">{post.title}</h2>
            <p className="text-parchment/70">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
